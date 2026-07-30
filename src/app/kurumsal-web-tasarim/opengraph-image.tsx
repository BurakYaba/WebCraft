import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "WebCraft Kurumsal Web Tasarım";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage("Kurumsal Web Sitesi", "KVKK uyumlu, ERP entegrasyonlu çözümler");
}
