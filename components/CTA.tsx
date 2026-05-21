"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="relative py-28 overflow-hidden">
      <div className="section-divider" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(139,92,246,0.06) 0%, rgba(6,182,212,0.03) 50%, transparent 70%)" }}
      />
      <div className="absolute inset-0 grid-dots opacity-30" />
      <div className="absolute top-0 left-0 right-0">
        <div className="max-w-3xl mx-auto px-6">
          <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), rgba(6,182,212,0.3), transparent)" }} />
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a2332] bg-[#0c1117]">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse-dot" />
            <span className="text-[10px] font-mono text-[#3d5165] tracking-[0.14em] uppercase">
              Hablemos de tu proyecto
            </span>
          </div>

          <h2 className="text-4xl sm:text-[50px] font-semibold text-[#f1f5f9] leading-[1.06] tracking-[-0.025em]">
            ¿Tenés un proyecto{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #a78bfa 0%, #8B5CF6 40%, #06B6D4 100%)" }}
            >
              en mente?
            </span>
          </h2>

          <p className="text-[15px] text-[#4a6580] leading-relaxed max-w-xl mx-auto">
            Contanos tu idea. En menos de 24 horas tenés una propuesta
            con alcance, tecnología y precio cerrado — sin vueltas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="mailto:hola@erdevlabs.com"
              className="flex items-center gap-2 w-full sm:w-auto justify-center px-7 py-3 text-white text-sm font-medium rounded-xl transition-all"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #0891b2)",
                boxShadow: "0 0 40px rgba(139,92,246,0.18)",
              }}
            >
              Iniciar Proyecto
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://wa.me/50663216443"
              className="flex items-center gap-2 w-full sm:w-auto justify-center px-7 py-3 border border-[#1a2332] hover:border-[#2d3f54] text-[#5a7191] hover:text-[#94a3b8] text-sm font-medium rounded-xl transition-all"
            >
              Escribir por WhatsApp
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M8 2C4.686 2 2 4.686 2 8c0 .9.18 1.758.5 2.54L2 14l3.538-.492A5.988 5.988 0 008 14c3.314 0 6-2.686 6-6S11.314 2 8 2z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <p className="text-[11px] font-mono text-[#2d3f54]">
            Sin compromiso · Presupuesto en 24h · NDA disponible
          </p>
        </motion.div>
      </div>
    </section>
  );
}
