// Data menu Kopi Nusantara. Dipakai oleh halaman /menu dan /menu/[slug].

export type Kategori = "Kopi" | "Non-Kopi";

export type MenuItem = {
  slug: string; // dipakai sebagai segmen URL dinamis, contoh: /menu/kopi-tubruk-gayo
  nama: string;
  kategori: Kategori;
  asal: string;
  harga: number;
  ringkas: string;
  deskripsi: string;
  rasa: string[];
  penyajian: string;
  unggulan?: boolean;
};

export const menu: MenuItem[] = [
  {
    slug: "kopi-tubruk-gayo",
    nama: "Kopi Tubruk Gayo",
    kategori: "Kopi",
    asal: "Aceh",
    harga: 18000,
    ringkas: "Kopi hitam tradisional khas Aceh dengan aroma yang kuat dan khas.",
    deskripsi:
      "Biji arabika dari dataran tinggi Gayo diseduh dengan cara tubruk: bubuk kopi langsung dituang air panas tanpa disaring. Hasilnya kopi pekat dengan body tebal dan aroma rempah yang kuat.",
    rasa: ["Pekat", "Rempah", "Cokelat hitam"],
    penyajian: "Panas, disajikan dalam gelas kaca",
    unggulan: true,
  },
  {
    slug: "es-kopi-susu-nusantara",
    nama: "Es Kopi Susu Nusantara",
    kategori: "Kopi",
    asal: "Racikan kedai",
    harga: 22000,
    ringkas: "Perpaduan espresso, fresh milk, dan gula aren asli yang creamy.",
    deskripsi:
      "Menu andalan kedai. Double shot espresso dari campuran biji Jawa dan Toraja, dipadukan dengan susu segar dan gula aren cair buatan sendiri. Manis, creamy, dan menyegarkan.",
    rasa: ["Creamy", "Gula aren", "Karamel"],
    penyajian: "Dingin, dengan es batu",
    unggulan: true,
  },
  {
    slug: "kopi-toraja-robusta",
    nama: "Kopi Toraja Robusta",
    kategori: "Kopi",
    asal: "Sulawesi Selatan",
    harga: 20000,
    ringkas: "Rasa earthy dengan tingkat keasaman yang pas.",
    deskripsi:
      "Robusta dari pegunungan Toraja yang dipanggang medium-dark. Rasanya earthy dan sedikit pahit dengan keasaman rendah, cocok untuk penikmat kopi yang suka rasa tegas.",
    rasa: ["Earthy", "Pahit seimbang", "Kacang panggang"],
    penyajian: "Panas atau dingin",
    unggulan: true,
  },
  {
    slug: "kopi-bajawa-flores",
    nama: "Kopi Bajawa Flores",
    kategori: "Kopi",
    asal: "Nusa Tenggara Timur",
    harga: 25000,
    ringkas: "Diseduh manual V60, rasa manis alami dengan sentuhan floral.",
    deskripsi:
      "Arabika Bajawa yang tumbuh di tanah vulkanik Flores, diseduh manual dengan metode V60 agar karakter rasanya keluar maksimal. Ringan, bersih, dengan aftertaste manis.",
    rasa: ["Floral", "Manis alami", "Vanila"],
    penyajian: "Panas, manual brew V60",
  },
  {
    slug: "teh-rempah-nusantara",
    nama: "Teh Rempah Nusantara",
    kategori: "Non-Kopi",
    asal: "Racikan kedai",
    harga: 16000,
    ringkas: "Teh hitam dengan jahe, serai, dan kayu manis yang menghangatkan.",
    deskripsi:
      "Teh hitam diseduh bersama jahe, serai, cengkih, dan kayu manis, lalu dimaniskan dengan gula aren. Pilihan tepat untuk yang tidak minum kopi atau sedang ingin yang hangat.",
    rasa: ["Hangat", "Jahe", "Kayu manis"],
    penyajian: "Panas",
  },
  {
    slug: "cokelat-klasik",
    nama: "Cokelat Klasik",
    kategori: "Non-Kopi",
    asal: "Kakao Sulawesi",
    harga: 20000,
    ringkas: "Cokelat pekat dari kakao lokal Sulawesi, panas atau dingin.",
    deskripsi:
      "Dibuat dari bubuk kakao asli Sulawesi tanpa campuran perisa, dipadukan dengan susu segar. Rasa cokelatnya pekat dan tidak terlalu manis.",
    rasa: ["Pekat", "Cokelat", "Creamy"],
    penyajian: "Panas atau dingin",
  },
];

export function getMenuBySlug(slug: string): MenuItem | undefined {
  return menu.find((item) => item.slug === slug);
}

export function formatRupiah(angka: number): string {
  return "Rp " + angka.toLocaleString("id-ID");
}
