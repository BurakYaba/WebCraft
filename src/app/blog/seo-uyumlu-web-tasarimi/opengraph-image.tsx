import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "SEO Uyumlu Web Tasarımı";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "SEO Uyumlu Web Tasarımı",
    "Google'da üst sıralarda yer alın"
  );
}
