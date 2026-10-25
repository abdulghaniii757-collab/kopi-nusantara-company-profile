// Halaman 404: muncul jika URL tidak ada, misalnya /menu/kopi-yang-tidak-ada
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-5 fw-bold text-brown">404</h1>
      <p className="lead">Halaman atau menu yang dicari tidak ditemukan.</p>
      <Link href="/menu" className="btn btn-kopi">Lihat Menu</Link>
    </div>
  );
}
