"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const CRM_CONTACTS = [
  { name: "Sophia Chen", company: "Meridian Capital", status: "Active", deal: "$42,000", stage: "Negotiation", last: "2h ago" },
  { name: "Marcus Webb", company: "Axon Logistics", status: "Active", deal: "$18,500", stage: "Proposal", last: "4h ago" },
  { name: "Priya Nair", company: "SyncOps Inc.", status: "Hot", deal: "$91,000", stage: "Closing", last: "1h ago" },
  { name: "Jordan Ellis", company: "Vault Finance", status: "Active", deal: "$27,000", stage: "Discovery", last: "1d ago" },
  { name: "Ava Lindström", company: "Pinebridge Group", status: "New", deal: "$14,000", stage: "Outreach", last: "3d ago" },
  { name: "Daniel Park", company: "Crestline Media", status: "Active", deal: "$56,000", stage: "Negotiation", last: "6h ago" },
];

const STAGE_COLORS: Record<string, { bg: string; text: string }> = {
  Closing: { bg: "rgba(16,185,129,0.1)", text: "#10b981" },
  Negotiation: { bg: "rgba(59,130,246,0.1)", text: "#60a5fa" },
  Proposal: { bg: "rgba(167,139,250,0.1)", text: "#a78bfa" },
  Discovery: { bg: "rgba(251,191,36,0.1)", text: "#fbbf24" },
  Outreach: { bg: "rgba(100,116,139,0.1)", text: "#64748b" },
};

const STATUS_COLORS: Record<string, string> = {
  Hot: "#f97316",
  Active: "#10b981",
  New: "#60a5fa",
};

const SIDEBAR_NAV = [
  { icon: "▤", label: "Dashboard", active: false },
  { icon: "◈", label: "Contacts", active: true },
  { icon: "◎", label: "Pipeline", active: false },
  { icon: "▦", label: "Analytics", active: false },
  { icon: "⚙", label: "Automation", active: false },
  { icon: "◉", label: "Integrations", active: false },
];

const KPI_CARDS = [
  { label: "Total Contacts", value: "8,432", change: "+124 this month", up: true },
  { label: "Active Deals", value: "247", change: "+18 this week", up: true },
  { label: "Pipeline Value", value: "$2.4M", change: "+$180k vs last month", up: true },
  { label: "Win Rate", value: "34%", change: "-2% vs last month", up: false },
];

const AUTOMATION_FLOWS = [
  { name: "New lead → WhatsApp greeting", runs: "1,204 runs", status: "active" },
  { name: "Deal closed → Invoice generation", runs: "89 runs", status: "active" },
  { name: "Inactive contact → Re-engagement", runs: "340 runs", status: "paused" },
  { name: "Weekly pipeline → Slack summary", runs: "52 runs", status: "active" },
];

export default function ProductVisuals() {
  const [activeTab, setActiveTab] = useState<"crm" | "automation">("crm");

  return (
    <section className="relative py-28 overflow-hidden">
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
            <span className="text-[10px] font-mono text-[#3d5165] tracking-[0.14em] uppercase">
              Product Preview
            </span>
          </div>
          <h2 className="text-3xl sm:text-[40px] font-semibold text-[#f1f5f9] tracking-[-0.02em] mb-4 leading-tight">
            Enterprise-grade software,{" "}
            <span className="text-[#5a7191]">built for your exact workflow.</span>
          </h2>
          <p className="text-[15px] text-[#4a6580] max-w-lg mx-auto leading-relaxed">
            Not a template. Not a configuration. Software designed from the ground up
            around how your team operates.
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
            {(["crm", "automation"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                style={{
                  background: activeTab === tab ? "#1a2332" : "transparent",
                  color: activeTab === tab ? "#cbd5e1" : "#3d5165",
                }}
              >
                {tab === "crm" ? "CRM Dashboard" : "Automation Builder"}
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
                <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5 shrink-0">
                  <rect x="1" y="1" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1" />
                  <path d="M4 4l4 4M8 4l-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </svg>
                <span>app.er-devlabs.io/{activeTab === "crm" ? "crm/contacts" : "automation/flows"}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
              <span className="text-[10px] font-mono text-[#2d3f54]">prod</span>
            </div>
          </div>

          {/* App content */}
          {activeTab === "crm" ? (
            <div className="flex h-[580px]">
              {/* Sidebar */}
              <div className="w-52 shrink-0 border-r border-[#1a2332] flex flex-col" style={{ background: "#080e15" }}>
                {/* Workspace selector */}
                <div className="flex items-center gap-2.5 px-4 py-3.5 border-b border-[#1a2332]">
                  <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold text-white">A</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[12px] font-medium text-[#94a3b8] truncate">Axon Logistics</div>
                    <div className="text-[10px] text-[#2d3f54]">CRM Workspace</div>
                  </div>
                </div>
                {/* Nav items */}
                <nav className="flex-1 px-2 py-3 space-y-0.5">
                  {SIDEBAR_NAV.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[12px] cursor-pointer"
                      style={{
                        background: item.active ? "rgba(59,130,246,0.1)" : "transparent",
                        color: item.active ? "#60a5fa" : "#3d5165",
                      }}
                    >
                      <span className="text-[13px] w-4 text-center">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </nav>
                {/* User */}
                <div className="flex items-center gap-2 px-4 py-3 border-t border-[#1a2332]">
                  <div className="w-6 h-6 rounded-full bg-[#1a2332] flex items-center justify-center">
                    <span className="text-[10px] text-[#5a7191]">EL</span>
                  </div>
                  <div className="text-[11px] text-[#3d5165]">Elias · Admin</div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center justify-between px-6 py-3.5 border-b border-[#1a2332]" style={{ background: "#080e15" }}>
                  <div>
                    <h3 className="text-[14px] font-medium text-[#cbd5e1]">Contacts</h3>
                    <p className="text-[11px] text-[#2d3f54]">8,432 total · 247 active deals</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] text-[#3d5165] border border-[#1a2332] rounded-lg hover:border-[#2d3f54] transition-colors">
                      <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3"><path d="M1 3h10M3 6h6M5 9h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                      Filter
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium text-white bg-blue-600 rounded-lg">
                      <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3"><path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      Add Contact
                    </button>
                  </div>
                </div>

                {/* KPI cards */}
                <div className="grid grid-cols-4 gap-3 px-6 py-4 border-b border-[#1a2332]">
                  {KPI_CARDS.map((kpi) => (
                    <div key={kpi.label} className="bg-[#0c1117] border border-[#1a2332] rounded-xl p-3">
                      <div className="text-[10px] text-[#2d3f54] mb-1.5">{kpi.label}</div>
                      <div className="text-[17px] font-semibold text-[#f1f5f9] tabular-nums tracking-tight">{kpi.value}</div>
                      <div className="text-[10px] mt-1" style={{ color: kpi.up ? "#10b981" : "#f97316" }}>
                        {kpi.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Table */}
                <div className="flex-1 overflow-auto">
                  <table className="w-full text-[12px]">
                    <thead>
                      <tr className="border-b border-[#1a2332]">
                        {["Name", "Company", "Status", "Deal Value", "Stage", "Last Activity"].map((h) => (
                          <th key={h} className="text-left px-4 py-2.5 text-[10px] font-mono text-[#2d3f54] uppercase tracking-[0.1em] font-normal">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {CRM_CONTACTS.map((contact, i) => (
                        <tr
                          key={contact.name}
                          className="border-b border-[#0f1924] hover:bg-[#0c1117]/60 transition-colors cursor-pointer"
                        >
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2.5">
                              <div
                                className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium shrink-0"
                                style={{
                                  background: ["#1d3461", "#1d3452", "#1d2c4a", "#192943", "#16263d", "#132238"][i % 6],
                                  color: ["#60a5fa", "#93c5fd", "#7dd3fc", "#38bdf8", "#0ea5e9", "#60a5fa"][i % 6],
                                }}
                              >
                                {contact.name.split(" ").map(n => n[0]).join("")}
                              </div>
                              <span className="text-[#94a3b8]">{contact.name}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-[#4a6580]">{contact.company}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1.5">
                              <div
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ background: STATUS_COLORS[contact.status] }}
                              />
                              <span style={{ color: STATUS_COLORS[contact.status] }}>{contact.status}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 font-mono text-[#64748b]">{contact.deal}</td>
                          <td className="px-4 py-3">
                            <span
                              className="px-2 py-0.5 rounded text-[10px] font-medium"
                              style={{
                                background: STAGE_COLORS[contact.stage]?.bg,
                                color: STAGE_COLORS[contact.stage]?.text,
                              }}
                            >
                              {contact.stage}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-[#2d3f54]">{contact.last}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            /* ── Automation Builder View ── */
            <div className="flex h-[580px]">
              {/* Left panel: flow list */}
              <div className="w-64 shrink-0 border-r border-[#1a2332] flex flex-col" style={{ background: "#080e15" }}>
                <div className="px-4 py-3.5 border-b border-[#1a2332]">
                  <h3 className="text-[13px] font-medium text-[#94a3b8]">Automation Flows</h3>
                  <p className="text-[10px] text-[#2d3f54] mt-0.5">4 active · 1 paused</p>
                </div>
                <div className="flex-1 px-2 py-3 space-y-1.5">
                  {AUTOMATION_FLOWS.map((flow, i) => (
                    <div
                      key={flow.name}
                      className="flex flex-col gap-1 px-3 py-2.5 rounded-xl cursor-pointer transition-all"
                      style={{
                        background: i === 0 ? "rgba(59,130,246,0.08)" : "transparent",
                        border: i === 0 ? "1px solid rgba(59,130,246,0.15)" : "1px solid transparent",
                      }}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] text-[#64748b] leading-snug">{flow.name}</span>
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: flow.status === "active" ? "#10b981" : "#f59e0b" }}
                        />
                      </div>
                      <span className="text-[10px] text-[#2d3f54] font-mono">{flow.runs}</span>
                    </div>
                  ))}
                </div>
                <div className="px-3 py-3 border-t border-[#1a2332]">
                  <button className="w-full flex items-center justify-center gap-1.5 py-2 text-[11px] text-[#3d5165] border border-[#1a2332] rounded-lg hover:border-[#2d3f54] transition-colors">
                    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3"><path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    New Flow
                  </button>
                </div>
              </div>

              {/* Canvas area */}
              <div className="flex-1 relative overflow-hidden" style={{ background: "#07090e" }}>
                <div className="absolute inset-0 grid-dots opacity-40" />

                {/* Flow nodes */}
                <div className="relative h-full flex flex-col items-center justify-center gap-3 p-12">
                  {/* Title */}
                  <div className="absolute top-4 left-5 text-[11px] text-[#2d3f54] font-mono">
                    New lead → WhatsApp greeting
                  </div>

                  {/* Trigger node */}
                  <div className="bg-[#0c1117] border-2 border-emerald-500/30 rounded-xl px-5 py-3 flex items-center gap-3 shadow-lg shadow-emerald-900/20 z-10">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4"><path d="M8 2v4l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="8" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.4"/></svg>
                    </div>
                    <div>
                      <div className="text-[11px] text-emerald-400 font-mono uppercase tracking-wider">Trigger</div>
                      <div className="text-[12px] text-[#94a3b8] mt-0.5">New CRM Contact Added</div>
                    </div>
                  </div>

                  {/* Connector */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-5 bg-[#1a2332]" />
                    <svg viewBox="0 0 8 6" fill="none" className="w-2"><path d="M1 1l3 4 3-4" stroke="#2d3f54" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>

                  {/* Filter node */}
                  <div className="bg-[#0c1117] border border-[#1a2332] rounded-xl px-5 py-3 flex items-center gap-3 z-10">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4"><path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                    </div>
                    <div>
                      <div className="text-[11px] text-amber-400/80 font-mono uppercase tracking-wider">Filter</div>
                      <div className="text-[12px] text-[#94a3b8] mt-0.5">Has phone number</div>
                    </div>
                  </div>

                  {/* Connector */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-5 bg-[#1a2332]" />
                    <svg viewBox="0 0 8 6" fill="none" className="w-2"><path d="M1 1l3 4 3-4" stroke="#2d3f54" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>

                  {/* Action node */}
                  <div className="bg-[#0c1117] border border-blue-500/25 rounded-xl px-5 py-3 flex items-center gap-3 shadow-lg shadow-blue-900/10 z-10">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4"><path d="M8 2C4.686 2 2 4.686 2 8c0 .9.18 1.758.5 2.54L2 14l3.538-.492A5.988 5.988 0 008 14c3.314 0 6-2.686 6-6S11.314 2 8 2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div>
                      <div className="text-[11px] text-blue-400 font-mono uppercase tracking-wider">Action</div>
                      <div className="text-[12px] text-[#94a3b8] mt-0.5">Send WhatsApp message</div>
                    </div>
                  </div>

                  {/* Animated packet */}
                  <div
                    className="absolute left-1/2 w-2 h-2 rounded-full bg-blue-500 opacity-60 pointer-events-none"
                    style={{
                      animation: "scan-line 3s ease-in-out infinite",
                      marginLeft: "-4px",
                      top: "140px",
                    }}
                  />
                </div>

                {/* Stats bar */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center gap-6 px-5 py-3 border-t border-[#1a2332]" style={{ background: "#0a1018" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] text-[#3d5165] font-mono">Active</span>
                  </div>
                  <span className="text-[11px] text-[#2d3f54] font-mono">1,204 successful runs</span>
                  <span className="text-[11px] text-[#2d3f54] font-mono">Last run: 2m ago</span>
                  <span className="text-[11px] text-[#2d3f54] font-mono">Avg. duration: 340ms</span>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
