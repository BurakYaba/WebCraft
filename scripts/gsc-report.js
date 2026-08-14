#!/usr/bin/env node
/**
 * GSC dönemsel karşılaştırma raporu.
 *
 * Kullanım:
 *   1. Google Search Console'dan güncel "Son 3 ay" CSV'lerini indirin
 *      (Arama görünümü, Cihazlar, Filtreler, Grafik, Sayfa sayısı, Sorgular, Ülkeler)
 *      ve GSC/ klasörünün üzerine yazın.
 *   2. `npm run gsc:report` çalıştırın.
 *   3. Script, GSC/baselines/ altındaki bir önceki kayıtla karşılaştırıp
 *      GSC/baselines/<tarih>-report.md dosyasını üretir ve konsola özet basar.
 *   4. Bu çalıştırma otomatik olarak yeni bir baseline (snapshot) olarak
 *      kaydedilir; bir sonraki çalıştırma buna göre karşılaştırılır.
 *
 * Bağımlılık yok — sadece Node.js gerektirir.
 */

const fs = require("fs");
const path = require("path");

const GSC_DIR = path.join(__dirname, "..", "GSC");
const BASELINES_DIR = path.join(GSC_DIR, "baselines");

function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\r") {
      // skip
    } else if (c === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((cell) => cell.trim() !== ""));
}

function readCSV(filename) {
  const filePath = path.join(GSC_DIR, filename);
  if (!fs.existsSync(filePath)) return null;
  const text = fs.readFileSync(filePath, "utf8").replace(/^﻿/, "");
  const rows = parseCSV(text);
  return rows.slice(1); // header'ı at
}

function parsePercent(s) {
  return parseFloat(String(s).replace("%", "").replace(",", ".")) || 0;
}
function parseNum(s) {
  return parseFloat(String(s).replace(",", ".")) || 0;
}

function computeGrafikStats(rows) {
  const daily = rows.map((r) => ({
    date: r[0],
    clicks: parseNum(r[1]),
    impressions: parseNum(r[2]),
    ctr: parsePercent(r[3]),
    position: parseNum(r[4]),
  }));
  const n = daily.length;
  const totalClicks = daily.reduce((a, d) => a + d.clicks, 0);
  const totalImpressions = daily.reduce((a, d) => a + d.impressions, 0);
  const avgCtr = totalImpressions ? (totalClicks / totalImpressions) * 100 : 0;
  const avgPosition = daily.reduce((a, d) => a + d.position, 0) / n;

  const monthly = {};
  for (const d of daily) {
    const month = d.date.slice(0, 7);
    if (!monthly[month]) monthly[month] = { clicks: 0, impressions: 0, posSum: 0, n: 0 };
    monthly[month].clicks += d.clicks;
    monthly[month].impressions += d.impressions;
    monthly[month].posSum += d.position;
    monthly[month].n += 1;
  }
  const monthlyAvgPosition = Object.fromEntries(
    Object.entries(monthly).map(([m, v]) => [m, +(v.posSum / v.n).toFixed(2)]),
  );

  const first7 = daily.slice(0, 7);
  const last7 = daily.slice(-7);
  const first7AvgPos = first7.reduce((a, d) => a + d.position, 0) / (first7.length || 1);
  const last7AvgPos = last7.reduce((a, d) => a + d.position, 0) / (last7.length || 1);

  return {
    dateStart: daily[0]?.date,
    dateEnd: daily[n - 1]?.date,
    days: n,
    totalClicks,
    totalImpressions,
    avgCtr: +avgCtr.toFixed(2),
    avgPosition: +avgPosition.toFixed(2),
    first7AvgPos: +first7AvgPos.toFixed(2),
    last7AvgPos: +last7AvgPos.toFixed(2),
    monthlyAvgPosition,
  };
}

function computeQueryOpportunities(rows) {
  if (!rows) return [];
  return rows
    .map((r) => ({
      query: r[0],
      clicks: parseNum(r[1]),
      impressions: parseNum(r[2]),
      ctr: parsePercent(r[3]),
      position: parseNum(r[4]),
    }))
    .filter((q) => q.clicks === 0 && q.impressions >= 50)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 15);
}

function findBrandQuery(rows, needle) {
  if (!rows) return null;
  const match = rows.find((r) => r[0].trim().toLowerCase() === needle.toLowerCase());
  if (!match) return null;
  return {
    query: match[0],
    clicks: parseNum(match[1]),
    impressions: parseNum(match[2]),
    ctr: parsePercent(match[3]),
    position: parseNum(match[4]),
  };
}

function loadPreviousSnapshot() {
  if (!fs.existsSync(BASELINES_DIR)) return null;
  const files = fs
    .readdirSync(BASELINES_DIR)
    .filter((f) => f.endsWith("-snapshot.json"))
    .sort();
  if (files.length === 0) return null;
  const latest = files[files.length - 1];
  return {
    file: latest,
    data: JSON.parse(fs.readFileSync(path.join(BASELINES_DIR, latest), "utf8")),
  };
}

function fmtDelta(curr, prev, opts = {}) {
  const { lowerIsBetter = false, suffix = "" } = opts;
  const delta = curr - prev;
  if (Math.abs(delta) < 0.005) return `değişim yok`;
  const better = lowerIsBetter ? delta < 0 : delta > 0;
  const arrow = better ? "▲ iyileşti" : "▼ kötüleşti";
  const sign = delta > 0 ? "+" : "";
  return `${sign}${delta.toFixed(2)}${suffix} (${arrow})`;
}

function main() {
  const grafikRows = readCSV("Grafik.csv");
  if (!grafikRows) {
    console.error("GSC/Grafik.csv bulunamadı. Search Console'dan CSV'leri indirip GSC/ klasörüne koyun.");
    process.exit(1);
  }
  const sorgularRows = readCSV("Sorgular.csv");

  const stats = computeGrafikStats(grafikRows);
  const opportunities = computeQueryOpportunities(sorgularRows);
  const brandDomain = findBrandQuery(sorgularRows, "www.webcraft.tr");
  const brandName = findBrandQuery(sorgularRows, "webcraft");

  const today = new Date().toISOString().slice(0, 10);
  const snapshot = {
    generatedAt: today,
    period: { start: stats.dateStart, end: stats.dateEnd, days: stats.days },
    totals: {
      clicks: stats.totalClicks,
      impressions: stats.totalImpressions,
      ctr: stats.avgCtr,
      avgPosition: stats.avgPosition,
      first7AvgPos: stats.first7AvgPos,
      last7AvgPos: stats.last7AvgPos,
    },
    monthlyAvgPosition: stats.monthlyAvgPosition,
    brandDomainQuery: brandDomain,
    brandNameQuery: brandName,
    topZeroClickOpportunities: opportunities,
  };

  const prev = loadPreviousSnapshot();

  const lines = [];
  lines.push(`# GSC Karşılaştırma Raporu — ${today}`);
  lines.push("");
  lines.push(`Veri aralığı: **${stats.dateStart} → ${stats.dateEnd}** (${stats.days} gün)`);
  lines.push("");

  if (!prev) {
    lines.push("> İlk kayıt — karşılaştırılacak önceki bir baseline bulunamadı. Bu çalıştırma referans noktası olarak kaydedildi.");
    lines.push("");
  } else {
    lines.push(`Karşılaştırma referansı: **${prev.data.generatedAt}** (${prev.data.period.start} → ${prev.data.period.end})`);
    lines.push("");
  }

  lines.push("## Özet Metrikler");
  lines.push("");
  lines.push("| Metrik | Bugün | Önceki | Değişim |");
  lines.push("|---|---|---|---|");
  lines.push(`| Toplam Tıklama | ${stats.totalClicks} | ${prev ? prev.data.totals.clicks : "—"} | ${prev ? fmtDelta(stats.totalClicks, prev.data.totals.clicks) : "—"} |`);
  lines.push(`| Toplam Gösterim | ${stats.totalImpressions} | ${prev ? prev.data.totals.impressions : "—"} | ${prev ? fmtDelta(stats.totalImpressions, prev.data.totals.impressions) : "—"} |`);
  lines.push(`| Ortalama TO | %${stats.avgCtr} | ${prev ? "%" + prev.data.totals.ctr : "—"} | ${prev ? fmtDelta(stats.avgCtr, prev.data.totals.ctr, { suffix: " puan" }) : "—"} |`);
  lines.push(`| Ortalama Pozisyon | ${stats.avgPosition} | ${prev ? prev.data.totals.avgPosition : "—"} | ${prev ? fmtDelta(stats.avgPosition, prev.data.totals.avgPosition, { lowerIsBetter: true }) : "—"} |`);
  lines.push(`| Son 7 Gün Ort. Pozisyon | ${stats.last7AvgPos} | ${prev ? prev.data.totals.last7AvgPos : "—"} | ${prev ? fmtDelta(stats.last7AvgPos, prev.data.totals.last7AvgPos, { lowerIsBetter: true }) : "—"} |`);
  lines.push("");

  if (brandDomain) {
    lines.push("## Marka Sorgusu — www.webcraft.tr");
    lines.push("");
    lines.push(`Pozisyon: **${brandDomain.position}**, Gösterim: ${brandDomain.impressions}, Tık: ${brandDomain.clicks}`);
    if (prev && prev.data.brandDomainQuery) {
      lines.push(`Önceki: pozisyon ${prev.data.brandDomainQuery.position} → ${fmtDelta(brandDomain.position, prev.data.brandDomainQuery.position, { lowerIsBetter: true })}`);
    }
    lines.push("");
  }

  lines.push("## Aylık Ortalama Pozisyon Trendi");
  lines.push("");
  lines.push("| Ay | Ort. Pozisyon |");
  lines.push("|---|---|");
  for (const [m, p] of Object.entries(stats.monthlyAvgPosition)) {
    lines.push(`| ${m} | ${p} |`);
  }
  lines.push("");

  if (opportunities.length) {
    lines.push("## En Büyük Fırsatlar (Yüksek Gösterim, Sıfır Tık)");
    lines.push("");
    lines.push("| Sorgu | Gösterim | Pozisyon |");
    lines.push("|---|---|---|");
    for (const o of opportunities.slice(0, 10)) {
      lines.push(`| ${o.query} | ${o.impressions} | ${o.position.toFixed(1)} |`);
    }
    lines.push("");
  }

  const reportPath = path.join(BASELINES_DIR, `${today}-report.md`);
  const snapshotPath = path.join(BASELINES_DIR, `${today}-snapshot.json`);
  fs.mkdirSync(BASELINES_DIR, { recursive: true });
  fs.writeFileSync(reportPath, lines.join("\n"), "utf8");
  fs.writeFileSync(snapshotPath, JSON.stringify(snapshot, null, 2), "utf8");

  console.log(lines.join("\n"));
  console.log(`\n--- Kaydedildi ---\nRapor: ${path.relative(process.cwd(), reportPath)}\nSnapshot: ${path.relative(process.cwd(), snapshotPath)}`);
}

main();
