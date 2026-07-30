import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "Web Analitik Araçları Rehberi";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "Web Analitik Araçları Rehberi",
    "GA4, Search Console ve veri analizi"
  );
}
