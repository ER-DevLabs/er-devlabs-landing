"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface LogEntry {
  id: number;
  method: HttpMethod;
  path: string;
  status: number;
  ms: number;
  ts: string;
}

const LOG_POOL: { method: HttpMethod; path: string; status: number; ms: number }[] = [
  { method: "POST", path: "/api/checkout/session", status: 201, ms: 18 },
  { method: "GET", path: "/api/products?cat=ropa", status: 200, ms: 12 },
  { method: "PUT", path: "/api/orders/1148/status", status: 200, ms: 9 },
  { method: "POST", path: "/api/contact/form", status: 201, ms: 6 },
  { method: "GET", path: "/api/dashboard/stats", status: 200, ms: 22 },
  { method: "POST", path: "/api/newsletter/subscribe", status: 201, ms: 5 },
  { method: "PATCH", path: "/api/products/447", status: 200, ms: 11 },
  { method: "GET", path: "/api/cart/session/a9f2", status: 200, ms: 8 },
  { method: "POST", path: "/api/webhook/payment", status: 200, ms: 7 },
  { method: "DELETE", path: "/api/cart/item/88", status: 204, ms: 4 },
  { method: "GET", path: "/api/analytics/weekly", status: 200, ms: 31 },
  { method: "PUT", path: "/api/inventory/update", status: 200, ms: 14 },
];

const METHOD_COLORS: Record<HttpMethod, string> = {
  GET: "#60a5fa",
  POST: "#34d399",
  PUT: "#a78bfa",
  DELETE: "#f87171",
  PATCH: "#fbbf24",
};

function statusColor(s: number) {
  if (s < 300) return "#10b981";
  if (s < 400) return "#f59e0b";
  return "#ef4444";
}

function nowTime() {
  return new Date().toTimeString().slice(0, 8);
}

const QUEUE_TASKS = [
  { name: "Deploy cliente A · ecommerce", status: "running", progress: 74, color: "#8B5CF6" },
  { name: "Review PR · landing page B", status: "queued", progress: 0, color: "#1a2332" },
  { name: "Migración DB · cliente C", status: "running", progress: 42, color: "#06B6D4" },
  { name: "Backup automático · servidor 1", status: "done", progress: 100, color: "#10b981" },
];

const METRICS = [
  { label: "Proyectos activos", value: "12", trend: "+2 este mes" },
  { label: "Uptime promedio", value: "99.97%", trend: null },
  { label: "Clientes satisfechos", value: "50+", trend: null },
];

const DEPLOY_STAGES = [
  { name: "Build", status: "done" },
  { name: "Tests", status: "done" },
  { name: "Staging", status: "done" },
  { name: "Producción", status: "running" },
];

export default function Hero() {
  const indexRef = useRef(0);
  const [logs, setLogs] = useState<LogEntry[]>(() =>
    LOG_POOL.slice(0, 6).map((l, i) => ({ ...l, id: i, ts: "09:41:22" }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const raw = LOG_POOL[indexRef.current % LOG_POOL.length];
      indexRef.current += 1;
      setLogs((prev) => [...prev.slice(-5), { ...raw, id: Date.now(), ts: nowTime() }]);
    }, 1700);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-14 overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-start">
          {/* ── LEFT ── */}
          <div className="lg:col-span-5 space-y-9 lg:pt-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[#1a2332] bg-[#0c1117]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
              <span className="text-[10px] font-mono text-[#475569] tracking-[0.12em] uppercase">
                Desarrollo · Consultoría · E-commerce
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-semibold text-[#f1f5f9] leading-[1.08] tracking-[-0.02em]">
                Construimos el software que hace crecer{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #a78bfa 0%, #8B5CF6 40%, #06B6D4 100%)",
                  }}
                >
                  tu negocio.
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[15px] leading-relaxed text-[#5a7191] max-w-[420px]"
            >
              Webs profesionales, tiendas online y sistemas a medida —
              soluciones digitales diseñadas para adaptarse y escalar con
              cada empresa.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-medium rounded-lg transition-all"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #0891b2)",
                  boxShadow: "0 4px 24px rgba(139,92,246,0.25)",
                }}
              >
                Iniciar Proyecto
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#1a2332] hover:border-[#2d3f54] text-[#5a7191] hover:text-[#94a3b8] text-sm font-medium rounded-lg transition-all"
              >
                Ver Servicios
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center gap-8 pt-6 border-t border-[#1a2332]"
            >
              {[
                { value: "50+", label: "Proyectos entregados" },
                { value: "5+", label: "Años de experiencia" },
                { value: "100%", label: "Satisfacción garantizada" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-[22px] font-semibold text-[#f1f5f9] tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-[11px] text-[#3d5165] mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Live panels ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 grid grid-cols-2 gap-3"
          >
            {/* API Log */}
            <div className="col-span-2 panel overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1a2332]">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
                  <span className="text-[11px] font-mono text-[#64748b] tracking-[0.14em] uppercase">
                    API Gateway
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-[#2d3f54]">api.erdevlabs.com</span>
                  <span className="text-[10px] font-mono text-emerald-500/90 bg-emerald-500/10 border border-emerald-500/15 px-2 py-0.5 rounded-full">
                    LIVE
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-1.5 border-b border-[#0f1924]">
                {["HORA", "MÉTODO", "ENDPOINT", "STATUS", "LAT"].map((h, i) => (
                  <span
                    key={h}
                    className="text-[9px] font-mono text-[#2d3f54] uppercase tracking-widest"
                    style={{ width: i === 0 ? 56 : i === 1 ? 56 : i === 2 ? undefined : i === 3 ? 32 : 40, flex: i === 2 ? 1 : undefined, textAlign: i >= 3 ? "right" : undefined }}
                  >
                    {h}
                  </span>
                ))}
              </div>
              <div className="px-2 py-1.5 space-y-0.5 min-h-[156px]">
                <AnimatePresence initial={false}>
                  {logs.map((log) => (
                    <motion.div
                      key={log.id}
                      initial={{ opacity: 0, backgroundColor: "rgba(139,92,246,0.08)" }}
                      animate={{ opacity: 1, backgroundColor: "rgba(139,92,246,0)" }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex items-center gap-3 px-2 py-1 rounded-md"
                    >
                      <span className="text-[10px] font-mono text-[#2d3f54] shrink-0 w-14 tabular-nums">{log.ts}</span>
                      <span
                        className="text-[10px] font-mono font-medium shrink-0 w-14 text-center rounded px-1 py-0.5"
                        style={{ color: METHOD_COLORS[log.method], background: METHOD_COLORS[log.method] + "18" }}
                      >
                        {log.method}
                      </span>
                      <span className="text-[11px] font-mono text-[#4a6580] truncate flex-1">{log.path}</span>
                      <span className="shrink-0 text-[10px] font-mono font-medium tabular-nums w-8 text-right" style={{ color: statusColor(log.status) }}>{log.status}</span>
                      <span className="shrink-0 text-[10px] font-mono text-[#334155] tabular-nums w-10 text-right">{log.ms}ms</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Métricas */}
            <div className="panel overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1a2332]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-mono text-[#64748b] tracking-[0.14em] uppercase">Estado</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-600">Operacional</span>
              </div>
              <div className="p-4 space-y-5">
                {METRICS.map((m) => (
                  <div key={m.label}>
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-[10px] text-[#3d5165] font-mono uppercase tracking-[0.1em]">{m.label}</span>
                      {m.trend && <span className="text-[10px] text-emerald-500 font-mono">{m.trend}</span>}
                    </div>
                    <span className="text-xl font-semibold text-[#e2e8f0] tabular-nums tracking-tight">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cola de tareas */}
            <div className="panel overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1a2332]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-violet-500" />
                  <span className="text-[11px] font-mono text-[#64748b] tracking-[0.14em] uppercase">Cola de tareas</span>
                </div>
                <span className="text-[10px] font-mono text-[#2d3f54]">4 tareas</span>
              </div>
              <div className="p-4 space-y-4">
                {QUEUE_TASKS.map((t) => (
                  <div key={t.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] text-[#5a7191] truncate">{t.name}</span>
                      <span className="text-[10px] font-mono ml-2 shrink-0" style={{ color: t.status === "done" ? "#10b981" : t.status === "running" ? "#a78bfa" : "#3d5165" }}>
                        {t.status}
                      </span>
                    </div>
                    <div className="h-1 rounded-full bg-[#0f1924] overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: t.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${t.progress}%` }}
                        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pipeline de deploy */}
            <div className="col-span-2 panel overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1a2332]">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse-dot" style={{ animationDelay: "0.5s" }} />
                  <span className="text-[11px] font-mono text-[#64748b] tracking-[0.14em] uppercase">Pipeline de Despliegue</span>
                </div>
                <span className="text-[10px] font-mono text-[#2d3f54]">main · commit e7b3a12</span>
              </div>
              <div className="px-6 py-4 flex items-center gap-0">
                {DEPLOY_STAGES.map((stage, i) => (
                  <div key={stage.name} className="flex items-center flex-1 min-w-0">
                    <div className="flex flex-col items-center gap-1.5 flex-1">
                      <div
                        className="w-7 h-7 rounded-full border-2 flex items-center justify-center"
                        style={{
                          borderColor: stage.status === "done" ? "#10b981" : stage.status === "running" ? "#8B5CF6" : "#1a2332",
                          background: stage.status === "done" ? "rgba(16,185,129,0.12)" : stage.status === "running" ? "rgba(139,92,246,0.12)" : "#0c1117",
                        }}
                      >
                        {stage.status === "done" && (
                          <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                            <path d="M2 6l3 3 5-5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                        {stage.status === "running" && (
                          <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                        )}
                      </div>
                      <span className="text-[10px] font-mono" style={{ color: stage.status === "done" ? "#10b981" : stage.status === "running" ? "#a78bfa" : "#2d3f54" }}>
                        {stage.name}
                      </span>
                    </div>
                    {i < DEPLOY_STAGES.length - 1 && (
                      <div className="flex-1 h-px mx-1 max-w-[40px]" style={{ background: i < 2 ? "#10b981" : "#1a2332" }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#070a0f] to-transparent pointer-events-none" />
    </section>
  );
}
