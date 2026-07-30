import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "Kurumsal Web Sitesi Yaptırırken Yapılan 7 Kritik Hata";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "Kurumsal Web Sitesinde 7 Kritik Hata",
    "Web tasarım sürecinde kaçınılması gerekenler"
  );
}
