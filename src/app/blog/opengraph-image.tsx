import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "WebCraft Blog";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "Web Tasarım Blog",
    "SEO ve dijital pazarlama rehberleri"
  );
}
