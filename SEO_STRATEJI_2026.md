# WebCraft.tr — Görünürlük ve Sıralama Artırma Stratejisi

**Hazırlanma Tarihi:** 27 Temmuz 2026
**Veri Kaynakları:** Google Search Console (`/GSC/*.csv`, son ~11 aylık web arama verisi), Google Keyword Planner (`webcraft keyword planner.csv`), canlı site denetimi (webcraft.tr), SERP/rakip araştırması
**Kapsam:** Bu doküman **yeni bir strateji katmanı** ekler — mevcut `seo_report.md`, `IMPLEMENTATION_ROADMAP.md` ve `SEO_ISSUES.md` içindeki tamamlanmış işleri tekrar etmez. Bölüm 7'de hangi işin nerede durduğu özetlenmiştir.

---

## 0. Yönetici Özeti

GSC verisi tek ve net bir teşhis koyuyor: **site içerik/on-page tarafında zaten iyi durumda ama otorite tarafında neredeyse sıfırdan başlıyor.**

- Son 11 ayda 298 gösterim alan **"webcraft"** marka aramasında ortalama pozisyon 2.83 — sorun yok.
- Ama **"web tasarım ajansı"** (1.783 gösterim, pozisyon 30.5), **"profesyonel web tasarım"** (616 gösterim, pozisyon 21.8), **"seo hizmetleri"** (94 gösterim, pozisyon 50) gibi asıl gelir getirecek ticari kelimelerde site 3. sayfanın da altında geziniyor.
- Toplam 126 tıklamanın **82'si** doğrudan marka aramalarından (`webcraft`, `web craft`) geliyor. Marka dışı ticari kelimelerin **click-through oranı pratik olarak %0**.
- Bu profil — iyi pozisyonlanmış sayfalar ama düşük-orta sıralarda takılı kalma — klasik bir **domain otoritesi / backlink açığı** imzasıdır, içerik veya teknik SEO sorunu değil. Nitekim `seo_report.md` da aynı sonuca varmıştı ("Asıl sorun teknik değil, stratejiktir").
- Önceki yol haritasının (`IMPLEMENTATION_ROADMAP.md`) Faz 1-5'i büyük ölçüde **tamamlanmış**: `/seo-ajansi`, `/seo-uzmani`, `/kurumsal-web-tasarim` sayfaları canlı, cannibalization sorunu çözülmüş (`/en-iyi-web-tasarim-ajansi` artık "ajans nasıl seçilir" rehber sayfası olarak konumlanmış ve pozisyon 9.65'te — bu strateji işe yaramış).
- **Bu planın odağı:** (1) off-page otorite inşası (backlink, PR, dizin/liste siteleri, GBP), (2) ulusal + yerel iki katmanlı içerik derinliği, (3) GEO/AEO (AI arama) görünürlüğünün somutlaştırılması, (4) geriye kalan on-page/teknik açıklar.

---

## 1. Durum Analizi — GSC Verisinin Söyledikleri

### 1.1 Trafik profili
| Boyut | Bulgu |
|---|---|
| Cihaz | Masaüstü ağırlıklı (14.841 gösterim / 121 tıklama), Mobil ikinci (2.806 / 49) — ajans/B2B kelimeleri için beklenen dağılım |
| Ülke | Tıklamaların %97'si Türkiye'den (168/173). ABD'den 1.590, İngiltere'den 423 gösterim var ama sıfır tıklama — bunlar muhtemelen "web design agency" türü İngilizce niyet taşıyan sorgulara Türkçe sayfaların yanlışlıkla eşleşmesi; aksiyon gerektirmiyor, sadece hedeflenmemesi gerektiğinin teyidi |
| Zaman serisi | Veri Ağustos 2025'ten başlıyor — site pratikte **~11 aylık genç bir domain**. Bu, ulusal rekabetçi kelimelerde 10-25 yıllık rakiplere karşı otorite farkını açıklıyor ama aynı zamanda yerel kelimelerde hızlı kazanım şansı olduğunu gösteriyor (bkz. §2) |

### 1.2 En kritik anomali: marka arama karışıklığı
`www.webcraft.tr` sorgusu (tam marka+domain eşleşmesi) 388 gösterim alıyor ama pozisyon **13.56** ve **0 tıklama**. Bu, tam marka sorgusunda bile ilk sırada olmadığı anlamına gelir — muhtemelen Google Business Profile / marka varlığı (entity) zayıflığından kaynaklanıyor. §5.3'te ele alınıyor.

### 1.3 Zaten iyi performans gösteren, korunması/genişletilmesi gereken kelimeler
Bunlar site otoritesinin **gerçekten çalıştığı** yerler — burada kaybetmemek, buradan yayılmak lazım:

| Kelime | Pozisyon | Gösterim | Not |
|---|---|---|---|
| muğla seo | 4.96 | 99 | Mükemmel — şablon olarak çoğaltılmalı |
| muğla seo uzmanı | 6.19 | 21 | Mükemmel |
| yapay zekâ chatbot geliştirme | 5.92 | 187 | Farklılaşma alanı (`thingstodo.md`'de de işaretli) |
| web tasarım ajansı nasıl seçilir | 9.65 | 105 | Cannibalization fix'i doğruluyor |
| web tasarım | 3.12 | 155 | Ana terim, düşük hacimli varyantta güçlü |

---

## 2. Rakip Haritası

### 2.1 Ulusal katman (rekabet çok yüksek, uzun vadeli)
SERP araştırmasına göre "en iyi web tasarım ajansı" gibi sorgularda öne çıkanlar: **Lein Digital**, **Cremicro**, **Edvido** (bir dizin/liste sitesi — rakip değil, **fırsat**: buraya WebCraft'ı eklettirmek doğrudan backlink + görünürlük demek), İzmir Web Tasarım Ofisi, Prix Studio, Bravery Technology, Nagdos. Bu ajansların çoğu İstanbul merkezli, yıllar süren domain geçmişi ve büyük referans portföyüyle çalışıyor. **Bu katmanda 6-12 aydan önce top 10 beklemek gerçekçi değil.**

### 2.2 Yerel katman (Fethiye/Muğla/Bodrum/Marmaris — kazanılabilir, rakipler zayıf)
Yerelde çok sayıda küçük, teknik olarak zayıf rakip var: Zemedya (18 yıl, çok bölgeli — en güçlü yerel rakip), Ket Web, Muğla SEO, Ali Tarhan Dijital Atölye, Fethiye Web Tasarım, İçerik Reklam, Kasva Ajans, SerNis, Celal Yurtcu, Hasem, Mastertasarım. Bunların çoğu WordPress tabanlı, Core Web Vitals zayıf, schema/AEO altyapısı yok. **WebCraft'ın Next.js teknik avantajı + zaten var olan vaka çalışmaları bu katmanda 2-4 ay içinde top 3'e girmeyi mümkün kılıyor.**

**Stratejik çıkarım:** Kaynakları önce yerel katmanda hızlı kazanımlara, paralelde ulusal katmanda uzun vadeli otorite inşasına ayır. İki katman birbirini besler: yerel başarı → vaka çalışması → ulusal içerik/PR malzemesi.

---

## 3. Hedef Kelime Matrisi (Öncelik Sıralı)

Pozisyon = GSC 11 aylık ortalama, Hacim = Keyword Planner aylık ortalama arama (TR).

### Tier 1 — Sıcak fırsatlar (0-3 ay, mevcut sayfayı güçlendir, top 3-5 hedefi)
| Kelime | Pozisyon | Gösterim | Hacim/ay | Hedef sayfa |
|---|---|---|---|---|
| fethiye web tasarım | 15.1 | 197 | — (yerel) | `/fethiye-web-tasarim-hizmetleri` |
| seo uyumlu web sitesi | 14.4 | 486 | 50 | `/hizmetler/seo-uyumlu-web-sitesi` |
| seo uyumlu site | 12.3 | 174 | 50 | aynı sayfa, içerik genişlet |
| web tasarım ajansı nasıl seçilir | 9.65 | 105 | — | `/en-iyi-web-tasarim-ajansi` |
| marmaris seo / marmaris web tasarım | 19.0 / 18.1 | 78 / 63 | — (yerel) | `/mugla-web-tasarim-seo-hizmetleri` içine Marmaris bölümü |
| muğla seo / muğla seo uzmanı | 4.96 / 6.19 | 99 / 21 | 500 | mevcut sayfa — koru, iç link besle |

### Tier 2 — Yüksek hacim, orta zorluk (3-6 ay, otorite + içerik derinliği ile kazanılır)
| Kelime | Pozisyon | Gösterim | Hacim/ay | Rekabet |
|---|---|---|---|---|
| **web tasarım ajansı** | 30.5 | 1.783 | 5.000 | Düşük (KP index 31) — en büyük tekil fırsat |
| profesyonel web tasarım | 21.8 | 616 | 500 | Orta (35) |
| web ajansı | 18.5 | 524 | 500 | Düşük (29) |
| muğla web tasarım | 24.6 | 204 | 500 | Düşük (29) |
| en iyi web tasarım ajansı/ajansları/firmaları (cluster) | 23-26 | ~1.500 (toplam) | değişken | "best of" liste stratejisiyle desteklenmeli (§4.1) |

### Tier 3 — Zor, otorite gerektiren (6-12 ay)
| Kelime | Pozisyon | Gösterim | Hacim/ay |
|---|---|---|---|
| seo hizmetleri / seo hizmeti | 50.0 | 94 | — |
| web tasarım ajansları | 40.6 | 248 | — |
| en iyi web tasarım firması | 41.3 | 110 | — |
| web tasarım hizmetleri | 38.4 | 98 | 5.000 |
| dijital pazarlama ajansı | — (düşük gösterim) | — | 5.000 |

### Tier 4 — Yeni kategori fırsatları
- **`seo ajansı`** sayfası zaten canlı ama GSC top-500 sorgusunda hiç görünmüyor — bu, sayfanın ya yeterince indekslenip otorite kazanmadığını ya da iç linklemenin yetersiz olduğunu gösteriyor. **İzlenmeli, 60 gün içinde GSC'de gösterim çıkmazsa iç link + backlink önceliği verilmeli.**
- **`online mağaza kur` / `online mağaza kurma`** (toplam 421 gösterim, pozisyon ~20) — güçlü transactional niyet, e-ticaret sayfası (`/hizmetler/e-ticaret`) bu ikili etrafında yeniden başlıklandırılabilir.

---

## 4. Strateji Katmanları

### 4.1 Otorite / Off-page (bütçe ayrılan yeni katman)

Bu, GSC verisinin işaret ettiği **en yüksek etkili** alan. Somut adımlar:

1. **Dizin/liste sitesi girişleri** — §2.1'de bulunan Edvido gibi "en iyi web tasarım ajansları" listeleyen sitelere WebCraft'ı eklettir. Bu hem doğrudan backlink hem de "best of" listelerinde yer alma (Whitespark 2026 raporuna göre AI görünürlüğünün #1 faktörü — bkz. §4.4).
2. **Google Business Profile (GBP) kurulum/optimizasyon** — mevcut mi kontrol edilmeli. Yoksa hemen açılmalı: kategori, hizmet alanı (Fethiye + Muğla ilçeleri, "tüm Türkiye" değil — 2025 SAB kuralı gereği spesifik şehir/ilçe listesi), fotoğraf, düzenli post. `www.webcraft.tr` marka sorgusundaki 13.56 pozisyon sorununun (§1.2) kök nedeni büyük ihtimalle burada.
3. **Müşteri referans/backlink değişimi** — mevcut 8 proje referansının (Fluenta AI, Mentoria, Atlantis, Skoll Beauty, Yat Rehberi, Elit vb.) kendi sitelerinden WebCraft'a "made by" / "geliştiren" linki istenmesi — düşük maliyetli, yüksek alaka düzeyli backlink kaynağı.
4. **Misafir yazı / dijital PR** — Fethiye/Muğla turizm-teknoloji kesişiminde (bölgesel iş dünyası siteleri, turizm sektörü yayınları) 2-3 aylık ritimde konuk yazı. Ulusal SEO/dijital pazarlama bloglarına (Lein Digital, Lein benzeri) teknik içerik (örn. "Next.js ile Core Web Vitals" vaka analizi) sunumu — hem backlink hem E-E-A-T.
5. **Yerel dizinler ve NAP tutarlılığı** — Google, Bing Places, Apple Maps, sektörel dizinlerde isim/adres/telefon tutarlılığı denetlenmeli.

### 4.2 İçerik Derinliği / Topical Authority

- **`/hizmetler/seo-hizmeti`** pozisyon 45.6 ve GSC'de 232 gösterim ile zayıf — Tier 3 kelimeleri (`seo hizmetleri`, `seo hizmeti`) doğrudan hedeflediği için bu sayfa kritik. İçeriği vaka çalışması ve somut sonuç metrikleriyle (örn. muğla seo başarısını örnek göstererek) derinleştir.
- **`/hizmetler/web-tasarim`** (pozisyon 31.7, 1.988 gösterim — en yüksek gösterimli sayfalardan biri ama düşük pozisyon) bu sayfanın iç link ağırlığı homepage ile paylaşılıyor olabilir; iç link denetimi yapılmalı.
- **E-ticaret cluster'ı genişletme** — `online mağaza kur/kurma` (§3 Tier 4) etrafında yeni bir blog yazısı veya `/hizmetler/e-ticaret` sayfasına özel bölüm.
- **Yeni "best of" ve karşılaştırma içerikleri** — mevcut `/karsilastirma` bölümü büyütülerek "en iyi web tasarım ajansları listesi" formatında **kendi listeni oluştur** (Edvido gibi sitelerin sana yönelik trafiğine karşı savunma + kendi otoriteni inşa etme).

### 4.3 Yerel SEO Katmanı

- GBP kurulumu/optimizasyonu (§4.1'de detaylı)
- `LocalBusiness` şeması `areaServed` alanının Fethiye, Muğla, Bodrum, Marmaris gibi **spesifik ilçeler** listesiyle güncellenmesi (ülke/il düzeyi değil — Haziran 2025 SAB kuralı)
- Marmaris ve Bodrum için Fethiye/Muğla sayfalarındaki başarıyı tekrarlayan hafif-dokunuş yerel bölümler (ayrı yeni sayfa şart değil — mevcut `/mugla-web-tasarim-seo-hizmetleri` içine ilçe bazlı alt bölümler, quality gate: 30+ ayrı lokasyon sayfası açmadan önce dikkatli olunmalı)
- Yorum/review stratejisi — GBP ve varsa üçüncü parti platformlarda aktif review toplama

### 4.4 GEO / AEO (AI Arama Görünürlüğü)

Site zaten iyi bir temele sahip (`llms.txt`, AI crawler izinleri, `/api/services`, `/api/projects`). Bunun üzerine:

- **Orijinal, alıntılanabilir veri üretimi** — GSC verilerinden veya proje sonuçlarından türetilen özgün istatistikler ("Fethiye bölgesinde web sitesi hızının dönüşüme etkisi" gibi) blog içeriğine dönüştürülmeli; AI motorları somut, tekil rakamları alıntılamayı tercih ediyor.
- **Person schema + sameAs** — ekip üyeleri için LinkedIn/sosyal profil bağlantılı `Person` şeması (entity authority için).
- **"Best of" listelerinde yer alma** — Whitespark 2026 yerel AI görünürlük raporuna göre bu, tek en yüksek etkili faktör; §4.1 madde 1 ile doğrudan bağlantılı.
- **Citation izleme** — ChatGPT, Perplexity, Google AI Overview'de "webcraft" ve "fethiye web tasarım" gibi sorgularla periyodik (aylık) manuel kontrol; bu iş `seo-geo` skill'i ile otomatikleştirilebilir.

---

## 5. Kalan On-Page / Teknik Açıklar

Önceki dokümanlardan (`SEO_ISSUES.md`, `IMPLEMENTATION_ROADMAP.md`) doğrulanan, henüz **kapanmamış** maddeler:

| Madde | Kaynak | Doğrulama (bugün) | Öncelik |
|---|---|---|---|
| OG görselleri eksik (ana sayfalar + blog yazıları) | SEO_ISSUES.md #10, #11 | `public/` içinde sayfa/yazı bazlı OG görsel yok, sadece logo dosyaları var — hâlâ pending | Orta — sosyal paylaşım CTR'ı ve bazı AI önizlemeleri etkiler |
| React 18 → 19 yükseltme | IMPLEMENTATION_ROADMAP.md Faz 6 | `package.json`'da hâlâ React 18.3.1 — yapılmamış | Düşük — SEO etkisi minimal, teknik borç |
| Dedicated fiyatlandırma sayfası | IMPLEMENTATION_ROADMAP.md Faz 6 | Homepage'de fiyat bandı var ama ayrı `/fiyatlandirma` sayfası yok | Orta — "web sitesi fiyatları" (5.000/ay hacim) kelimesi hiç hedeflenmiyor |
| `/hizmetler/seo-hizmeti` sayfa gücü | Bu doküman §4.2 | Pozisyon 45.6, düşük | Yüksek |
| `www.webcraft.tr` marka sorgusu pozisyon 13.5 | Bu doküman §1.2 | GBP/entity sorunu şüphesi | Yüksek — kolay, hızlı teşhis |

---

## 6. Uygulama Yol Haritası

| Faz | Süre | Odak | Kim |
|---|---|---|---|
| **Faz A** | Hafta 1-2 | GBP durumu teşhisi + kurulum/optimizasyon, `www.webcraft.tr` marka sorunu kök neden analizi, Edvido benzeri 3-5 dizine kayıt başvurusu | İş sahibi/pazarlama (manuel) |
| **Faz B** | Hafta 2-4 | `/hizmetler/seo-hizmeti` içerik derinleştirme, `/fiyatlandirma` sayfası, OG görselleri (ana sayfalar) | Kod + içerik |
| **Faz C** | Hafta 4-8 | Marmaris/Bodrum yerel içerik genişletme, e-ticaret cluster güçlendirme, ilk 3-5 backlink/misafir yazı teması belirleme ve outreach başlatma | Kod + pazarlama |
| **Faz D** | Ay 2-4 | Backlink/PR kampanyası yürütme (aylık 2-4 link hedefi), müşteri referanslarından "made by" link toplama, blog OG görselleri tamamlama | Pazarlama |
| **Faz E** | Ay 3-6 | GEO içerik üretimi (orijinal veri/istatistik parçaları), Person schema, AI citation izleme başlatma | Kod + içerik |
| **Faz F** | Ay 6+ | Ulusal Tier 2-3 kelimeler için sürekli otorite inşası, React 19 yükseltme, sonuç değerlendirme ve strateji revizyonu | Kod + pazarlama |

**Not:** Faz A ve B paralel yürütülebilir (biri kod-dışı, biri kod-içi). Yapısal URL/cannibalization değişikliği bu planda **yok** — önceki roadmap bunu zaten çözdü, tekrar dokunmaya gerek yok.

---

## 7. Önceki Dokümanlarla İlişki (ne nerede)

- **`seo_report.md`** — Mayıs 2026 kapsamlı teknik+stratejik denetim. Mimari/cannibalization teşhisi hâlâ geçerli tarihsel referans.
- **`IMPLEMENTATION_ROADMAP.md`** — 6 fazlı uygulama planı. Faz 1-5 büyük ölçüde tamamlanmış (bu dokümanda §5'te doğrulandı). Faz 6 (React 19, fiyatlandırma sayfası) hâlâ açık — bu planın §5-6'sına taşındı.
- **`SEO_ISSUES.md`** — 17 teknik/schema sorunu, 12'si düzeltilmiş. Kalan 2 pending madde (#10, #11 — OG görselleri) bu planın §5'ine taşındı.
- **`AI_VISIBILITY_MANUAL_TASKS.md`** — llms.txt, AI crawler izinleri, API endpoint'leri tamamlanmış. Bu planın §4.4'ü bunun üzerine inşa ediyor.
- **`thingstodo.md`** — küçük, hızlı-kazanım maddeler (islerimiz vaka yapısı, homepage sosyal kanıt). Bu planla çelişmiyor, paralel yürütülebilir.
- **Bu doküman (`SEO_STRATEJI_2026.md`)** — GSC verisine dayalı, öncelik sıralı, off-page + yerel + GEO ağırlıklı **yeni** katman.

---

## 8. KPI Hedefleri

| Metrik | Bugün (Tem 2026) | 3 Ay | 6 Ay | 12 Ay |
|---|---|---|---|---|
| Marka dışı organik tıklama/ay | ~4 (126 tıklamanın 11 aylık toplamından tahmini) | 25+ | 80+ | 250+ |
| "web tasarım ajansı" pozisyonu | 30.5 | 20 | 12 | Top 10 |
| "fethiye web tasarım" pozisyonu | 15.1 | Top 5 | Top 3 | #1 |
| "muğla seo" / "muğla seo uzmanı" | 4.96 / 6.19 | Top 3 (koru) | Top 3 | Top 3 |
| Referring domain sayısı | Bilinmiyor — ilk ölçüm gerekli | Baseline + 5 | Baseline + 15 | Baseline + 35 |
| GBP kurulu/optimize mi | Doğrulanmalı | ✅ | Aktif review akışı | 20+ review |
| İndekslenen sayfa sayısı | ~41 sitemap girişi | 45+ | 50+ | 55+ |

---

## 9. Sonraki Adım

Faz A'nın ilk maddesi — **GBP durumunun teşhisi ve `www.webcraft.tr` marka sorgusu pozisyon 13.5 sorununun kök nedeninin bulunması** — hem en düşük maliyetli hem de en hızlı görünür etkiyi verecek adım. Bununla başlanması önerilir.
