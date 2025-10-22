"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import Image from "next/image";

const MENU_LINKS = [
  { label: "İşlerimiz", href: "/islerimiz" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [rippleActive, setRippleActive] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [circleStyle, setCircleStyle] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Determine if we're on the about page or blog page
  const isAboutPage = pathname === "/hakkimizda";
  const isBlogPage = pathname === "/blog" || pathname.startsWith("/blog/");
  const isContactPage = pathname === "/iletisim";
  // Use black text on about page, blog pages, and contact page, white text on other pages
  const craftTextColor =
    isAboutPage || isBlogPage || isContactPage ? "text-black" : "text-white";

  // Handle scroll effect for text collapse
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30); // Start collapse very early for ultra-smooth transition
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate circle position and size on open
  const openMenu = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      // Find the farthest corner from the button center
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const distances = [
        Math.hypot(0 - cx, 0 - cy),
        Math.hypot(vw - cx, 0 - cy),
        Math.hypot(0 - cx, vh - cy),
        Math.hypot(vw - cx, vh - cy),
      ];
      const radius = Math.max(...distances);
      setCircleStyle({
        left: cx,
        top: cy,
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
      });
    }
    setMenuOpen(true);
    setRippleActive(false);
    setShowContent(false);
    // Start the ripple animation on the next tick
    setTimeout(() => {
      setRippleActive(true);
      // Show content after the animation duration (500ms)
      setTimeout(() => setShowContent(true), 500);
    }, 20);
  };

  const closeMenu = () => {
    setShowContent(false);
    setRippleActive(false);
    // Wait for the ripple to shrink before closing menu
    setTimeout(() => setMenuOpen(false), 400);
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 md:px-12 py-6 md:py-8 z-50 bg-transparent">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 cursor-pointer">
        <Image
          src="/webcraftLogo.png"
          alt="WebCraft Logo"
          width={40}
          height={40}
          className="w-8 h-8 md:w-10 md:h-10 object-contain"
        />
        <div className="flex">
          {/* Web letters */}
          <span
            className={`text-red-500 text-2xl md:text-3xl font-extrabold tracking-widest select-none font-display transition-all duration-[2000ms] ease-out ${
              isScrolled
                ? "transform rotate-[20deg] translate-y-[-20px] opacity-0 blur-[20px]"
                : "transform rotate-0 translate-y-0 opacity-100 blur-0"
            }`}
          >
            W
          </span>
          <span
            className={`text-red-500 text-2xl md:text-3xl font-extrabold tracking-widest select-none font-display transition-all duration-[2000ms] ease-out delay-75 ${
              isScrolled
                ? "transform rotate-[20deg] translate-y-[-20px] opacity-0 blur-[20px]"
                : "transform rotate-0 translate-y-0 opacity-100 blur-0"
            }`}
          >
            e
          </span>
          <span
            className={`text-red-500 text-2xl md:text-3xl font-extrabold tracking-widest select-none font-display transition-all duration-[2000ms] ease-out delay-150 ${
              isScrolled
                ? "transform rotate-[20deg] translate-y-[-20px] opacity-0 blur-[20px]"
                : "transform rotate-0 translate-y-0 opacity-100 blur-0"
            }`}
          >
            b
          </span>
          {/* Craft letters */}
          <span
            className={`${craftTextColor} text-2xl md:text-3xl font-extrabold tracking-widest select-none font-display transition-all duration-[2000ms] ease-out delay-[225ms] ${
              isScrolled
                ? "transform rotate-[20deg] translate-y-[-20px] opacity-0 blur-[20px]"
                : "transform rotate-0 translate-y-0 opacity-100 blur-0"
            }`}
          >
            C
          </span>
          <span
            className={`${craftTextColor} text-2xl md:text-3xl font-extrabold tracking-widest select-none font-display transition-all duration-[2000ms] ease-out delay-300 ${
              isScrolled
                ? "transform rotate-[20deg] translate-y-[-20px] opacity-0 blur-[20px]"
                : "transform rotate-0 translate-y-0 opacity-100 blur-0"
            }`}
          >
            r
          </span>
          <span
            className={`${craftTextColor} text-2xl md:text-3xl font-extrabold tracking-widest select-none font-display transition-all duration-[2000ms] ease-out delay-[375ms] ${
              isScrolled
                ? "transform rotate-[20deg] translate-y-[-20deg] opacity-0 blur-[20px]"
                : "transform rotate-0 translate-y-0 opacity-100 blur-0"
            }`}
          >
            a
          </span>
          <span
            className={`${craftTextColor} text-2xl md:text-3xl font-extrabold tracking-widest select-none font-display transition-all duration-[2000ms] ease-out delay-[450ms] ${
              isScrolled
                ? "transform rotate-[20deg] translate-y-[-20px] opacity-0 blur-[20px]"
                : "transform rotate-0 translate-y-0 opacity-100 blur-0"
            }`}
          >
            f
          </span>
          <span
            className={`${craftTextColor} text-2xl md:text-3xl font-extrabold tracking-widest select-none font-display transition-all duration-[2000ms] ease-out delay-[525ms] ${
              isScrolled
                ? "transform rotate-[20deg] translate-y-[-20px] opacity-0 blur-[20px]"
                : "transform rotate-0 translate-y-0 opacity-100 blur-0"
            }`}
          >
            t
          </span>
        </div>
      </Link>
      <div className="flex items-center gap-4 md:gap-8">
        <Link
          href="/iletisim"
          className="hidden sm:block hover-underline relative uppercase tracking-wider text-xs md:text-sm font-semibold text-red-500 pb-1 transition-colors focus:outline-none font-narrow"
        >
          İLETİŞİM
        </Link>
        {/* Hamburger menu for mobile */}
        <button
          ref={buttonRef}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:scale-105 transition-transform focus:outline-none sm:ml-2"
          aria-label="Menuyu Ac/Kapat"
          onClick={openMenu}
        >
          <span className="block w-6 h-6 relative">
            <span
              className="absolute left-0 top-1 w-6 h-0.5 bg-black rounded transition-all"
              style={{
                transform: menuOpen ? "rotate(45deg) translateY(10px)" : "none",
              }}
            ></span>
            <span
              className={`absolute left-0 top-3 w-6 h-0.5 bg-black rounded transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className="absolute left-0 top-5 w-6 h-0.5 bg-black rounded transition-all"
              style={{
                transform: menuOpen
                  ? "rotate(-45deg) translateY(-10px)"
                  : "none",
              }}
            ></span>
          </span>
        </button>
      </div>
      {/* Menu overlay with animated circular ripple */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-[55] pointer-events-none"
            aria-hidden="true"
          >
            <div
              className={`absolute bg-white transition-transform duration-500 ease-in-out`}
              style={{
                ...circleStyle,
                borderRadius: "50%",
                transform: rippleActive ? "scale(1)" : "scale(0)",
                transitionProperty: "transform, width, height, left, top",
                transitionDuration: "500ms",
                transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
              }}
            ></div>
          </div>
          <nav
            className={`fixed inset-0 z-[60] flex flex-col items-center justify-center bg-transparent transition-opacity duration-300 ${
              showContent ? "opacity-100" : "opacity-0"
            }`}
            style={{ pointerEvents: showContent ? "auto" : "none" }}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center"
              aria-label="Menuyu Kapat"
              onClick={closeMenu}
            >
              <span className="block w-6 h-6 relative">
                <span className="absolute left-0 top-1 w-6 h-0.5 bg-black rounded rotate-45"></span>
                <span className="absolute left-0 top-3 w-6 h-0.5 bg-black rounded opacity-0"></span>
                <span className="absolute left-0 top-5 w-6 h-0.5 bg-black rounded -rotate-45"></span>
              </span>
            </button>
            <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-20 gap-12 md:gap-0">
              {/* Left: Menu Items */}
              <div className="flex-1 flex flex-col items-start justify-center gap-3 md:gap-5">
                {MENU_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block font-extrabold text-[2rem] md:text-[2.8rem] leading-tight text-[#111] transition-all duration-300 group font-display"
                    style={{
                      letterSpacing: "-0.01em",
                    }}
                    onClick={closeMenu}
                  >
                    <span className="inline-block transition-all duration-300 group-hover:text-red-500 group-hover:translate-x-7 group-focus:text-red-500 group-focus:translate-x-7">
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
              {/* Right: Contact Info & Socials (hidden on desktop, shown on mobile for stacking) */}
              <div className="flex-1 flex flex-col items-start md:items-end justify-center gap-2 md:gap-4 mt-12 md:mt-0 text-[#111] md:hidden">
                <a
                  href="mailto:info@webcraft.com"
                  className="text-[18px] text-red-500 underline underline-offset-4 mb-1 font-medium"
                >
                  info@webcraft.com
                </a>
                <a
                  href="tel:+905079441715"
                  className="text-[18px] text-red-500 underline underline-offset-4 mb-1 font-medium"
                >
                  +90 (507) 944 17 15
                </a>
                <a
                  href="tel:+905318335986"
                  className="text-[18px] text-red-500 underline underline-offset-4 mb-1 font-medium"
                >
                  +90 (531) 833 59 86
                </a>
                <div className="mt-2 text-[#6f6f6f] text-[16px] max-w-xs md:text-right">
                  Babataşı Mah. 778 Sokak No: 32/A
                  <br />
                  Fethiye - Muğla, Türkiye
                </div>
                <div className="flex gap-6 mt-8 text-[1.7rem] opacity-70 hover:opacity-100 transition-opacity duration-500">
                  {/* Instagram */}
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="hover:text-red-500 transition-colors"
                  >
                    <Instagram size={28} />
                  </a>
                  {/* Facebook */}
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="hover:text-red-500 transition-colors"
                  >
                    <Facebook size={28} />
                  </a>
                  {/* Twitter */}
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="hover:text-red-500 transition-colors"
                  >
                    <Twitter size={28} />
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="hover:text-red-500 transition-colors"
                  >
                    <Linkedin size={28} />
                  </a>
                </div>
              </div>
              {/* Bottom Right: Contact Info & Socials (desktop only) */}
              <div className="hidden md:flex flex-col items-end gap-2 md:gap-4 absolute bottom-10 right-10 text-[#111] pr-6 md:pr-12 lg:pr-20">
                <a
                  href="mailto:info@webcraft.com"
                  className="text-[18px] text-red-500 underline underline-offset-4 mb-1 font-medium"
                >
                  info@webcraft.com
                </a>
                <a
                  href="tel:+905079441715"
                  className="text-[18px] text-red-500 underline underline-offset-4 mb-1 font-medium"
                >
                  +90 (507) 944 17 15
                </a>
                <a
                  href="tel:+905318335986"
                  className="text-[18px] text-red-500 underline underline-offset-4 mb-1 font-medium"
                >
                  +90 (531) 833 59 86
                </a>
                <div className="mt-2 text-[#6f6f6f] text-[16px] max-w-xs text-right">
                  Babataşı Mah. 778 Sokak No: 32/A
                  <br />
                  Fethiye - Muğla, Türkiye
                </div>
                <div className="flex gap-6 mt-8 text-[1.7rem] opacity-70 hover:opacity-100 transition-opacity duration-500">
                  {/* Instagram */}
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="hover:text-red-500 transition-colors"
                  >
                    <Instagram size={28} />
                  </a>
                  {/* Facebook */}
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="hover:text-red-500 transition-colors"
                  >
                    <Facebook size={28} />
                  </a>
                  {/* Twitter */}
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="hover:text-red-500 transition-colors"
                  >
                    <Twitter size={28} />
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="hover:text-red-500 transition-colors"
                  >
                    <Linkedin size={28} />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
