"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="section-divider" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(37,99,235,0.07) 0%, transparent 65%)",
        }}
      />
      <div className="absolute inset-0 grid-dots opacity-30" />

      {/* Top accent lines */}
      <div className="absolute top-0 left-0 right-0">
        <div className="max-w-3xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        </div>
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a2332] bg-[#0c1117]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse-dot" />
            <span className="text-[10px] font-mono text-[#3d5165] tracking-[0.14em] uppercase">
              Ready to build
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-[50px] font-semibold text-[#f1f5f9] leading-[1.06] tracking-[-0.025em]">
            Ready to build your{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #1d4ed8 100%)",
              }}
            >
              operational stack?
            </span>
          </h2>

          {/* Sub-text */}
          <p className="text-[15px] text-[#4a6580] leading-relaxed max-w-xl mx-auto">
            Tell us what you&apos;re building. We&apos;ll scope it, architect it, and ship it —
            a system your team can rely on for years.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="#"
              className="flex items-center gap-2 w-full sm:w-auto justify-center px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-xl transition-all ring-1 ring-blue-500/25 shadow-[0_0_40px_rgba(59,130,246,0.15)]"
            >
              Start a Project
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 w-full sm:w-auto justify-center px-7 py-3 border border-[#1a2332] hover:border-[#2d3f54] text-[#5a7191] hover:text-[#94a3b8] text-sm font-medium rounded-xl transition-all"
            >
              Book a call
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
                <path d="M5 1v2M11 1v2M2 6h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </a>
          </div>

          {/* Fine print */}
          <p className="text-[11px] font-mono text-[#2d3f54]">
            No commitment required · NDA available · Typical scope in 48h
          </p>
        </motion.div>
      </div>
    </section>
  );
}
