"use client";
// Memuat JavaScript Bootstrap (untuk accordion FAQ, dsb.) hanya di browser.
import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
}
