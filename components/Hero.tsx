"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const DEPLOYMENTS = [
  { project: "Ferretería Don Carlos", domain: "carlosferreteria.cr", fw: "Next.js", status: "live", commit: "a9f3c1d", ago: "hace 2h" },
  { project: "Boutique Elena", domain: "boutiqueelena.com", fw: "Shopify", status: "live", commit: "b7e92fa", ago: "hace 1d" },
  { project: "TallerMec Pro", domain: "tallermecpro.cr", fw: "React", status: "building", commit: "c3d18e2", ago: "ahora" },
  { project: "Inmob. Pacífico", domain: "inmopacifico.com", fw: "WordPress", status: "live", commit: "f1a6b93", ago: "hace 3d" },
  { project: "RestaurantApp CR", domain: "restaurantapp.cr", fw: "Node.js", status: "preview", commit: "e0c7a44", ago: "hace 5h" },
];

const VITALS = [
  { key: "LCP", value: "0.8s", score: 92, label: "Largest Contentful Paint" },
  { key: "CLS", value: "0.01", score: 98, label: "Cumulative Layout Shift" },
  { key: "INP", value: "48ms", score: 89, label: "Interaction to Next Paint" },
];

const QUEUE = [
  { name: "Deploy · ferretería (main)", status: "running", pct: 74 },
  { name: "Review PR · boutique landing", status: "queued", pct: 0 },
  { name: "Migración DB · tallermec", status: "running", pct: 42 },
  { name: "Backup automático · srv-01", status: "done", pct: 100 },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "live")
    return (
      <span className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
        <span className="text-[10px] font-mono text-emerald-400">Live</span>
      </span>
    );
  if (status === "building")
    return (
      <span className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse-dot" />
        <span className="text-[10px] font-mono text-violet-400">Building</span>
      </span>
    );
  return (
    <span className="flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
      <span className="text-[10px] font-mono text-cyan-400">Preview</span>
    </span>
  );
}

function FwBadge({ fw }: { fw: string }) {
  const color = fw === "Next.js" ? "#94a3b8" : fw === "Shopify" ? "#95bf47" : fw === "React" ? "#61dafb" : fw === "WordPress" ? "#21759b" : "#f59e0b";
  return (
    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded border" style={{ color, borderColor: color + "30", background: color + "10" }}>
      {fw}
    </span>
  );
}

export default function Hero() {
  const [activeDeploy, setActiveDeploy] = useState<number | null>(null);
  const buildRef = useRef(0);

  useEffect(() => {
    const t = setInterval(() => {
      buildRef.current = (buildRef.current + 1) % QUEUE.length;
    }, 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen pt-14 overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.07) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-start">

          {/* ── LEFT ── */}
          <div className="lg:col-span-5 space-y-9 lg:pt-8">
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

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-semibold text-[#f1f5f9] leading-[1.08] tracking-[-0.02em]">
                Construimos el software que hace crecer{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(135deg, #a78bfa 0%, #8B5CF6 40%, #06B6D4 100%)" }}
                >
                  tu negocio.
                </span>
              </h1>
            </motion.div>

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
                  <div className="text-[22px] font-semibold text-[#f1f5f9] tracking-tight">{s.value}</div>
                  <div className="text-[11px] text-[#3d5165] mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Dashboard panels ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 grid grid-cols-2 gap-3"
          >
            {/* Deployments table */}
            <div className="col-span-2 panel overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1a2332]">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
                  <span className="text-[11px] font-mono text-[#64748b] tracking-[0.14em] uppercase">Proyectos activos</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-[#2d3f54]">erdevlabs / dashboard</span>
                  <span className="text-[10px] font-mono text-emerald-500/90 bg-emerald-500/10 border border-emerald-500/15 px-2 py-0.5 rounded-full">
                    {DEPLOYMENTS.filter(d => d.status === "live").length} live
                  </span>
                </div>
              </div>

              {/* Table header */}
              <div className="grid grid-cols-[1fr_90px_80px_68px] gap-0 px-4 py-1.5 border-b border-[#0f1924]">
                {["Proyecto", "Framework", "Estado", "Commit"].map((h) => (
                  <span key={h} className="text-[9px] font-mono text-[#2d3f54] uppercase tracking-widest">{h}</span>
                ))}
              </div>

              {/* Table rows */}
              <div className="divide-y divide-[#0f1924]">
                {DEPLOYMENTS.map((dep, i) => (
                  <motion.div
                    key={dep.project}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.06 }}
                    className="grid grid-cols-[1fr_90px_80px_68px] gap-0 px-4 py-2.5 hover:bg-[#0f1924]/60 transition-colors cursor-default"
                    onMouseEnter={() => setActiveDeploy(i)}
                    onMouseLeave={() => setActiveDeploy(null)}
                  >
                    <div className="min-w-0">
                      <div className="text-[12px] text-[#94a3b8] truncate">{dep.project}</div>
                      <div className="text-[10px] font-mono text-[#2d3f54] truncate">{dep.domain}</div>
                    </div>
                    <div className="flex items-center"><FwBadge fw={dep.fw} /></div>
                    <div className="flex items-center"><StatusBadge status={dep.status} /></div>
                    <div className="flex items-center">
                      <span className="text-[10px] font-mono text-[#2d3f54]">{dep.commit}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Core Web Vitals */}
            <div className="panel overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1a2332]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-mono text-[#64748b] tracking-[0.14em] uppercase">Web Vitals</span>
                </div>
                <span className="text-[10px] font-mono text-[#2d3f54]">promedio clientes</span>
              </div>
              <div className="p-4 space-y-4">
                {VITALS.map((v, i) => (
                  <motion.div
                    key={v.key}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-[#64748b]">{v.key}</span>
                        <span className="text-[10px] font-semibold text-[#e2e8f0]">{v.value}</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400">{v.score}</span>
                    </div>
                    <div className="h-1 rounded-full bg-[#0f1924] overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, #10b981, #34d399)" }}
                        initial={{ width: 0 }}
                        animate={{ width: `${v.score}%` }}
                        transition={{ duration: 1.1, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
                <div className="pt-1 border-t border-[#0f1924]">
                  <span className="text-[10px] font-mono text-[#2d3f54]">Google PageSpeed · Core Web Vitals</span>
                </div>
              </div>
            </div>

            {/* Automation Queue */}
            <div className="panel overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1a2332]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse-dot" style={{ animationDelay: "0.4s" }} />
                  <span className="text-[11px] font-mono text-[#64748b] tracking-[0.14em] uppercase">Cola de tareas</span>
                </div>
                <span className="text-[10px] font-mono text-[#2d3f54]">{QUEUE.filter(q => q.status !== "done").length} pendientes</span>
              </div>
              <div className="p-4 space-y-3.5">
                {QUEUE.map((t, i) => {
                  const color = t.status === "done" ? "#10b981" : t.status === "running" ? "#8B5CF6" : "#1e2d3f";
                  const labelColor = t.status === "done" ? "#10b981" : t.status === "running" ? "#a78bfa" : "#3d5165";
                  return (
                    <div key={t.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] text-[#5a7191] truncate">{t.name}</span>
                        <span className="text-[10px] font-mono ml-2 shrink-0" style={{ color: labelColor }}>
                          {t.status}
                        </span>
                      </div>
                      <div className="h-0.5 rounded-full bg-[#0f1924] overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${t.pct}%` }}
                          transition={{ duration: 1.2, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#070a0f] to-transparent pointer-events-none" />
    </section>
  );
}
