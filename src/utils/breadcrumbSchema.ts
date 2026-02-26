export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generate breadcrumb schema for SEO
 * @param items Array of breadcrumb items with name and url
 * @returns BreadcrumbList schema object
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `https://www.webcraft.tr${item.url}`,
    })),
  };
}

/**
 * Generate both schema and items for breadcrumb
 * @param items Array of breadcrumb items with name and url
 * @returns Object with schema and items
 */
export function generateBreadcrumb(items: BreadcrumbItem[]) {
  return {
    schema: generateBreadcrumbSchema(items),
    items,
  };
}
