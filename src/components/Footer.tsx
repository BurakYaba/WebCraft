import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/webcraft_web/",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/webcraft-real",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      url: "https://x.com/webcraft_real",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61585946570262",
      icon: <Facebook className="w-5 h-5" />,
    },
  ];

  const navigationLinks = [
    { name: "Çalışmalarımız", href: "/islerimiz" },
    { name: "Hizmetlerimiz", href: "/hizmetler" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Blog", href: "/blog" },
    { name: "SSS", href: "/sss" },
    { name: "İletişim", href: "/iletisim" },
  ];

  // Column 2 links
  const column1Links = navigationLinks;

  // Column 3 links
  const column2Links = [
    { name: "Kaynak Merkezi", href: "/kaynak-merkezi" },
    { name: "Sözlük", href: "/sozluk" },
    { name: "Karşılaştırmalar", href: "/karsilastirma/webcraft-vs-diy" },
    { name: "E-ticaret Web Tasarım", href: "/e-ticaret-web-tasarim" },
    { name: "Kurumsal Web Sitesi", href: "/kurumsal-web-sitesi" },
    { name: "En İyi Web Tasarım Ajansı", href: "/en-iyi-web-tasarim-ajansi" },
  ];

  // Column 4 links
  const column3Links = [
    {
      name: "Performans Odaklı Web Tasarım",
      href: "/hizmetler/performans-odakli-web-tasarim",
    },
    { name: "KOBİ Web Tasarım", href: "/hizmetler/kobi-web-tasarim" },
    { name: "SEO Uyumlu Web Sitesi", href: "/hizmetler/seo-uyumlu-web-sitesi" },
    { name: "Fethiye Web Tasarım", href: "/fethiye-web-tasarim-hizmetleri" },
    { name: "Muğla Web Tasarım", href: "/mugla-web-tasarim-seo-hizmetleri" },
  ];

  return (
    <footer className="relative bg-[#1a1918] py-16 md:py-18 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-8 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div
          className="absolute top-12 right-20 w-1 h-1 bg-[#f84525] rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-12 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-8 right-1/3 w-1 h-1 bg-[#f84525] rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Row 1 - Headers */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Column 1 - WebCraft Logo */}
          <div className="footer-brand">
            <Link href="/" className="inline-block group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#f84525] rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 overflow-hidden">
                  <Image
                    src="/webcraftLogo.png"
                    alt="WebCraft Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl md:text-2xl tracking-tight">
                    WebCraft
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          {/* Columns 2-4 - Keşfedin Header (spans 3 columns) */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider">
              Keşfedin
            </h3>
          </div>

          {/* Column 5 - İletişime Geçin Header */}
          <div>
            <h3 className="text-white font-bold text-lg uppercase tracking-wider">
              İletişime Geçin
            </h3>
          </div>
        </div>

        {/* Row 2 - Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Column 1 - Slogan & Social Links */}
          <div className="footer-brand flex flex-col">
            {/* Slogan */}
            <div className="mb-8">
              <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium">
                Dijital dünyada markanızın güçlü varlığını inşa ediyoruz.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-500 hover:scale-110"
                  aria-label={social.name}
                >
                  {/* Background circle */}
                  <div className="absolute inset-0 border border-white/20 rounded-full transition-all duration-500 group-hover:border-[#f84525] group-hover:bg-[#f84525]/10"></div>

                  {/* Icon */}
                  <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {social.icon}
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-[#f84525]/20 rounded-full scale-0 transition-transform duration-300 group-hover:scale-100"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - First set of links */}
          <nav>
            <ul className="space-y-3">
              {column1Links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-block text-white/70 text-sm hover:text-white transition-all duration-300 relative"
                  >
                    {link.name}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f84525] transition-all duration-300 group-hover:w-full"></div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 - Second set of links */}
          <nav>
            <ul className="space-y-3">
              {column2Links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-block text-white/70 text-sm hover:text-white transition-all duration-300 relative"
                  >
                    {link.name}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f84525] transition-all duration-300 group-hover:w-full"></div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4 - Third set of links */}
          <nav>
            <ul className="space-y-3">
              {column3Links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-block text-white/70 text-sm hover:text-white transition-all duration-300 relative"
                  >
                    {link.name}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f84525] transition-all duration-300 group-hover:w-full"></div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 5 - Contact Info */}
          <div className="footer-contact">
            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <a
                href="mailto:info@webcraft.tr"
                className="group block text-[#f84525] text-sm md:text-base font-medium hover:text-white transition-colors duration-300 relative"
              >
                info@webcraft.tr
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a
                href="tel:+905079441715"
                className="group block text-[#f84525] text-sm md:text-base font-medium hover:text-white transition-colors duration-300 relative"
              >
                +90 (507) 944 17 15
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a
                href="tel:+905318335986"
                className="group block text-[#f84525] text-sm md:text-base font-medium hover:text-white transition-colors duration-300 relative"
              >
                +90 (531) 833 59 86
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
              </a>
            </div>

            {/* Address */}
            <div className="text-white/50 text-sm leading-relaxed">
              <p>
                Babataşı Mahallesi
                <br />
                778 Sokak No: 32/A
                <br />
                Fethiye - Muğla
                <br />
                Türkiye
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/50 text-sm md:text-base">
              <p>© {currentYear} WebCraft. Tüm hakları saklıdır.</p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 md:space-x-8 relative z-10">
              <Link
                href="/gizlilik-politikasi"
                className="group block text-[#f84525] text-sm md:text-base font-medium hover:text-white transition-colors duration-300 relative"
              >
                Gizlilik Politikası
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
              </Link>
              <Link
                href="/kullanim-sartlari"
                className="group block text-[#f84525] text-sm md:text-base font-medium hover:text-white transition-colors duration-300 relative"
              >
                Kullanım Şartları
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
              </Link>
              <Link
                href="/cerez-politikasi"
                className="group block text-[#f84525] text-sm font-medium hover:text-white transition-colors duration-300 relative"
              >
                Çerez Politikası
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Large watermark */}
      <div className="watermark text-[#232221] opacity-5">WebCraft</div>
    </footer>
  );
};

export default Footer;
