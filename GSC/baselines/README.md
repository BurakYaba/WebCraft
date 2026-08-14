# GSC Takip Yapısı

Bu klasör, Google Search Console verisinin zaman içindeki değişimini otomatik olarak karşılaştırmak için kullanılır.

## Aylık rutin

1. Google Search Console → Performans → **Son 3 ay** filtresiyle CSV'leri dışa aktarın (Arama görünümü, Cihazlar, Filtreler, Grafik, Sayfa sayısı, Sorgular, Ülkeler).
2. Bu dosyaların üzerine `GSC/` klasöründeki mevcut dosyaları yazın (dosya adları aynı kalmalı).
3. Kök dizinde çalıştırın:
   ```
   npm run gsc:report
   ```
4. Script otomatik olarak:
   - `GSC/baselines/<tarih>-report.md` — bir önceki kayda göre karşılaştırmalı, okunabilir rapor
   - `GSC/baselines/<tarih>-snapshot.json` — ham metrikler (bir sonraki ay bu dosyayla karşılaştırılır)

   üretir ve konsola özet basar.

5. `-report.md` dosyasını Claude'a verip **"WebCraft SEO Denetimi" artefaktını bu yeni verilerle güncelle** diyerek görsel raporu da tazeleyebilirsiniz.

## Notlar

- Script bağımlılıksızdır (sadece Node.js), her ay `npm run gsc:report` yeterli.
- Karşılaştırma her zaman **en son kaydedilen** snapshot'a göre yapılır — yani art arda her ay çalıştırdıkça zincir birikir, `baselines/` klasöründeki tüm geçmiş dosyalar silinmeden korunur.
- İlk baseline: **2026-08-14** (2026-05-13 → 2026-08-12 dönemi). Bu, tüm gelecekteki karşılaştırmaların başlangıç referansıdır.
