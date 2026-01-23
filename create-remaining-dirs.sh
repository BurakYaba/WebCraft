#!/bin/bash
# Script to create directories for remaining 12 existing blog posts

echo "Creating directories for remaining blog posts..."

# Array of remaining blog post slugs
slugs=(
  "profesyonel-web-tasarim-nedir-kimler-icin-gerekli"
  "kurumsal-web-sitesi-yaptirirken-yapilan-7-kritik-hata"
  "seo-uyumlu-web-tasarimi"
  "sosyal-medya-yonetimi-marka-buyutme"
  "profesyonel-seo-hizmeti"
  "web-tasarim-fiyatlari"
  "2024-seo-trendleri"
  "minimalist-tasarim-yaklasimlari"
  "online-magaza-kurulumu"
  "guclu-marka-imaji-olusturma"
  "web-sitesi-guvenligi"
  "web-analitik-araclari"
)

# Create each directory
for slug in "${slugs[@]}"; do
  mkdir -p "src/app/blog/$slug"
  echo "✓ Created: src/app/blog/$slug"
done

echo ""
echo "All directories created successfully!"
echo "Total: ${#slugs[@]} directories"
