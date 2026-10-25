// Root layout: membungkus SEMUA halaman. Bootstrap dan CSS global diimpor di sini.
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // 1. CSS framework
import "./globals.css"; // 2. CSS global milik kita (menimpa Bootstrap)
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BootstrapClient from "@/components/BootstrapClient";

export const metadata: Metadata = {
  title: "Kopi Nusantara | Kedai Kopi Tradisional & Modern",
  description: "Company profile Kopi Nusantara, dibangun dengan Next.js dan Bootstrap.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main className="flex-grow-1">{children}</main>
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
