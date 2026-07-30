import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "Profesyonel SEO Hizmeti";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "Profesyonel SEO Hizmeti",
    "Organik trafiğinizi artırın"
  );
}
