import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "Web Sitesi Hızı Nasıl Artırılır?";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "Web Sitesi Hızı Nasıl Artırılır?",
    "Performans optimizasyon rehberi"
  );
}
