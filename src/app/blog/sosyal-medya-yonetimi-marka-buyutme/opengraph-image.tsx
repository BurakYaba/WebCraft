import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "Sosyal Medya Yönetimi ile Markanızı Büyütün";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage("Sosyal Medya Yönetimi", "Markanızı büyütün");
}
