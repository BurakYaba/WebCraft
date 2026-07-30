import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "Fethiye Web Tasarım Rehberi";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "Fethiye Web Tasarım Rehberi",
    "Turizm işletmeleri için dijital çözümler"
  );
}
