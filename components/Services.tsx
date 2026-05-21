"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "crm",
    category: "CRM Platforms",
    headline: "Purpose-built customer relationship infrastructure",
    description:
      "Custom CRM systems designed around your sales process. Pipeline management, contact tracking, deal flows, and automated follow-ups — tailored to how your team actually works.",
    tags: ["React", "PostgreSQL", "REST APIs", "Redis", "Node.js"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    highlight: false,
    spec: "Multi-tenant · Role-based access · Custom fields",
  },
  {
    id: "automation",
    category: "Automation Systems",
    headline: "End-to-end workflow automation built to scale",
    description:
      "Eliminate manual processes with intelligent automation. From simple triggers to complex multi-step workflows — your operations run themselves, reliably, every time.",
    tags: ["Node.js", "BullMQ", "Webhooks", "CRON", "n8n"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    highlight: true,
    spec: "Event-driven · Retry logic · Audit trail",
  },
  {
    id: "internal",
    category: "Internal Tools",
    headline: "Engineering the tools your team deserves",
    description:
      "Replace spreadsheets and disconnected apps with purpose-built internal tools. Dashboards, admin panels, data explorers, and operational interfaces your team will actually use.",
    tags: ["Next.js", "Tailwind", "tRPC", "Supabase", "Retool"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 8h4M7 11h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    highlight: false,
    spec: "Custom UI · Real-time · Permission layers",
  },
  {
    id: "infra",
    category: "Business Infrastructure",
    headline: "The operational foundation your company runs on",
    description:
      "Full-stack business infrastructure — from server architecture to deployment pipelines to monitoring. Systems built to survive growth, handle load, and stay online.",
    tags: ["Docker", "Nginx", "CI/CD", "AWS", "PostgreSQL"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="14" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 6h.01M6 18h.01M10 6h.01M10 18h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    highlight: false,
    spec: "Cloud-native · Auto-scaling · 99.9% SLA",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="section-divider" />

      {/* Subtle bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(59,130,246,0.04), transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a2332] bg-[#0c1117] mb-6">
            <span className="text-[10px] font-mono text-[#3d5165] tracking-[0.14em] uppercase">
              What We Build
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-[40px] font-semibold text-[#f1f5f9] tracking-[-0.02em] leading-tight max-w-md">
              Four core disciplines.{" "}
              <span className="text-[#5a7191]">One engineering team.</span>
            </h2>
            <p className="text-[13px] text-[#3d5165] max-w-xs leading-relaxed sm:text-right">
              Each engagement is scoped, engineered, and delivered as a complete operational system — not a patchwork.
            </p>
          </div>
        </motion.div>

        {/* Service cards grid */}
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
                className="relative flex flex-col h-full p-6 rounded-2xl border transition-all duration-200 hover:border-[#2d3f54] overflow-hidden"
                style={{
                  background: service.highlight
                    ? "rgba(59,130,246,0.04)"
                    : "#0c1117",
                  borderColor: service.highlight
                    ? "rgba(59,130,246,0.2)"
                    : "#1a2332",
                }}
              >
                {/* Top accent line on highlight */}
                {service.highlight && (
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
                )}

                {/* Category + icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="p-2.5 rounded-lg"
                      style={{
                        background: service.highlight
                          ? "rgba(59,130,246,0.14)"
                          : "#111927",
                        color: service.highlight ? "#60a5fa" : "#4a6580",
                      }}
                    >
                      {service.icon}
                    </div>
                    <span
                      className="text-[11px] font-mono uppercase tracking-[0.1em]"
                      style={{
                        color: service.highlight ? "#60a5fa" : "#3d5165",
                      }}
                    >
                      {service.category}
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="w-4 h-4 text-[#1a2332] group-hover:text-[#2d3f54] transition-colors"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Headline */}
                <h3 className="text-[16px] font-medium text-[#cbd5e1] leading-snug mb-3">
                  {service.headline}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-[#3d5165] leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                {/* Spec line */}
                <div className="text-[10px] font-mono text-[#2d3f54] mb-4 tracking-wide">
                  {service.spec}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded border"
                      style={{
                        color: "#3d5165",
                        borderColor: "#1a2332",
                        background: "#0a1018",
                      }}
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
