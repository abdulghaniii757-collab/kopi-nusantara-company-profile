// Halaman statis "/kontak": info kontak, jam buka, dan FAQ (accordion Bootstrap).
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";

export const metadata: Metadata = { title: "Kontak | Kopi Nusantara" };

const jamBuka = [
  { hari: "Senin - Jumat", jam: "07.00 - 22.00" },
  { hari: "Sabtu - Minggu", jam: "08.00 - 23.00" },
];

const faq = [
  {
    tanya: "Dari mana asal biji kopi yang digunakan Kopi Nusantara?",
    jawab: "Biji kopi kami langsung didatangkan dari petani lokal pilihan di berbagai daerah di Indonesia, seperti Gayo, Toraja, Flores, dan Bali.",
  },
  {
    tanya: "Apakah Kopi Nusantara menyediakan pemesanan secara online?",
    jawab: "Ya, Anda bisa memesan melalui aplikasi pesan-antar makanan online atau langsung menghubungi nomor WhatsApp kami.",
  },
  {
    tanya: "Apakah tersedia menu non-kopi di kedai ini?",
    jawab: "Tentu saja! Kami menyediakan pilihan minuman non-kopi seperti teh rempah dan cokelat klasik.",
  },
];

export default function KontakPage() {
  return (
    <div className="container py-5">
      <PageHeader judul="Hubungi Kami" deskripsi="Mampir ke kedai atau hubungi kami untuk pemesanan dan kerja sama." />

      <div className="row g-4 mb-5">
        <div className="col-12 col-md-6 col-lg-4">
          <InfoCard judul="Alamat">
            <p className="mb-0">Jalan Raya Kopi No. 45<br />Jakarta</p>
          </InfoCard>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <InfoCard judul="Telepon & WhatsApp">
            <p className="mb-1">0812-3456-7890</p>
            <p className="mb-0 text-body-secondary small">halo@kopinusantara.id</p>
          </InfoCard>
        </div>
        <div className="col-12 col-lg-4">
          <InfoCard judul="Jam Buka">
            {jamBuka.map((j) => (
              <div className="d-flex justify-content-between" key={j.hari}>
                <span>{j.hari}</span>
                <span className="fw-semibold">{j.jam}</span>
              </div>
            ))}
          </InfoCard>
        </div>
      </div>

      <h2 className="section-title fw-bold text-center mb-4">Pertanyaan yang Sering Diajukan</h2>
      <div className="accordion mx-auto shadow-sm" id="faqAccordion" style={{ maxWidth: 800 }}>
        {faq.map((f, i) => (
          <div className="accordion-item" key={f.tanya}>
            <h3 className="accordion-header">
              <button
                className={`accordion-button fw-bold text-brown ${i === 0 ? "" : "collapsed"}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#faq-${i}`}
                aria-expanded={i === 0}
                aria-controls={`faq-${i}`}
              >
                {f.tanya}
              </button>
            </h3>
            <div id={`faq-${i}`} className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`} data-bs-parent="#faqAccordion">
              <div className="accordion-body text-body-secondary">{f.jawab}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
