import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "WebCraft - Profesyonel Web Tasarım Ajansı";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "Web Tasarım Ajansı",
    "Müşteri getiren, hızlı ve SEO uyumlu web siteleri"
  );
}
