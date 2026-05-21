import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "ERDevLabs — Desarrollo de Software a Medida",
  description:
    "Webs de negocios, tiendas online, software a medida y consultoría tecnológica. Soluciones digitales diseñadas para hacer crecer tu empresa.",
  openGraph: {
    title: "ERDevLabs — Desarrollo de Software a Medida",
    description:
      "Webs de negocios, tiendas online, software a medida y consultoría tecnológica para empresas que quieren crecer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
