# Blog Breadcrumb Migration Guide

## Completed Migrations ✅

### Pages Migrated:

1. **Homepage** - Added breadcrumb schema
2. **Services** - `/hizmetler` - Migrated with visual breadcrumb
3. **Dynamic Service Pages** - `/hizmetler/[slug]` - Migrated with visual breadcrumb
4. **Niche Service Pages** - All 3 pages migrated:
   - `/hizmetler/kobi-web-tasarim`
   - `/hizmetler/performans-odakli-web-tasarim`
   - `/hizmetler/seo-uyumlu-web-sitesi`
5. **Static Pages** - All migrated:
   - `/hakkimizda`
   - `/iletisim`
   - `/islerimiz`
   - `/sss`
   - `/sozluk`
   - `/kaynak-merkezi`
6. **Blog Posts - Started**:
   - `/blog/2024-seo-trendleri`

## Remaining Blog Posts to Migrate (17)

For each remaining blog post, follow this pattern:

### 1. Add imports:

```typescript
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";
import Breadcrumb from "@/components/Breadcrumb";
```

### 2. Replace inline breadcrumb with utility:

```typescript
// OLD:
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [...]
};

// NEW:
const { schema: breadcrumbSchema, items: breadcrumbItems } = generateBreadcrumb([
  { name: "Ana Sayfa", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Post Title", url: "/blog/post-slug" },
]);
```

### 3. Add visual breadcrumb component:

```typescript
<Header />
<Breadcrumb items={breadcrumbItems} />
<main>
```

## Blog Posts Needing Migration:

1. `/blog/core-web-vitals-rehberi`
2. `/blog/fethiye-web-tasarim-rehberi`
3. `/blog/guclu-marka-imaji-olusturma`
4. `/blog/kobi-dijital-donusum-rehberi`
5. `/blog/kurumsal-web-sitesi-yaptirirken-yapilan-7-kritik-hata`
6. `/blog/minimalist-tasarim-yaklasimlari`
7. `/blog/online-magaza-kurulumu`
8. `/blog/profesyonel-seo-hizmeti`
9. `/blog/profesyonel-web-tasarim-nedir-kimler-icin-gerekli`
10. `/blog/seo-uyumlu-web-tasarimi`
11. `/blog/sosyal-medya-yonetimi-marka-buyutme`
12. `/blog/teknik-seo-kontrol-listesi`
13. `/blog/web-analitik-araclari`
14. `/blog/web-sitesi-guvenligi`
15. `/blog/web-sitesi-hizi-nasil-artirilir`
16. `/blog/web-tasarim-fiyatlari`
17. `/blog/yerel-seo-stratejileri`

## Blog Listing Page:

- `/blog/page.tsx` - Needs breadcrumb

## Local SEO Pages Needing Migration:

1. `/fethiye-web-tasarim-hizmetleri`
2. `/mugla-web-tasarim-seo-hizmetleri`

## Comparison Pages Needing Migration:

1. `/karsilastirma/freelancer-vs-ajans`
2. `/karsilastirma/webcraft-vs-diy`

## Other Pages:

1. `/e-ticaret-web-tasarim`
2. `/en-iyi-web-tasarim-ajansi`
3. `/kurumsal-web-sitesi`
4. `/fethiye-web-tasarim`
5. `/fethiye-web-tasarim-hizmeti`
6. `/mugla-seo`
7. `/mugla-seo-ajansi`
8. Legal pages: `/gizlilik-politikasi`, `/kullanim-sartlari`, `/cerez-politikasi`

## Benefits of Completed Migration:

- ✅ Visual breadcrumb navigation (vertical, left-bottom)
- ✅ Consistent red color (`text-red-500`)
- ✅ Proper SEO schema for all pages
- ✅ Maintainable code using utility function
- ✅ Better UX with vertical breadcrumb navigation
