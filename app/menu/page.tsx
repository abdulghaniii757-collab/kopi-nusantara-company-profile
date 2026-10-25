// Halaman statis "/menu": menampilkan semua menu memakai komponen MenuCard.
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import MenuCard from "@/components/MenuCard";
import { menu, type Kategori } from "@/lib/menu";

export const metadata: Metadata = { title: "Menu | Kopi Nusantara" };

const kategoriList: Kategori[] = ["Kopi", "Non-Kopi"];

export default function MenuPage() {
  return (
    <div className="container py-5">
      <PageHeader
        judul="Menu Kami"
        deskripsi="Pilih kopi favoritmu dari berbagai daerah di Indonesia, atau minuman non-kopi untuk teman ngobrol."
      />

      {kategoriList.map((kategori) => (
        <section key={kategori} className="mb-5">
          <h2 className="h4 fw-bold text-brown mb-3">{kategori}</h2>
          <div className="row g-4">
            {menu
              .filter((item) => item.kategori === kategori)
              .map((item) => (
                <div className="col-12 col-md-6 col-lg-4" key={item.slug}>
                  <MenuCard item={item} />
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
