# Blog Layout Migration Plan

**Goal:** Replicate the design/layout of `/blog/seo-geo-aeo-nedir` to all 18 other blog posts.

---

## Reference Design: `seo-geo-aeo-nedir`

### Structure

```
Header
Breadcrumb
<main>
  <section pt-24 md:pt-32 pb-12 gradient-hero>        ← Hero
    max-w-4xl:
      Badge (category pill)
      H1
      Byline: Author • Date • Read time
      Hero image (h-56 sm:h-72 md:h-[400px] rounded-2xl)
      Intro blockquote (border-l-4 border-red-500 pl-6 md:pl-10 py-3)
  </section>

  <article py-12>                                      ← Two-column article
    max-w-6xl:
      flex gap-16 items-start:
        <div min-w-0 flex-1>                           ← Content column
          H2 sections (id="" + scroll-mt-24)
          Author bio (TWO-ROW format)
          Published date note
        </div>
        <BlogTOC items={TOC_ITEMS} />                  ← Sticky right sidebar (xl+)

  <RelatedBlogPosts />
</main>
Footer
```

### Author Bio — Target Format (TWO-ROW)

```tsx
<div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-4">
  <div className="flex items-center gap-4 md:gap-5 mb-4">
    <div className="bg-red-600 text-white font-bold text-xl rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0">
      XX  {/* initials */}
    </div>
    <div>
      <p className="font-bold text-gray-900 text-lg md:text-xl leading-tight">Author Name</p>
      <p className="text-red-600 text-sm font-medium mt-1">Title</p>
    </div>
  </div>
  <p className="text-gray-700 text-sm leading-relaxed">Bio text <Link href="/hakkimizda">...</Link></p>
</div>
<div className="text-sm text-gray-500 mt-2 mb-8">
  Yayın tarihi: DD Ay YYYY • Bu yazı yazar tarafından birinci elden deneyim ve araştırma temelinde hazırlanmıştır.
</div>
```

### BlogTOC Component

- File: `src/components/BlogTOC.tsx` (already created)
- Circular progress ring + numbered item list
- IntersectionObserver highlights active section
- Only visible on `xl:` (≥1280px); hidden on smaller screens
- TOC_ITEMS must match real `id=""` values on H2 elements

---

## What Changes Per Layout Type

### Layout B Posts (13) — JSX content, `section` wrapper

**Already have:** gradient hero, hero image, byline, breadcrumb  
**Need to add/change:**

1. `import BlogTOC from "@/components/BlogTOC";`
2. `const TOC_ITEMS = [...]` before page function
3. Hero: `pt-32 pb-16` → `pt-24 md:pt-32 pb-12`
4. Hero: fix byline order to `Author • Date • Time` (currently `Date • Time • Author`)
5. Intro paragraph: add red-border blockquote style
6. Content `<section className="py-16">` → `<article className="py-12">`
7. Inner `max-w-4xl` → `max-w-6xl` + flex two-column with `min-w-0 flex-1` content div + `<BlogTOC />`
8. Remove `<div className="prose prose-lg max-w-none">` wrapper
9. Add `id=""` + `scroll-mt-24` to every H2 heading
10. Fix author bio to two-row format + move inside `min-w-0 flex-1` div
11. Remove old `<section className="py-8 bg-white">` author bio outer wrapper
12. Add published date note after bio

### Layout A Posts (6) — `dangerouslySetInnerHTML`, `article` + `max-w-screen-xl`

**Need full restructure:**

1. All Layout B changes above, PLUS:
2. Hero: convert from `max-w-screen-xl article` to `max-w-4xl section` with gradient bg
3. Move byline, category badge from inside article to hero section
4. Add hero image
5. Remove duplicate "← Blog'a Geri Dön" link inside article body
6. Add `id=""` attributes to H2 tags **inside the HTML string** in `dangerouslySetInnerHTML`
7. Wrap raw HTML with new two-column article layout

---

## Phase Breakdown

### PHASE 1 ✅ (Layout B — simplest, 2–3 H2s each)

| Post                      | Author         | Initials | H2 IDs                             | Date           |
| ------------------------- | -------------- | -------- | ---------------------------------- | -------------- |
| `online-magaza-kurulumu`  | Ahmet Tümkaya  | AT       | `kurulum-adimlari`, `sonuc`        | 1 Aralık 2024  |
| `profesyonel-seo-hizmeti` | Kubilay Özışık | KÖ       | `nedir`, `neler-kapsar`, `sonuc`   | 10 Aralık 2024 |
| `seo-uyumlu-web-tasarimi` | Kubilay Özışık | KÖ       | `nedir`, `temel-unsurlar`, `sonuc` | 15 Aralık 2024 |

### PHASE 2 (Layout B — 3 H2s each)

| Post                                                | Author        | Initials | H2 IDs                                  | Date           |
| --------------------------------------------------- | ------------- | -------- | --------------------------------------- | -------------- |
| `sosyal-medya-yonetimi-marka-buyutme`               | Serhat Kaya   | SK       | `nedir`, `strateji`, `sonuc`            | 12 Aralık 2024 |
| `web-tasarim-fiyatlari`                             | Ahmet Tümkaya | AT       | `fiyat-faktorleri`, `paketler`, `sonuc` | 8 Aralık 2024  |
| `profesyonel-web-tasarim-nedir-kimler-icin-gerekli` | Burak Yaba    | BY       | `nedir`, `kimler-icin`, `sonuc`         | 22 Ocak 2025   |

### PHASE 3 (Layout B — 8–9 H2s each)

| Post                                                    | Author      | Initials | H2 IDs                                                                                                   | Date          |
| ------------------------------------------------------- | ----------- | -------- | -------------------------------------------------------------------------------------------------------- | ------------- |
| `kurumsal-web-sitesi-yaptirirken-yapilan-7-kritik-hata` | Burak Yaba  | BY       | `hata-1`…`hata-7`, `sonuc`                                                                               | 20 Ocak 2025  |
| `minimalist-tasarim-yaklasimlari`                       | Serhat Kaya | SK       | `temel-felsefe`, `whitespace`, `grid`, `renk`, `tipografi`, `gorsel-cta`, `performans`, `sss`, `sonuc`   | 3 Aralık 2024 |
| `guclu-marka-imaji-olusturma`                           | Serhat Kaya | SK       | `marka-kimligi`, `logo`, `renk`, `tipografi`, `marka-sesi`, `brand-book`, `dijital-uyum`, `sss`, `sonuc` | 28 Kasım 2024 |

### PHASE 4 (Layout B — 8–10 H2s each, some have inline TOC to remove)

| Post                    | Author         | Initials | H2 IDs                                                                                                                  | Date          |
| ----------------------- | -------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- | ------------- |
| `2024-seo-trendleri`    | Kubilay Özışık | KÖ       | `ai-overview`, `eeat`, `core-web-vitals`, `sesli-arama`, `video-seo`, `teknik-seo`, `topical-authority`, `sss`, `sonuc` | 5 Aralık 2024 |
| `web-analitik-araclari` | Serhat Kaya    | SK       | `ga4`, `gsc`, `hotjar`, `semrush`, `metrikler`, `rutin`, `sss`, `sonuc`                                                 | 22 Kasım 2024 |
| `web-sitesi-guvenligi`  | Ahmet Tümkaya  | AT       | `ssl`, `waf`, `guvenlik-basliklari`, `kimlik-dogrulama`, `yedekleme`, `cms-guvenligi`, `ddos`, `sss`, `sonuc`           | 25 Kasım 2024 |

### PHASE 5 (Layout A — dangerouslySetInnerHTML)

| Post                              | Author         | Initials | H2 IDs (inside HTML string)                                                                                                                                    | Date         |
| --------------------------------- | -------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `yerel-seo-stratejileri`          | Kubilay Özışık | KÖ       | `yerel-seo-nedir`, `gmb`, `nap`, `yorumlar`, `anahtar-kelime`, `backlink`, `icerik`, `haritalar`, `mobil`, `schema`, `takip`, `sonuc`                          | 10 Ocak 2026 |
| `web-sitesi-hizi-nasil-artirilir` | Burak Yaba     | BY       | `neden-onemli`, `core-web-vitals`, `gorsel-optimizasyon`, `kod-optimizasyon`, `sunucu`, `nextjs`, `olcum-araclari`, `checklist`, `profesyonel-destek`, `sonuc` | 20 Ocak 2026 |
| `teknik-seo-kontrol-listesi`      | Kubilay Özışık | KÖ       | `nedir`, `url`, `sitemap`, `robots`, `canonical`, `schema`, `hiz`, `mobil`, `https`, `hreflang`, `crawl`, `araclar`, `uygulama`, `sonuc`                       | 12 Ocak 2026 |

### PHASE 6 (Layout A — dangerouslySetInnerHTML)

| Post                           | Author         | Initials | H2 IDs                                                                                                                                                  | Date         |
| ------------------------------ | -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `core-web-vitals-rehberi`      | Burak Yaba     | BY       | `nedir`, `lcp`, `fid`, `cls`, `olcum-araclari`, `optimizasyon-checklist`, `profesyonel`, `sonuc`                                                        | 18 Ocak 2026 |
| `fethiye-web-tasarim-rehberi`  | Burak Yaba     | BY       | `dijital-donusum`, `temel-ozellikler`, `otel-stratejileri`, `eticaret`, `mevsimsel-seo`, `gmb`, `sosyal-medya`, `omnichannel`, `takip`, `kvkk`, `sonuc` | 8 Ocak 2026  |
| `kobi-dijital-donusum-rehberi` | Kubilay Özışık | KÖ       | `nedir`, `web-sitesi`, `seo`, `sosyal-medya`, `eticaret`, `dijital-pazarlama`, `analitik`, `butce`, `paket`, `oneriler`, `sonuc`                        | 15 Ocak 2026 |

---

## Author Bio Data

| Author         | Initials | Title                                            | Bio                                                                                                                                                                                                               |
| -------------- | -------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Burak Yaba     | BY       | WebCraft — Kurucu & Web Tasarım Uzmanı           | Web tasarım ve SEO alanında 8+ yıllık deneyimle onlarca KOBİ ve kurumsal işletmenin dijital varlığını inşa ettim. Fethiye merkezli çalışıyor, Türkiye genelinde ve uluslararası projelerde danışmanlık veriyorum. |
| Kubilay Özışık | KÖ       | WebCraft — SEO & Dijital Büyüme Uzmanı           | 6 yılı aşkın süre boyunca Türkiye genelinde işletmelerin organik arama görünürlüğünü büyüttüm. Teknik SEO, içerik stratejisi ve anahtar kelime araştırması alanlarında uzmanlaştım.                               |
| Serhat Kaya    | SK       | WebCraft — Dijital Pazarlama & Marka Uzmanı      | Sosyal medya yönetimi, marka stratejisi ve içerik pazarlaması alanlarında 5 yıllık deneyimle işletmelerin dijital kanallardan müşteri kazanmasına yardımcı oluyorum.                                              |
| Ahmet Tümkaya  | AT       | WebCraft — E-Ticaret & Yazılım Geliştirme Uzmanı | E-ticaret sistemleri, web güvenliği ve dijital satış stratejileri alanında 7 yıllık deneyime sahibim. Onlarca online mağazanın teknik kurulumunu ve büyüme stratejisini yürüttüm.                                 |

---

## Progress Tracker

- [ ] Phase 1: online-magaza, prof-seo, seo-uyumlu
- [ ] Phase 2: sosyal-medya, fiyatlar, prof-web-tasarim
- [ ] Phase 3: kurumsal, minimalist, guclu-marka
- [ ] Phase 4: 2024-seo, web-analitik, guvenligi
- [ ] Phase 5: yerel-seo, hiz, teknik-seo (Layout A)
- [ ] Phase 6: core-web, fethiye, kobi (Layout A)
- [ ] Final build verification
