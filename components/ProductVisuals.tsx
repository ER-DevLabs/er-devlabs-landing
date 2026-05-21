"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/* ── E-commerce admin data ── */
const PRODUCTS = [
  { name: "Remera Premium Oversize", sku: "REM-001", price: "$4,900", stock: 42, status: "Activo", sales: 128 },
  { name: "Pantalón Cargo Técnico", sku: "PAN-014", price: "$8,200", stock: 18, status: "Activo", sales: 89 },
  { name: "Buzo Hoodie Unisex", sku: "BUZ-007", price: "$6,500", stock: 0, status: "Sin stock", sales: 204 },
  { name: "Gorra Bordada Logo", sku: "ACC-033", price: "$2,800", stock: 65, status: "Activo", sales: 51 },
  { name: "Campera Rompeviento", sku: "CAM-022", price: "$12,400", stock: 7, status: "Bajo stock", sales: 33 },
];

const ECOM_KPI = [
  { label: "Ventas del mes", value: "$284,000", change: "+24%", up: true },
  { label: "Pedidos hoy", value: "38", change: "+7 vs ayer", up: true },
  { label: "Productos activos", value: "124", change: null, up: true },
  { label: "Tasa conversión", value: "3.2%", change: "+0.4%", up: true },
];

const STATUS_STYLE: Record<string, { color: string }> = {
  "Activo": { color: "#10b981" },
  "Sin stock": { color: "#ef4444" },
  "Bajo stock": { color: "#f59e0b" },
};

/* ── CRM data ── */
const CRM_CONTACTS = [
  { name: "Martina Sosa", company: "Distribuidora Del Sur", status: "Caliente", deal: "$180,000", stage: "Negociación", last: "1h" },
  { name: "Rodrigo Vidal", company: "Constructora Alfa", status: "Activo", deal: "$95,000", stage: "Propuesta", last: "3h" },
  { name: "Luciana Park", company: "Grupo Nómade", status: "Caliente", deal: "$420,000", stage: "Cierre", last: "30m" },
  { name: "Sebastián Roig", company: "Tech Solutions SA", status: "Activo", deal: "$62,000", stage: "Discovery", last: "1d" },
  { name: "Carolina Méndez", company: "Studio Forma", status: "Nuevo", deal: "$38,000", stage: "Outreach", last: "2d" },
];

const STAGE_STYLE: Record<string, { bg: string; text: string }> = {
  "Cierre": { bg: "rgba(16,185,129,0.1)", text: "#10b981" },
  "Negociación": { bg: "rgba(139,92,246,0.1)", text: "#a78bfa" },
  "Propuesta": { bg: "rgba(6,182,212,0.1)", text: "#06B6D4" },
  "Discovery": { bg: "rgba(251,191,36,0.1)", text: "#fbbf24" },
  "Outreach": { bg: "rgba(100,116,139,0.1)", text: "#64748b" },
};

const CONTACT_STATUS_COLOR: Record<string, string> = {
  "Caliente": "#f97316",
  "Activo": "#10b981",
  "Nuevo": "#60a5fa",
};

const SIDEBAR_NAV_ECOM = [
  { icon: "▤", label: "Dashboard", active: false },
  { icon: "◈", label: "Productos", active: true },
  { icon: "◎", label: "Pedidos", active: false },
  { icon: "▦", label: "Clientes", active: false },
  { icon: "⚙", label: "Configuración", active: false },
];

export default function ProductVisuals() {
  const [activeTab, setActiveTab] = useState<"ecommerce" | "crm">("ecommerce");

  return (
    <section id="product" className="relative py-28 overflow-hidden">
      <div className="section-divider" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a2332] bg-[#0c1117] mb-6">
            <span className="text-[10px] font-mono text-[#3d5165] tracking-[0.14em] uppercase">Vista de producto</span>
          </div>
          <h2 className="text-3xl sm:text-[40px] font-semibold text-[#f1f5f9] tracking-[-0.02em] mb-4 leading-tight">
            Software de verdad,{" "}
            <span className="text-[#5a7191]">listo para usar desde el día uno.</span>
          </h2>
          <p className="text-[15px] text-[#4a6580] max-w-lg mx-auto leading-relaxed">
            Paneles de control completos, intuitivos y adaptados a tu flujo de trabajo real — no plantillas genéricas.
          </p>
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
            {(["ecommerce", "crm"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                style={{
                  background: activeTab === tab ? "#1a2332" : "transparent",
                  color: activeTab === tab ? "#cbd5e1" : "#3d5165",
                }}
              >
                {tab === "ecommerce" ? "Tienda Online" : "Sistema CRM"}
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
            <div className="flex-1 flex items-center gap-2 ml-2">
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#0c1117] border border-[#1a2332] text-[11px] font-mono text-[#3d5165] flex-1 max-w-sm">
                <span>
                  admin.{activeTab === "ecommerce" ? "tutienda" : "tuempresa"}.com.ar/{activeTab === "ecommerce" ? "products" : "crm/contacts"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
              <span className="text-[10px] font-mono text-[#2d3f54]">producción</span>
            </div>
          </div>

          {/* App content */}
          {activeTab === "ecommerce" ? (
            <div className="flex h-[580px]">
              {/* Sidebar */}
              <div className="w-52 shrink-0 border-r border-[#1a2332] flex flex-col" style={{ background: "#080e15" }}>
                <div className="flex items-center gap-2.5 px-4 py-3.5 border-b border-[#1a2332]">
                  <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #7c3aed, #0891b2)" }}>
                    <span className="text-[10px] font-bold text-white">T</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[12px] font-medium text-[#94a3b8] truncate">Mi Tienda</div>
                    <div className="text-[10px] text-[#2d3f54]">Panel de control</div>
                  </div>
                </div>
                <nav className="flex-1 px-2 py-3 space-y-0.5">
                  {SIDEBAR_NAV_ECOM.map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[12px] cursor-pointer"
                      style={{ background: item.active ? "rgba(139,92,246,0.1)" : "transparent", color: item.active ? "#a78bfa" : "#3d5165" }}>
                      <span className="text-[13px] w-4 text-center">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </nav>
                <div className="flex items-center gap-2 px-4 py-3 border-t border-[#1a2332]">
                  <div className="w-6 h-6 rounded-full bg-[#1a2332] flex items-center justify-center">
                    <span className="text-[10px] text-[#5a7191]">AD</span>
                  </div>
                  <div className="text-[11px] text-[#3d5165]">Admin</div>
                </div>
              </div>

              {/* Main */}
              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex items-center justify-between px-6 py-3.5 border-b border-[#1a2332]" style={{ background: "#080e15" }}>
                  <div>
                    <h3 className="text-[14px] font-medium text-[#cbd5e1]">Productos</h3>
                    <p className="text-[11px] text-[#2d3f54]">124 productos · 3 con bajo stock</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] text-[#3d5165] border border-[#1a2332] rounded-lg">
                      Exportar
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium text-white rounded-lg"
                      style={{ background: "linear-gradient(135deg, #7c3aed, #0891b2)" }}>
                      + Nuevo producto
                    </button>
                  </div>
                </div>

                {/* KPI row */}
                <div className="grid grid-cols-4 gap-3 px-6 py-4 border-b border-[#1a2332]">
                  {ECOM_KPI.map((kpi) => (
                    <div key={kpi.label} className="bg-[#0c1117] border border-[#1a2332] rounded-xl p-3">
                      <div className="text-[10px] text-[#2d3f54] mb-1.5">{kpi.label}</div>
                      <div className="text-[17px] font-semibold text-[#f1f5f9] tabular-nums tracking-tight">{kpi.value}</div>
                      {kpi.change && (
                        <div className="text-[10px] mt-1" style={{ color: kpi.up ? "#10b981" : "#f97316" }}>{kpi.change}</div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Products table */}
                <div className="flex-1 overflow-auto">
                  <table className="w-full text-[12px]">
                    <thead>
                      <tr className="border-b border-[#1a2332]">
                        {["Producto", "SKU", "Precio", "Stock", "Estado", "Ventas"].map((h) => (
                          <th key={h} className="text-left px-4 py-2.5 text-[10px] font-mono text-[#2d3f54] uppercase tracking-[0.1em] font-normal">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {PRODUCTS.map((p) => (
                        <tr key={p.sku} className="border-b border-[#0f1924] hover:bg-[#0c1117]/60 cursor-pointer">
                          <td className="px-4 py-3 text-[#94a3b8] font-medium">{p.name}</td>
                          <td className="px-4 py-3 font-mono text-[#3d5165] text-[10px]">{p.sku}</td>
                          <td className="px-4 py-3 font-mono text-[#64748b]">{p.price}</td>
                          <td className="px-4 py-3 font-mono text-[#64748b]">{p.stock}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1.5">
                              <div className="w-1.5 h-1.5 rounded-full" style={{ background: STATUS_STYLE[p.status]?.color }} />
                              <span style={{ color: STATUS_STYLE[p.status]?.color }}>{p.status}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-[#4a6580]">{p.sales} uds.</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            /* ── CRM View ── */
            <div className="flex h-[580px]">
              <div className="w-52 shrink-0 border-r border-[#1a2332] flex flex-col" style={{ background: "#080e15" }}>
                <div className="flex items-center gap-2.5 px-4 py-3.5 border-b border-[#1a2332]">
                  <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #7c3aed, #0891b2)" }}>
                    <span className="text-[10px] font-bold text-white">C</span>
                  </div>
                  <div>
                    <div className="text-[12px] font-medium text-[#94a3b8]">Mi CRM</div>
                    <div className="text-[10px] text-[#2d3f54]">Gestión comercial</div>
                  </div>
                </div>
                <nav className="flex-1 px-2 py-3 space-y-0.5">
                  {[
                    { icon: "▤", label: "Dashboard", active: false },
                    { icon: "◈", label: "Contactos", active: true },
                    { icon: "◎", label: "Pipeline", active: false },
                    { icon: "▦", label: "Reportes", active: false },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[12px] cursor-pointer"
                      style={{ background: item.active ? "rgba(6,182,212,0.1)" : "transparent", color: item.active ? "#06B6D4" : "#3d5165" }}>
                      <span className="text-[13px] w-4 text-center">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </nav>
              </div>

              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex items-center justify-between px-6 py-3.5 border-b border-[#1a2332]" style={{ background: "#080e15" }}>
                  <div>
                    <h3 className="text-[14px] font-medium text-[#cbd5e1]">Contactos</h3>
                    <p className="text-[11px] text-[#2d3f54]">5 contactos · $795,000 en pipeline</p>
                  </div>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium text-white rounded-lg"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #0891b2)" }}>
                    + Nuevo contacto
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-3 px-6 py-4 border-b border-[#1a2332]">
                  {[
                    { label: "Total contactos", value: "5", change: "+2 este mes", up: true },
                    { label: "Deals activos", value: "5", change: null, up: true },
                    { label: "Pipeline total", value: "$795K", change: null, up: true },
                    { label: "Tasa de cierre", value: "40%", change: "+5% vs mes anterior", up: true },
                  ].map((kpi) => (
                    <div key={kpi.label} className="bg-[#0c1117] border border-[#1a2332] rounded-xl p-3">
                      <div className="text-[10px] text-[#2d3f54] mb-1.5">{kpi.label}</div>
                      <div className="text-[17px] font-semibold text-[#f1f5f9] tabular-nums tracking-tight">{kpi.value}</div>
                      {kpi.change && <div className="text-[10px] mt-1 text-emerald-500">{kpi.change}</div>}
                    </div>
                  ))}
                </div>

                <div className="flex-1 overflow-auto">
                  <table className="w-full text-[12px]">
                    <thead>
                      <tr className="border-b border-[#1a2332]">
                        {["Contacto", "Empresa", "Estado", "Valor", "Etapa", "Última actividad"].map((h) => (
                          <th key={h} className="text-left px-4 py-2.5 text-[10px] font-mono text-[#2d3f54] uppercase tracking-[0.1em] font-normal">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {CRM_CONTACTS.map((c, i) => (
                        <tr key={c.name} className="border-b border-[#0f1924] hover:bg-[#0c1117]/60 cursor-pointer">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2.5">
                              <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium shrink-0"
                                style={{ background: ["#1d2c4a","#1a2d4a","#1d3461","#192943","#16263d"][i%5], color: ["#a78bfa","#06B6D4","#60a5fa","#34d399","#fbbf24"][i%5] }}>
                                {c.name.split(" ").map(n=>n[0]).join("")}
                              </div>
                              <span className="text-[#94a3b8]">{c.name}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-[#4a6580]">{c.company}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1.5">
                              <div className="w-1.5 h-1.5 rounded-full" style={{ background: CONTACT_STATUS_COLOR[c.status] }} />
                              <span style={{ color: CONTACT_STATUS_COLOR[c.status] }}>{c.status}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 font-mono text-[#64748b]">{c.deal}</td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-0.5 rounded text-[10px] font-medium"
                              style={{ background: STAGE_STYLE[c.stage]?.bg, color: STAGE_STYLE[c.stage]?.text }}>
                              {c.stage}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-[#2d3f54]">Hace {c.last}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
