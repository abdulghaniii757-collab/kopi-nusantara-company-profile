// Dynamic route "/menu/[slug]": satu file ini melayani semua halaman detail menu,
// contoh /menu/kopi-tubruk-gayo atau /menu/cokelat-klasik.
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import InfoCard from "@/components/InfoCard";
import MenuCard from "@/components/MenuCard";
import { formatRupiah, getMenuBySlug, menu } from "@/lib/menu";

// params di Next.js 15+ berupa Promise
type Props = { params: Promise<{ slug: string }> };

// Membuat daftar halaman detail saat build (satu halaman untuk setiap item menu).
export function generateStaticParams() {
  return menu.map((item) => ({ slug: item.slug }));
}

// Judul tab browser mengikuti nama menu.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getMenuBySlug(slug);
  return { title: item ? `${item.nama} | Kopi Nusantara` : "Menu tidak ditemukan" };
}

export default async function DetailMenuPage({ params }: Props) {
  const { slug } = await params;
  const item = getMenuBySlug(slug);

  if (!item) notFound(); // slug tidak dikenal -> halaman 404

  const lainnya = menu.filter((m) => m.kategori === item.kategori && m.slug !== item.slug).slice(0, 3);

  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link href="/">Beranda</Link></li>
          <li className="breadcrumb-item"><Link href="/menu">Menu</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{item.nama}</li>
        </ol>
      </nav>

      <div className="detail-banner p-4 p-md-5 mb-4">
        <span className="badge text-bg-light mb-3">{item.kategori}</span>
        <h1 className="fw-bold mb-2">{item.nama}</h1>
        <p className="mb-0 opacity-75">Asal: {item.asal}</p>
      </div>

      <div className="row g-4">
        <div className="col-12 col-lg-8">
          <InfoCard judul="Tentang menu ini">
            <p className="mb-0">{item.deskripsi}</p>
          </InfoCard>
        </div>
        <div className="col-12 col-lg-4">
          <InfoCard judul="Info singkat">
            <p className="price fs-3 fw-bold mb-3">{formatRupiah(item.harga)}</p>
            <p className="small text-body-secondary mb-1">Penyajian</p>
            <p>{item.penyajian}</p>
            <p className="small text-body-secondary mb-2">Karakter rasa</p>
            <div className="d-flex flex-wrap gap-2">
              {item.rasa.map((r) => (
                <span key={r} className="badge badge-kategori">{r}</span>
              ))}
            </div>
          </InfoCard>
        </div>
      </div>

      {lainnya.length > 0 && (
        <section className="mt-5">
          <h2 className="h4 fw-bold text-brown mb-3">Coba juga</h2>
          <div className="row g-4">
            {lainnya.map((m) => (
              <div className="col-12 col-md-6 col-lg-4" key={m.slug}>
                <MenuCard item={m} />
              </div>
            ))}
          </div>
        </section>
      )}

      <Link href="/menu" className="btn btn-outline-secondary mt-5">&larr; Kembali ke Menu</Link>
    </div>
  );
}
