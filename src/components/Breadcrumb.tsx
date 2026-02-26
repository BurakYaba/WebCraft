import Link from "next/link";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Don't show if only one item (homepage)
  if (items.length <= 1) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="hidden md:block fixed left-8 md:left-16 bottom-8 md:bottom-24 z-30"
    >
      <div className="flex flex-col items-center gap-2">
        {/* Breadcrumb text - vertical-rl rotated 180deg so letter tops face left */}
        <div
          className="uppercase tracking-widest text-[9px] md:text-xs text-red-500 font-bold"
          style={{
            writingMode: "vertical-rl",
            letterSpacing: "0.2em",
            transform: "rotate(180deg)",
          }}
        >
          {items.map((item, index) => {
            return (
              <span key={item.url}>
                {index > 0 && (
                  <span className="mx-1 text-red-500/50"> &gt; </span>
                )}
                {index === items.length - 1 ? (
                  <span aria-current="page">{item.name}</span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:text-red-600 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
