import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "Core Web Vitals Rehberi";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "Core Web Vitals Rehberi",
    "LCP, INP, CLS metrikleri ve optimizasyon"
  );
}
