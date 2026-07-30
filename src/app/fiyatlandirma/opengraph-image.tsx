import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "WebCraft Fiyatlandırma";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "Fiyatlandırma",
    "Web tasarım, SEO ve e-ticaret fiyatları — gizli maliyet yok"
  );
}
