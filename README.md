# F2 TALK

F2 TALK — Azərbaycan dilində, mobil istifadəyə uyğun söhbət və icma platforması üçün mənbə layihəsidir.

## Layihə xüsusiyyətləri
- F2 TALK adı, xüsusi SVG loqo və PWA manifesti
- Next.js + React interfeysi
- Clerk hesab/giriş inteqrasiyası (açarlar tələb olunur)
- Stream Chat mesajlaşma inteqrasiyası (hesab və server açarları tələb olunur)
- Server tərəfində token API marşrutu
- Mobil ekranlara uyğun dizayn bazası

## APK barədə
Bu ZIP hazır APK deyil. Özün APK hazırlamaq üçün əvvəl layihəni serverdə yayımla, HTTPS ünvanını işə sal və `START-HERE-AZ.txt` təlimatındakı PWABuilder mərhələlərini izlə. Next.js API marşrutları server tələb edir; yalnız HTML fayllarını APK-yə yığmaq kifayət etmir.

## Quraşdırma
Node.js 20 və ya uyğun mühitdə:
1. `npm install`
2. `.env.example` əsasında mühit dəyişənlərini hostinqdə qur
3. `npm run dev` ilə sınaqdan keçir və ya hostinqə deploy et

## Lazım olan xidmətlər
Clerk: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`
Stream Chat: `NEXT_PUBLIC_STREAM_API_KEY`, `STREAM_API_KEY`, `STREAM_SECRET`

Gizli açarları heç vaxt GitHub-a və frontend koduna qoyma. Pulsuz plan limitlərini xidmət təminatçılarında yoxla.

Ətraflı: `APP-INFO-AND-FEATURES-AZ.md` və `START-HERE-AZ.txt`.
