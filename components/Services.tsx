"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "web",
    num: "01",
    category: "Webs de Negocios",
    headline: "Sitios web que convierten visitas en clientes",
    description:
      "Landing pages, portales corporativos y webs institucionales con diseño premium, rendimiento optimizado y foco en conversión. Cada sitio, hecho a la medida de tu marca.",
    tags: ["Next.js", "WordPress", "Tailwind CSS", "SEO", "Analytics"],
    spec: "Mobile-first · Core Web Vitals · SSL",
    accentColor: "#8B5CF6",
  },
  {
    id: "ecommerce",
    num: "02",
    category: "Tiendas Online",
    headline: "E-commerce listo para vender desde el día uno",
    description:
      "Catálogo de productos, pagos integrados con Stripe y MercadoPago, gestión de pedidos y panel de control completo. Tu tienda, a tu ritmo, sin comisiones extra.",
    tags: ["Shopify", "WooCommerce", "Stripe", "MercadoPago", "Node.js"],
    spec: "Pagos seguros · Gestión de stock · Panel admin",
    accentColor: "#06B6D4",
    highlight: true,
  },
  {
    id: "software",
    num: "03",
    category: "Software a Medida",
    headline: "Sistemas operacionales pensados para tu negocio",
    description:
      "CRMs, plataformas de automatización, herramientas internas y sistemas de gestión — construidos sobre tus procesos reales, no plantillas genéricas.",
    tags: ["React", "Node.js", "PostgreSQL", "REST APIs", "Docker"],
    spec: "Multi-usuario · RBAC · Integraciones",
    accentColor: "#8B5CF6",
  },
  {
    id: "consulting",
    num: "04",
    category: "Consultoría & Mantenimiento",
    headline: "Tu equipo técnico externo de confianza",
    description:
      "Auditorías de rendimiento y seguridad, asesoramiento tecnológico, actualizaciones continuas y soporte para que tu web siempre esté operativa y al día.",
    tags: ["Auditoría", "Performance", "Seguridad", "Hosting", "SLA"],
    spec: "Soporte mensual · SLA 99.9% · Respuesta < 24h",
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

        {/* Services list — table-style */}
        <div className="border border-[#1a2332] rounded-2xl overflow-hidden">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group relative"
              style={{
                borderBottom: i < SERVICES.length - 1 ? "1px solid #1a2332" : undefined,
                background: service.highlight ? `${service.accentColor}05` : "transparent",
              }}
            >
              {service.highlight && (
                <div
                  className="absolute left-0 top-0 bottom-0 w-px"
                  style={{ background: `linear-gradient(180deg, transparent, ${service.accentColor}40, transparent)` }}
                />
              )}

              <div className="flex items-start gap-5 px-6 py-6 hover:bg-[#0c1117]/60 transition-colors duration-150 cursor-default">
                {/* Number */}
                <span
                  className="text-[11px] font-mono mt-0.5 shrink-0 w-7 tabular-nums"
                  style={{ color: service.highlight ? service.accentColor : "#2d3f54" }}
                >
                  {service.num}
                </span>

                {/* Main content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2.5">
                    <div>
                      <span
                        className="text-[11px] font-mono uppercase tracking-[0.1em] mr-3"
                        style={{ color: service.highlight ? service.accentColor : "#3d5165" }}
                      >
                        {service.category}
                      </span>
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:justify-end">
                      {service.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-mono px-2 py-0.5 rounded border"
                          style={{ color: "#3d5165", borderColor: "#1a2332", background: "#0a1018" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-[15px] font-medium text-[#94a3b8] group-hover:text-[#cbd5e1] transition-colors mb-2 leading-snug">
                    {service.headline}
                  </h3>
                  <p className="text-[12px] text-[#3d5165] leading-relaxed max-w-2xl">{service.description}</p>

                  <div className="mt-3 text-[10px] font-mono text-[#2d3f54] tracking-wide">{service.spec}</div>
                </div>

                {/* Arrow */}
                <div className="shrink-0 mt-1 text-[#1a2332] group-hover:text-[#2d3f54] group-hover:translate-x-0.5 transition-all duration-150">
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
