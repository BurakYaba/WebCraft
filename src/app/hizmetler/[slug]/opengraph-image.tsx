import { renderOgImage, OG_IMAGE_SIZE } from "@/utils/ogImage";
import { getService } from "@/data/services";

export const alt = "WebCraft Hizmeti";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  return renderOgImage(
    service?.title ?? "WebCraft Hizmetleri",
    service?.shortTitle
  );
}
