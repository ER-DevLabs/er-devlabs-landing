"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/* ── ER-Iron sidebar nav ── */
const SIDEBAR = [
  { icon: "⊞", label: "Inicio", tab: "inicio" },
  { icon: "◎", label: "Clientes", tab: null },
  { icon: "◈", label: "Seguimientos", tab: "seguimientos" },
  { icon: "◻", label: "Cotizaciones", tab: null },
  { icon: "$", label: "Finanzas", tab: null },
  { icon: "◷", label: "Catálogo", tab: null },
];

const SEGUIMIENTOS = [
  { name: "Ferretería Cascajal", phone: "88291034", estado: "Cotizado", fecha: "2026-05-22", prioridad: "Alta" },
  { name: "Distribuidora Sáenz", phone: "70145892", estado: "Propuesta", fecha: "2026-05-23", prioridad: "Normal" },
  { name: "Hotel Las Palmas", phone: "62003417", estado: "Nuevo", fecha: "2026-05-25", prioridad: "Normal" },
  { name: "Olivia's Café", phone: "85941294", estado: "Cotizado", fecha: "2026-06-01", prioridad: "Normal" },
];

const ESTADO_STYLE: Record<string, { backgroundColor: string; color: string }> = {
  "Cotizado": { backgroundColor: "#fef9c3", color: "#854d0e" },
  "Propuesta": { backgroundColor: "#dbeafe", color: "#1e40af" },
  "Nuevo": { backgroundColor: "#f0fdf4", color: "#166534" },
};

const PLANES = [
  {
    key: "basico",
    label: "BÁSICO",
    price: "Gratis",
    sub: "siempre gratis",
    highlight: false,
    badge: null,
    features: [
      "Clientes ilimitados",
      "Seguimientos con recordatorio",
      "Contacto WhatsApp en 1 clic",
      "Métricas y conversión",
      "Historial de contactos",
      "Soporte por WhatsApp",
    ],
    ia: [],
    cta: "Comenzar gratis",
    ctaStyle: { background: "#f3f4f6", color: "#374151", border: "1px solid #d1d5db" },
  },
  {
    key: "pro",
    label: "PRO",
    price: "₡14,900",
    sub: "por mes · 14 días gratis al activar",
    highlight: true,
    badge: "RECOMENDADO",
    ia: [
      "Mensajes de WhatsApp generados por IA",
      "Sugerencia del siguiente paso",
      "Análisis de engagement: frío / tibio / caliente",
      "Resumen ejecutivo del cliente",
    ],
    features: [
      "Todo el plan Básico",
      "Exportar cartera a Excel",
      "Importar clientes desde CSV / Excel",
      "Meta Lead Ads (próximamente)",
    ],
    cta: "Activar plan →",
    ctaStyle: { background: "#7c3aed", color: "#ffffff" },
  },
  {
    key: "agencia",
    label: "AGENCIA",
    price: "₡49,900",
    sub: "por mes",
    highlight: false,
    badge: "Actual",
    ia: [
      "Todo lo de IA del plan Pro",
      "IA con contexto de notas del equipo",
    ],
    features: [
      "Todo del plan Pro",
      "Hasta 10 asesores en el equipo",
      "Asignar clientes a asesores",
      "Dashboard de equipo con metas",
      "Chat interno entre miembros",
      "Invitar miembros con link",
      "Soporte prioritario (< 24 h)",
    ],
    cta: "Plan actual",
    ctaStyle: { background: "#ffffff", color: "#7c3aed", border: "1px solid #e5e7eb" },
  },
];

type Tab = "inicio" | "seguimientos" | "planes";

function ERIronSidebar({ activeTab }: { activeTab: Tab }) {
  return (
    <div className="w-48 shrink-0 border-r flex flex-col" style={{ background: "#ffffff", borderColor: "#e5e7eb" }}>
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-3.5 border-b" style={{ borderColor: "#e5e7eb" }}>
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
          <rect x="2" y="4" width="18" height="10" rx="3" fill="#8B5CF6" />
          <rect x="12" y="18" width="18" height="10" rx="3" fill="#06B6D4" />
        </svg>
        <div>
          <div className="text-[11px] font-semibold" style={{ color: "#111827" }}>ER DevLabs</div>
          <span className="text-[8px] font-mono px-1.5 py-0.5 rounded-full" style={{ background: "#dcfce7", color: "#166534" }}>Agency</span>
        </div>
      </div>
      {/* Nav */}
      <nav className="flex-1 px-2 py-2 space-y-0.5">
        {SIDEBAR.map((item) => {
          const isActive = item.tab === activeTab || (activeTab === "inicio" && item.tab === "inicio") || (activeTab === "seguimientos" && item.tab === "seguimientos");
          return (
            <div
              key={item.label}
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-[12px] cursor-pointer"
              style={{
                background: item.tab === activeTab ? "#ede9fe" : "transparent",
                color: item.tab === activeTab ? "#7c3aed" : "#6b7280",
                fontWeight: item.tab === activeTab ? 500 : 400,
              }}
            >
              <span className="text-[12px] w-4 text-center" style={{ color: item.tab === activeTab ? "#7c3aed" : "#9ca3af" }}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          );
        })}
      </nav>
      {/* User */}
      <div className="flex items-center gap-2 px-3 py-3 border-t" style={{ borderColor: "#e5e7eb" }}>
        <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-medium" style={{ background: "#ede9fe", color: "#7c3aed" }}>E</div>
        <span className="text-[10px]" style={{ color: "#6b7280" }}>Elias Rodríguez</span>
      </div>
    </div>
  );
}

function InicioDashboard() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ background: "#f3f4f6" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b" style={{ background: "#ffffff", borderColor: "#e5e7eb" }}>
        <span className="text-[14px] font-semibold" style={{ color: "#111827" }}>Dashboard</span>
        <span className="text-[11px]" style={{ color: "#9ca3af" }}>Jueves, 21 de Mayo</span>
      </div>

      <div className="flex-1 overflow-auto px-5 py-4 space-y-4">
        {/* AI Briefing */}
        <div className="rounded-xl p-4" style={{ background: "linear-gradient(135deg, #ede9fe, #dbeafe)", border: "1px solid #c4b5fd" }}>
          <div className="text-[9px] font-mono font-semibold mb-1.5 tracking-widest" style={{ color: "#7c3aed" }}>✦ BRIEFING IA — HOY</div>
          <p className="text-[11px] leading-relaxed" style={{ color: "#3730a3" }}>
            El pipeline presenta 3 oportunidades activas por un total de ₡4,200,000. Se recomienda priorizar el seguimiento a Ferretería Cascajal y cerrar la propuesta de Distribuidora Sáenz esta semana.
          </p>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "SEGUIMIENTOS HOY", value: "3", icon: "⊟", iconBg: "#dbeafe", iconColor: "#2563eb" },
            { label: "PENDIENTES", value: "7", icon: "◷", iconBg: "#fef9c3", iconColor: "#d97706" },
            { label: "ATRASADOS", value: "1", icon: "△", iconBg: "#fee2e2", iconColor: "#dc2626" },
          ].map((m) => (
            <div key={m.label} className="rounded-xl p-3.5" style={{ background: "#ffffff", border: "1px solid #e5e7eb" }}>
              <div className="flex items-start justify-between mb-2">
                <span className="text-[28px] font-bold" style={{ color: "#111827" }}>{m.value}</span>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center text-[14px]" style={{ background: m.iconBg, color: m.iconColor }}>{m.icon}</div>
              </div>
              <div className="text-[9px] font-mono tracking-widest" style={{ color: "#9ca3af" }}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* Financial summary */}
        <div className="rounded-xl p-4" style={{ background: "#ffffff", border: "1px solid #e5e7eb" }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[12px] font-semibold" style={{ color: "#111827" }}>Resumen financiero — este mes</span>
            <span className="text-[11px]" style={{ color: "#7c3aed" }}>Ver detalle →</span>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { label: "INGRESOS", value: "₡2,340,000", bg: "#f0fdf4", text: "#166534", border: "#bbf7d0" },
              { label: "GASTOS", value: "₡890,000", bg: "#fef2f2", text: "#dc2626", border: "#fecaca" },
              { label: "BALANCE", value: "₡1,450,000", bg: "#eff6ff", text: "#1d4ed8", border: "#bfdbfe" },
            ].map((f) => (
              <div key={f.label} className="rounded-xl p-3" style={{ background: f.bg, border: `1px solid ${f.border}` }}>
                <div className="text-[8px] font-mono tracking-widest mb-1" style={{ color: f.text, opacity: 0.8 }}>{f.label}</div>
                <div className="text-[13px] font-bold" style={{ color: f.text }}>{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SeguimientosView() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ background: "#f3f4f6" }}>
      <div className="flex items-center justify-between px-5 py-3 border-b" style={{ background: "#ffffff", borderColor: "#e5e7eb" }}>
        <div>
          <span className="text-[14px] font-semibold" style={{ color: "#111827" }}>Seguimientos</span>
          <p className="text-[10px]" style={{ color: "#9ca3af" }}>4 activos · próximos 7 días</p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium text-white rounded-lg" style={{ background: "#7c3aed" }}>
          + Nuevo seguimiento
        </button>
      </div>

      <div className="flex-1 overflow-auto" style={{ background: "#ffffff" }}>
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b" style={{ borderColor: "#f3f4f6" }}>
              {["Cliente", "Estado", "Fecha", "Prioridad", ""].map((h) => (
                <th key={h} className="text-left px-4 py-2.5 text-[9px] font-mono tracking-widest font-normal" style={{ color: "#9ca3af" }}>{h.toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: "#f9fafb" }}>
            {SEGUIMIENTOS.map((s) => (
              <tr key={s.name} className="hover:bg-gray-50 cursor-pointer">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-semibold shrink-0" style={{ background: "#ede9fe", color: "#7c3aed" }}>
                      {s.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-[12px] font-medium" style={{ color: "#111827" }}>{s.name}</div>
                      <div className="text-[10px]" style={{ color: "#9ca3af" }}>{s.phone}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={ESTADO_STYLE[s.estado]}>
                    {s.estado}
                  </span>
                </td>
                <td className="px-4 py-3 text-[11px] font-mono" style={{ color: "#6b7280" }}>{s.fecha}</td>
                <td className="px-4 py-3">
                  <span className="text-[10px] px-2 py-0.5 rounded" style={{ background: "#f3f4f6", color: "#374151" }}>{s.prioridad}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-lg" style={{ background: "#dcfce7", color: "#166534" }}>WhatsApp</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PlanesView() {
  return (
    <div className="flex-1 overflow-auto px-6 py-5" style={{ background: "#f9fafb" }}>
      <div className="text-center mb-5">
        <div className="text-[13px] font-semibold" style={{ color: "#111827" }}>Elegí tu plan</div>
        <div className="text-[11px]" style={{ color: "#9ca3af" }}>Cambiá o cancelá cuando quieras</div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {PLANES.map((plan) => (
          <div
            key={plan.key}
            className="relative rounded-2xl p-4 flex flex-col"
            style={{
              background: plan.highlight ? "#7c3aed" : "#ffffff",
              border: plan.highlight ? "2px solid #7c3aed" : "1px solid #e5e7eb",
              color: plan.highlight ? "#ffffff" : "#111827",
            }}
          >
            {plan.badge && (
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                <span className="text-[8px] font-mono font-bold px-2.5 py-1 rounded-full"
                  style={{
                    background: plan.highlight ? "#ffffff" : (plan.key === "agencia" ? "#dbeafe" : "#f3f4f6"),
                    color: plan.highlight ? "#7c3aed" : (plan.key === "agencia" ? "#1d4ed8" : "#374151"),
                  }}>
                  {plan.badge}
                </span>
              </div>
            )}
            <div className="text-[9px] font-mono tracking-widest mb-1" style={{ color: plan.highlight ? "#c4b5fd" : "#9ca3af" }}>{plan.label}</div>
            <div className="text-[22px] font-bold mb-0.5" style={{ color: plan.highlight ? "#ffffff" : "#111827" }}>{plan.price}</div>
            <div className="text-[9px] mb-3" style={{ color: plan.highlight ? "#c4b5fd" : "#6b7280" }}>{plan.sub}</div>

            {plan.ia.length > 0 && (
              <div className="mb-2.5">
                <div className="text-[8px] font-mono tracking-widest mb-1.5 flex items-center gap-1" style={{ color: plan.highlight ? "#e9d5ff" : "#7c3aed" }}>
                  ✦ INTELIGENCIA ARTIFICIAL
                </div>
                <ul className="space-y-1">
                  {plan.ia.map((f) => (
                    <li key={f} className="flex items-start gap-1.5 text-[10px]" style={{ color: plan.highlight ? "#ede9fe" : "#374151" }}>
                      <span className="mt-0.5 shrink-0" style={{ color: plan.highlight ? "#c4b5fd" : "#7c3aed" }}>✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <ul className="space-y-1 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-1.5 text-[10px]" style={{ color: plan.highlight ? "#e9d5ff" : "#6b7280" }}>
                  <span className="mt-0.5 shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <button className="mt-4 w-full py-2 text-[11px] font-semibold rounded-xl transition-all" style={plan.ctaStyle}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductVisuals() {
  const [activeTab, setActiveTab] = useState<Tab>("inicio");

  return (
    <section id="product" className="relative py-28 overflow-hidden">
      <div className="section-divider" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.05), transparent 65%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a2332] bg-[#0c1117] mb-6">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#8B5CF6" }} />
            <span className="text-[10px] font-mono text-[#3d5165] tracking-[0.14em] uppercase">Nuestro producto · er-iron.com</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-[40px] font-semibold text-[#f1f5f9] tracking-[-0.02em] leading-tight max-w-xl">
              ER-Iron — CRM con IA{" "}
              <span className="text-[#5a7191]">para equipos comerciales.</span>
            </h2>
            <div className="sm:text-right">
              <p className="text-[13px] text-[#3d5165] max-w-xs leading-relaxed">
                Lo construimos nosotros. Este es el nivel de software que entregamos a nuestros clientes.
              </p>
              <a href="https://er-iron.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-2 text-[12px] font-mono"
                style={{ color: "#8B5CF6" }}>
                er-iron.com
                <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3"><path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex gap-1 p-1 rounded-xl border border-[#1a2332] bg-[#0a1018]">
            {([
              { key: "inicio", label: "Dashboard" },
              { key: "seguimientos", label: "Seguimientos" },
              { key: "planes", label: "Planes de precio" },
            ] as { key: Tab; label: string }[]).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                style={{
                  background: activeTab === tab.key ? "#1a2332" : "transparent",
                  color: activeTab === tab.key ? "#cbd5e1" : "#3d5165",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Browser frame */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-[#1a2332] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
          style={{ background: "#070c12" }}
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-3 px-5 py-3.5 border-b border-[#1a2332]" style={{ background: "#0a1018" }}>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]/40 border border-[#ef4444]/20" />
              <div className="w-3 h-3 rounded-full bg-[#f59e0b]/40 border border-[#f59e0b]/20" />
              <div className="w-3 h-3 rounded-full bg-[#10b981]/40 border border-[#10b981]/20" />
            </div>
            <div className="flex-1 ml-2">
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#0c1117] border border-[#1a2332] text-[11px] font-mono text-[#3d5165] max-w-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500/60 shrink-0" />
                app.er-iron.com/{activeTab === "inicio" ? "inicio" : activeTab === "seguimientos" ? "seguimientos" : "planes"}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-emerald-500/90 bg-emerald-500/10 border border-emerald-500/15 px-2 py-0.5 rounded-full">SSL</span>
            </div>
          </div>

          {/* App content — light theme */}
          <div className="flex h-[560px]">
            <ERIronSidebar activeTab={activeTab} />
            {activeTab === "inicio" && <InicioDashboard />}
            {activeTab === "seguimientos" && <SeguimientosView />}
            {activeTab === "planes" && <PlanesView />}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
