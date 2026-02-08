# AI Visibility Implementation - Manual Tasks

## ✅ Completed (Code Implementation)

I've successfully implemented the following AI visibility improvements:

### 1. Enhanced llms.txt ✅

- **Location**: `public/llms.txt`
- **What was added**:
  - Comprehensive FAQ section (20+ questions with detailed answers)
  - 4 project showcases with metrics (Fluenta AI: 3000+ users, Mentoria: 85% match rate, etc.)
  - Pricing tables for all services (Web Design: 15K-100K+, SEO: 5K-15K/month, etc.)
  - Technologies used (Next.js 15, React 19, TypeScript, etc.)
  - Service descriptions with benefits
  - Contact information and business hours
  - 8 reasons to choose WebCraft
- **File size**: Expanded from 40 lines to 300+ lines
- **AI Impact**: HIGH - AI models will now have rich, structured data to cite when recommending WebCraft

### 2. AI Crawler Permissions ✅

- **Location**: `src/app/robots.ts`
- **What was added**:
  - Explicit Allow rules for GPTBot (ChatGPT)
  - Claude-Web and ClaudeBot (Claude AI)
  - PerplexityBot (Perplexity AI)
  - anthropic-ai, Omgilibot, Google-Extended
- **AI Impact**: HIGH - Signals explicit permission to AI companies to crawl and index your site

### 3. API Endpoints for Structured Data ✅

- **Location**: `src/app/api/services/route.ts` and `src/app/api/projects/route.ts`
- **What was added**:
  - `/api/services` - Returns all services in JSON format with FAQs, features, process, benefits
  - `/api/projects` - Returns all 4 projects with metrics, technologies, results
- **Access URLs**:
  - https://www.webcraft.tr/api/services
  - https://www.webcraft.tr/api/projects
- **AI Impact**: MEDIUM - AI models can programmatically access structured data
- **Test**: After deployment, visit these URLs to see JSON responses

### 4. AI Plugin Manifest ✅

- **Location**: `public/.well-known/ai-plugin.json`
- **What was added**: ChatGPT plugin manifest for potential direct integration
- **Access URL**: https://www.webcraft.tr/.well-known/ai-plugin.json
- **AI Impact**: LONG-TERM - Future ChatGPT plugin support

### 5. OpenAPI Specification ✅

- **Location**: `public/openapi.json`
- **What was added**: OpenAPI 3.0 spec describing your API endpoints
- **AI Impact**: MEDIUM - AI models can understand your API structure

### 6. Build Verification ✅

- **Status**: ✓ Build successful, all files compile correctly
- **Result**: 51 static pages generated, no errors
- **Warnings**: Only existing blog image warnings (non-blocking)

---

## 📋 Manual Tasks (What YOU Need to Do)

### HIGH PRIORITY (This Week)

#### 1. Deploy Changes to Production 🚀

**Timeline**: Immediate
**Actions**:

```bash
cd "c:\Repos\webcraft 2"
git add .
git commit -m "feat: AI visibility improvements - enhanced llms.txt, AI crawler permissions, API endpoints"
git push
```

- **Why**: All code changes need to be deployed for AI models to access them
- **Verification**: After deployment, check:
  - https://www.webcraft.tr/llms.txt (should show enhanced content)
  - https://www.webcraft.tr/robots.txt (should show AI crawler permissions)
  - https://www.webcraft.tr/api/services (should return JSON)
  - https://www.webcraft.tr/api/projects (should return JSON)

#### 2. Submit Sitemap to AI Crawlers 🗺️

**Timeline**: Within 24 hours
**Actions**:

- **OpenAI (ChatGPT)**:
  - Visit: https://platform.openai.com/docs/plugins/introduction
  - Submit your sitemap URL: https://www.webcraft.tr/sitemap.xml
  - Submit llms.txt: https://www.webcraft.tr/llms.txt
- **Anthropic (Claude)**:
  - Email: crawling@anthropic.com
  - Subject: "Request to crawl WebCraft website"
  - Body: "Please crawl https://www.webcraft.tr for Claude AI. We have structured data at /llms.txt and explicit permission in robots.txt"
- **Perplexity**:
  - Visit: https://www.perplexity.ai/contact
  - Request crawling of https://www.webcraft.tr

**Why**: Proactively notifying AI companies ensures faster indexing

#### 3. Add FAQPage Schema to /sss Page 📄

**Timeline**: Within 48 hours
**File to edit**: `src/app/sss/page.tsx`
**What to add**: JSON-LD FAQPage schema

**Code to add** (before closing `<div>` in the main component):

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Web sitesi tasarımı ne kadar sürer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Basit kurumsal siteler 2-4 hafta, e-ticaret siteleri 4-8 hafta, özel yazılım projeleri 2-6 ay sürmektedir.",
          },
        },
        // Add all other FAQs from your /sss page here
      ],
    }),
  }}
/>
```

**Why**: AI models prefer structured FAQPage schema over plain HTML Q&A
**Impact**: HIGH - Makes your FAQs more discoverable and citable

### MEDIUM PRIORITY (This Month)

#### 4. Get Listed on Third-Party Platforms 🏆

**Timeline**: Next 2 weeks
**Actions**:

- **Clutch.co** (https://clutch.co)
  1. Create company profile
  2. Add WebCraft services, projects, team info
  3. Request client reviews
  4. **Why**: Clutch is highly trusted by AI models for agency recommendations
- **GoodFirms** (https://www.goodfirms.co)
  1. Register WebCraft
  2. Upload portfolio (Fluenta AI, Mentoria, etc.)
  3. Get verified reviews
  4. **Why**: Another trusted directory for B2B services
- **DesignRush** (https://www.designrush.com)
  1. Submit agency profile
  2. Showcase case studies
  3. **Why**: Design-focused directory for creative agencies

**Expected Result**: External citations and backlinks that AI models can verify

#### 5. Create Resource Center Page 📚

**Timeline**: Next 2-3 weeks
**File to create**: `src/app/kaynak-merkezi/page.tsx`
**Content needed**:

- **Web Design 101 Guide** (2000+ words)
  - What is professional web design?
  - Why businesses need websites
  - Web design vs web development
  - How to choose a web design agency
- **SEO Checklist** (1500+ words)
  - Technical SEO checklist (20+ items)
  - On-page SEO best practices
  - Off-page SEO strategies
  - Local SEO tips
- **Digital Marketing Handbook** (2500+ words)
  - Social media marketing guide
  - Content marketing strategies
  - Email marketing best practices
  - Google Ads fundamentals

**Why**: Long-form authoritative content is heavily cited by AI models
**Format**: Use H2/H3 headings, bullet lists, tables - AI-friendly formats

#### 6. Build Glossary Page 📖

**Timeline**: Next 2-3 weeks
**File to create**: `src/app/sozluk/page.tsx`
**Content needed**: Define 50+ technical terms

**Examples**:

- **Responsive Design**: Web sitesinin tüm cihazlarda (masaüstü, tablet, mobil) otomatik olarak uyum sağlayarak mükemmel görünmesi
- **SEO (Search Engine Optimization)**: Arama motoru optimizasyonu, web sitenizin Google gibi arama motorlarında üst sıralarda çıkmasını sağlayan teknikler
- **Core Web Vitals**: Google'ın kullanıcı deneyimini ölçmek için kullandığı performans metrikleri (LCP, FID, CLS)
- [Add 47+ more terms]

**Why**: AI models love definitional content for explaining concepts
**Format**: Alphabetical order, each term with 2-3 sentence definition

#### 7. Publish Detailed Case Studies as Blog Posts 📊

**Timeline**: Next month (1 per week)
**Files to create**:

- `src/app/blog/vaka-calismasi-fluenta-ai/page.tsx`
- `src/app/blog/vaka-calismasi-mentoria/page.tsx`
- `src/app/blog/vaka-calismasi-atlantis/page.tsx`
- `src/app/blog/vaka-calismasi-skoll-beauty/page.tsx`

**Each case study should include**:

1. **Client Background** (200 words)
2. **Challenge** (300 words) - What problems did they face?
3. **Solution** (500 words) - What did WebCraft do? Technologies used?
4. **Implementation** (400 words) - Step-by-step process
5. **Results** (300 words) - Metrics, before/after data
6. **Testimonial** (100 words) - Client quote
7. **Screenshots** - Before/after images, dashboards

**Why**: AI models cite case studies when recommending services
**Total**: 1700+ words per case study

### LONG-TERM (Next 3 Months)

#### 8. Create Comparison Pages 🔀

**Timeline**: Month 2-3
**Pages to create**:

- `/karsilastirma/webcraft-vs-diy-builders` (WebCraft vs Wix/Squarespace)
  - Feature comparison table
  - Price comparison
  - Pros/cons of each
  - When to choose professional agency vs DIY
- `/karsilastirma/freelancer-vs-ajans` (Freelancer vs Agency)
  - Reliability, scalability, support
  - Price differences
  - Project complexity handling
- `/karsilastirma/web-platformlari` (WordPress vs Next.js vs Shopify)
  - Technical comparison
  - Performance benchmarks
  - Use case recommendations

**Why**: AI models cite comparison pages when users ask "X vs Y"
**Format**: Tables, side-by-side feature lists, pros/cons

#### 9. Guest Posting & Backlink Strategy 🔗

**Timeline**: Ongoing (Month 2-3)
**Actions**:

- **Medium.com**:
  - Publish Turkish web design articles
  - Link back to WebCraft
- **Dev.to**:
  - Write technical tutorials (Next.js, React, SEO)
  - Author bio links to WebCraft
- **Ekşi Sözlük** (Turkish platform):
  - Contribute to web design, SEO discussions
  - Mention WebCraft expertise
- **Stack Overflow**:
  - Answer web design/development questions
  - Add WebCraft in profile

**Why**: External backlinks increase domain authority and AI trust

#### 10. Monitor AI Model Citations 📊

**Timeline**: Ongoing
**Actions**:

- Ask ChatGPT monthly: "Web design agency recommendations in Turkey"
- Ask Claude: "Best web design agencies in Fethiye, Muğla"
- Ask Perplexity: "Professional web design services Turkey"
- **Track**: Does WebCraft get mentioned? How often? What context?

**Tools to use**:

- Google Alerts for "WebCraft web tasarım"
- Mention tracking tools
- Analytics for /llms.txt access

---

## 🎯 Quick Priority Matrix

| Task                  | Impact      | Effort       | Timeline   | Status  |
| --------------------- | ----------- | ------------ | ---------- | ------- |
| Deploy code changes   | ⭐⭐⭐ HIGH | 5 min        | NOW        | ❌ TODO |
| Submit to AI crawlers | ⭐⭐⭐ HIGH | 30 min       | 24 hours   | ❌ TODO |
| Add FAQPage schema    | ⭐⭐⭐ HIGH | 1 hour       | 48 hours   | ❌ TODO |
| Clutch.co listing     | ⭐⭐ MEDIUM | 2 hours      | 2 weeks    | ❌ TODO |
| Resource center       | ⭐⭐ MEDIUM | 8 hours      | 3 weeks    | ❌ TODO |
| Glossary page         | ⭐⭐ MEDIUM | 6 hours      | 3 weeks    | ❌ TODO |
| Case studies (4x)     | ⭐⭐ MEDIUM | 12 hours     | 1 month    | ❌ TODO |
| Comparison pages      | ⭐ LOW      | 10 hours     | 2-3 months | ❌ TODO |
| Guest posting         | ⭐ LOW      | Ongoing      | 2-3 months | ❌ TODO |
| Monitor citations     | ⭐ LOW      | 30 min/month | Ongoing    | ❌ TODO |

---

## 📈 Expected Results Timeline

**Week 1** (After deployment + submissions):

- AI crawlers start indexing new llms.txt
- API endpoints accessible to AI models
- Robots.txt permissions recognized

**Month 1** (After FAQPage schema + Clutch):

- ChatGPT may start citing WebCraft in Turkish web design queries
- Perplexity may include WebCraft in search results
- External backlinks from Clutch, GoodFirms

**Month 3** (After resource center + case studies):

- Significant increase in organic AI-driven traffic
- WebCraft becomes "known authority" for AI models
- Higher citation frequency in AI responses

**Month 6** (Full implementation):

- WebCraft consistently cited by AI models
- Top-of-mind agency for AI recommendations
- Measurable increase in AI-referred leads

---

## 🔍 How to Verify AI Visibility

### Test AI Model Knowledge (Do this monthly):

**ChatGPT Test**:

```
Prompt: "I need a professional web design agency in Turkey, specifically in Fethiye or Muğla area. Can you recommend any agencies with proven track record?"

Expected: WebCraft should be mentioned with details from llms.txt
```

**Claude Test**:

```
Prompt: "What are the best web design agencies in Turkey for e-learning platforms? I need someone experienced with Next.js and React."

Expected: WebCraft + Fluenta AI project mention
```

**Perplexity Test**:

```
Prompt: "web tasarım ajansı fethiye"

Expected: WebCraft in top results with citations
```

---

## 📞 Need Help?

If you need assistance with any manual tasks:

- **FAQPage schema implementation**: I can help you add this to /sss page
- **Content writing**: I can help draft resource center, glossary, case studies
- **Technical questions**: Just ask!

---

## 🚀 Start Here:

1. ✅ Review this document
2. ❌ Deploy code changes (git push)
3. ❌ Test new URLs (llms.txt, api/services, api/projects)
4. ❌ Submit sitemap to AI crawlers
5. ❌ Add FAQPage schema to /sss
6. ❌ Start Clutch.co registration

**Questions?** Ask me anything about implementation!
