import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "Web Sitesi Güvenliği Rehberi";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "Web Sitesi Güvenliği Rehberi",
    "SSL, HTTPS ve güvenlik duvarı"
  );
}
