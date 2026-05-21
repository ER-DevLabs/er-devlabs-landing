"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const INPUTS = [
  {
    id: "req",
    label: "Requerimientos",
    sub: "Ideas · Objetivos · Funcionalidades",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M6 7h8M6 10h5M6 13h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  },
  {
    id: "design",
    label: "Diseño UX/UI",
    sub: "Wireframes · Prototipo · Identidad",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4"/><path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  },
  {
    id: "content",
    label: "Contenido del cliente",
    sub: "Textos · Imágenes · Marca",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.4"/><path d="M4 17c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  },
];

const CORE = [
  {
    id: "dev",
    label: "Desarrollo Full-Stack",
    sub: "Frontend · Backend · Base de datos",
    accent: true,
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><path d="M6 8l-4 4 4 4M14 8l4 4-4 4M11 4l-2 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    id: "integrations",
    label: "Integraciones",
    sub: "Pagos · APIs · Servicios terceros",
    accent: false,
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><circle cx="5" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="15" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="5" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="15" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.4"/><path d="M7.5 5h5M5 7.5v5M15 7.5v5M7.5 15h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  },
  {
    id: "qa",
    label: "Testing & QA",
    sub: "Pruebas · Performance · Seguridad",
    accent: false,
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><path d="M10 3l7 4v5.5c0 2.5-2.5 4.5-7 6-4.5-1.5-7-3.5-7-6V7l7-4z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
];

const OUTPUTS = [
  {
    id: "launch",
    label: "Lanzamiento",
    sub: "Dominio · Hosting · Deploy",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><path d="M10 2l2.5 5H17l-4 3.5 1.5 5.5L10 13l-4.5 3L7 10.5 3 7h4.5L10 2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    id: "admin",
    label: "Panel de Control",
    sub: "Gestión autónoma del cliente",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/></svg>,
  },
  {
    id: "support",
    label: "Soporte Continuo",
    sub: "Actualizaciones · Backups · SLA",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><path d="M10 2C5.58 2 2 5.58 2 10c0 1.47.38 2.85 1.06 4.05L2 18l4.1-1.04A7.94 7.94 0 0010 18c4.42 0 8-3.58 8-8s-3.58-8-8-8z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
];

function FlowNode({
  data,
  delay = 0,
  accent = false,
  accentColor = "#8B5CF6",
}: {
  data: (typeof INPUTS)[number] & { accent?: boolean };
  delay?: number;
  accent?: boolean;
  accentColor?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay }}
    >
      <div
        className="flex items-start gap-3 p-4 rounded-xl border transition-all duration-200 cursor-default"
        style={{
          background: accent ? `${accentColor}08` : "#0c1117",
          borderColor: accent ? `${accentColor}28` : "#1a2332",
        }}
      >
        <div
          className="mt-0.5 p-2 rounded-lg shrink-0"
          style={{
            background: accent ? `${accentColor}18` : "#111927",
            color: accent ? accentColor : "#64748b",
          }}
        >
          {data.icon}
        </div>
        <div className="min-w-0">
          <div className="text-[13px] font-medium leading-snug" style={{ color: accent ? "#e2e8f0" : "#cbd5e1" }}>
            {data.label}
          </div>
          <div className="text-[11px] text-[#3d5165] mt-0.5 leading-snug">{data.sub}</div>
        </div>
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
          <div
            className="absolute inset-y-1/2 -translate-y-1/2 left-0 right-0 h-px"
            style={{ backgroundImage: "repeating-linear-gradient(90deg, #1a2332 0, #1a2332 4px, transparent 4px, transparent 12px)" }}
          />
          <div
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: i % 2 === 0 ? "#8B5CF6" : "#06B6D4",
              opacity: 0.6,
              animation: `flow-right 2.4s linear ${delay + i * 0.8}s infinite`,
              top: "50%",
              marginTop: "-3px",
            }}
          />
          <div
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: i % 2 === 0 ? "#06B6D4" : "#8B5CF6",
              opacity: 0.35,
              animation: `flow-right 2.4s linear ${delay + i * 0.8 + 1.2}s infinite`,
              top: "50%",
              marginTop: "-3px",
            }}
          />
          <div className="absolute right-0 translate-x-1">
            <svg viewBox="0 0 8 8" fill="none" className="w-2 h-2">
              <path d="M1 1l6 3-6 3" stroke="#2d3f54" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.04), transparent 60%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a2332] bg-[#0c1117] mb-6">
            <span className="text-[10px] font-mono text-[#3d5165] tracking-[0.14em] uppercase">Flujo de trabajo</span>
          </div>
          <h2 className="text-3xl sm:text-[40px] font-semibold text-[#f1f5f9] tracking-[-0.02em] mb-5 leading-tight">
            De la idea al producto,{" "}
            <span className="text-[#5a7191]">sin fricción.</span>
          </h2>
          <p className="text-[15px] text-[#4a6580] max-w-lg mx-auto leading-relaxed">
            Un proceso estructurado que garantiza que cada entrega sea puntual, funcional y exactamente lo que acordamos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_56px_1fr_56px_1fr] gap-0 items-center">
          <div className="space-y-3">
            <div className="text-center mb-5">
              <span className="text-[9px] font-mono text-[#2d3f54] tracking-[0.18em] uppercase">Punto de partida</span>
            </div>
            {INPUTS.map((node, i) => <FlowNode key={node.id} data={node} delay={i * 0.08} />)}
          </div>

          <FlowConnector delay={0.3} />

          <div className="space-y-3">
            <div className="text-center mb-5">
              <span className="text-[9px] font-mono text-[#2d3f54] tracking-[0.18em] uppercase">Producción</span>
            </div>
            {CORE.map((node, i) => (
              <FlowNode key={node.id} data={node} delay={0.15 + i * 0.08} accent={node.accent} accentColor="#8B5CF6" />
            ))}
          </div>

          <FlowConnector delay={0.5} />

          <div className="space-y-3">
            <div className="text-center mb-5">
              <span className="text-[9px] font-mono text-[#2d3f54] tracking-[0.18em] uppercase">Resultado</span>
            </div>
            {OUTPUTS.map((node, i) => <FlowNode key={node.id} data={node} delay={0.3 + i * 0.08} />)}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px border border-[#1a2332] rounded-2xl overflow-hidden"
          style={{ background: "#1a2332" }}
        >
          {[
            { value: "< 1 semana", label: "Entrega de prototipo" },
            { value: "Iterativo", label: "Metodología de trabajo" },
            { value: "Cero sorpresas", label: "Presupuesto cerrado" },
            { value: "Post-lanzamiento", label: "Soporte incluido" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1 px-8 py-6" style={{ background: "#0c1117" }}>
              <div className="text-[15px] font-semibold text-[#cbd5e1] tracking-tight">{item.value}</div>
              <div className="text-[11px] text-[#3d5165]">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
