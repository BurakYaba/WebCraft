# SEO Issues — WebCraft (webcraft.tr)

_Analysis Date: March 7, 2026_

---

## 🔴 Critical Issues

### 1. GA4 tracking is broken — JavaScript syntax bug

**File:** `src/app/layout.tsx` (GA4 `<Script>` block)

```js
// ❌ Current — creates an accidental global variable named "Layer"
Layer = window.dataLayer || [];

// ✅ Fix
window.dataLayer = window.dataLayer || [];
```

This completely breaks GA4 `gtag()` initialization. All conversion tracking (Google Ads tag `AW-17976612124`) is also affected.

---

### 2. Double analytics firing (GTM + direct GA4)

**File:** `src/app/layout.tsx`  
GTM (`GTM-KXXC9TD3`) is loaded in `<head>` AND a raw GA4 `<Script>` (`G-TYXDJVMSP3`) is added separately in `<body>`. If GA4 is configured inside GTM (standard setup), every pageview is counted **twice**. Remove the direct GA4 `<Script>` block and manage everything through GTM only.

---

### 3. `public/robots.txt` overrides `src/app/robots.ts` — one is effectively dead

**Files:** `public/robots.txt`, `src/app/robots.ts`  
In Next.js App Router, a static `public/robots.txt` takes precedence over the `app/robots.ts` route handler. The `robots.ts` file (which allows AI crawlers: GPTBot, ClaudeBot, PerplexityBot, etc.) is **never served**. Choose one approach, migrate all rules to it, and delete the other.

---

### 4. Aggressive `Cache-Control` applied to HTML pages

**File:** `next.config.ts`  
The `source: "/(.*)"` header pattern matches HTML pages and sets `Cache-Control: public, max-age=31536000, immutable`. HTML pages should never be cached immutably — this prevents content updates from propagating to users. Change the HTML cache policy to `no-cache, no-store, must-revalidate` and keep `immutable` only for the static asset pattern.

---

### 5. `noindex` page listed in the sitemap + invalid robots string

**Files:** `src/app/tesekkurler/page.tsx`, `src/app/sitemap.ts`

- `tesekkurler` correctly sets `robots: "noindex, nofollow"` but is still included in the sitemap — a direct contradiction that confuses Googlebot.
- The `robots` value is a **string**, but the Next.js Metadata API requires an **object**:

```ts
// ❌ Current
robots: "noindex, nofollow"

// ✅ Fix
robots: { index: false, follow: false }
```

Remove `/tesekkurler` from the sitemap.

---

## 🟠 High Priority Issues

### 6. Homepage exports a fake Google verification code

**File:** `src/app/page.tsx`

```ts
verification: {
  google: "your-google-verification-code";
}
```

This placeholder overrides the real token set in `layout.tsx` specifically for the homepage. Remove the entire `verification` block from `page.tsx`.

---

### 7. WebSite schema `SearchAction` targets a non-existent `/search` route

**File:** `src/app/layout.tsx` (WebSite JSON-LD)  
The `potentialAction` SearchAction points to `https://www.webcraft.tr/search?q={search_term_string}` but no `/search` page exists. Remove the `potentialAction` block or build the route. A broken SearchAction causes Google's Rich Results Test to flag the schema as invalid.

---

### 8. Duplicate `google-site-verification` meta tag

**File:** `src/app/layout.tsx`  
`metadata.verification.google` (auto-rendered by Next.js as a `<meta>` tag) AND a manually added `<meta name="google-site-verification">` in `<head>` produce a **duplicate tag** on every page. Remove the manual `<meta>` tag.

---

### 9. OG image filename contains a URL-unsafe character

**File:** `public/bento/web-tasarım.jpg` (referenced across multiple pages)  
The Turkish character `ı` in `web-tasarım.jpg` is not URL-safe. This can silently fail in some Open Graph parsers (Facebook, LinkedIn, Slack). Rename the file to `web-tasarim.jpg` and update all references.

---

### 10. Major pages missing OG images

**Multiple files**  
The following pages don't specify `openGraph.images`, falling back to `/webcraftLogo.png` (a logo, not a social card). Add a 1200×630px topic-specific image to each:

- `src/app/hakkimizda/page.tsx`
- `src/app/iletisim/page.tsx`
- `src/app/blog/page.tsx`
- `src/app/sss/page.tsx`
- `src/app/fethiye-web-tasarim-hizmetleri/page.tsx`
- `src/app/mugla-web-tasarim-seo-hizmetleri/page.tsx`
- `src/app/karsilastirma/` (all pages)
- `src/app/kaynak-merkezi/page.tsx`
- `src/app/sozluk/page.tsx`

---

### 11. All blog posts share one OG image

**All files in `src/app/blog/*/page.tsx`**  
Every blog post uses `/bento/web-tasarım.jpg`. Social sharing platforms (LinkedIn, Twitter, WhatsApp) will show the same thumbnail regardless of post topic. Assign unique 1200×630px cover images per post and update both `openGraph.images` and `BlogPosting.image` in each post's schema.

---

## 🟡 Medium Priority Issues

### 12. Blog index title missing brand suffix and year

**File:** `src/app/blog/page.tsx`  
Current title: `"Web Tasarım Blog | SEO ve Dijital Pazarlama Rehberi"`  
Missing `| WebCraft` suffix (breaks the `%s | WebCraft` template) and a year for freshness signals.

---

### 13. Core Web Vitals blog post title references stale year (2025)

**File:** `src/app/blog/core-web-vitals-rehberi/page.tsx`  
Title says `"Core Web Vitals Rehberi 2025: ..."` but the current year is 2026. Update to 2026 for content freshness signals.

---

### 14. `AggregateRating.reviewCount` is a string, not a number

**Files:** `src/app/page.tsx`, `src/app/hakkimizda/page.tsx`

```json
// ❌ Current
"reviewCount": "50"

// ✅ Fix
"reviewCount": 50
```

Google's Rich Results Test flags this as invalid schema, risking loss of star rating rich results.

---

### 15. `BlogPosting` schema missing `dateModified`

**All files in `src/app/blog/*/page.tsx`**  
Blog schemas include `datePublished` but no `dateModified`. Google recommends both fields. Without `dateModified`, freshness signals are absent when content is updated.

---

### 16. Inconsistent `author`, `creator`, `publisher` metadata across pages

**Files:** `src/app/hakkimizda/page.tsx`, `src/app/iletisim/page.tsx`, `src/app/blog/page.tsx`  
Several pages omit `authors`, `creator`, and `publisher` metadata fields that are present in other pages. This creates weak entity association signals for the WebCraft brand.

---

### 17. Service pages use OG `type: "website"` instead of a specific type

**File:** `src/app/hizmetler/[slug]/page.tsx` and niche service pages  
Service pages set `openGraph.type: "website"`. These are business/service content pages — using a more specific type or at minimum verifying `"website"` is intentional would improve OG accuracy.

---

## ✅ What's Correct

- Canonical URLs set correctly on every page with absolute base URL
- JSON-LD structured data is comprehensive: `LocalBusiness`, `WebSite`, `BreadcrumbList`, `BlogPosting`, `FAQPage`, `Service`, `ContactPage`, `AggregateRating`
- Breadcrumbs present on all pages with matching `BreadcrumbList` schema
- `lang="tr"` on `<html>` and `locale: "tr_TR"` in OG is consistent
- Static generation (SSG) via `generateStaticParams()` on service pages
- Niche keyword strategy (local SEO, KOBİ, performans) targeting mid-low competition terms
- Security headers: HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- Font loading with `display: swap` and `preload: true`
- Lazy loading with `Suspense` on below-fold components
- `not-found.tsx` correctly sets `noindex`
- PWA manifest present
- Preconnect to fonts.googleapis.com and GTM
- WebP/AVIF image formats enabled in `next.config.ts`
- 30-day image cache TTL
- `poweredByHeader: false` removes the `X-Powered-By` fingerprint header
- AI crawlers (GPTBot, PerplexityBot, ClaudeBot) explicitly allowed

---

## Priority Summary

| #   | Issue                                             | Severity    | Effort |
| --- | ------------------------------------------------- | ----------- | ------ |
| 1   | GA4 `dataLayer` syntax bug                        | 🔴 Critical | Low    |
| 2   | Double GA4 + GTM firing                           | 🔴 Critical | Low    |
| 3   | `robots.ts` dead due to `public/robots.txt`       | 🔴 Critical | Low    |
| 4   | HTML pages cached immutably                       | 🔴 Critical | Low    |
| 5   | `noindex` page in sitemap + string robots value   | 🔴 Critical | Low    |
| 6   | Fake verification code on homepage                | 🟠 High     | Low    |
| 7   | SearchAction targets non-existent `/search` route | 🟠 High     | Low    |
| 8   | Duplicate google-site-verification tag            | 🟠 High     | Low    |
| 9   | URL-unsafe character in OG image filename         | 🟠 High     | Medium |
| 10  | Missing OG images on major pages                  | 🟠 High     | Medium |
| 11  | All blog posts share one OG image                 | 🟠 High     | High   |
| 12  | Blog index title missing brand suffix             | 🟡 Medium   | Low    |
| 13  | Core Web Vitals post title year is 2025           | 🟡 Medium   | Low    |
| 14  | `reviewCount` is string not number                | 🟡 Medium   | Low    |
| 15  | `BlogPosting` missing `dateModified`              | 🟡 Medium   | Low    |
| 16  | Inconsistent author/creator/publisher metadata    | 🟡 Medium   | Medium |
| 17  | Service OG type is generic `"website"`            | 🟡 Medium   | Low    |
