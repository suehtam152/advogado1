import "../styles/global.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Juston | Solucione seu problema",
  description: "Plataforma simples e acessível para resolver problemas jurídicos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&family=Poppins:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 