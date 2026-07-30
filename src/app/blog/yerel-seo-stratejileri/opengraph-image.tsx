import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "Yerel SEO Stratejileri";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "Yerel SEO Stratejileri",
    "Google Haritalar'da üst sıralarda yer alın"
  );
}
