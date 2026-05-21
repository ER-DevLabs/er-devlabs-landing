"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const INPUTS = [
  {
    id: "crm",
    label: "CRM Data",
    sub: "Contacts · Deals · Pipeline",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
        <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 17c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "webhooks",
    label: "Webhooks & APIs",
    sub: "External Events · REST",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
        <path d="M6 10h8M10 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    id: "forms",
    label: "Forms & Inputs",
    sub: "Lead Capture · Submissions",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 7h8M6 10h5M6 13h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

const CORE = [
  {
    id: "engine",
    label: "Automation Engine",
    sub: "Process Orchestration",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.41 1.41M14.37 14.37l1.41 1.41M4.22 15.78l1.41-1.41M14.37 5.63l1.41-1.41" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    accent: true,
  },
  {
    id: "db",
    label: "Database Layer",
    sub: "PostgreSQL · Redis · S3",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
        <ellipse cx="10" cy="6" rx="7" ry="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 6v4c0 1.38 3.134 2.5 7 2.5S17 11.38 17 10V6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 10v4c0 1.38 3.134 2.5 7 2.5S17 15.38 17 14v-4" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    id: "queue",
    label: "Task Queue",
    sub: "CRON · Jobs · Events",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
        <rect x="3" y="4" width="14" height="3" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <rect x="3" y="9" width="10" height="3" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <rect x="3" y="14" width="7" height="3" rx="1" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];

const OUTPUTS = [
  {
    id: "dashboards",
    label: "Dashboards",
    sub: "Analytics · Reports · KPIs",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
        <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    label: "WhatsApp & Messaging",
    sub: "Alerts · Notifications · Bots",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
        <path d="M10 2C5.58 2 2 5.58 2 10c0 1.47.38 2.85 1.06 4.05L2 18l4.1-1.04A7.94 7.94 0 0010 18c4.42 0 8-3.58 8-8s-3.58-8-8-8z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 9.5c.56 1.5 1.56 2.5 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "integrations",
    label: "Integrations",
    sub: "Stripe · Slack · Gmail · Zapier",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
        <circle cx="5" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="15" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="5" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="15" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7.5 5h5M5 7.5v5M15 7.5v5M7.5 15h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

function FlowNode({
  data,
  delay = 0,
  accent = false,
}: {
  data: (typeof INPUTS)[number] & { accent?: boolean };
  delay?: number;
  accent?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay }}
      className="relative"
    >
      <div
        className="group flex items-start gap-3 p-4 rounded-xl border transition-all duration-200 cursor-default"
        style={{
          background: accent ? "rgba(59,130,246,0.06)" : "#0c1117",
          borderColor: accent ? "rgba(59,130,246,0.25)" : "#1a2332",
        }}
      >
        <div
          className="mt-0.5 p-2 rounded-lg shrink-0"
          style={{
            background: accent ? "rgba(59,130,246,0.15)" : "#111927",
            color: accent ? "#60a5fa" : "#64748b",
          }}
        >
          {data.icon}
        </div>
        <div className="min-w-0">
          <div
            className="text-[13px] font-medium leading-snug"
            style={{ color: accent ? "#93c5fd" : "#cbd5e1" }}
          >
            {data.label}
          </div>
          <div className="text-[11px] text-[#3d5165] mt-0.5 leading-snug">
            {data.sub}
          </div>
        </div>
        {accent && (
          <div className="absolute -top-px left-4 right-4 h-px bg-blue-500/30" />
        )}
      </div>
    </motion.div>
  );
}

function FlowConnector({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="hidden lg:flex flex-col justify-around py-6 px-2"
      style={{ minHeight: "280px" }}
    >
      {[0, 1, 2].map((i) => (
        <div key={i} className="relative flex items-center h-8">
          {/* Dashed track */}
          <div
            className="absolute inset-y-1/2 -translate-y-1/2 left-0 right-0 h-px"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #1a2332 0, #1a2332 4px, transparent 4px, transparent 12px)",
            }}
          />
          {/* Animated packets */}
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-blue-500/60"
            style={{
              animation: `flow-right 2.4s linear ${delay + i * 0.8}s infinite`,
              top: "50%",
              marginTop: "-3px",
            }}
          />
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-blue-400/40"
            style={{
              animation: `flow-right 2.4s linear ${delay + i * 0.8 + 1.2}s infinite`,
              top: "50%",
              marginTop: "-3px",
            }}
          />
          {/* Arrow head */}
          <div className="absolute right-0 translate-x-1">
            <svg viewBox="0 0 8 8" fill="none" className="w-2 h-2">
              <path
                d="M1 1l6 3-6 3"
                stroke="#2d3f54"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default function SystemFlow() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="flow" className="relative py-28 overflow-hidden">
      <div className="section-divider" />

      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-lines opacity-40" />

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
              System Architecture
            </span>
          </div>
          <h2 className="text-3xl sm:text-[40px] font-semibold text-[#f1f5f9] tracking-[-0.02em] mb-5 leading-tight">
            Your entire operational stack,{" "}
            <span className="text-[#5a7191]">connected.</span>
          </h2>
          <p className="text-[15px] text-[#4a6580] max-w-lg mx-auto leading-relaxed">
            Every component works in concert — from data intake to automation
            to reporting. A unified operational layer your whole team relies on.
          </p>
        </motion.div>

        {/* Flow diagram */}
        <div className="grid lg:grid-cols-[1fr_56px_1fr_56px_1fr] gap-0 items-center">
          {/* Column 1: Inputs */}
          <div className="space-y-3">
            <div className="text-center mb-5">
              <span className="text-[9px] font-mono text-[#2d3f54] tracking-[0.18em] uppercase">
                Input Sources
              </span>
            </div>
            {INPUTS.map((node, i) => (
              <FlowNode key={node.id} data={node} delay={i * 0.08} />
            ))}
          </div>

          {/* Connector 1 */}
          <FlowConnector delay={0.3} />

          {/* Column 2: Core */}
          <div className="space-y-3">
            <div className="text-center mb-5">
              <span className="text-[9px] font-mono text-[#2d3f54] tracking-[0.18em] uppercase">
                Core Systems
              </span>
            </div>
            {CORE.map((node, i) => (
              <FlowNode
                key={node.id}
                data={node}
                delay={0.15 + i * 0.08}
                accent={node.accent}
              />
            ))}
          </div>

          {/* Connector 2 */}
          <FlowConnector delay={0.5} />

          {/* Column 3: Outputs */}
          <div className="space-y-3">
            <div className="text-center mb-5">
              <span className="text-[9px] font-mono text-[#2d3f54] tracking-[0.18em] uppercase">
                Output Systems
              </span>
            </div>
            {OUTPUTS.map((node, i) => (
              <FlowNode key={node.id} data={node} delay={0.3 + i * 0.08} />
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px border border-[#1a2332] rounded-2xl overflow-hidden"
          style={{ background: "#1a2332" }}
        >
          {[
            { value: "<50ms", label: "Avg. API latency" },
            { value: "Event-driven", label: "Architecture pattern" },
            { value: "Zero-downtime", label: "Deployment strategy" },
            { value: "E2E encrypted", label: "Data in transit" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-1 px-8 py-6"
              style={{ background: "#0c1117" }}
            >
              <div className="text-[15px] font-semibold text-[#cbd5e1] tracking-tight">
                {item.value}
              </div>
              <div className="text-[11px] text-[#3d5165]">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
