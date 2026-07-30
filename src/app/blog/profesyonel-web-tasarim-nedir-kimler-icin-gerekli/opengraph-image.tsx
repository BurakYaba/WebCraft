import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "Profesyonel Web Tasarım Nedir? Kimler İçin Gerekli?";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "Profesyonel Web Tasarım Nedir?",
    "Kimler için gerekli?"
  );
}
