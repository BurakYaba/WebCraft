# FAQPage Schema Implementation Guide

## Quick Copy-Paste Solution

Add this code to your `/sss` page right before the closing `</div>` of your main component.

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
            text: "Basit kurumsal siteler 2-4 hafta, e-ticaret siteleri 4-8 hafta, özel yazılım projeleri 2-6 ay sürmektedir. Proje kapsamına göre değişir.",
          },
        },
        {
          "@type": "Question",
          name: "Web tasarım fiyatları nasıl belirlenir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sayfa sayısı, özel tasarım ihtiyacı, fonksiyonlar (e-ticaret, rezervasyon, üyelik), içerik yönetimi, API entegrasyonları ve SEO çalışması gibi faktörlere göre belirlenir. Temel paketler 15.000-25.000 TL, profesyonel paketler 25.000-50.000 TL, premium paketler 50.000-100.000+ TL aralığındadır.",
          },
        },
        {
          "@type": "Question",
          name: "Mobil uyumlu web tasarım yapıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet, tüm web sitelerimiz responsive (mobil uyumlu) olarak tasarlanır. Mobil cihazlarda mükemmel görünür ve çalışır. Modern web standartlarına uygun olarak, web siteleriniz masaüstü, tablet ve mobil cihazlarda optimize edilmiş deneyim sunar.",
          },
        },
        {
          "@type": "Question",
          name: "SEO ile ne kadar sürede sonuç alırım?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO sonuçları genellikle 3-6 ay içinde görülmeye başlar. Rekabet, anahtar kelime zorluğu ve mevcut durum sonuçları etkiler. İlk iyileşmeler 1-2 ay içinde başlayabilir ancak anlamlı organik trafik artışı için 6 ay sürekli çalışma önerilir.",
          },
        },
        {
          "@type": "Question",
          name: "Hosting ve domain hizmeti veriyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet, hosting ve domain kayıt hizmetleri sunuyoruz. Güvenli, hızlı ve ölçeklenebilir hosting çözümleri sağlıyoruz. Ayrıca müşterilerimizin mevcut hosting ve domain'leriyle de çalışabiliriz.",
          },
        },
        {
          "@type": "Question",
          name: "Proje sonrası destek veriyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet, tüm projelerimizde proje sonrası destek hizmetleri sunuyoruz. Hata düzeltmeleri, güvenlik güncellemeleri, içerik değişiklikleri ve teknik destek için aylık bakım paketleri mevcuttur. 7/24 teknik destek seçeneği de bulunmaktadır.",
          },
        },
        {
          "@type": "Question",
          name: "E-ticaret sitesi için hangi platformları kullanıyorsunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WooCommerce, Shopify ve özel Next.js çözümleri sunuyoruz. İhtiyacınıza ve ürün sayınıza göre en uygun platformu öneriyoruz. Özel yazılım geliştirme seçeneği ile tamamen size özel e-ticaret çözümleri de geliştirebiliriz.",
          },
        },
        {
          "@type": "Question",
          name: "İçerik yönetim sistemi (CMS) sağlıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet, kullanıcı dostu CMS sistemleri entegre ediyoruz. Müşterilerimiz kendi içeriklerini (yazılar, görseller, ürünler) kolayca güncelleyebilir. WordPress, custom CMS veya headless CMS çözümleri sunuyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "WebCraft nerede hizmet veriyor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "İki ofisimiz bulunmaktadır. Türkiye ofisimiz Fethiye, Muğla'da (Babataşı Mahallesi, 778 Sokak No: 32/A, Fethiye, Muğla 48300), UK ofisimiz ise Londra'da (Station Rd, Cuffley, Potters Bar, EN6 4HY) yer almaktadır. Türkiye genelinde, Avrupa'da ve yurt dışında online olarak hizmet veriyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "Ücretsiz teklif alabilir miyim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet, https://www.webcraft.tr/iletisim üzerinden detaylı bilgi vererek ücretsiz teklif alabilirsiniz. 24 saat içinde size geri dönüş yapıyoruz. İletişim - Türkiye: +90 507 944 17 15, UK: +44 7990 965 247, E-posta: info@webcraft.tr",
          },
        },
      ],
    }),
  }}
/>
```

## How to Add to Service Pages

For each service detail page (`/hizmetler/[slug]`), add this pattern:

```tsx
// Add this function at the top of your component
function generateServiceFAQSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Then in your JSX, add this script tag:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(generateServiceFAQSchema(service)),
  }}
/>;
```

## Why FAQPage Schema Matters

1. **AI Model Citations**: AI models like ChatGPT, Claude, and Perplexity prefer FAQPage schema because it's structured and machine-readable
2. **Google Rich Results**: Your FAQs can appear in Google's FAQ rich results (accordion format)
3. **Voice Search**: Voice assistants use FAQPage schema for spoken answers
4. **Trust Signal**: Shows Google and AI models that you provide comprehensive information

## Testing Your Schema

After deployment, test your schema:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
   - Enter your page URL
   - Should show "FAQPage" detected

2. **Schema.org Validator**: https://validator.schema.org/
   - Paste your page URL
   - Should show no errors

3. **View Source**: Right-click page → View Page Source
   - Search for `"@type": "FAQPage"`
   - Verify all Q&A pairs are present

## Benefits

✅ **For AI Models**:

- Easy to parse and cite
- Structured Q&A format
- Clear questions and definitive answers

✅ **For Search Engines**:

- Rich snippets in search results
- Higher click-through rates
- Better indexing

✅ **For Users**:

- Quick answers to common questions
- Improved user experience
- Reduced support inquiries

## Files to Update

1. `src/app/sss/page.tsx` - Main FAQ page (HIGH PRIORITY)
2. `src/app/hizmetler/[slug]/page.tsx` - Service detail pages (use the service.faqs array)
3. Blog posts with Q&A sections (OPTIONAL)

## Need Help?

If you want me to implement this for you, just say:

- "Add FAQPage schema to /sss page"
- "Add FAQPage schema to service pages"

I can do this for you right now!
