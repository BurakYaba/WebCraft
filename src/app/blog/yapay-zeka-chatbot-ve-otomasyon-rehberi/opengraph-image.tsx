import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";

export const alt = "Yapay Zeka Chatbot ve Otomasyon Rehberi";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage(
    "Yapay Zeka Chatbot ve Otomasyon",
    "İşletmeniz için ne anlama geliyor?"
  );
}
