#!/usr/bin/env node
/**
 * IndexNow'a canlı sitemap'teki tüm URL'leri gönderir (Bing, Yandex için
 * hızlı indeksleme bildirimi — Google bu protokolü kullanmaz).
 *
 * Kullanım:
 *   npm run indexnow
 *
 * Ne zaman çalıştırılmalı: yeni bir sayfa yayınlandığında veya sitemap
 * önemli ölçüde değiştiğinde (deploy sonrası manuel). Anahtar dosyası
 * public/<key>.txt içinde saklanır, IndexNow bu dosyanın canlıda
 * erişilebilir olmasını doğrulama olarak kullanır.
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

const HOST = "www.webcraft.tr";
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

function findKeyFile() {
  const publicDir = path.join(__dirname, "..", "public");
  const match = fs
    .readdirSync(publicDir)
    .find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
  if (!match) {
    throw new Error(
      "public/ altında IndexNow anahtar dosyası (32 karakterlik hex .txt) bulunamadı.",
    );
  }
  return match.replace(".txt", "");
}

function httpGet(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

function httpPostJSON(url, body) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(body);
    const req = https.request(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Content-Length": Buffer.byteLength(payload),
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve({ status: res.statusCode, body: data }));
      },
    );
    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

async function main() {
  const key = findKeyFile();
  console.log(`IndexNow anahtarı: ${key}`);

  console.log(`Sitemap çekiliyor: ${SITEMAP_URL}`);
  const xml = await httpGet(SITEMAP_URL);
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

  if (urls.length === 0) {
    console.error("Sitemap'te hiç URL bulunamadı, çıkılıyor.");
    process.exit(1);
  }
  console.log(`${urls.length} URL bulundu, IndexNow'a gönderiliyor...`);

  const result = await httpPostJSON(INDEXNOW_ENDPOINT, {
    host: HOST,
    key,
    keyLocation: `https://${HOST}/${key}.txt`,
    urlList: urls,
  });

  console.log(`IndexNow yanıtı: HTTP ${result.status}`);
  if (result.status === 200 || result.status === 202) {
    console.log("Başarılı — Bing/Yandex bilgilendirildi.");
  } else {
    console.log("Beklenmeyen yanıt:", result.body || "(boş gövde)");
  }
}

main().catch((err) => {
  console.error("Hata:", err.message);
  process.exit(1);
});
