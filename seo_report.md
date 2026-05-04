# 🚀 WEBCRAFT.TR — ULTRA DERİN SEO + AEO YOL HARİTASI

### Hedef Kelimeler: web tasarım ajansı | kurumsal web tasarım | SEO uzmanı | SEO ajansı

## **Hazırlanma Tarihi:** Mayıs 2026 | **Versiyon:** 1.0 | **Strateji Seviyesi:** Elite

## 📋 YÖNETİCİ ÖZETİ

Webcraft.tr, teknik altyapısı güçlü (Next.js), tasarımı temiz ve hizmet gamı geniş bir ajans sitesidir. **Asıl
sorun teknik değil, stratejiktir.** Site, "web tasarım ajansı" için homepage'i ile /en-iyi-web-tasarim-ajansi
sayfasını yarıştırıyor; "SEO ajansı" için hiç doğru sayfa yok; "SEO uzmanı" kelimesi için tek bir URL bile
hedeflenmiyor. İstanbul merkezli rakipler 10-25 yıllık domain otoritesiyle, 4.500+ proje referansıyla öne
çıkarken Webcraft'ın 200 proje ve Fethiye lokasyonu ulusal rekabette zayıf kalıyor. Bu rapor, bu açıkları
kapatacak tek bir strateji sunuyor — alternatif değil, **doğru yol.**

---

## 🔍 1. MEVCUT DURUM ANALİZİ

### 1.1 Site Mimarisi

**Mevcut URL Yapısı:**

```
/ (homepage)
/hizmetler/
/hizmetler/web-tasarim
/hizmetler/seo-hizmeti
/hizmetler/dijital-pazarlama
/hizmetler/e-ticaret
/hizmetler/mobil-uygulama
/hizmetler/yapay-zeka-chatbot
/hizmetler/yapay-zeka-otomasyon
/hizmetler/yazilim-gelistirme
/hakkimizda
/islerimiz
/blog/
/sss
/iletisim
/kaynak-merkezi
/sozluk
/karsilastirma
/kurumsal-web-sitesi ← landing page
/en-iyi-web-tasarim-ajansi ← landing page
/fethiye-web-tasarim-hizmetleri
/mugla-web-tasarim-seo-hizmetleri
```

**Mimari Sorunlar:**

- `/hizmetler/web-tasarim` ile `/en-iyi-web-tasarim-ajansi` aynı intent'i hedefliyor → **CANNIBALIZATION**
- `/hizmetler/seo-hizmeti` URL'i "SEO ajansı" veya "SEO uzmanı" kelimesini barındırmıyor
- "SEO uzmanı" keyword'ü için site genelinde hiçbir hedef sayfa yok
- `/kurumsal-web-sitesi` var ama içeriği yetersiz
- Silo yapısı yarım kurulmuş: Blog, sosyal medya yönetimi ve dijital pazarlama için ayrı landing page'ler
  eksik

### 1.2 Title, H1, Meta Description Analizi

| Sayfa                             | Title                                                                                   | H1               | Sorun                                        |
| --------------------------------- | --------------------------------------------------------------------------------------- | ---------------- | -------------------------------------------- |
| Homepage                          | "Web Tasarım Ajansı \| Profesyonel Web Sitesi Tasarımı \| WebCraft"                     | "Profesyonel Web |
| Tasarım Ajansı"                   | Title iyi ama "web tasarım ajansı" homepage'e mi yoksa /en-iyi-web-tasarim-ajansi'na mı |
| ait?                              |
| /hizmetler/web-tasarim            | "Web Tasarım Hizmeti \| Profesyonel Web Sitesi Tasarımı \| WebCraft"                    | "Web             |
| Tasarım"                          | H1 çok kısa, keyword değeri yok                                                         |
| /hizmetler/seo-hizmeti            | "SEO Hizmeti \| Arama Motoru Optimizasyonu \| WebCraft"                                 | "SEO Hizmeti"    | "SEO                                         |
| ajansı" veya "SEO uzmanı" hiç yok |
| /en-iyi-web-tasarim-ajansi        | Bilinmiyor                                                                              | Bilinmiyor       | URL açık ama homepage ile cannibalize ediyor |
| /kurumsal-web-sitesi              | Bilinmiyor                                                                              | Bilinmiyor       | İçerik yetersiz tahmini                      |

**Kritik Eksikler:**

- Schema markup (Organization, LocalBusiness, Service, FAQPage) sistematik değil
- Meta description'lar satış odaklı değil, bilgi odaklı yazılmış
- "SEO ajansı" keyword'ü hiçbir sayfanın title'ında yok
- "SEO uzmanı" keyword'ü hiçbir sayfanın title'ında yok

### 1.3 İç Linkleme Sorunları

- Footer'da iç linkler var ama **anchor text'ler generic**: "Çalışmalarımız", "Hizmetlerimiz" gibi
- "SEO Uzmanı" sayfasına iç link sıfır (sayfa yok)
- Homepage'den SEO sayfasına link var ama anchor text "SEO Hizmeti" — "SEO ajansı" değil
- Blog yazıları mevcut hizmet sayfalarına sistematik link vermiyor
- /sozluk ve /kaynak-merkezi içeriği bilinmiyor; bu sayfalar topical authority için kritik

### 1.4 Core Web Vitals & Teknik Performans

**Güçlü Yönler:**

- Next.js teknolojisi → SSR/SSG desteği → hız avantajı
- PageSpeed 94 iddiası (referans testimonial'den) — bu doğruysa rakiplerin çoğunun önünde
- Resimler .webp formatında → iyi
  **Zayıf Yönler / Bilinmeyenler:**
- LCP için en büyük element hero section'ın image'ı olabilir; \_next/image lazy loading bazen LCP'yi geciktirir
- CLS riski: Animasyonlu hero text ("müşteri getiren.dönüşüm.bilinirlik.görünürlük") — GSAP/framer-motion
  kullanımı CLS yaratabilir
- TTFB: Hosting lokasyonu bilinmiyor; Türkiye'de CDN kesin bir zorunluluk
- Third-party scriptler (WhatsApp widget, Google Share link) sayfa ağırlığı ekliyor

### 1.5 Mobil UX ve CTA Analizi

**CTA Envanteri:**

- "Ücretsiz Analiz Al" → /iletisim (hero)
- "Projelerimizi Gör" → /islerimiz (hero)
- WhatsApp fixed button (her sayfada)
- "Hemen Ara" tel link
  **CTA Sorunları:**
- Ana CTA "Ücretsiz Analiz Al" — zayıf. Rakipler "Ücretsiz Teklif Al" ve "SEO Denetimi Al" gibi daha değer
  vadeden CTA'lar kullanıyor
- Fiyat sayfası yok → kullanıcı beklenti yönetimi zayıf
- Trust signal'ler (50+ yorum) hero'da belirtilmiş AMA Google My Business linkine yönlendiriyor — schema
  ile desteklenmiyor
- Exit-intent popup veya lead magnet yok
- Hizmet sayfalarında case study/sonuç kanıtı yok (sadece homepage'de 3 testimonial)

---

## ⚔️ 2. RAKİP ANALİZİ

### 2.1 "Web Tasarım Ajansı" Google Sıralamasındaki Rakipler

**Öne Çıkan Rakipler:**

- **webtasarimajansiistanbul.com.tr** — Tamamen keyword-match domain, İstanbul lokasyon avantajı,
  300+ proje, 12+ yıl. Homepage'i "web tasarım ajansı" için optimize edilmiş, ayrı landing page değil.
- **webtasarimiajansi.com.tr** — Benzer domain hack stratejisi. İçerik 1500-2000 kelime, Core Web Vitals
  odaklı.
- **protan.com.tr** — 2009 kuruluş, İstanbul, köklü domain otoritesi. İçerik 2000+ kelime.
- **localveri.com.tr** — 22 yıl, 4.500+ proje, WordPress tabanlı ama içerik çok güçlü. İzmir merkezli ama
  ulusal sıralamada güçlü.
- **armadigital.com.tr** — Büyük marka referansları (Bosch, Coldwell), güçlü backlink profili.
- **ttr.com.tr** — Blog içeriği çok üretken, LSI keyword kullanımı iyi.
  **Rakiplerin Ortak Pattern'leri:**
- Homepage yerine ayrı landing page yok; **homepage'leri "web tasarım ajansı" için optimize edilmiş**
- İçerik uzunluğu: **2000-3500 kelime** arası
- H2'ler semantik: "Web Tasarım Ajansı Nedir?", "Profesyonel Web Tasarım Ajansı ile Çalışmanın Faydaları",
  "Neden [Şehir] Web Tasarım Ajansı?"
- **Şehir bazlı alt sayfalar** → /istanbul-web-tasarim, /ankara-web-tasarim
- Blog frekansı: Ayda 4-8 yazı (Webcraft için çok daha az görünüyor)

### 2.2 "SEO Ajansı" ve "SEO Uzmanı" Rakipleri

**Baskın Oyuncular:**

- **Webtures, ZEO, Digipeak, Mobitek, Seocu.com** — Bu ajanslar "SEO ajansı" kelimesine dedicated alan
  adı veya ana sayfa ile girmiş. Webcraft bu listeye SEO ajansı değil web tasarım ajansı olarak tanındığı için
  girmüyor bile.
- **SEO uzmanı** keyword'ünde freelancer kişisel siteler ve ajansların "ekibimiz/uzmanlarımız" sayfaları
  öne çıkıyor

### 2.3 Neden Webcraft Geride Kalıyor?

**5 Ana Neden:**

1. **Keyword-Sayfa Uyumsuzluğu:** "SEO ajansı" ve "SEO uzmanı" için dedicated, optimize edilmiş sayfa
   yok. Bir sayfa olmadan Google o sayfayı sıralayamaz.
2. **Coğrafi Dezavantaj:** Fethiye-Muğla lokasyonu, İstanbul merkezli rakiplere karşı ulusal arama
   sıralamalarında doğal otorite dezavantajı yaratıyor. Google, yerel relevance sinyallerini güçlü tutuyor.
3. **Domain Yaşı & Otorite Açığı:** Rakipler 10-22 yıllık domain geçmişi ve binlerce backlink ile gelirken
   Webcraft muhtemelen daha genç ve daha az backlinke sahip.
4. **İçerik Derinliği Yetersizliği:** Mevcut hizmet sayfaları ~500-800 kelime tahmin ediliyor. Rakipler 2000-
   3500 kelime ile topical authority kuruyor.
5. **Topical Authority Eksikliği:** Blog içeriği az ve sistematik değil. Bir ajansın "SEO" veya "web tasarım"
   konusunda kaynak otorite olabilmesi için yüzlerce kaliteli içerik gerekiyor. Webcraft'ın blog'unda 4-5
   makale görünüyor.

---

## 🧠 3. AI SEO (AEO / GEO) ANALİZİ

### 3.1 ChatGPT / Gemini / Perplexity Bu Sektörü Nasıl Cevaplanıyor?

AI sistemleri "web tasarım ajansı önerir misin" veya "Türkiye'nin en iyi SEO ajansları" gibi sorgularda şu
pattern'i izliyor:

- Güvenilir kaynak olarak **liste yazıları olan blog sitelerini** referans alıyor (camdalio.com,
  ugurugurcan.com, ahmetabic.com gibi)
- **Yüksek backlink profiline sahip, sektör otoritesi kurulmuş** ajansları (Webtures, ZEO, Mobitek)
  doğrudan öneriyor
- **FAQPage schema** olan siteleri featured snippet olarak kullanıyor
- **Structured data** (Organization, Review) olan siteler AI cevaplarında citation olarak öne çıkıyor

### 3.2 Webcraft'ın AI Sistemlerinde Görünürlük Durumu

Mevcut durumda Webcraft'ın ChatGPT veya Gemini tarafından "web tasarım ajansı öner" sorgusunda
önerilme ihtimali çok düşük. Nedenler:

- Yeterli backlink profili yok
- "Webcraft" markası sektörde otorite yazılarında citation almıyor
- Lokasyon ("Fethiye") AI sistemleri için Türkiye genelinde relevance sinyali vermiyor

### 3.3 AI'da Görünür Olmak İçin Yapılması Gerekenler

**Somut Aksiyonlar:**
**A) CITE-WORTHY İÇERİK YAPISI:**

- Her hizmet sayfasına "Bu Sayfayı Hazırlayan Uzman" bölümü ekle → yazar bio, LinkedIn, uzmanlık yılı
- "Türkiye'nin web tasarım ajansı fiyatları 2026" gibi araştırma içerikleri yayınla → AI bu tür original research
  içerikleri citation olarak kullanıyor
- Her blog yazısına structured data (Article schema + author schema) ekle
  **B) AUTHORITY SIGNAL'LERİ:**
- Webcraft uzmanlarının sektör dışı yayınlarda (Webrazzi, ShiftDelete, Donanımhaber) konuk yazılar
  yazması
- YouTube kanalı açılarak "SEO rehberi", "web tasarım süreci" gibi videolar → AI sistemleri YouTube
  transcriptlerini de referans alıyor
- Haber ve basın bültenleri → PR.com.tr, haberler.com gibi platformlar
  **C) SCHEMA MARKUP (AI İÇİN KRİTİK):**

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Türkiye'nin en iyi web tasarım ajansları hangileri?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Webcraft, 2015'ten bu yana..."
      }
    }
  ]
}
```

- Organization schema → Sameás properties (LinkedIn, Google Business, sosyal medya)
- Review/AggregateRating schema → 4.9 yıldız Google yorumlarını schema'ya taşı
- Service schema → Her hizmet sayfasına
  **D) "BEST OF" LİSTELERİNE GİRMEK:**
  Türkiye'de "en iyi web tasarım ajansları" arayan AI sistemleri ve kullanıcılar, belirli blog sitelerini referans
  alıyor. Bu sitelerde Webcraft'ın yer alması için:
- camdalio.com, ugurugurcan.com, ahmetabic.com, onuruzunonline.com gibi sitelere outreach yapılmalı
- Bu siteler editorial bağımsızlık istiyor; doğrudan reklam yerine case study göndererek organik citation
  kazanılabilir

---

## 🏗️ 4. YENİ SİTE YAPISI ÖNERİSİ

### 4.1 Keyword → Sayfa Eşleştirmesi (TEK STRATEJİ)

| Hedef Keyword            | Hedef Sayfa                           | Rationale                                             |
| ------------------------ | ------------------------------------- | ----------------------------------------------------- |
| web tasarım ajansı       | `/` (Homepage)                        | Homepage bu keyword için savaşacak — landing page'e   |
| böldüğünde güç bölünüyor |
| kurumsal web tasarım     | `/kurumsal-web-tasarim` (yeniden yaz) | Şu an /kurumsal-web-sitesi var; URL                   |
| değişmeli                |
| SEO ajansı               | `/seo-ajansi` (YENİ SAYFA)            | Bu keyword için hiç sayfa yok — acil                  |
| SEO uzmanı               | `/seo-uzmani` (YENİ SAYFA)            | Bu keyword için hiç sayfa yok — acil                  |
| web tasarım hizmeti      | `/hizmetler/web-tasarim`              | Bu keyword için mevcut sayfa yeterli — optimize et    |
| SEO hizmeti              | `/hizmetler/seo-hizmeti`              | Mevcut sayfa "SEO hizmeti" long-tail'ini hedefleyecek |

### 4.2 Önerilen URL Yapısı

```
/ (homepage → "web tasarım ajansı")
│
├── /kurumsal-web-tasarim ← RENAME /kurumsal-web-sitesi
├── /seo-ajansi ← YENİ OLUŞTUR
├── /seo-uzmani ← YENİ OLUŞTUR
│
├── /hizmetler/
│ ├── /hizmetler/web-tasarim (web tasarım hizmeti)
│ ├── /hizmetler/seo-hizmeti (SEO hizmeti, SEO fiyatları)
│ ├── /hizmetler/e-ticaret (e-ticaret web tasarım)
│ ├── /hizmetler/dijital-pazarlama
│ └── /hizmetler/...
│
├── /blog/ (topical authority hub)
│ ├── kategori: web-tasarim
│ ├── kategori: seo
│ └── kategori: dijital-pazarlama
│
├── /karsilastirma/
│ ├── /karsilastirma/wordpress-vs-nextjs
│ ├── /karsilastirma/web-tasarim-fiyatlari
│ └── ...
│
└── /sozluk/ (SEO topical authority)
├── /sozluk/seo-nedir
├── /sozluk/backlink-nedir
└── ...
```

### 4.3 Cannibalization Çözümü

**Şu anki problem:** Homepage + /en-iyi-web-tasarim-ajansi → aynı keyword için rekabet
**Çözüm:**

- `/en-iyi-web-tasarim-ajansi` → 301 redirect → `/` (homepage)
- Homepage, "web tasarım ajansı" keyword'ü için tamamen optimize edilecek tek sayfa
- Bunun yerine keyword-specific landing page'ler (kurumsal, e-ticaret, KOBİ) kendi keyword'lerini taşıyacak

---

## 🧾 5. SAYFA BAZLI SEO STRATEJİSİ

### 5.1 HOMEPAGE — Hedef: "web tasarım ajansı"

**H1 Önerisi:**

> Türkiye'nin Performans Odaklı Web Tasarım Ajansı
> **H2 Yapısı:**

```
H2: Web Tasarım Ajansı Nedir? Ne İş Yapar?
H2: Neden WebCraft Web Tasarım Ajansı?
H3: 10 Yıllık Kanıtlanmış Deneyim
H3: Google PageSpeed 94+ Garantisi
H3: Sonuç Odaklı Çalışma Modeli
H2: Web Tasarım Ajansı Hizmetlerimiz
H3: Kurumsal Web Tasarım
H3: E-Ticaret Web Tasarım
H3: SEO Uyumlu Web Tasarım
H2: Web Tasarım Ajansı ile Çalışma Süreci
H2: Web Tasarım Fiyatları (2026)
H2: Müşteri Başarı Hikayeleri
H2: Sıkça Sorulan Sorular
```

**İçerik Blokları:**

- **Hero:** "Türkiye'nin Performans Odaklı Web Tasarım Ajansı" + alt başlık + CTA
- **Social Proof Bar:** 50+ Google yorum, 4.9★, 200+ proje, 10 yıl
- **Problem-Solution Block:** "Yavaş, eski, dönüşüm yapmayan siteniz mi var?" → Biz çözeriz
- **Hizmetler Grid:** 6-8 hizmet kartı, iç link ile
- **Case Study Bloku:** 3 gerçek vaka + sayısal sonuçlar (PageSpeed 40→94, %60 trafik artışı)
- **Süreç Bölümü:** 4 adım
- **Fiyat Paketi Özeti:** (detay değil, merak uyandıran) → teklif al CTA
- **FAQ (Schema ile):** 8-10 soru
- **Final CTA:** "Ücretsiz Site Analizi Al" (form veya WhatsApp)
  **Hedef Kelime Sayısı:** 2500-3000 kelime
  **LSI Keywordler:** web sitesi tasarım, web sitesi yaptırma, profesyonel web tasarım, dijital ajans, web
  geliştirme, responsive tasarım, kurumsal site, Next.js, React

### 5.2 YENİ SAYFA: /seo-ajansi — Hedef: "SEO ajansı"

**H1 Önerisi:**

> SEO Ajansı: Organik Trafiğinizi 3-6 Ayda Artırıyoruz
> **H2 Yapısı:**

```
H2: SEO Ajansı Nedir? Ne İş Yapar?
H2: WebCraft Neden Güvenilir Bir SEO Ajansı?
H3: Veri Odaklı SEO Stratejisi
H3: Şeffaf Raporlama ve Takip
H3: Teknik SEO Altyapısı
H3: 150+ Başarılı SEO Projesi
H2: SEO Ajansı Hizmet Kapsamımız
H3: Teknik SEO Denetimi
H3: Anahtar Kelime Stratejisi
H3: On-Page SEO Optimizasyonu
H3: Backlink & Otorite İnşası
H3: İçerik SEO Stratejisi
H3: Yerel SEO
H2: SEO Ajansı ile Ne Zaman Sonuç Görürsünüz?
H2: SEO Ajansı Fiyatları (2026 Güncel)
H2: SEO Vaka Çalışmaları (Case Studies)
H2: İyi SEO Ajansı Nasıl Seçilir? (AI'da citation için kritik başlık)
H2: Sıkça Sorulan Sorular
```

**Kritik Fark Yaratan İçerik Blokları:**

- **"İyi SEO Ajansı Nasıl Seçilir?"** — Bu başlık doğrudan ChatGPT/Gemini sorgularıyla eşleşiyor, AI citation
  için para değerinde
- **SEO Vaka Çalışması:** Gerçek müşteri, gerçek rakamlar (anahtar kelime sıralaması, trafik artışı, süre)
- **Fiyatlandırma Şeffaflığı:** "Aylık 3.000₺'den başlayan" gibi bir anchor fiyat → güven ve long-tail (SEO
  ajansı fiyatları)
- **Karşılaştırma Tablosu:** WebCraft SEO Ajansı vs. Freelancer vs. Büyük İstanbul Ajansı — ne
  kazanırsınız, ne kaybedersiniz
  **Hedef Kelime Sayısı:** 3000-3500 kelime

### 5.3 YENİ SAYFA: /seo-uzmani — Hedef: "SEO uzmanı"

**H1 Önerisi:**

> SEO Uzmanı Desteği: Sitenizi Zirveye Taşıyoruz
> **H2 Yapısı:**

```
H2: SEO Uzmanı Kimdir, Ne Yapar?
H2: WebCraft SEO Uzman Ekibi
H3: [Uzman Adı] — Teknik SEO Uzmanı (bio + LinkedIn)
H3: [Uzman Adı] — İçerik & On-Page SEO Uzmanı
H2: Bir SEO Uzmanından Ne Beklemelisiniz?
H2: SEO Uzmanı ile Ajans Arasındaki Fark
H2: SEO Uzmanı Ücreti Ne Kadar? (2026)
H2: SEO Uzmanı Çalışma Süreci
H2: SEO Uzmanı Olmadan Kaybettikleriniz
H2: Sıkça Sorulan Sorular
```

**Kritik Fark Yaratıcı Blok — "Uzman Profilleri":**
AI sistemleri (özellikle Perplexity ve Gemini) gerçek insan uzman bilgisini referans alıyor. Webcraft'ın SEO
uzmanlarının isim, fotoğraf, uzmanlık alanı ve LinkedIn profilleriyle bu sayfada tanıtılması:

1. EEAT sinyali güçlendiriyor
2. AI'ın bu sayfayı "kişisel uzmanlık" sorularında citation olarak kullanmasını sağlıyor
   **Hedef Kelime Sayısı:** 2000-2500 kelime

### 5.4 MEVCUT SAYFA GÜNCELLEME: /kurumsal-web-tasarim — Hedef: "kurumsal web tasarım"

**Aksiyon:** `/kurumsal-web-sitesi` URL'ini `/kurumsal-web-tasarim` olarak değiştir (301 redirect ile)
**H1 Önerisi:**

> Kurumsal Web Tasarım: Markanızın Dijital Kimliğini İnşa Ediyoruz
> **Kritik İçerik Blokları:**

- Kurumsal web tasarım vs. küçük işletme sitesi farkı
- Kurumsal müşteri referans logoları (varsa)
- Kurumsal web tasarım fiyat aralığı
- Teslim süreci ve garantiler
- Kurumsal proje örnekleri (portfolio)
  **Hedef Kelime Sayısı:** 2500 kelime

---

## 🔗 6. İÇ LİNKLEME STRATEJİSİ

### 6.1 Silo Yapısı

```
[HOMEPAGE]
"web tasarım ajansı"
|
├── [WEB TASARIM SİLO]
│ ├── /hizmetler/web-tasarim (web tasarım hizmeti)
│ ├── /kurumsal-web-tasarim (kurumsal web tasarım)
│ ├── /hizmetler/e-ticaret
│ ├── /hizmetler/kobi-web-tasarim
│ ├── /hizmetler/performans-odakli-web-tasarim
│ └── Blog yazıları: web tasarım kategorisi
│
└── [SEO SİLO]
├── /seo-ajansi (SEO ajansı) ← PARENT
├── /seo-uzmani (SEO uzmanı)
├── /hizmetler/seo-hizmeti (SEO hizmeti, fiyatları)
├── /hizmetler/seo-uyumlu-web-sitesi
└── Blog yazıları: SEO kategorisi
```

### 6.2 Anchor Text Planı

| Kaynak Sayfa           | Hedef Sayfa           | Anchor Text                                         |
| ---------------------- | --------------------- | --------------------------------------------------- |
| Homepage               | /seo-ajansi           | "profesyonel SEO ajansı"                            |
| Homepage               | /kurumsal-web-tasarim | "kurumsal web tasarım"                              |
| /hizmetler/web-tasarim | Homepage              | "web tasarım ajansı olarak"                         |
| /hizmetler/web-tasarim | /kurumsal-web-tasarim | "kurumsal web tasarım hizmeti"                      |
| /hizmetler/seo-hizmeti | /seo-ajansi           | "SEO ajansı"                                        |
| /hizmetler/seo-hizmeti | /seo-uzmani           | "SEO uzmanlarımız"                                  |
| /seo-ajansi            | /seo-uzmani           | "SEO uzmanı"                                        |
| /seo-uzmani            | /seo-ajansi           | "SEO ajansımız"                                     |
| Blog (SEO yazıları)    | /seo-ajansi           | "SEO ajansı", "profesyonel SEO"                     |
| Blog (web tasarım)     | Homepage              | "web tasarım ajansı", "kurumsal web tasarım ajansı" |

**Kural:** Aynı anchor text'i siteye 3'ten fazla kullanma. Doğal dağılım için "buraya tıklayın" + marka + tam
eşleşme + kısmi eşleşme mix'i yap.

---

## 📈 7. BACKLINK STRATEJİSİ

### 7.1 Hedef Site Profili

**Tier 1 — En Değerli (önce buraya odaklan):**

- Türk teknoloji / dijital pazarlama medyası: Webrazzi.com, ShiftDelete.net, TeknoSafari.com
- Sektör dernekleri: e-Ticaret Derneği, TÜSİAD dijital yayınları
- "En iyi ajans" liste siteleri: camdalio.com, ugurugurcan.com, ahmetabic.com, onuruzunonline.com
  **Tier 2 — Otorite İnşacı:**
- Yerel iş rehberleri: fethiyebilgi.com, muglaticaret.com türü
- Sektör portalleri: dijitalajans.com.tr benzeri
- Şirket rehberleri: Google Business Profile (zaten var ama içeriği optimize et)
  **Tier 3 — Hacim:**
- Dofollow dizin siteleri
- Partner/müşteri siteleri (karşılıklı değil, tek yönlü)
- Forum ve community (Donanimhaber, Technopat sorularına uzman cevabı)

### 7.2 Link Edinme Taktikleri

**A) Content-Based (En Sürdürülebilir):**

- "Türkiye'de Web Tasarım Fiyatları 2026 Araştırması" gibi original data içeriği → diğer siteler otomatik link
  veriyor
- Webcraft vaka çalışmalarını (PageSpeed 40→94) Webrazzi'ye pitch et → editorial backlink
  **B) Digital PR:**
- Yerel medyaya "Fethiye'den Türkiye'ye Hizmet Veren Teknoloji Ajansı" açısıyla hikaye pitch et
- Muğla Ticaret Odası veya ilgili kurumlarla ortaklık → .gov.tr veya .edu.tr yakın domainlerden link
  **C) Broken Link Building:**
- Rakip sitelerin kırık linklerini bul → kendi içerikle değiştir öner
  **D) Testimonial Link Building:**
- Kullandığınız araçların (Next.js hosting, vb.) "case study" bölümlerine başvur

### 7.3 Backlink Anchor Dağılımı

| Anchor Tipi                                   | Oran |
| --------------------------------------------- | ---- |
| Branded ("WebCraft", "WebCraft.tr")           | %40  |
| Naked URL (webcraft.tr)                       | %20  |
| Partial match ("web tasarım ajansı WebCraft") | %15  |
| Exact match ("web tasarım ajansı")            | %10  |
| Generic ("buraya tıklayın", "bu site")        | %10  |
| LSI / related ("profesyonel web ajansı")      | %5   |

### 7.4 Backlink Hedef Sayısı

Rekabetçi analiz bazında tahmini ihtiyaç:

- **"web tasarım ajansı"** top 3 için: 150-300 referring domain, DR 30+
- **"SEO ajansı"** top 5 için: 80-150 referring domain, DR 25+
- **"kurumsal web tasarım"** top 3 için: 100-200 referring domain
  **Öncelik:** Quantity değil quality. DR 40+ Türkçe 10 link, DR 10 100 linkten değerli.

---

## ⚡ 8. HIZ & TEKNİK SEO

### 8.1 Next.js Spesifik Optimizasyonlar

**LCP İyileştirmesi:**

```javascript
// Hero image için priority flag — Next.js Image component
<Image
  src="/hero.webp"
  priority={true} // ← Bu satır LCP'yi 0.5-1s iyileştirir
  alt="Web Tasarım Ajansı"
/>
```

**Font Yükleme:**

```javascript
// next/font kullanarak CLS sıfıra indir
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap" });
```

**CLS Düzeltmesi:**

- Animasyonlu hero text için `min-height` veya `aspect-ratio` ayarla
- WhatsApp widget için `position: fixed` doğru kullanılıyor mu? Kontrol et

### 8.2 TTFB & Hosting

**Mevcut durum bilinmiyor ama öneri net:**

- Hosting Türkiye'deyse iyi. Değilse → Türkiye'ye taşı veya Cloudflare CDN ekle
- Cloudflare Free tier → Türkiye PoP'ları var, TTFB 50-100ms düşürebilir
- Cache stratejisi: Static sayfalar için `s-maxage=86400` (1 gün CDN cache)

### 8.3 Teknik SEO Checklist

- [ ] XML Sitemap güncel mi? Her yeni sayfa otomatik ekleniyor mu? (Next.js sitemap paketi kullan)
- [ ] Robots.txt doğru mu? /iletisim, /tesekkurler gibi conversion sayfaları indexable mi?
- [ ] Canonical tag'ler her sayfada doğru mu? (Özellikle /hizmetler/\* altındaki sayfalar)
- [ ] Hreflang: Türkçe-İngilizce çift dil varsa ekle
- [ ] 404 sayfası özelleştirilmiş mi? Navigation ve CTA var mı?
- [ ] Structured Data test: Google Rich Results Test ile tüm sayfalar kontrol
- [ ] Core Web Vitals: PageSpeed Insights ile aylık ölç
- [ ] Internal broken links: Screaming Frog ile tarama

---

## 🎯 9. DÖNÜŞÜM OPTİMİZASYONU (CRO)

### 9.1 Müşteriyi Dönüştüren Yapı

**Mevcut Dönüşüm Akışı (Zayıf):**
Ziyaretçi → "Ücretsiz Analiz Al" → /iletisim formu → bekleme
**Önerilen Dönüşüm Akışı:**

```
Ziyaretçi
↓
Hero: Problem odaklı mesaj ("Siteniz müşteri kaybettiriyor mu?")
↓
Social Proof: "50 müşteri 4.9★ veriyor — İşte neden"
↓
Value Stack: "3 günde teslim + PageSpeed 90+ garantisi + 6 ay destek"
↓
CTA: "Ücretsiz Site Analizi Al" (form, sadece isim + telefon + site URL)
↓
Anında: WhatsApp bağlantısı veya takvim rezervasyonu (Calendly)
```

### 9.2 Trust Artırıcı Unsurlar (Hemen Ekle)

- **Google Yorumları Schema:** 4.9★ / 50 yorum → AggregateRating schema ile markup
- **Müşteri Logoları:** Referans şirket logoları → kurumsal güven
- **Medyada Biz:** Webrazzi veya başka yayında yer aldıysa logo ekle
- **Sertifikalar:** Google Partner, Next.js resmi certifications varsa
- **Gerçek Vaka Çalışmaları (Sayısal):** Testimonial'dan öte — "X şirketi, Y kelimede Z. sıraya 3 ayda çıktı"
- **Para İadesi / Garanti:** "PageSpeed 90 altında kalırsa iade" gibi bir garanti dönüşümü ciddi artırır

### 9.3 Fiyatlandırma Stratejisi — Göster mi, Gösterme mi?

**Karar: Göster (paket bazlı, aralık olarak)**
Nedenler:

- Fiyat sayfası SEO'da "web tasarım fiyatları 2026" gibi long-tail keyword'ler için trafik üretiyor
- Fiyat şeffaflığı kaliteli lead filtreler — düşük bütçeli müşteriler zaman harcatmaz
- Rakiplerin çoğu "teklif alın" diyor; fiyat gösteren güven öncüsü olur
  **Öneri:**

```
Başlangıç Paketi: ₺15.000'den başlayan — Kimler için?
Kurumsal Paket: ₺35.000'den başlayan — Kimler için?
E-Ticaret Paketi: ₺25.000'den başlayan — Kimler için?
[Özel Fiyat İçin Teklif Al]
```

---

## 🚀 10. 90 GÜNLÜK AKSİYON PLANI

### 📅 GÜN 1-7 — Temel Altyapı (Hız Kazanımı: Yüksek)

- [ ] **Gün 1:** Google Search Console ve Analytics audit — hangi kelimeler trafik getiriyor, hangi sayfalar 0
      trafik?
- [ ] **Gün 2:** /en-iyi-web-tasarim-ajansi → 301 redirect → / (cannibalization çöz)
- [ ] **Gün 3:** Homepage content rewrite (2500 kelime, yukarıdaki H2 yapısına göre)
- [ ] **Gün 4:** Homepage + tüm hizmet sayfaları için Schema markup (Organization, FAQPage, Service)
- [ ] **Gün 5:** Priority=true flag → hero image → LCP iyileştir
- [ ] **Gün 6:** /kurumsal-web-sitesi → /kurumsal-web-tasarim URL değişimi + 301 redirect
- [ ] **Gün 7:** Sitemap güncelle, Search Console'a submit et

### 📅 GÜN 8-21 — Kritik Sayfalar (Hız Kazanımı: Çok Yüksek)

- [ ] **Gün 8-10:** /seo-ajansi sayfası oluştur (3000 kelime, tam yapıya göre)
- [ ] **Gün 11-13:** /seo-uzmani sayfası oluştur (2000 kelime + uzman bio'ları)
- [ ] **Gün 14-16:** /kurumsal-web-tasarim sayfası rewrite (2500 kelime)
- [ ] **Gün 17-18:** /hizmetler/seo-hizmeti sayfasını derinleştir (2000 kelimeden az ise büyüt)
- [ ] **Gün 19-21:** Tüm yeni sayfalara iç link ver (anchor text planına göre)

### 📅 GÜN 22-45 — İçerik & Otorite (Hız Kazanımı: Orta)

- [ ] **Hafta 4:** 3 blog yazısı yayınla (SEO siloya 2, web tasarım siloya 1)
- "Web Tasarım Fiyatları 2026: Gerçekçi Rehber"
- "SEO Ajansı Seçerken Dikkat Edilmesi Gereken 10 Şey"
- "Next.js ile Hazırlanan Siteler Neden Google'da Öne Çıkıyor?"
- [ ] **Hafta 5:** Backlink outreach başlat — 10 "en iyi ajans" liste sitesine email
- [ ] **Hafta 5:** Google Business Profile optimize et (hizmetler, fotoğraflar, SSS ekle)
- [ ] **Hafta 6:** /sozluk sayfalarına içerik üret (SEO sözlüğü — 20 terim)
- [ ] **Hafta 6:** Fiyatlandırma sayfası oluştur veya mevcut sayfaya ekle

### 📅 GÜN 46-90 — Otorite İnşası & Optimizasyon

- [ ] **Hafta 7-8:** 6 blog yazısı daha (2 SEO, 2 web tasarım, 2 dijital pazarlama)
- [ ] **Hafta 8:** Webrazzi veya ShiftDelete'e konuk makale pitch et
- [ ] **Hafta 9:** Case study sayfaları — /projeler altında 3 detaylı vaka çalışması
- [ ] **Hafta 10:** A/B test → CTA "Ücretsiz Analiz Al" vs "Ücretsiz Site Denetimi Al"
- [ ] **Hafta 11:** Core Web Vitals tekrar ölç, kalan sorunları düzelt
- [ ] **Hafta 12:** İlk 90 gün sonuç raporu — hangi keyword'ler hareket etti?

### ⚡ En Hızlı Etki Eden Hamleler (Sırayla)

1. **Cannibalization düzelt** → 301 redirect → 1-2 haftada etki
2. **/seo-ajansi sayfası oluştur** → Bu sayfa olmadan "SEO ajansı"nda sıralama imkansız
3. **Homepage rewrite** → 2500 kelimeye çıkar → 4-6 haftada etki
4. **Schema markup** → Featured snippet fırsatı → 2-4 haftada etki
5. **Google Business Profile** → Yerel aramalarda anında etki

---

## 📊 11. BEKLENEN SONUÇLAR

| Keyword               | Mevcut Durum (Tahmini) | 3. Ay        | 6. Ay                  | 12. Ay        |
| --------------------- | ---------------------- | ------------ | ---------------------- | ------------- |
| web tasarım ajansı    | Sayfa 3-5 (tahmin)     | Sayfa 2      | Sayfa 1, pozisyon 5-10 | Pozisyon 1-3  |
| kurumsal web tasarım  | Belirsiz               | Sayfa 2-3    | Pozisyon 8-15          | Pozisyon 3-8  |
| SEO ajansı            | Sıralamada yok         | Sayfa 3-4    | Sayfa 1-2              | Pozisyon 5-10 |
| SEO uzmanı            | Sıralamada yok         | Sayfa 3-5    | Sayfa 2-3              | Sayfa 1-2     |
| web tasarım fiyatları | Muhtemelen yok         | Sayfa 2-3    | Sayfa 1-2              | Pozisyon 3-7  |
| Fethiye web tasarım   | Muhtemelen sayfa 1     | Pozisyon 1-3 | Pozisyon 1-2           | Pozisyon 1    |

**Önemli Notlar:**

- "Web tasarım ajansı" ve "SEO ajansı" için pozisyon 1 hedefi gerçekçi ama **12-18 ay** zaman alabilir.
  İstanbul merkezli, 10+ yıllık domain otoritesine sahip rakipleri geçmek için hem içerik hem de backlink
  birikimi şart.
- **En hızlı kazanım:** Fethiye ve Muğla yerel aramaları — bunlar için 1-3 ay yeterli.
- **Orta vadeli kazanım (6 ay):** "SEO ajansı" ve "kurumsal web tasarım" — rekabet daha az.
- **Uzun vadeli (12 ay):** "Web tasarım ajansı" — rekabet yoğun ama yapılabilir.

---

## ❗ ÖNCELİK MATRİSİ (ÖZET)

| Aksiyon                               | Etki                 | Süre    | Öncelik              |
| ------------------------------------- | -------------------- | ------- | -------------------- |
| Cannibalization düzelt (301 redirect) | Yüksek               | 1 saat  | 🔴 BUGÜN             |
| /seo-ajansi sayfası oluştur           | Çok Yüksek           | 2 gün   | 🔴 BUGÜN             |
| Homepage rewrite (2500 kelime)        | Yüksek               | 2 gün   | 🔴 BU HAFTA          |
| Schema markup (tüm sayfalar)          | Yüksek               | 1 gün   | 🔴 BU HAFTA          |
| /seo-uzmani sayfası oluştur           | Yüksek               | 2 gün   | 🟠 2. HAFTA          |
| /kurumsal-web-tasarim rewrite         | Orta-Yüksek          | 1-2 gün | 🟠 2. HAFTA          |
| Blog içerik stratejisi (ayda 6+ yazı) | Yüksek (uzun vadeli) | Sürekli | 🟠 3. HAFTA+         |
| Backlink outreach                     | Orta-Yüksek          | Sürekli | 🟡 1. AYDAN İTİBAREN |
| CRO optimizasyonu                     | Orta                 | 1 hafta | 🟡 30. GÜNDEN SONRA  |

---

_Bu rapor webcraft.tr sitesinin canlı analizi, Türk SEO pazarı rekabet araştırması ve AI SEO güncel pratikleri
esas alınarak hazırlanmıştır. Uygulamada öncelik sırasına uymak, sonuçların hızını doğrudan etkiler._
