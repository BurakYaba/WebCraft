# WebCraft - Turkish Web Agency Website

A modern, responsive website for WebCraft, a Turkish web design and digital agency. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Inspired by Baunfire's sophisticated design approach
- **Responsive**: Fully responsive design for all devices
- **Performance**: Optimized with Next.js 15 and Turbopack
- **SEO Ready**: Built with SEO best practices
- **Contact Form**: Professional contact page with form
- **Blog System**: Complete blog with individual post pages
- **Turkish Content**: Full Turkish language support

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Build Tool**: Turbopack

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout with metadata & GTM
│   ├── globals.css        # Global styles & animations
│   ├── sitemap.ts         # Dynamic sitemap generation
│   ├── robots.ts          # Robots.txt configuration
│   ├── not-found.tsx      # 404 error page
│   │
│   ├── api/               # API routes
│   │   ├── projects/      # Projects API endpoints
│   │   └── services/      # Services API endpoints
│   │
│   ├── blog/              # Blog system (18 posts)
│   │   ├── page.tsx       # Blog listing page
│   │   ├── 2024-seo-trendleri/
│   │   ├── core-web-vitals-rehberi/
│   │   ├── fethiye-web-tasarim-rehberi/
│   │   ├── guclu-marka-imaji-olusturma/
│   │   ├── kobi-dijital-donusum-rehberi/
│   │   ├── kurumsal-web-sitesi-yaptirirken-yapilan-7-kritik-hata/
│   │   ├── minimalist-tasarim-yaklasimlari/
│   │   ├── online-magaza-kurulumu/
│   │   ├── profesyonel-seo-hizmeti/
│   │   ├── profesyonel-web-tasarim-nedir-kimler-icin-gerekli/
│   │   ├── seo-uyumlu-web-tasarimi/
│   │   ├── sosyal-medya-yonetimi-marka-buyutme/
│   │   ├── teknik-seo-kontrol-listesi/
│   │   ├── web-analitik-araclari/
│   │   ├── web-sitesi-guvenligi/
│   │   ├── web-sitesi-hizi-nasil-artirilir/
│   │   ├── web-tasarim-fiyatlari/
│   │   └── yerel-seo-stratejileri/
│   │
│   ├── hizmetler/         # Services section
│   │   ├── page.tsx       # Services listing
│   │   ├── [slug]/        # Dynamic service pages (SSG)
│   │   ├── kobi-web-tasarim/              # SME-focused web design
│   │   ├── performans-odakli-web-tasarim/ # Performance-focused design
│   │   └── seo-uyumlu-web-sitesi/         # SEO-optimized websites
│   │
│   ├── hakkimizda/        # About page
│   ├── iletisim/          # Contact page with EmailJS form
│   ├── islerimiz/         # Portfolio/Projects showcase
│   ├── karsilastirma/     # Comparison page
│   ├── kaynak-merkezi/    # Resource center
│   ├── sozluk/            # Glossary/Dictionary
│   ├── sss/               # FAQ page
│   │
│   ├── e-ticaret-web-tasarim/           # E-commerce web design
│   ├── en-iyi-web-tasarim-ajansi/       # Best web design agency
│   ├── kurumsal-web-sitesi/             # Corporate website page
│   │
│   ├── fethiye-web-tasarim/             # Local SEO: Fethiye web design
│   ├── fethiye-web-tasarim-hizmeti/     # Fethiye web design service
│   ├── fethiye-web-tasarim-hizmetleri/  # Fethiye web design services
│   ├── mugla-seo/                        # Muğla SEO services
│   ├── mugla-seo-ajansi/                 # Muğla SEO agency
│   ├── mugla-web-tasarim-seo-hizmetleri/ # Muğla web design & SEO
│   │
│   ├── gizlilik-politikasi/  # Privacy policy
│   ├── kullanim-sartlari/    # Terms of service
│   └── cerez-politikasi/     # Cookie policy
│
├── components/            # React components
│   ├── Header.tsx         # Navigation with mobile menu
│   ├── Footer.tsx         # Footer with links & info
│   ├── GTMTracker.tsx     # Google Tag Manager client component
│   ├── WhatsAppFloat.tsx  # Floating WhatsApp button
│   │
│   ├── HeroSection.tsx    # Homepage hero
│   ├── ServicesSection.tsx # Services overview
│   ├── BlogSection.tsx    # Blog preview section
│   ├── BentoGrid.tsx      # Bento-style grid layout
│   ├── AnimatedOrbitSection.tsx # Animated orbit graphics
│   │
│   ├── AboutHero.tsx      # About page hero
│   ├── AboutUs.tsx        # About us section
│   ├── AboutStatement.tsx # Company statement
│   ├── AboutStudio.tsx    # Studio information
│   ├── AboutValues.tsx    # Company values
│   ├── AboutAwards.tsx    # Awards section
│   ├── AboutTestimonials.tsx # Client testimonials
│   │
│   ├── ServicesHero.tsx   # Services page hero
│   ├── ServiceHero.tsx    # Individual service hero
│   ├── ServiceBlocks.tsx  # Service feature blocks
│   ├── ServiceFAQSection.tsx # Service-specific FAQs
│   ├── ServiceIndicator.tsx  # Service navigation indicator
│   ├── RelatedServices.tsx   # Related services links
│   ├── RelatedBlogPosts.tsx  # Related blog posts links
│   │
│   ├── ProjectsHero.tsx   # Projects page hero
│   ├── ProjectsGallery.tsx # Project gallery
│   ├── ProjectsStats.tsx  # Project statistics
│   │
│   ├── ContactForm.tsx    # Contact form with EmailJS & geolocation
│   ├── FAQSection.tsx     # FAQ component with JSON-LD
│   ├── GoogleReviewsBadge.tsx # Google reviews badge
│   │
│   ├── ThreeCanvas.tsx    # Three.js canvas wrapper
│   ├── RotatingEarth.tsx  # 3D Earth animation (R3F)
│   ├── RotatingCube.tsx   # 3D Cube animation (R3F)
│   └── FireflyEffect.tsx  # Firefly particle animation
│
├── data/
│   └── services.ts        # Service content & metadata (SSG source)
│
├── utils/
│   ├── breadcrumbSchema.ts # JSON-LD breadcrumb helper
│   └── locationUtils.ts    # IP geolocation utility
│
├── types/                 # TypeScript type definitions
└── hooks/                 # Custom React hooks
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/webcraft-website.git
cd webcraft-website
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design Features

- **Color Scheme**: Red (#f84525) and black/gray palette
- **Typography**: Modern, clean typography with proper hierarchy
- **Animations**: Smooth transitions and hover effects
- **Layout**: Grid-based responsive layouts
- **Components**: Reusable, modular components

## 📱 Pages

- **Home**: Landing page with hero section and services
- **About**: Company information and team details
- **Services**: Detailed service offerings
- **Blog**: Blog listing and individual post pages
- **Contact**: Contact form and company information

## 🔧 Configuration

The project uses:

- `tailwind.config.js` for Tailwind CSS configuration
- `next.config.ts` for Next.js configuration
- `tsconfig.json` for TypeScript configuration

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

For questions or support, please contact:

- Email: info@webcraft.tr
- Website: https://www.webcraft.tr
