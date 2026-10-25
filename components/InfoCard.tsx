// Kartu pembungkus dengan pola "children": InfoCard hanya menyediakan bingkai,
// isinya ditentukan oleh komponen yang memakainya.
import type { ReactNode } from "react";

type InfoCardProps = {
  judul: string;
  children: ReactNode;
  className?: string;
};

export default function InfoCard({ judul, children, className = "" }: InfoCardProps) {
  return (
    <div className={`card info-card h-100 border-0 shadow-sm ${className}`}>
      <div className="card-body p-4">
        <h2 className="h5 fw-bold text-brown">{judul}</h2>
        {children}
      </div>
    </div>
  );
}
