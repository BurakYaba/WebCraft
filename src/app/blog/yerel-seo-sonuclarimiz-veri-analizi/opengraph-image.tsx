import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "Yerel SEO Sonuçlarımız - Veri Analizi";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "Yerel SEO Sonuçlarımız",
    "11 aylık veri analizi — Google Search Console"
  );
}
