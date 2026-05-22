"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Stack", href: "#stack" },
  { label: "Precios", href: "#precios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 60);
    check(); // run on mount in case page loads mid-scroll
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
        <nav
          className={[
            "flex items-center gap-2 rounded-full px-3 py-2 max-w-full pointer-events-auto",
            "transition-[background,border-color,box-shadow] duration-300",
            scrolled
              ? "bg-brand-surface/95 border border-brand-purple/40 shadow-[0_8px_40px_rgba(0,0,0,0.55),0_0_0_1px_rgba(139,68,240,0.12)]"
              : "bg-brand-surface/75 border border-white/8 shadow-none",
          ].join(" ")}
          style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
          aria-label="Navegación principal"
        >
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 flex-shrink-0 mr-1" aria-label="ERDevLabs">
            <div
              className={[
                "w-9 h-9 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0",
                "transition-[background,border-color] duration-300",
                scrolled
                  ? "bg-brand-purple/20 border border-brand-purple/50"
                  : "bg-white/6 border border-white/10",
              ].join(" ")}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <rect x="2" y="3" width="13" height="7" rx="2" fill="#8B44F0" />
                <rect x="7" y="12" width="13" height="7" rx="2" fill="#11ACE5" />
              </svg>
            </div>
            <span className="text-white font-bold text-[20px] tracking-[-0.02em] leading-none">
              ERDevLabs
            </span>
          </a>

          {/* Divider */}
          <div
            className={[
              "h-5 w-px hidden md:block mx-1 flex-shrink-0 transition-colors duration-300",
              scrolled ? "bg-brand-purple/30" : "bg-white/10",
            ].join(" ")}
            aria-hidden="true"
          />

          {/* Nav links — first 5 md, all lg */}
          <div className="hidden md:flex items-center gap-0">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-white/60 px-3 py-2 rounded-full hover:text-white hover:bg-white/8 transition-all duration-150 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            {navLinks.slice(5).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hidden lg:block text-[13px] text-white/60 px-3 py-2 rounded-full hover:text-white hover:bg-white/8 transition-all duration-150 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="mailto:elias@erdevlabs.com"
            className={[
              "hidden md:inline-flex rounded-full px-4 py-2 text-[13px] font-semibold text-white ml-1 flex-shrink-0",
              "bg-gradient-to-r from-brand-purple to-brand-cyan hover:opacity-85 transition-[opacity,box-shadow] duration-200",
              scrolled ? "shadow-[0_0_18px_rgba(139,68,240,0.45)]" : "",
            ].join(" ")}
          >
            Hablemos →
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-1.5 ml-1 text-white/70 hover:text-white rounded-full hover:bg-white/8 transition-colors"
            aria-label="Abrir menú"
          >
            <Menu size={20} />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5"
            style={{ backgroundColor: "rgba(11,11,24,0.97)", backdropFilter: "blur(24px)" }}
            role="dialog"
            aria-label="Menú"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 text-white/60 hover:text-white p-2"
              aria-label="Cerrar menú"
            >
              <X size={24} />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="mailto:elias@erdevlabs.com"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.04 }}
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-full px-7 py-3 text-base font-semibold bg-gradient-to-r from-brand-purple to-brand-cyan text-white"
            >
              Hablemos →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
