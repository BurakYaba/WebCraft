import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "En İyi Web Tasarım Ajansı Nasıl Seçilir?";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "En İyi Web Tasarım Ajansı Nasıl Seçilir?",
    "7 kriter ile doğru ajansı bulun"
  );
}
