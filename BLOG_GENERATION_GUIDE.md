# Blog Posts Quick Generation Guide

## ✅ Already Created (3 Posts)

1. **web-sitesi-hizi-nasil-artirilir** - Performance guide (2000+ words)
2. **core-web-vitals-rehberi** - Core Web Vitals guide (1900+ words)
3. **kobi-dijital-donusum-rehberi** - SME digital transformation (2100+ words)

## 🔄 Remaining Posts - Generation Templates

### Template for New Posts (3 remaining)

Use this prompt with AI to generate remaining new posts:

```
Create a Turkish blog post for WebCraft (web design agency) with the following requirements:

**Post Details:**
- Slug: [SLUG]
- Title: [TITLE]
- Category: [CATEGORY]
- Date: [DATE]
- Target Keywords: [KEYWORDS]

**Content Requirements:**
- Length: 1800-2000 words
- Language: Turkish (tr_TR)
- Professional tone, clear and actionable advice
- Include internal links to:
  - /hizmetler/web-tasarim
  - /hizmetler/dijital-pazarlama
  - /hizmetler/[RELEVANT-SERVICE]
- Link format: <a href="/URL" class="text-[#f84525] hover:underline font-semibold">TEXT</a>

**Structure:**
- Introduction (2-3 paragraphs)
- 2-3 main H2 sections
- 4-6 H3 subsections
- Bullet lists (ul/li)
- Numbered lists (ol/li) when appropriate
- 2 call-to-action boxes (green and blue)
- Conclusion with action items

**Call-to-Action Boxes:**

Green Box (Service Promotion):
<div class="bg-green-50 border-l-4 border-green-400 p-4 my-8">
  <h4 class="text-green-800 font-semibold mb-2">🚀 [TITLE]</h4>
  <p class="text-green-700">[CONTENT] <a href="/[URL]" class="font-semibold underline">[LINK_TEXT]</a></p>
</div>

Blue Box (Related Services):
<div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-8">
  <h4 class="text-blue-800 font-semibold mb-2">💡 İlgili Hizmetlerimiz</h4>
  <ul class="text-blue-700 space-y-2">
    <li>→ <a href="/hizmetler/[SERVICE-1]" class="underline">[SERVICE_NAME_1]</a></li>
    <li>→ <a href="/hizmetler/[SERVICE-2]" class="underline">[SERVICE_NAME_2]</a></li>
    <li>→ <a href="/hizmetler/[SERVICE-3]" class="underline">[SERVICE_NAME_3]</a></li>
  </ul>
</div>

Generate only the HTML content (no component wrapper).
```

### 1. teknik-seo-kontrol-listesi (Technical SEO Checklist)

**AI Prompt:**

```
Create Turkish blog post:
- Slug: teknik-seo-kontrol-listesi
- Title: Teknik SEO Kontrol Listesi 2025: Site Yapısından Hız Optimizasyonuna
- Category: SEO
- Date: 12 Ocak 2026
- Keywords: teknik seo, seo kontrol listesi, site yapısı, hız optimizasyonu, robots.txt, sitemap, schema markup

Content Focus:
- Complete technical SEO checklist
- Site structure optimization
- Crawlability and indexability
- Speed optimization
- Mobile optimization
- Schema markup
- Security (HTTPS, SSL)
- XML sitemap and robots.txt
- Internal linking structure

Link to: /hizmetler/seo-uyumlu-web-sitesi, /hizmetler/performans-odakli-web-tasarim, /hizmetler/web-tasarim
```

### 2. yerel-seo-stratejileri (Local SEO Strategies)

**AI Prompt:**

```
Create Turkish blog post:
- Slug: yerel-seo-stratejileri
- Title: Yerel SEO Stratejileri 2025: Google Haritalar'da Üst Sıralara Çıkın
- Category: SEO
- Date: 10 Ocak 2026
- Keywords: yerel seo, local seo, google my business, google haritalar, yerel arama, NAP tutarlılığı, yerel anahtar kelimeler

Content Focus:
- Google My Business optimization
- NAP (Name, Address, Phone) consistency
- Local citations and directories
- Customer reviews management
- Local link building
- Local keyword targeting
- Google Maps optimization
- Geo-targeted content

Link to: /hizmetler/seo-uyumlu-web-sitesi, /hizmetler/dijital-pazarlama, /fethiye-web-tasarim-hizmetleri, /mugla-web-tasarim-seo-hizmetleri
```

### 3. fethiye-web-tasarim-rehberi (Fethiye Web Design Guide)

**AI Prompt:**

```
Create Turkish blog post:
- Slug: fethiye-web-tasarim-rehberi
- Title: Fethiye Web Tasarım Rehberi: Turizm İşletmeleri İçin Dijital Çözümler
- Category: Yerel SEO
- Date: 8 Ocak 2026
- Keywords: fethiye web tasarım, fethiye web sitesi, turizm web sitesi, otel web tasarımı, fethiye dijital pazarlama, muğla web tasarım

Content Focus:
- Tourism sector web design needs
- Hotel and restaurant websites
- Booking system integration
- Multi-language support
- Local SEO for tourism
- Beautiful imagery and galleries
- Mobile-first design for tourists
- Social media integration

Link to: /fethiye-web-tasarim-hizmetleri, /hizmetler/web-tasarim, /hizmetler/dijital-pazarlama, /mugla-web-tasarim-seo-hizmetleri
```

## 📦 Existing Posts - Direct Extraction

For the 12 existing posts, you need to extract content from the old `[slug]/page.tsx` backup and create new files.

### Extraction Steps:

1. If you have backup of old file, locate the content section for each post
2. Copy the HTML content between the dangerouslySetInnerHTML tags
3. Use the template from one of the 3 completed posts
4. Replace the metadata and content
5. Keep the same slug, title, date, author

### Existing Posts List:

1. **profesyonel-web-tasarim-nedir-kimler-icin-gerekli**
   - Date: 22 Ocak 2025
   - Category: Web Tasarım
   - Content starts at line ~413 of old file

2. **kurumsal-web-sitesi-yaptirirken-yapilan-7-kritik-hata**
   - Date: 20 Ocak 2025
   - Category: Web Tasarım
   - Content starts at line ~733

3. **seo-uyumlu-web-tasarimi**
   - Date: 15 Aralık 2024
   - Category: Web Tasarım

4. **sosyal-medya-yonetimi-marka-buyutme**
   - Date: 12 Aralık 2024
   - Category: Dijital Pazarlama

5. **profesyonel-seo-hizmeti**
   - Date: 10 Aralık 2024
   - Category: SEO

6. **web-tasarim-fiyatlari**
   - Date: 8 Aralık 2024
   - Category: Web Tasarım

7. **2024-seo-trendleri**
   - Date: 5 Aralık 2024
   - Category: SEO

8. **minimalist-tasarim-yaklasimlari**
   - Date: 3 Aralık 2024
   - Category: Web Tasarım

9. **online-magaza-kurulumu**
   - Date: 1 Aralık 2024
   - Category: E-Ticaret

10. **guclu-marka-imaji-olusturma**
    - Date: 28 Kasım 2024
    - Category: Marka

11. **web-sitesi-guvenligi**
    - Date: 25 Kasım 2024
    - Category: Web Güvenlik

12. **web-analitik-araclari**
    - Date: 22 Kasım 2024
    - Category: Web Analitik

## 🔨 Quick Generation Script

If you want to automate the extraction process for existing posts:

```bash
#!/bin/bash

# List of existing post slugs
slugs=(
  "profesyonel-web-tasarim-nedir-kimler-icin-gerekli"
  "kurumsal-web-sitesi-yaptirirken-yapilan-7-kritik-hata"
  "seo-uyumlu-web-tasarimi"
  "sosyal-medya-yonetimi-marka-buyutme"
  "profesyonel-seo-hizmeti"
  "web-tasarim-fiyatlari"
  "2024-seo-trendleri"
  "minimalist-tasarim-yaklasimlari"
  "online-magaza-kurulumu"
  "guclu-marka-imaji-olusturma"
  "web-sitesi-guvenligi"
  "web-analitik-araclari"
)

# Create directories
for slug in "${slugs[@]}"; do
  mkdir -p "src/app/blog/$slug"
  echo "Created directory for $slug"
done
```

## ✅ Final Checklist

After creating all 18 blog posts:

- [ ] All blog directories created
- [ ] All page.tsx files created
- [ ] Metadata complete (title, description, keywords, canonical)
- [ ] Schemas added (breadcrumb, blogPosting)
- [ ] Content is 1500+ words
- [ ] Internal links included (3-5 per post)
- [ ] CTA boxes added (green and blue)
- [ ] Sitemap updated (already done ✓)
- [ ] Test blog listing page works
- [ ] Test each individual blog post loads
- [ ] Verify internal links work
- [ ] Mobile responsive check
- [ ] Rich snippets validation

## 📊 Progress Tracking

### New Posts:

- [x] web-sitesi-hizi-nasil-artirilir
- [x] core-web-vitals-rehberi
- [x] kobi-dijital-donusum-rehberi
- [ ] teknik-seo-kontrol-listesi
- [ ] yerel-seo-stratejileri
- [ ] fethiye-web-tasarim-rehberi

### Existing Posts:

- [ ] profesyonel-web-tasarim-nedir-kimler-icin-gerekli
- [ ] kurumsal-web-sitesi-yaptirirken-yapilan-7-kritik-hata
- [ ] seo-uyumlu-web-tasarimi
- [ ] sosyal-medya-yonetimi-marka-buyutme
- [ ] profesyonel-seo-hizmeti
- [ ] web-tasarim-fiyatlari
- [ ] 2024-seo-trendleri
- [ ] minimalist-tasarim-yaklasimlari
- [ ] online-magaza-kurulumu
- [ ] guclu-marka-imaji-olusturma
- [ ] web-sitesi-guvenligi
- [ ] web-analitik-araclari

**Completion Rate:** 3/18 (16.67%)
**Remaining:** 15 posts

## 🎯 Recommended Approach

1. **Generate 3 new posts first** (using AI prompts above)
2. **Extract 12 existing posts** from old file backup
3. **Test all pages** incrementally
4. **Deploy** when all 18 are complete

**Estimated Time:**

- New posts (3): 1-2 hours with AI
- Extract existing (12): 2-3 hours
- Testing: 30 minutes
- **Total: 3.5-5.5 hours**

---

**Need Help?**

- Reference completed posts for exact structure
- Use AI (ChatGPT, Claude) with prompts above
- Each post follows same template pattern
- All schemas and metadata formats are identical
