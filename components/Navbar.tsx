"use client";
// Navbar dengan active link styling.
// usePathname() membaca URL saat ini sehingga link halaman yang sedang dibuka bisa ditandai aktif.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/menu", label: "Menu" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [terbuka, setTerbuka] = useState(false); // state buka/tutup menu di layar kecil

  // "/" hanya aktif jika persis di beranda; link lain juga aktif untuk sub-halamannya
  // (contoh: /menu/kopi-tubruk-gayo tetap menandai "Menu" sebagai aktif).
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark site-header sticky-top shadow-sm">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold" onClick={() => setTerbuka(false)}>
          Kopi Nusantara
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navUtama"
          aria-expanded={terbuka}
          aria-label="Buka menu navigasi"
          onClick={() => setTerbuka(!terbuka)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${terbuka ? "show" : ""}`} id="navUtama">
          <ul className="navbar-nav ms-auto">
            {links.map((link) => (
              <li className="nav-item" key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link ${isActive(link.href) ? "active" : ""}`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  onClick={() => setTerbuka(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
