# WebCraft - AI Coding Agent Instructions

## Project Overview

Next.js 15 Turkish web design agency website with App Router, TypeScript, Tailwind CSS, and SEO focus. Uses Turbopack for development, deployed on Vercel.

## Architecture Essentials

### Content Structure

- **Turkish-first**: All content, routes, and metadata in Turkish (tr_TR locale)
- **Data-driven services**: Service pages generated from [src/data/services.ts](../src/data/services.ts) with interfaces for FAQ, features, process steps, and E-E-A-T metadata
- **Dynamic blog**: Blog posts defined in [src/app/sitemap.ts](../src/app/sitemap.ts) - **always update sitemap when adding blog posts**
- **SEO redirects**: Handled in [next.config.ts](../next.config.ts) - local SEO pages (fethiye, mugla) redirect to homepage/services

### Performance Patterns

- **Lazy loading below-the-fold**: All pages use `lazy()` + `Suspense` for components not visible on initial load (see [src/app/hizmetler/page.tsx](../src/app/hizmetler/page.tsx))
- **SectionSkeleton component**: Standard loading placeholder with spinner animation - copy pattern from existing pages
- **3D components**: Three.js/R3F components wrapped in `Suspense` with null fallback (see [src/components/ThreeCanvas.tsx](../src/components/ThreeCanvas.tsx))
- **Font optimization**: Montserrat loaded via `next/font/google` with swap, preload, and fallback config

### SEO Requirements

Every page must include:

1. **Metadata**: Turkish title/description with keywords from [src/app/layout.tsx](../src/app/layout.tsx) pattern
2. **JSON-LD schemas**: BreadcrumbList + relevant schema (Service, Organization, etc.) - see [src/app/hizmetler/page.tsx](../src/app/hizmetler/page.tsx)
3. **Canonical URLs**: Always set `alternates.canonical` with base `https://www.webcraft.tr`
4. **OpenGraph**: Turkish locale `tr_TR` with proper og:type

### Contact Form System

- **EmailJS integration**: Requires 3 env vars (`NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `TEMPLATE_ID`, `PUBLIC_KEY`) - see [EMAILJS_SETUP.md](../EMAILJS_SETUP.md)
- **Location tracking**: Automatically captures IP-based geolocation via [src/utils/locationUtils.ts](../src/utils/locationUtils.ts) on form submit
- **Graceful degradation**: Form submits even if location capture fails

## Developer Workflows

### Development

```bash
npm run dev       # Start Turbopack dev server
npm run build     # Production build
npm run lint      # ESLint check
```

### Adding New Pages

1. Create route in `src/app/[route-name]/page.tsx`
2. Add metadata with Turkish SEO content
3. Add JSON-LD breadcrumb schema
4. Update `src/app/sitemap.ts` with new route
5. Lazy load below-fold components with `SectionSkeleton`

### Adding Blog Posts

1. Add post object to `blogPosts` array in [src/app/sitemap.ts](../src/app/sitemap.ts) with slug and date
2. Create `src/app/blog/[slug]/page.tsx` (or verify dynamic route handles it)
3. **Internal Linking Strategy:**
   - Link from blog posts to relevant service pages using contextual anchor text
   - Example: `<a href="/hizmetler/web-tasarim">web tasarım</a>` in blog content
   - Link from service pages to related blog posts (see niche service pages for examples)
   - Bidirectional linking strengthens SEO and user navigation

**Recent Keyword-Optimized Blog Posts:**

- `web-sitesi-hizi-nasil-artirilir` → Links to performans-odakli-web-tasarim
- `core-web-vitals-rehberi` → Links to performans-odakli-web-tasarim
- `kobi-dijital-donusum-rehberi` → Links to kobi-web-tasarim
- `teknik-seo-kontrol-listesi` → Links to seo-uyumlu-web-sitesi
- `yerel-seo-stratejileri` → Links to local SEO pages
- `fethiye-web-tasarim-rehberi` → Links to fethiye-web-tasarim-hizmetleri

### Service Pages

Modify [src/data/services.ts](../src/data/services.ts) - each service has:

- `slug`, `title`, `description`, SEO metadata
- `whatSection`, `whySection` with benefits array
- `features`, `process` (numbered steps), `faqs`
- E-E-A-T fields: `experienceYears`, `projectCount`, `expertise`

**Main Services:** web-tasarim, dijital-pazarlama, mobil-uygulama, yazilim-gelistirme

**Niche Services (Keyword-Optimized):**

- `/hizmetler/performans-odakli-web-tasarim` - Performance-focused web design, Core Web Vitals
- `/hizmetler/kobi-web-tasarim` - SME-focused web design, affordable packages
- `/hizmetler/seo-uyumlu-web-sitesi` - SEO-optimized websites, technical SEO focus

**Local SEO Pages:**

- `/fethiye-web-tasarim-hizmetleri` - Fethiye-specific web design services, tourism sector focus
- `/mugla-web-tasarim-seo-hizmetleri` - Muğla-wide services (Fethiye, Bodrum, Marmaris)

## 🎯 SEO Strategy & Implementation

### Keyword Targeting Approach

**Primary Strategy:** Target mid-to-low competition niche keywords instead of high-competition general terms like "web tasarım"

**Niche Keyword Examples:**

- ✅ "performans odaklı web tasarım" (LOW competition)
- ✅ "KOBİ web tasarım" (MEDIUM competition)
- ✅ "SEO uyumlu web sitesi" (MEDIUM competition)
- ✅ "Fethiye web tasarım" (LOW competition - local)
- ❌ "web tasarım" (VERY HIGH competition - long-term goal only)

### Internal Linking Best Practices

1. **Service to Blog:** Each niche service page links to 3-4 related blog posts
2. **Blog to Service:** Blog posts include contextual links to relevant service pages
3. **Local to Global:** Local SEO pages link to main service pages and vice versa
4. **Related Services:** Use RelatedServices component on service detail pages

### Content Depth Requirements

- Service pages: 1000+ words with H2/H3 structure
- Blog posts: 1500+ words with actionable content
- Local SEO pages: 800+ words with geographic specificity
- All pages: Include FAQs, internal links, and CTAs

### Import Paths

- Always use `@/*` alias for src imports (configured in [tsconfig.json](../tsconfig.json))
- Example: `import ContactForm from "@/components/ContactForm"`

### Component Files

- Server components by default
- Add `"use client"` only when using hooks, events, or browser APIs
- Header/Footer used on every page layout

### Styling

- Tailwind utility classes only
- Custom fonts: `font-display` (Montserrat), `font-body` (Neue Plak W01 Light) - see [tailwind.config.js](../tailwind.config.js)
- Dark theme: gray-900 background, white/gray-100 text

### Analytics

- GTM in [src/app/layout.tsx](../src/app/layout.tsx) with inline script and `<GTMTracker>` component
- Google verification meta tag: `GqJRNNMTgz5SQ_k9i0bUdDCxTmcYKf85eNHov3fwiog`

## Key Files Reference

- [src/app/layout.tsx](../src/app/layout.tsx): Root metadata, GTM, font config
- [src/data/services.ts](../src/data/services.ts): Service content source of truth
- [next.config.ts](../next.config.ts): Image optimization, redirects, security headers
- [EMAILJS_SETUP.md](../EMAILJS_SETUP.md): Contact form configuration guide
- [LOCATION_IMPLEMENTATION_SUMMARY.md](../LOCATION_IMPLEMENTATION_SUMMARY.md): Location tracking docs
