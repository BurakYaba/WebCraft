import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "Online Mağaza Kurulumu ve E-Ticaret Web Sitesi";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "Online Mağaza Kurulumu",
    "E-Ticaret web sitesi rehberi"
  );
}
