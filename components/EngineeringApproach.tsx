"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PILLARS = [
  {
    id: "design-first",
    label: "Diseño primero",
    description: "Prototipamos antes de escribir una línea de código. Ves el resultado antes de que empiece el desarrollo — sin sorpresas al final.",
    spec: "Figma · Wireframes · Feedback",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5"><rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.4"/><circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4"/></svg>,
  },
  {
    id: "clean-code",
    label: "Código limpio y escalable",
    description: "Estructurado, documentado y fácil de mantener. Tu sistema puede crecer, ser modificado y transferido a cualquier desarrollador.",
    spec: "TypeScript · Tests · Documentación",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5"><path d="M6 8l-4 4 4 4M14 8l4 4-4 4M11 4l-2 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    id: "mobile-first",
    label: "Mobile-first responsive",
    description: "Todo lo que construimos funciona perfectamente en cualquier dispositivo — celular, tablet o desktop — sin comprometer la experiencia.",
    spec: "Responsive · PWA · Touch-friendly",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5"><rect x="6" y="2" width="8" height="16" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M10 15.5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  },
  {
    id: "performance",
    label: "Performance optimizado",
    description: "Tiempos de carga menores a 1 segundo, Core Web Vitals en verde y código optimizado para que Google te posicione mejor.",
    spec: "< 1s carga · LCP · SEO técnico",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5"><path d="M2 14l4-4 3 3 4-5 5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.4"/></svg>,
  },
  {
    id: "security",
    label: "Seguro por diseño",
    description: "HTTPS obligatorio, validación de inputs, protección contra SQL injection, XSS y buenas prácticas de seguridad desde el primer día.",
    spec: "HTTPS · OWASP · Sanitización",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5"><path d="M10 3l7 4v5.5c0 2.5-2.5 4.5-7 6-4.5-1.5-7-3.5-7-6V7l7-4z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    id: "support",
    label: "Soporte post-lanzamiento",
    description: "No desaparecemos después de entregar. Ofrecemos mantenimiento, actualizaciones y soporte continuo para que tu sitio siempre funcione.",
    spec: "SLA · Backups diarios · Monitoreo 24/7",
    icon: <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5"><path d="M10 2C5.58 2 2 5.58 2 10c0 1.47.38 2.85 1.06 4.05L2 18l4.1-1.04A7.94 7.94 0 0010 18c4.42 0 8-3.58 8-8s-3.58-8-8-8z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
];

const PROCESS_STEPS = [
  { num: "01", label: "Análisis y propuesta", desc: "Entendemos tu negocio, definimos el alcance y entregamos una propuesta con precio cerrado en menos de 48 horas." },
  { num: "02", label: "Diseño y prototipo", desc: "Diseñamos la interfaz en Figma y obtenemos tu aprobación antes de desarrollar. Lo que aprobás es lo que recibís." },
  { num: "03", label: "Desarrollo iterativo", desc: "Sprints de una semana con entregas parciales. Podés ver el progreso en todo momento y hacer ajustes a tiempo." },
  { num: "04", label: "Lanzamiento y soporte", desc: "Desplegamos, te capacitamos en el panel de control y te acompañamos durante los primeros 30 días sin costo extra." },
];

export default function EngineeringApproach() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="engineering" className="relative py-28 overflow-hidden">
      <div className="section-divider" />
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.04), transparent 60%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a2332] bg-[#0c1117] mb-6">
            <span className="text-[10px] font-mono text-[#3d5165] tracking-[0.14em] uppercase">Cómo trabajamos</span>
          </div>
          <h2 className="text-3xl sm:text-[40px] font-semibold text-[#f1f5f9] tracking-[-0.02em] mb-5 leading-tight">
            Principios que no{" "}
            <span className="text-[#5a7191]">negociamos.</span>
          </h2>
          <p className="text-[15px] text-[#4a6580] max-w-lg mx-auto leading-relaxed">
            Cada proyecto que entregamos cumple estos estándares de calidad — sin excepciones, independientemente del tamaño.
          </p>
        </motion.div>

        {/* Pillars */}
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
                <span className="text-[10px] font-mono text-[#2d3f54] mt-2.5 text-right leading-relaxed">{pillar.spec}</span>
              </div>
              <div>
                <h3 className="text-[14px] font-medium text-[#94a3b8] mb-2">{pillar.label}</h3>
                <p className="text-[12px] text-[#3d5165] leading-relaxed">{pillar.description}</p>
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
            <h3 className="text-xl font-semibold text-[#cbd5e1] tracking-tight mb-2">Nuestro proceso de entrega</h3>
            <p className="text-[13px] text-[#3d5165]">Predecible, colaborativo y sin sorpresas.</p>
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
            <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-px"
              style={{ backgroundImage: "repeating-linear-gradient(90deg, #1a2332 0, #1a2332 6px, transparent 6px, transparent 16px)" }} />

            {PROCESS_STEPS.map((step, i) => (
              <div key={step.num} className="relative flex flex-col items-center text-center px-4 pb-0">
                <div className="relative z-10 w-[72px] h-[72px] rounded-2xl border border-[#1a2332] bg-[#0c1117] flex flex-col items-center justify-center mb-5"
                  style={{ boxShadow: i === 0 || i === 1 ? "0 0 20px rgba(139,92,246,0.08)" : "none" }}>
                  <span className="text-[11px] font-mono" style={{ color: i < 2 ? "#8B5CF6" : "#2d3f54" }}>{step.num}</span>
                </div>
                <h4 className="text-[13px] font-medium text-[#94a3b8] mb-2">{step.label}</h4>
                <p className="text-[12px] text-[#3d5165] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech stack architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-24"
        >
          <div className="text-center mb-10">
            <h3 className="text-xl font-semibold text-[#cbd5e1] tracking-tight mb-2">Stack tecnológico</h3>
            <p className="text-[13px] text-[#3d5165]">Cada capa, elegida por razones técnicas — no por moda.</p>
          </div>

          <div className="border border-[#1a2332] rounded-2xl overflow-hidden">
            {[
              {
                layer: "Frontend",
                icon: "◈",
                items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                color: "#8B5CF6",
                desc: "Interfaces rápidas, accesibles y responsive — construidas para el usuario final.",
              },
              {
                layer: "Backend",
                icon: "⬡",
                items: ["Node.js", "Express", "REST APIs", "Auth / JWT", "Workers"],
                color: "#06B6D4",
                desc: "APIs robustas, seguras y escalables que conectan cada pieza del sistema.",
              },
              {
                layer: "Base de datos",
                icon: "◉",
                items: ["PostgreSQL", "Redis", "MongoDB", "Backups diarios", "Migraciones"],
                color: "#8B5CF6",
                desc: "Persistencia confiable, modelado correcto y datos siempre disponibles.",
              },
              {
                layer: "Infraestructura",
                icon: "⬢",
                items: ["Vercel", "AWS", "Docker", "CI/CD", "CDN · SSL · Monitoreo"],
                color: "#06B6D4",
                desc: "Deploy automatizado, alta disponibilidad y observabilidad desde el día uno.",
              },
            ].map((row, i, arr) => (
              <div
                key={row.layer}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-5 hover:bg-[#0c1117]/80 transition-colors duration-150"
                style={{ borderBottom: i < arr.length - 1 ? "1px solid #1a2332" : undefined }}
              >
                <div className="flex items-center gap-3 sm:w-40 shrink-0">
                  <span className="text-base leading-none" style={{ color: row.color, opacity: 0.7 }}>{row.icon}</span>
                  <span className="text-[11px] font-mono uppercase tracking-[0.12em]" style={{ color: row.color }}>
                    {row.layer}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 flex-1">
                  {row.items.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] font-mono px-2 py-0.5 rounded border"
                      style={{ color: "#4a6580", borderColor: "#1a2332", background: "#0a1018" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-[#2d3f54] sm:w-56 shrink-0 leading-relaxed group-hover:text-[#3d5165] transition-colors">
                  {row.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
