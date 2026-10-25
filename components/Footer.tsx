import Link from "next/link";

export default function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="site-footer mt-auto py-4">
      <div className="container">
        <div className="row g-3 align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start">
            <p className="fw-bold mb-1">Kopi Nusantara</p>
            <p className="small mb-0">Jalan Raya Kopi No. 45, Jakarta · 0812-3456-7890</p>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end small">
            <Link href="/menu" className="footer-link me-3">Menu</Link>
            <Link href="/tentang" className="footer-link me-3">Tentang</Link>
            <Link href="/kontak" className="footer-link">Kontak</Link>
            <p className="mb-0 mt-2">
              &copy; {tahun} Kopi Nusantara · Dibuat oleh Abdul Ghani (535250073)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
