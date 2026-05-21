"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "web",
    category: "Webs de Negocios",
    headline: "Sitios web que convierten visitas en clientes",
    description:
      "Landing pages, portales corporativos y webs institucionales con diseño premium, rendimiento optimizado y foco en conversión. Cada sitio, hecho a la medida de tu marca.",
    tags: ["Next.js", "WordPress", "Tailwind CSS", "SEO", "Analytics"],
    spec: "Mobile-first · Core Web Vitals · SSL",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 7h20" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    highlight: false,
    accentColor: "#8B5CF6",
  },
  {
    id: "ecommerce",
    category: "Tiendas Online",
    headline: "E-commerce listo para vender desde el día uno",
    description:
      "Catálogo de productos, pagos integrados con Stripe y MercadoPago, gestión de pedidos y panel de control completo. Tu tienda, a tu ritmo, sin comisiones extra.",
    tags: ["Shopify", "WooCommerce", "Stripe", "MercadoPago", "Node.js"],
    spec: "Pagos seguros · Gestión de stock · Panel admin",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 6h18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    highlight: true,
    accentColor: "#06B6D4",
  },
  {
    id: "software",
    category: "Software a Medida",
    headline: "Sistemas operacionales pensados para tu negocio",
    description:
      "CRMs, plataformas de automatización, herramientas internas y sistemas de gestión — construidos sobre tus procesos reales, no plantillas genéricas.",
    tags: ["React", "Node.js", "PostgreSQL", "REST APIs", "Docker"],
    spec: "Multi-usuario · RBAC · Integraciones",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    highlight: false,
    accentColor: "#8B5CF6",
  },
  {
    id: "consulting",
    category: "Consultoría & Mantenimiento",
    headline: "Tu equipo técnico externo de confianza",
    description:
      "Auditorías de rendimiento y seguridad, asesoramiento tecnológico, actualizaciones continuas y soporte para que tu web siempre esté operativa y al día.",
    tags: ["Auditoría", "Performance", "Seguridad", "Hosting", "SLA"],
    spec: "Soporte mensual · SLA 99.9% · Respuesta < 24h",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    highlight: false,
    accentColor: "#06B6D4",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="section-divider" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(139,92,246,0.04), transparent 65%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a2332] bg-[#0c1117] mb-6">
            <span className="text-[10px] font-mono text-[#3d5165] tracking-[0.14em] uppercase">Qué construimos</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-[40px] font-semibold text-[#f1f5f9] tracking-[-0.02em] leading-tight max-w-md">
              Cuatro servicios.{" "}
              <span className="text-[#5a7191]">Un equipo dedicado.</span>
            </h2>
            <p className="text-[13px] text-[#3d5165] max-w-xs leading-relaxed sm:text-right">
              Cada proyecto es entregado como una solución completa — no una plantilla, no un parche.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative"
            >
              <div
                className="relative flex flex-col h-full p-6 rounded-2xl border transition-all duration-200 overflow-hidden"
                style={{
                  background: service.highlight ? `${service.accentColor}08` : "#0c1117",
                  borderColor: service.highlight ? `${service.accentColor}30` : "#1a2332",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${service.accentColor}40`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = service.highlight ? `${service.accentColor}30` : "#1a2332";
                }}
              >
                {service.highlight && (
                  <div
                    className="absolute top-0 left-6 right-6 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${service.accentColor}50, transparent)` }}
                  />
                )}

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="p-2.5 rounded-lg"
                      style={{ background: `${service.accentColor}15`, color: service.accentColor }}
                    >
                      {service.icon}
                    </div>
                    <span
                      className="text-[11px] font-mono uppercase tracking-[0.1em]"
                      style={{ color: service.highlight ? service.accentColor : "#3d5165" }}
                    >
                      {service.category}
                    </span>
                  </div>
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-[#1a2332] group-hover:text-[#2d3f54] transition-colors">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <h3 className="text-[16px] font-medium text-[#cbd5e1] leading-snug mb-3">{service.headline}</h3>
                <p className="text-[13px] text-[#3d5165] leading-relaxed mb-6 flex-1">{service.description}</p>
                <div className="text-[10px] font-mono text-[#2d3f54] mb-4 tracking-wide">{service.spec}</div>

                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded border"
                      style={{ color: "#3d5165", borderColor: "#1a2332", background: "#0a1018" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
