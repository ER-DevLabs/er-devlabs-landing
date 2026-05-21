"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PILLARS = [
  {
    id: "api-first",
    label: "API-First Design",
    description:
      "Every system we build exposes clean, versioned APIs. Your data and logic are always accessible — for dashboards, mobile apps, or third-party integrations.",
    spec: "REST · OpenAPI · Webhooks",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
        <path d="M6 10h8M4 6l-3 4 3 4M16 6l3 4-3 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "event-driven",
    label: "Event-Driven Architecture",
    description:
      "Systems communicate through events, not polling. This enables real-time data flow, decoupled services, and automation that reacts instantly to what's happening.",
    spec: "Pub/Sub · Queues · Real-time",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
        <path d="M10 3v3M10 14v3M3 10h3M14 10h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5.64 5.64l2.12 2.12M12.24 12.24l2.12 2.12M5.64 14.36l2.12-2.12M12.24 7.76l2.12-2.12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "zero-downtime",
    label: "Zero-Downtime Deployments",
    description:
      "Deployments happen without interruption. Blue-green switching, health-checked rollouts, and instant rollbacks mean your team never feels a deploy.",
    spec: "Docker · CI/CD · Health checks",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
        <path d="M10 3l7 4v5.5c0 2.5-2.5 4.5-7 6-4.5-1.5-7-3.5-7-6V7l7-4z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "rbac",
    label: "Role-Based Access Control",
    description:
      "Granular permissions at every level. Users see only what they need to see, admins manage access in real-time, and every action is logged.",
    spec: "RBAC · Audit logs · SSO",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
        <rect x="3" y="8" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6.5 8V6a3.5 3.5 0 0 1 7 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="10" cy="13" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "observability",
    label: "Full Observability",
    description:
      "Logs, metrics, and traces from every component. You'll know exactly what's happening in your system — not just when something breaks, but before.",
    spec: "Structured logs · Metrics · Alerts",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
        <path d="M2 14l4-4 3 3 4-5 5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    id: "scalable",
    label: "Designed to Scale",
    description:
      "From 10 users to 10,000 — the same codebase handles both. Horizontal scaling, database indexing, and caching layers are part of the foundation, not afterthoughts.",
    spec: "Horizontal scaling · CDN · Edge",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
        <path d="M10 3l3.5 6h-7L10 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M4 12h5v5H4v-5zM11 12h5v5h-5v-5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const PROCESS_STEPS = [
  { num: "01", label: "Scope & Architecture", desc: "We map your processes, define data models, and design the system architecture before writing a single line." },
  { num: "02", label: "Iterative Build", desc: "Two-week sprints with live previews. You're always looking at real, running software — not mockups." },
  { num: "03", label: "Integration & Testing", desc: "End-to-end tests, load testing, and integration validation against your actual business data." },
  { num: "04", label: "Deploy & Handoff", desc: "Production deployment with full documentation, monitoring setup, and knowledge transfer to your team." },
];

export default function EngineeringApproach() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="engineering" className="relative py-28 overflow-hidden">
      <div className="section-divider" />
      <div className="absolute inset-0 grid-lines opacity-30" />

      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.04), transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a2332] bg-[#0c1117] mb-6">
            <span className="text-[10px] font-mono text-[#3d5165] tracking-[0.14em] uppercase">
              How We Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-[40px] font-semibold text-[#f1f5f9] tracking-[-0.02em] mb-5 leading-tight">
            Engineering principles we{" "}
            <span className="text-[#5a7191]">never compromise on.</span>
          </h2>
          <p className="text-[15px] text-[#4a6580] max-w-lg mx-auto leading-relaxed">
            Every system we deliver is built on a consistent set of engineering principles.
            Not best-effort — built in from day one.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.05 + i * 0.06 }}
              className="group flex flex-col gap-4 p-5 rounded-xl border border-[#1a2332] bg-[#0c1117] hover:border-[#2d3f54] transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="p-2.5 rounded-lg bg-[#111927] text-[#4a6580] group-hover:text-[#64748b] transition-colors">
                  {pillar.icon}
                </div>
                <span className="text-[10px] font-mono text-[#2d3f54] mt-2.5">
                  {pillar.spec}
                </span>
              </div>
              <div>
                <h3 className="text-[14px] font-medium text-[#94a3b8] mb-2">
                  {pillar.label}
                </h3>
                <p className="text-[12px] text-[#3d5165] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-[#cbd5e1] tracking-tight mb-2">
              Our delivery process
            </h3>
            <p className="text-[13px] text-[#3d5165]">
              Predictable. Collaborative. No surprises.
            </p>
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-px" style={{
              backgroundImage: "repeating-linear-gradient(90deg, #1a2332 0, #1a2332 6px, transparent 6px, transparent 16px)"
            }} />

            {PROCESS_STEPS.map((step, i) => (
              <div key={step.num} className="relative flex flex-col items-center text-center px-4 pb-0">
                <div className="relative z-10 w-[72px] h-[72px] rounded-2xl border border-[#1a2332] bg-[#0c1117] flex flex-col items-center justify-center mb-5">
                  <span className="text-[11px] font-mono text-[#2d3f54]">{step.num}</span>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 translate-x-full">
                      <svg viewBox="0 0 8 8" fill="none" className="w-2 h-2 -ml-1">
                        <path d="M1 4h6M5 1l3 3-3 3" stroke="#2d3f54" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
                <h4 className="text-[13px] font-medium text-[#94a3b8] mb-2">{step.label}</h4>
                <p className="text-[12px] text-[#3d5165] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
