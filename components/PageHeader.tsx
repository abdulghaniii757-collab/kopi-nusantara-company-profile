// Judul halaman yang dipakai ulang di setiap halaman (reusable component dengan props).
type PageHeaderProps = {
  judul: string;
  deskripsi?: string; // ? berarti opsional
};

export default function PageHeader({ judul, deskripsi }: PageHeaderProps) {
  return (
    <header className="page-header text-center mb-5">
      <h1 className="section-title fw-bold">{judul}</h1>
      {deskripsi && <p className="text-body-secondary mx-auto mb-0">{deskripsi}</p>}
    </header>
  );
}
