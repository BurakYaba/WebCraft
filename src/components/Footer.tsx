import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/webcraft",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/webcraft",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/webcraft",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "Facebook",
      url: "https://facebook.com/webcraft",
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
    // SEO landing pages
    { name: "E-ticaret Web Tasarım", href: "/e-ticaret-web-tasarim" },
    { name: "Kurumsal Web Sitesi", href: "/kurumsal-web-sitesi" },
    { name: "En İyi Web Tasarım Ajansı", href: "/en-iyi-web-tasarim-ajansi" },
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

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1 - WebCraft, Slogan & Social */}
          <div className="footer-brand flex flex-col">
            {/* Logo */}
            <div className="mb-6">
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

            {/* Slogan */}
            <div className="mb-8">
              <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium">
                Dijital dünyada markanızın
                <span className="text-[#f84525]"> güçlü </span>
                varlığını inşa ediyoruz.
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

          {/* Column 2 - Keşfedin Navigation */}
          <div className="footer-navigation">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-6">
              Keşfedin
            </h3>
            <nav>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group inline-block text-white/70 text-base hover:text-white transition-all duration-300 relative"
                    >
                      {link.name}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f84525] transition-all duration-300 group-hover:w-full"></div>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3 - İletişime Geçin Contact */}
          <div className="footer-contact">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-6">
              İletişime Geçin
            </h3>

            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <a
                href="mailto:info@webcraft.tr"
                className="group block text-[#f84525] text-base md:text-lg font-medium hover:text-white transition-colors duration-300 relative"
              >
                info@webcraft.tr
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a
                href="tel:+905079441715"
                className="group block text-[#f84525] text-base md:text-lg font-medium hover:text-white transition-colors duration-300 relative"
              >
                +90 (507) 944 17 15
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a
                href="tel:+905318335986"
                className="group block text-[#f84525] text-base md:text-lg font-medium hover:text-white transition-colors duration-300 relative"
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
