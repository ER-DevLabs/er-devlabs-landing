"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Descubrimiento",
    desc: "Reunión inicial para entender tu negocio, objetivos, público objetivo y alcance del proyecto.",
  },
  {
    num: "02",
    title: "Planificación",
    desc: "Definimos el backlog, sprints, entregables y cronograma. Acordamos herramientas de comunicación y revisión.",
  },
  {
    num: "03",
    title: "Diseño UI/UX",
    desc: "Wireframes y prototipo de alta fidelidad en Figma. Tu aprobación antes de escribir una línea de código.",
  },
  {
    num: "04",
    title: "Desarrollo",
    desc: "Sprints de 1–2 semanas con demos en vivo. Código limpio, documentado y en repositorio privado en GitHub.",
  },
  {
    num: "05",
    title: "QA & Testing",
    desc: "Pruebas funcionales, responsividad, rendimiento y seguridad. Correcciones antes del lanzamiento.",
  },
  {
    num: "06",
    title: "Lanzamiento & Mantenimiento",
    desc: "Deploy en producción, capacitación, documentación y soporte post-entrega según el plan contratado.",
  },
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="bg-brand-dark py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase text-xs text-brand-cyan tracking-widest mb-4">
            METODOLOGÍA
          </p>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Cómo trabajamos juntos.
          </h2>
          <p className="text-base text-white/50 max-w-2xl mx-auto leading-relaxed">
            Seguimos un proceso ágil basado en Scrum — iterativo, transparente y
            orientado a resultados medibles desde el día uno.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Gradient connector line — desktop only */}
          <div
            className="absolute top-7 left-0 right-0 h-px z-0 hidden lg:block"
            style={{ background: "linear-gradient(to right, #8B44F0, #11ACE5)" }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center relative z-[1]"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-brand-purple to-brand-cyan flex items-center justify-center text-white font-bold text-lg mb-5 shadow-2xl shadow-brand-purple/40 flex-shrink-0">
                {step.num}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/45 leading-[1.6] max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
