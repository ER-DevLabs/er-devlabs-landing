import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ERDevLabs: Soluciones Digitales que Convierten.",
  description:
    "Construimos software de alto impacto para empresas que quieren escalar. Webs de negocio, tiendas online, software a medida y consultoría tecnológica.",
  openGraph: {
    title: "ERDevLabs: Soluciones Digitales que Convierten.",
    description:
      "Construimos software de alto impacto para empresas que quieren escalar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={spaceGrotesk.variable}>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
