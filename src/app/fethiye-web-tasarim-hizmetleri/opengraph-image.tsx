import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "WebCraft Fethiye Web Tasarım";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage("Fethiye'nin Dijital Ajansı", "Web tasarım ve SEO hizmetleri");
}
