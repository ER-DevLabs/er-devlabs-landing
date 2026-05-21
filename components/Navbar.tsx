"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Servicios", href: "#services" },
  { label: "Proceso", href: "#engineering" },
  { label: "Proyectos", href: "#product" },
  { label: "Contacto", href: "#cta" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        style={{ borderBottomColor: `rgba(26,35,50,${borderOpacity})` }}
        className="border-b border-transparent bg-[#070a0f]/85 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Logo size="sm" />

          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-sm text-[#5a7191] hover:text-[#f1f5f9] hover:bg-[#1a2332]/60 rounded-md transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="#cta"
              className="hidden sm:block px-3 py-1.5 text-sm text-[#5a7191] hover:text-[#94a3b8] transition-colors"
            >
              Contacto
            </Link>
            <Link
              href="#cta"
              className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-white rounded-lg transition-all ring-1 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #0891b2)",
                boxShadow: "0 4px 20px rgba(139,92,246,0.2)",
              }}
            >
              Iniciar Proyecto
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
