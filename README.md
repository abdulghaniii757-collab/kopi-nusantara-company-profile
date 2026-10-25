# Kopi Nusantara — Company Profile (Next.js)

Website company profile kedai **Kopi Nusantara**, dibangun dengan Next.js 16 (App Router), TypeScript, dan Bootstrap 5.

Abdul Ghani · 535250073 · Front-End Programming (TK23023) · Tugas 4 Praktikum

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Halaman

| URL | Keterangan |
| --- | --- |
| `/` | Beranda: hero, keunggulan, menu unggulan |
| `/menu` | Daftar semua menu (kopi & non-kopi) |
| `/menu/[slug]` | Detail menu (dynamic route), contoh `/menu/kopi-tubruk-gayo` |
| `/tentang` | Visi, misi, dan perjalanan kedai |
| `/kontak` | Alamat, jam buka, dan FAQ |

## Pemenuhan ketentuan tugas

1. **Beberapa halaman company profile**: Beranda, Menu, Detail Menu, Tentang, Kontak.
2. **Dynamic routing**: `app/menu/[slug]/page.tsx` + `generateStaticParams`, slug tidak dikenal menampilkan `not-found.tsx`.
3. **Reusable components**: `MenuCard`, `InfoCard` (pola children), `PageHeader`, `Navbar`, `Footer`.
4. **Navigasi dengan `<Link>`**: semua navigasi memakai `next/link`.
5. **Active link styling**: `Navbar` memakai `usePathname()`; link "Menu" tetap aktif di halaman detail menu.
6. **Responsif**: grid Bootstrap (`col-12 col-md-6 col-lg-4`), navbar collapse di layar kecil.
7. **Struktur folder rapi**: lihat di bawah.

## Struktur folder

```
app/
├─ layout.tsx          # layout global: Bootstrap, Navbar, Footer
├─ page.tsx            # /
├─ globals.css         # CSS global (menimpa variabel Bootstrap)
├─ not-found.tsx       # halaman 404
├─ menu/page.tsx       # /menu
├─ menu/[slug]/page.tsx# /menu/:slug (dynamic route)
├─ tentang/page.tsx    # /tentang
└─ kontak/page.tsx     # /kontak
components/            # komponen yang dipakai ulang
lib/menu.ts            # data menu + fungsi bantu
types/bootstrap.d.ts   # deklarasi modul JS Bootstrap
public/images/         # gambar statis
```
