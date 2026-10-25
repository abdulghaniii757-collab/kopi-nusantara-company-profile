// Beranda "/"
import Link from "next/link";
import MenuCard from "@/components/MenuCard";
import InfoCard from "@/components/InfoCard";
import { menu } from "@/lib/menu";

const keunggulan = [
  { judul: "Biji Kopi Lokal", isi: "Langsung dari petani Gayo, Toraja, Flores, dan Bali." },
  { judul: "Diseduh Segar", isi: "Setiap cangkir diseduh saat dipesan, tidak ada stok seduhan." },
  { judul: "Harga Bersahabat", isi: "Kopi berkualitas mulai dari Rp 16.000 per gelas." },
];

export default function Home() {
  const unggulan = menu.filter((item) => item.unggulan);

  return (
    <>
      <section className="hero d-flex align-items-center text-center">
        <div className="container py-5">
          <h1 className="display-5 fw-bold mb-3">Nikmati Cita Rasa Kopi Asli Indonesia</h1>
          <p className="lead mb-4">
            Diseduh dari biji kopi pilihan langsung dari petani lokal Nusantara.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-2">
            <Link href="/menu" className="btn btn-susu btn-lg">Jelajahi Menu</Link>
            <Link href="/tentang" className="btn btn-outline-light btn-lg">Tentang Kami</Link>
          </div>
        </div>
      </section>

      <section className="highlight-strip py-5">
        <div className="container">
          <div className="row g-3">
            {keunggulan.map((k) => (
              <div className="col-12 col-md-4" key={k.judul}>
                <InfoCard judul={k.judul}>
                  <p className="mb-0 text-body-secondary">{k.isi}</p>
                </InfoCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="section-title fw-bold text-center mb-4">Menu Unggulan Kami</h2>
        <div className="row g-4">
          {unggulan.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.slug}>
              <MenuCard item={item} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link href="/menu" className="btn btn-kopi">Lihat Semua Menu</Link>
        </div>
      </section>
    </>
  );
}
