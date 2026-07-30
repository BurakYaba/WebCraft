import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "SEO, GEO ve AEO Nedir?";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "SEO, GEO ve AEO Nedir?",
    "Arama optimizasyonunun üç boyutu"
  );
}
