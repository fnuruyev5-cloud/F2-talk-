# F2 TALK — Tətbiq məlumatları və xüsusiyyətləri

## Tətbiq məlumatları
- **Ad:** F2 TALK
- **Qısa ad:** F2 TALK
- **Tətbiq identifikatoru/slug:** `f2-talk`
- **Dil:** Azərbaycan dili
- **Platforma:** mobil uyğun veb tətbiq / PWA üçün ilkin hazırlıq
- **Brend:** F2
- **Rənglər:** tünd fon, ağ söhbət işarələri, neon bənövşəyi
- **Qısa təsvir:** Dostlarla söhbət və icma platforması.

## Layihənin nəzərdə tutulan xüsusiyyətləri
1. Hesab yaratmaq və daxil olmaq — Clerk konfiqurasiyası tələb olunur.
2. Söhbət kanalları və icma interfeysi — Stream Chat inteqrasiyası tələb olunur.
3. İstifadəçi profili və avatar.
4. Mobil ekranlara uyğun interfeys.
5. PWA manifesti və tətbiq ikonası.
6. Server tərəfli token marşrutu.

## Vacib məhdudiyyətlər
Bu mənbə layihə tam istehsal hazır tətbiq deyil. Səsli/video zəng, ekran paylaşımı, push bildirişləri və APK faylı hazır və təsdiqlənmiş xüsusiyyətlər kimi qəbul edilməməlidir. Əlavə kod, xidmətlər, konfiqurasiya və test tələb olunur.

## Məxfilik və təhlükəsizlik
- `CLERK_SECRET_KEY` və `STREAM_SECRET` serverdə gizli saxlanmalıdır.
- İctimai repository-yə `.env.local` yükləmə.
- İstifadəçi icazələrini və mesaj görünürlüğünü real istifadədən əvvəl sınaqdan keçir.
