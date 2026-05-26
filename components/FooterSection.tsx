"use client";

import { Globe, Camera, MessageCircle } from "lucide-react";

const socialLinks = [
  { Icon: Globe, label: "LinkedIn", href: "https://linkedin.com" },
  { Icon: Camera, label: "Instagram", href: "https://www.instagram.com/erdevlabs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  { Icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/50663216443?text=Hola%2C%20me%20gustar%C3%ADa%20ponerme%20en%20contacto%20con%20el%20equipo%20de%20ERDevLabs." },
];

const serviceLinks = [
  "Landing Pages",
  "Tiendas Online",
  "Sitios Corporativos",
  "Diseño UI/UX",
  "Consultoría",
];

const companyLinks = [
  { label: "Blog", href: "#nosotros" },
  { label: "Sobre nosotros", href: "#nosotros" },
  { label: "Términos", href: "/terminos" },
  { label: "Privacidad", href: "/privacidad" },
];

export default function FooterSection() {
  return (
    <footer id="contacto" className="bg-brand-surface pt-16 pb-8 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Two-card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 mb-10">
          {/* ── LEFT CARD (video background) ── */}
          <div
            className="relative min-h-96 border border-white/7 rounded-3xl p-8 overflow-hidden"
            style={{ boxShadow: "0 12px 40px rgba(139,68,240,0.2)" }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
              aria-hidden="true"
            >
              <source src="/modern-abstract-background.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-brand-dark/45 z-[1]" aria-hidden="true" />

            <div className="relative z-10 flex flex-col justify-between h-full min-h-80 gap-8">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-white/12 border border-white/30 p-2 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <rect x="0" y="1" width="13" height="7" rx="2" fill="#8B44F0" />
                    <rect x="7" y="12" width="13" height="7" rx="2" fill="#11ACE5" />
                  </svg>
                </div>
                <span className="text-white font-bold text-[22px] tracking-[-0.02em]">
                  ERDevLabs
                </span>
              </div>

              {/* Tagline + socials */}
              <div>
                <p className="text-lg font-normal text-white leading-[1.45] mb-6">
                  Soluciones Digitales que Convierten.{" "}
                  <span className="text-white/60">
                    Para negocios que no se conforman con menos.
                  </span>
                </p>
                <p className="italic text-brand-purple/90 font-semibold text-base mb-3">
                  ¡Hablemos pronto!
                </p>
                <div className="flex items-center gap-2">
                  {socialLinks.map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-9 h-9 rounded-lg bg-black/50 flex items-center justify-center hover:bg-black hover:scale-110 transition-all duration-200"
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <Icon size={16} className="text-white/70" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT CARD ── */}
          <div className="bg-white/5 border border-white/7 rounded-3xl p-10 relative overflow-visible">
            {/* Floating decorative badge */}
            <div className="absolute -top-8 right-8 z-10 flex flex-col items-center gap-2 hidden md:flex">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-brand-purple via-indigo-600 to-indigo-800 -rotate-12 flex items-center justify-center shadow-2xl shadow-brand-purple/40">
                <span
                  className="text-white font-bold text-[32px] leading-none rotate-12 select-none tracking-[-0.04em]"
                  aria-hidden="true"
                >
                  ER
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path
                    d="M4 4 C 4 14, 18 14, 18 18"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M14 15.5 L18 18 L17 14"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                <span className="italic text-white/60 font-medium text-base whitespace-nowrap">
                  ¿Trabajamos juntos?
                </span>
              </div>
            </div>

            {/* Nav columns */}
            <div className="grid grid-cols-2 gap-16 mb-10 mt-8 md:mt-16">
              <div>
                <p className="italic text-white/40 text-sm font-semibold mb-4 uppercase tracking-widest">
                  Servicios
                </p>
                <ul className="space-y-3">
                  {serviceLinks.map((s) => (
                    <li key={s}>
                      <a
                        href="#servicios"
                        className="block text-[13px] text-white/60 font-semibold hover:text-brand-purple transition-colors duration-200"
                      >
                        {s}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="italic text-white/40 text-sm font-semibold mb-4 uppercase tracking-widest">
                  Empresa
                </p>
                <ul className="space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="block text-[13px] text-white/60 font-semibold hover:text-brand-purple transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom: copyright */}
            <div className="border-t border-white/7 pt-6">
              <p className="text-xs text-white/30">
                © 2026 ERDevLabs. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
