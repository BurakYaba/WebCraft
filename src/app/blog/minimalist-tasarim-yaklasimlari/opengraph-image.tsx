import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "Minimalist Web Tasarımı Rehberi";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "Minimalist Web Tasarımı",
    "Prensipler, uygulamalar ve sık hatalar"
  );
}
