import "../styles/global.css";
import type { Metadata } from "next";
import React from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Juston | Solucione seu problema",
  description: "Plataforma simples e acessível para resolver problemas jurídicos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&family=Poppins:wght@400;700;900&display=swap" rel="stylesheet" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <style>{`
          :root { --bs-primary: #bfa181; --bs-primary-rgb: 191,161,129; --bs-success: #bfa181; --bs-success-rgb: 191,161,129; }
          .btn-primary { --bs-btn-bg: #bfa181; --bs-btn-border-color: #bfa181; --bs-btn-hover-bg: #a98c6f; --bs-btn-hover-border-color: #a98c6f; --bs-btn-active-bg: #a98c6f; --bs-btn-active-border-color: #a98c6f; }
          .btn-success { --bs-btn-bg: #bfa181; --bs-btn-border-color: #bfa181; --bs-btn-hover-bg: #a98c6f; --bs-btn-hover-border-color: #a98c6f; --bs-btn-active-bg: #a98c6f; --bs-btn-active-border-color: #a98c6f; }
          h2 { font-weight: 700 !important; }
        `}</style>
      </head>
      <body>
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
} 