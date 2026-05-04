# WebCraft Implementation Roadmap

## Verification Summary — SEO Report Claims

Before defining the roadmap, all claims from the SEO report (`seo_report.md`) and the prior technical audit were verified against the actual codebase. Here are the results:

| #   | Claim                                                                    | Verdict            | Evidence                                                                                                                                                                                          |
| --- | ------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Homepage & `/en-iyi-web-tasarim-ajansi` cannibalize "web tasarım ajansı" | **TRUE**           | Both pages have "Web Tasarım Ajansı" in title. Homepage H1: "Profesyonel Web Tasarım Ajansı". Landing page title: "Web Tasarım Ajansı Nasıl Seçilir? 7 Kriter"                                    |
| 2   | No page targets "SEO ajansı" keyword                                     | **TRUE**           | No `/seo-ajansi` route. `/hizmetler/seo-hizmeti` targets "SEO Hizmeti" only                                                                                                                       |
| 3   | No page targets "SEO uzmanı" keyword                                     | **TRUE**           | Zero results across codebase                                                                                                                                                                      |
| 4   | Schema markup is not systematic                                          | **PARTIALLY TRUE** | FAQPage & Service schemas exist on dynamic service pages. LocalBusiness IS defined in `layout.tsx`. But Organization schema is not standalone on homepage, and some pages lack appropriate schema |
| 5   | Service page content is ~500-800 words                                   | **FALSE**          | Rendered pages with UI, FAQ, features reach 700-1200+ words. Blog posts are 1500-2000 words. But still below the 2000-3500 word competitor benchmark                                              |
| 6   | Footer anchor texts are generic                                          | **TRUE**           | Uses "Çalışmalarımız", "Hizmetlerimiz", "Hakkımızda", etc.                                                                                                                                        |
| 7   | Blog posts don't link to services                                        | **FALSE**          | Blog posts DO systematically link to relevant service pages with keyword anchor text                                                                                                              |
| 8   | `/kurumsal-web-sitesi` has insufficient content                          | **FALSE**          | Page has Hero, stats, "Why Enterprise?" section, FAQ, and multiple content blocks                                                                                                                 |
| 9   | Hero CTA is "Ücretsiz Analiz Al"                                         | **TRUE**           | Confirmed in `HeroSection.tsx` line 76                                                                                                                                                            |
| 10  | H1 on `/hizmetler/web-tasarim` is too short                              | **TRUE**           | H1 is just "Web Tasarım" — misses keyword opportunities                                                                                                                                           |
| 11  | Meta descriptions are informational, not sales-focused                   | **TRUE**           | Descriptions describe services but lack CTAs or urgency                                                                                                                                           |
| 12  | No dedicated pricing page exists                                         | **TRUE**           | Only a blog post about pricing exists                                                                                                                                                             |
| 13  | `/tesekkurler` is indexable                                              | **FALSE**          | Has `robots: { index: false, follow: false }` — correctly hidden                                                                                                                                  |

### Additional Technical Findings (From Code Audit)

| #   | Issue                                                                            | Status                           |
| --- | -------------------------------------------------------------------------------- | -------------------------------- |
| T1  | No `error.tsx` or `global-error.tsx` — unhandled errors show generic page        | **CONFIRMED**                    |
| T2  | Contact form has no CAPTCHA, honeypot, or rate limiting                          | **CONFIRMED**                    |
| T3  | 13 `<img>` tags should be `next/image` (5 project detail pages)                  | **CONFIRMED** (17 lint warnings) |
| T4  | `SectionSkeleton` uses `bg-gray-100` on dark `#181716` background — visual flash | **CONFIRMED**                    |
| T5  | Missing `aria-expanded` on Header menu button                                    | **CONFIRMED**                    |
| T6  | React 18.3 used with Next.js 15.3 (designed for React 19)                        | **CONFIRMED**                    |
| T7  | Hero animated text has no explicit `min-height` — potential CLS                  | **CONFIRMED**                    |
| T8  | Build produces 0 errors, 17 warnings — all `<img>` related                       | **CONFIRMED**                    |

---

## Confirmed Issues to Address

Based on verification, these are the **confirmed, actionable issues** organized by domain:

### Security / Stability

- [x] Add spam protection (honeypot + rate limit) to contact form
- [x] Create `error.tsx` error boundary

### Performance / Technical

- [x] Replace `<img>` with `next/image` in project detail pages (5 pages, 13 instances)
- [x] Fix `SectionSkeleton` bg color to match dark theme
- [x] Add `aria-expanded` to Header menu button
- [x] Fix CLS risk: add `min-height` to animated hero text container
- [ ] Upgrade React 18 → 19

### SEO — On-Page & Architecture

- [ ] Resolve cannibalization: 301 redirect `/en-iyi-web-tasarim-ajansi` → `/` (or differentiate intent)
- [ ] Create `/seo-ajansi` landing page (new keyword target)
- [ ] Create `/seo-uzmani` landing page (new keyword target)
- [ ] Rename `/kurumsal-web-sitesi` → `/kurumsal-web-tasarim` + 301 redirect
- [x] Improve service page H1s (e.g., "Web Tasarım" → "Profesyonel Web Tasarım Hizmeti")
- [x] Rewrite meta descriptions to be sales-focused with CTAs
- [x] Improve footer anchor texts to be keyword-rich
- [ ] Create dedicated pricing page or section
- [ ] Deepen homepage content (target 2500+ words)

### SEO — Schema & Structured Data

- [x] Add standalone Organization schema on homepage
- [x] Add Article + Author schema to blog posts
- [ ] Audit and ensure Service schema on all service pages

### SEO — Internal Linking

- [ ] Build proper silo structure with contextual cross-links
- [ ] Link new pages (/seo-ajansi, /seo-uzmani) into navigation + footer + existing content

---

## Implementation Phases

### SEO Timing Principle

Google's crawl, re-index, and re-rank cycle means changes take **2-6 weeks** to fully reflect. Making too many structural changes simultaneously can:

1. Cause temporary ranking drops as Google reassesses page relationships
2. Make it impossible to attribute ranking changes to specific actions
3. Trigger a "sandbox" effect if Google perceives the site as dramatically different

**Strategy:** Group changes into **2-week deployment windows** with monitoring gaps between structural SEO changes. Technical fixes can be batched freely since they don't affect content signals.

---

### Phase 1 — Technical Hardening & Quick Fixes

**Scope:** Security, accessibility, performance fixes. Zero SEO risk — these are improvements Google rewards immediately.

**Tasks:**

1. **Create `src/app/error.tsx`** — Branded error boundary with navigation and CTA
2. **Add honeypot field + client-side rate limiting to `ContactForm.tsx`**
   - Hidden honeypot input that bots fill but humans don't
   - Submission cooldown (e.g., 30-second minimum between submissions)
   - Timestamp validation (form must be open 3+ seconds before submit)
3. **Replace `<img>` with `next/image`** in:
   - `src/app/islerimiz/atlantis/page.tsx`
   - `src/app/islerimiz/fluenta-ai/page.tsx`
   - `src/app/islerimiz/mentoria/page.tsx`
   - `src/app/islerimiz/skoll-beauty/page.tsx` (8 instances)
   - `src/app/islerimiz/yatrehberi/page.tsx`
4. **Fix `SectionSkeleton`** bg color in `src/app/page.tsx` — change `bg-gray-100` → `bg-gray-800`
5. **Add `aria-expanded={menuOpen}`** to Header menu toggle button
6. **Fix CLS risk** — Add `min-height` to hero animated text container in `HeroSection.tsx`

**Estimated effort:** Small-Medium
**SEO impact:** Positive (Core Web Vitals, accessibility)
**Risk:** None

---

### Phase 2 — On-Page SEO Optimization (Existing Pages)

**Scope:** Improve H1 tags, meta descriptions, and footer anchor texts on existing pages. No new pages, no URL changes — safe adjustments.

**Wait:** Deploy at least **3 days** after Phase 1 to separate changes in crawl logs.

**Tasks:**

1. **Improve service H1 titles in `src/data/services.ts`:**
   - `"Web Tasarım"` → `"Profesyonel Web Tasarım Hizmeti"`
   - `"Dijital Pazarlama"` → `"Dijital Pazarlama Hizmeti"`
   - `"SEO Hizmeti"` → keep as-is (already good)
   - Review and improve all service titles similarly
2. **Rewrite meta descriptions** across key pages to include CTAs:
   - Homepage, service pages, about page, contact page
   - Pattern: `[Value prop] + [Differentiator] + [CTA]. Hemen [action]!`
3. **Improve footer anchor texts** in `src/components/Footer.tsx`:
   - `"Çalışmalarımız"` → `"Web Tasarım Projelerimiz"`
   - `"Hizmetlerimiz"` → `"Web Tasarım Hizmetleri"`
   - Keep some generic for natural distribution
4. **Add standalone Organization schema** to homepage `src/app/page.tsx`
5. **Add Article + Author schema** to blog post template (`src/app/blog/[slug]/page.tsx` or individual posts)

**Estimated effort:** Medium
**SEO impact:** Medium-High (improved click-through rates from SERPs)
**Risk:** Low — Google treats these as routine content updates

---

### Phase 3 — Cannibalization Fix + URL Restructuring

**Scope:** Resolve the homepage vs. landing page keyword conflict. This is a structural change — deploy it alone and monitor for 2 weeks.

**Wait:** Deploy at least **1 week** after Phase 2.

**Tasks:**

1. **Decide the strategy for `/en-iyi-web-tasarim-ajansi`:**
   - **Option A (Recommended):** Re-focus the page to target a different intent: "web tasarım ajansı nasıl seçilir" (informational/guide), and remove "web tasarım ajansı" from its title/H1. This preserves the existing indexed page while eliminating cannibalization.
   - **Option B:** 301 redirect `/en-iyi-web-tasarim-ajansi` → `/`. Simpler but loses an indexed page.
2. **Implement chosen strategy:**
   - If Option A: Rewrite title/H1/description to differentiate intent
   - If Option B: Add redirect to `next.config.ts` and remove the page
3. **Rename `/kurumsal-web-sitesi` → `/kurumsal-web-tasarim`:**
   - Create new route at `src/app/kurumsal-web-tasarim/page.tsx`
   - Add 301 redirect in `next.config.ts`: `/kurumsal-web-sitesi` → `/kurumsal-web-tasarim`
   - Update all internal links (footer, service pages, blog posts) to new URL
   - Update `src/app/sitemap.ts`
4. **Update sitemap** to reflect all URL changes

**Estimated effort:** Medium
**SEO impact:** High (stops Google from splitting ranking signals between competing pages)
**Risk:** Medium — URL changes and redirects need careful monitoring. Expect 2-4 weeks for Google to fully re-evaluate.

---

### Phase 4 — New Landing Page: `/seo-ajansi`

**Scope:** Create a high-quality, keyword-optimized page targeting "SEO ajansı". This is net-new content — Google welcomes new pages.

**Wait:** Deploy at least **1 week** after Phase 3 (let redirects settle).

**Tasks:**

1. **Create `src/app/seo-ajansi/page.tsx`:**
   - Target keyword: "SEO ajansı"
   - H1: "SEO Ajansı: Organik Trafiğinizi Artırıyoruz"
   - Content: 2500-3000 words
   - Sections: What is an SEO agency, why WebCraft, service scope, case studies, pricing range, FAQ
   - Include FAQPage schema, BreadcrumbList schema, Service schema
   - Full metadata: title, description, canonical, OpenGraph, Twitter
2. **Add internal links TO the new page:**
   - From `/hizmetler/seo-hizmeti` → link with anchor "SEO ajansı"
   - From homepage → contextual link
   - From 2-3 relevant blog posts → contextual link with varied anchor texts
   - Add to footer navigation
3. **Add internal links FROM the new page:**
   - To `/hizmetler/seo-hizmeti`, `/hizmetler/seo-uyumlu-web-sitesi`
   - To relevant blog posts about SEO
4. **Update `src/app/sitemap.ts`** with the new route
5. **Verify build** — ensure no errors

**Estimated effort:** Large (content-heavy page)
**SEO impact:** Very High (fills a keyword gap — currently zero targeting for this term)
**Risk:** Low — new content doesn't disrupt existing rankings

---

### Phase 5 — New Landing Page: `/seo-uzmani` + Homepage Content Enrichment

**Scope:** Create the SEO expert page and deepen homepage content.

**Wait:** Deploy at least **1 week** after Phase 4.

**Tasks:**

1. **Create `src/app/seo-uzmani/page.tsx`:**
   - Target keyword: "SEO uzmanı"
   - H1: "SEO Uzmanı Desteği ile Sitenizi Zirveye Taşıyın"
   - Content: 2000-2500 words
   - Sections: What does an SEO expert do, WebCraft expert team (bios), what to expect, expert vs agency difference, pricing, FAQ
   - Include E-E-A-T signals: expert names, qualifications, LinkedIn links
   - Full schema markup (FAQPage, BreadcrumbList, Person schema for experts)
2. **Build internal link network:**
   - `/seo-ajansi` ↔ `/seo-uzmani` (bidirectional)
   - From `/hizmetler/seo-hizmeti` → anchor "SEO uzmanlarımız"
   - Add to footer navigation under "Hizmetlerimiz" section
3. **Enrich homepage content:**
   - Add "Web Tasarım Ajansı Nedir?" informational section
   - Add "Çalışma Sürecimiz" process section with more detail
   - Add case study block with real metrics
   - Add pricing overview section (anchor to pricing blog or future pricing page)
   - Target: bring homepage to 2000+ words without hurting UX
4. **Update `src/app/sitemap.ts`**
5. **Verify build**

**Estimated effort:** Large
**SEO impact:** High
**Risk:** Low-Medium (homepage content changes need to maintain good UX)

---

### Phase 6 — React 19 Upgrade + Final Polish

**Scope:** Framework upgrade and remaining cleanup.

**Wait:** Deploy at least **2 weeks** after Phase 5 (let new pages index and stabilize).

**Tasks:**

1. **Upgrade React 18 → 19:**
   - Update `package.json`: `react` and `react-dom` to `^19.0.0`
   - Update `@types/react` and `@types/react-dom` to React 19 types
   - Run `npm install`
   - Fix any breaking changes (React 19 removes some deprecated APIs)
   - Test all interactive components (Header, ContactForm, HeroSection, etc.)
   - Verify full build passes
2. **Clean up repo root:**
   - Discuss with team: remove stale markdown files (AI_VISIBILITY_MANUAL_TASKS.md, BREADCRUMB_FIXES_COMPLETE.md, etc.)
   - Move CSV/GSC data files to a gitignored analytics folder
3. **Create dedicated pricing section or page** (if not already addressed by content team)
4. **Full regression test:**
   - `npm run lint` — zero warnings
   - `npm run build` — zero errors
   - Spot-check 5+ pages for correct metadata, schemas, and visual rendering

**Estimated effort:** Medium
**SEO impact:** Low-Medium (React 19 gives minor performance improvements)
**Risk:** Medium (framework upgrade needs testing)

---

## Phase Summary

| Phase | Focus                                         | SEO Risk   | Deploy Gap After       |
| ----- | --------------------------------------------- | ---------- | ---------------------- |
| 1     | Technical fixes (security, a11y, perf)        | None       | —                      |
| 2     | On-page SEO (H1, meta, schema, footer)        | Low        | 3+ days after Phase 1  |
| 3     | Cannibalization fix + URL rename              | Medium     | 1+ week after Phase 2  |
| 4     | New page: `/seo-ajansi`                       | Low        | 1+ week after Phase 3  |
| 5     | New page: `/seo-uzmani` + homepage enrichment | Low-Medium | 1+ week after Phase 4  |
| 6     | React 19 upgrade + cleanup                    | Medium     | 2+ weeks after Phase 5 |

**Total estimated timeline:** 6-8 weeks (with monitoring gaps between phases)

---

## Out of Scope (Manual / Non-Code Work)

These items from the SEO report require manual business actions, not code changes:

- Backlink outreach & acquisition campaigns
- Google Business Profile optimization
- Konuk yazılar (guest posts) on external sites
- YouTube channel creation
- A/B testing CTAs (requires analytics setup first)
- "Best of" list outreach to external bloggers
- Digital PR and press releases
- Ongoing blog content calendar (content team responsibility)

These should be tracked in a separate marketing/SEO action plan.
