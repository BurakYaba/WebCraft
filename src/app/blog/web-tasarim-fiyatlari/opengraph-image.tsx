import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "Web Tasarım Fiyatları ve Uygun Maliyetli Çözümler";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage("Web Tasarım Fiyatları", "Uygun maliyetli çözümler");
}
