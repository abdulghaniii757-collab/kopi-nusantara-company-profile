// Halaman statis "/tentang"
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";

export const metadata: Metadata = { title: "Tentang Kami | Kopi Nusantara" };

const nilai = [
  { judul: "Visi", isi: "Menjadi kedai kopi yang memperkenalkan kekayaan rasa kopi Indonesia ke semua kalangan." },
  { judul: "Misi", isi: "Bekerja sama langsung dengan petani lokal, menyeduh dengan standar yang konsisten, dan menjaga harga tetap terjangkau." },
  { judul: "Komitmen", isi: "Setiap pembelian ikut mendukung kesejahteraan petani kopi di Gayo, Toraja, Flores, dan Bali." },
];

const perjalanan = [
  { tahun: "2018", cerita: "Berawal dari gerobak kopi kecil di pinggir jalan Jakarta." },
  { tahun: "2021", cerita: "Membuka kedai pertama dan mulai bekerja sama dengan petani Gayo." },
  { tahun: "2024", cerita: "Menambah menu manual brew dari Flores dan Bali." },
  { tahun: "2026", cerita: "Hadir secara online melalui website dan layanan pesan-antar." },
];

export default function TentangPage() {
  return (
    <div className="container py-5">
      <PageHeader
        judul="Tentang Kopi Nusantara"
        deskripsi="Kedai kopi tradisional dan modern yang menghadirkan biji kopi pilihan dari seluruh penjuru Indonesia."
      />

      <div className="row g-4 mb-5">
        {nilai.map((n) => (
          <div className="col-12 col-md-4" key={n.judul}>
            <InfoCard judul={n.judul}>
              <p className="mb-0 text-body-secondary">{n.isi}</p>
            </InfoCard>
          </div>
        ))}
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <InfoCard judul="Perjalanan Kami">
            <ul className="list-group list-group-flush">
              {perjalanan.map((p) => (
                <li className="list-group-item px-0 d-flex gap-3" key={p.tahun}>
                  <span className="fw-bold price">{p.tahun}</span>
                  <span>{p.cerita}</span>
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </div>
    </div>
  );
}
