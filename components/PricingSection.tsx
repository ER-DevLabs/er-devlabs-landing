"use client";

import { motion } from "framer-motion";

const Checkmark = () => (
  <span className="flex-shrink-0 w-4 h-4 rounded-full bg-brand-purple flex items-center justify-center mt-0.5">
    <svg width="9" height="7" viewBox="0 0 9 7" fill="none" aria-hidden="true">
      <path
        d="M1.5 3.5L3.5 5.5L7.5 1.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const CyanCheckmark = () => (
  <span className="flex-shrink-0 w-4 h-4 rounded-full bg-brand-cyan flex items-center justify-center mt-0.5">
    <svg width="9" height="7" viewBox="0 0 9 7" fill="none" aria-hidden="true">
      <path
        d="M1.5 3.5L3.5 5.5L7.5 1.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const plans = [
  {
    name: "LANDING BÁSICA",
    price: "$500 – $900",
    features: [
      "Hasta 5 secciones",
      "Diseño responsivo",
      "Formulario de contacto",
      "SEO básico",
      "Entrega en 2 semanas",
    ],
    featured: false,
  },
  {
    name: "LANDING INTERMEDIA",
    price: "$900 – $1,500",
    features: [
      "Hasta 10 secciones",
      "Animaciones personalizadas",
      "Blog integrado",
      "SEO avanzado",
      "Entrega en 3 semanas",
    ],
    featured: false,
  },
  {
    name: "WEB COMPLETA",
    price: "$1,500 – $2,500",
    features: [
      "Páginas ilimitadas",
      "CMS / Panel admin",
      "Integraciones API",
      "Analytics avanzado",
      "Entrega en 4–5 semanas",
    ],
    featured: true,
  },
  {
    name: "WEB CORPORATIVA",
    price: "$2,500 – $5,000",
    features: [
      "Diseño UI/UX a medida",
      "Múltiples idiomas",
      "Alta disponibilidad",
      "Integración con sistemas internos",
      "Soporte 3 meses",
    ],
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section id="precios" className="relative bg-brand-dark py-24 px-6 overflow-hidden">
      {/* Video background */}
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
      <div className="absolute inset-0 bg-black/88 z-[1]" aria-hidden="true" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="uppercase text-xs text-brand-purple tracking-widest mb-4">
            PRECIOS
          </p>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Inversión clara, resultados reales.
          </h2>
          <p className="text-base text-white/50 max-w-xl leading-relaxed">
            Todos los precios en USD. Sin costos ocultos, lo que ves es lo que pagás.
          </p>
        </motion.div>

        {/* 4 plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-7 flex flex-col ${
                plan.featured
                  ? "border-2 border-brand-purple bg-brand-purple/8 shadow-2xl shadow-brand-purple/20"
                  : "bg-brand-surface border border-white/7"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-purple to-brand-cyan text-white text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  Más popular
                </div>
              )}

              <p className="text-[11px] font-semibold text-white/50 tracking-widest mb-3">
                {plan.name}
              </p>
              <p className="text-2xl font-bold text-white leading-tight mb-1">
                {plan.price}
              </p>
              <p className="text-xs text-white/40 mb-5">USD</p>

              <div className="border-t border-white/7 mb-5" />

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/60 leading-snug">
                    <Checkmark />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/50663216443?text=Hola%2C%20me%20interesa%20cotizar%20el%20plan%20${encodeURIComponent(plan.name)}%20de%20ERDevLabs.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center w-full py-3 rounded-2xl font-semibold text-sm transition-colors ${
                  plan.featured
                    ? "bg-gradient-to-r from-brand-purple to-brand-cyan text-white hover:opacity-90"
                    : "bg-white/6 border border-white/10 text-white hover:bg-white/10"
                }`}
              >
                Cotizar ahora
              </a>
            </motion.div>
          ))}
        </div>

        {/* Card 5 – custom/enterprise */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-brand-cyan/6 border border-brand-cyan/25 rounded-3xl p-7"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <p className="text-[11px] font-semibold text-brand-cyan tracking-widest mb-2">
                TIENDAS ONLINE &amp; SOFTWARE A MEDIDA
              </p>
              <p className="text-2xl font-bold text-white mb-4">
                Precio según alcance del proyecto
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  "E-commerce completo",
                  "Software a medida",
                  "CRM / ERP",
                  "Integraciones complejas",
                  "SLA garantizado",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                    <CyanCheckmark />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://wa.me/50663216443?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20llamada%20gratuita%20para%20discutir%20mi%20proyecto%20a%20medida%20con%20ERDevLabs."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-brand-cyan/10 border border-brand-cyan/40 text-white px-6 py-3 rounded-2xl font-semibold text-sm hover:bg-brand-cyan/20 transition-colors whitespace-nowrap"
            >
              Agendar llamada gratuita →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
