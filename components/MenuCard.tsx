// Kartu satu item menu. Dipakai ulang di Beranda (menu unggulan) dan di halaman /menu.
import Link from "next/link";
import { formatRupiah, type MenuItem } from "@/lib/menu";

type MenuCardProps = {
  item: MenuItem;
};

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="card menu-card h-100 border-0 shadow-sm">
      <div className="card-body d-flex flex-column p-4">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <span className="badge badge-kategori">{item.kategori}</span>
          <span className="small text-body-secondary">{item.asal}</span>
        </div>
        <h3 className="h5 card-title fw-bold text-brown">{item.nama}</h3>
        <p className="card-text text-body-secondary">{item.ringkas}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="price fw-bold">{formatRupiah(item.harga)}</span>
          {/* Navigasi ke halaman detail dinamis /menu/[slug] */}
          <Link href={`/menu/${item.slug}`} className="btn btn-kopi btn-sm stretched-link">
            Lihat Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
