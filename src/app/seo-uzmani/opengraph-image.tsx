import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "WebCraft SEO Uzmanı";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "SEO Uzmanı Desteği",
    "Sitenizi zirveye taşıyoruz"
  );
}
