import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "Güçlü Marka İmajı Oluşturma Rehberi";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "Güçlü Marka İmajı Oluşturma",
    "Logo, renk, kimlik ve strateji rehberi"
  );
}
