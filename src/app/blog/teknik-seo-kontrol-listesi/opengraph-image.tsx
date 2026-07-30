import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "Teknik SEO Kontrol Listesi";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage("Teknik SEO Kontrol Listesi", "2026 kapsamlı rehber");
}
