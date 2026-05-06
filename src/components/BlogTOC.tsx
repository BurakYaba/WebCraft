"use client";

import { useEffect, useRef, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
  level?: number;
}

interface BlogTOCProps {
  items: TOCItem[];
  title?: string;
}

export default function BlogTOC({
  items,
  title = "İçindekiler",
}: BlogTOCProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const [readingProgress, setReadingProgress] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Reading progress
    const onScroll = () => {
      const docEl = document.documentElement;
      const scrollTop = window.scrollY;
      const docHeight = docEl.scrollHeight - docEl.clientHeight;
      setReadingProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Section highlight via IntersectionObserver
    const headingEls = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (headingEls.length === 0) return;

    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible heading
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      },
    );

    headingEls.forEach((el) => observerRef.current!.observe(el));
    return () => observerRef.current?.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <aside className="hidden xl:block w-60 shrink-0 sticky top-28 self-start">
      <div>
        {/* Progress ring */}
        <div className="flex items-center gap-3 mb-5">
          <div className="relative w-8 h-8 shrink-0">
            <svg className="w-8 h-8 -rotate-90" viewBox="0 0 32 32">
              <circle
                cx="16"
                cy="16"
                r="13"
                fill="none"
                stroke="#f1f5f9"
                strokeWidth="3"
              />
              <circle
                cx="16"
                cy="16"
                r="13"
                fill="none"
                stroke="#dc2626"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 13}`}
                strokeDashoffset={`${2 * Math.PI * 13 * (1 - readingProgress / 100)}`}
                style={{ transition: "stroke-dashoffset 0.2s ease" }}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-gray-500">
              {Math.round(readingProgress)}%
            </span>
          </div>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
            {title}
          </span>
        </div>

        {/* TOC list */}
        <nav aria-label="İçindekiler">
          <ol className="space-y-0.5">
            {items.map((item, idx) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className={`
                      w-full text-left flex items-start gap-2.5 px-3 py-2 rounded-lg text-xs leading-snug
                      transition-all duration-200 group
                      ${
                        isActive
                          ? "bg-red-50 text-red-600 font-semibold"
                          : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
                      }
                    `}
                  >
                    {/* Number dot */}
                    <span
                      className={`
                        shrink-0 mt-0.5 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center
                        transition-colors duration-200
                        ${isActive ? "bg-red-600 text-white" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"}
                      `}
                    >
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Divider + back to top */}
        <div className="mt-5 pt-4 border-t border-gray-100">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-600 transition-colors"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
            Başa dön
          </button>
        </div>
      </div>
    </aside>
  );
}
