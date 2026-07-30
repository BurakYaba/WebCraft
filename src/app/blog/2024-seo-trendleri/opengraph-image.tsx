import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "2025-2026 SEO Trendleri Rehberi";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "2025-2026 SEO Trendleri",
    "Güncel arama motoru optimizasyonu rehberi"
  );
}
