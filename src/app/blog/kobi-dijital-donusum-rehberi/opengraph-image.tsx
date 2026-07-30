import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "KOBİ Dijital Dönüşüm Rehberi";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "KOBİ Dijital Dönüşüm Rehberi",
    "Adım adım dijitalleşme stratejisi"
  );
}
