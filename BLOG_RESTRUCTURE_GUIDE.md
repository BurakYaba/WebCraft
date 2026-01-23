# Blog Restructure Guide

## ✅ Completed Tasks

1. **Deleted old dynamic route**: `src/app/blog/[slug]/page.tsx` (4159 lines) - REMOVED
2. **Updated sitemap.ts**: Added all 18 blog posts with proper dates and slugs
3. **Created 2 complete blog posts** with 1500+ words each:
   - `web-sitesi-hizi-nasil-artirilir` - Web performance optimization
   - `core-web-vitals-rehberi` - Core Web Vitals guide

## 📋 Remaining Blog Posts (16)

### New Posts to Create (4 remaining)

1. **kobi-dijital-donusum-rehberi** - SME digital transformation guide
2. **teknik-seo-kontrol-listesi** - Technical SEO checklist
3. **yerel-seo-stratejileri** - Local SEO strategies for Google Maps
4. **fethiye-web-tasarim-rehberi** - Fethiye tourism web design guide

### Existing Posts to Extract (12)

From the old `[slug]/page.tsx` file (lines 413-4000), extract these posts:

1. **profesyonel-web-tasarim-nedir-kimler-icin-gerekli** (line ~413)
2. **kurumsal-web-sitesi-yaptirirken-yapilan-7-kritik-hata** (line ~733)
3. **seo-uyumlu-web-tasarimi** (line ~1004)
4. **sosyal-medya-yonetimi-marka-buyutme** (line ~1289)
5. **profesyonel-seo-hizmeti** (line ~1551)
6. **web-tasarim-fiyatlari** (line ~1849)
7. **2024-seo-trendleri** (line ~2148)
8. **minimalist-tasarim-yaklasimlari** (line ~2456)
9. **online-magaza-kurulumu** (line ~2765)
10. **guclu-marka-imaji-olusturma** (line ~3089)
11. **web-sitesi-guvenligi** (line ~3389)
12. **web-analitik-araclari** (line ~3701)

## 🔧 Blog Post Template Structure

Each blog post follows this exact structure:

```tsx
import { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import Link from "next/link";

const Footer = lazy(() => import("@/components/Footer"));

const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}>
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title: "[BLOG_TITLE] | WebCraft",
  description: "[BLOG_DESCRIPTION]",
  keywords: "[KEYWORDS]",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/blog/[SLUG]",
  },
  openGraph: {
    title: "[OG_TITLE]",
    description: "[OG_DESCRIPTION]",
    type: "article",
    locale: "tr_TR",
    publishedTime: "[PUBLISH_DATE]",
    authors: ["WebCraft Web Tasarım Uzmanı"],
  },
};

export default function [ComponentName]() {
  // Breadcrumb schema
  // BlogPosting schema
  // Return JSX with article structure
}
```

## 📝 Required Elements for Each Blog Post

### 1. Metadata Object

- **title**: 60 characters max, include keyword
- **description**: 150-160 characters, compelling and keyword-rich
- **keywords**: 10-15 relevant keywords
- **canonical**: Absolute path `/blog/{slug}`
- **openGraph**: Same as meta but optimized for social

### 2. Schema Markup

- **Breadcrumb Schema**: Shows navigation path
- **BlogPosting Schema**: For rich snippets

### 3. Article Content

- **Category badge**: Visual category indicator
- **H1 title**: Main title (50-60 characters)
- **Author + Date + Read time**: Meta information
- **Article body**: 1500-2000 words in Turkish
- **Internal links**: Link to `/hizmetler/` pages (at least 3-5 links)
- **HTML structure**: Proper `<h2>`, `<h3>`, `<ul>`, `<li>`, `<p>` tags
- **Call-to-action boxes**: Colored boxes promoting services

### 4. Components

- **Header**: Site navigation
- **RelatedBlogPosts**: Shows related posts (empty array for now)
- **Footer**: Lazy loaded for performance

## 🎯 Internal Linking Strategy

Each blog post must include contextual links to:

1. **Main service pages:**
   - `/hizmetler/web-tasarim`
   - `/hizmetler/dijital-pazarlama`

2. **Niche service pages:**
   - `/hizmetler/performans-odakli-web-tasarim` (for performance/speed posts)
   - `/hizmetler/kobi-web-tasarim` (for SME/business posts)
   - `/hizmetler/seo-uyumlu-web-sitesi` (for SEO posts)

3. **Local pages** (when relevant):
   - `/fethiye-web-tasarim-hizmetleri`
   - `/mugla-web-tasarim-seo-hizmetleri`

**Link Format:**

```html
<a
  href="/hizmetler/SERVICE-SLUG"
  class="text-[#f84525] hover:underline font-semibold"
  >ANCHOR TEXT</a
>
```

## ✍️ Content Requirements (New Posts)

### 1. Turkish Language

- Native Turkish writing
- Professional tone
- Technical terms explained simply

### 2. SEO Optimization

- Target keyword in H1, first paragraph, and subheadings
- Semantic keywords throughout
- Long-tail keyword variations

### 3. Content Structure

- **Introduction** (2-3 paragraphs)
- **2-3 main sections** with H2 headings
- **4-6 subsections** with H3 headings
- **Lists** (bullets and numbered)
- **Code examples** (when applicable)
- **Call-to-action boxes** (at least 2)
- **Conclusion** with action items

### 4. Word Count

- Minimum: 1500 words
- Target: 1800-2000 words
- Maximum: 2500 words

## 🚀 Quick Creation Script

For extracting existing posts from old file:

```bash
# Example for extracting one post
# 1. Read the specific line range from old file
# 2. Extract the content section
# 3. Create new file with template
# 4. Paste content into new file
```

## 📊 Completion Checklist

### New Posts (Priority):

- [x] web-sitesi-hizi-nasil-artirilir
- [x] core-web-vitals-rehberi
- [ ] kobi-dijital-donusum-rehberi
- [ ] teknik-seo-kontrol-listesi
- [ ] yerel-seo-stratejileri
- [ ] fethiye-web-tasarim-rehberi

### Existing Posts (Extract from old file):

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

### Final Tasks:

- [ ] Test all blog pages load correctly
- [ ] Verify internal links work
- [ ] Check sitemap generates correctly
- [ ] Validate schemas with Google Rich Results Test
- [ ] Test mobile responsiveness
- [ ] Verify lazy-loaded components work

## 🔗 Reference Files

- **Example Post 1**: `src/app/blog/web-sitesi-hizi-nasil-artirilir/page.tsx`
- **Example Post 2**: `src/app/blog/core-web-vitals-rehberi/page.tsx`
- **Sitemap**: `src/app/sitemap.ts` (updated with all 18 posts)
- **Old File Backup**: Original content was in `src/app/blog/[slug]/page.tsx` (now deleted)

## 💡 Tips for Fast Completion

1. **Use AI assistance**: Copy the template and ask AI to generate Turkish content
2. **Batch creation**: Create 3-4 posts at a time
3. **Copy-paste structure**: Use completed posts as templates
4. **Content reuse**: Extract existing posts' content directly
5. **Test incrementally**: Test each post as you create it

## 🎯 Success Criteria

Each blog post must have:

- ✅ Proper metadata (title, description, keywords)
- ✅ Breadcrumb and BlogPosting schemas
- ✅ 1500+ words of Turkish content
- ✅ 3-5 internal links to service pages
- ✅ Proper HTML structure (H2, H3, lists)
- ✅ Call-to-action boxes
- ✅ Working navigation (back to blog link)
- ✅ Lazy-loaded Footer component
- ✅ Mobile-responsive design

---

**Next Steps:**

1. Create remaining 4 new posts using the template
2. Extract 12 existing posts from old file
3. Test all blog pages
4. Deploy to production

**Estimated Time:**

- New posts: 2-3 hours (with AI assistance)
- Extract existing: 1-2 hours
- Testing: 30 minutes
- Total: 3.5-5.5 hours
