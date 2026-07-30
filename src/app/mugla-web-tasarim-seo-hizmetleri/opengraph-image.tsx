import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "WebCraft Muğla Web Tasarım ve SEO";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "Muğla'da Dijital Çözümler",
    "Fethiye, Bodrum, Marmaris, Datça web tasarım ve SEO"
  );
}
