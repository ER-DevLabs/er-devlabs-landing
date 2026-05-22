"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto tiempo tarda un proyecto?",
    a: "Depende del alcance. Una landing básica puede estar lista en 2 semanas. Un sitio completo o tienda online toma entre 4 y 8 semanas. Al inicio del proyecto definimos un cronograma claro con fechas de entrega por etapa.",
  },
  {
    q: "¿Trabajan con clientes fuera de Costa Rica?",
    a: "Sí, trabajamos con clientes en toda América Latina y también con clientes en Estados Unidos. Todo el proceso de trabajo es 100% remoto y usamos herramientas como Notion, Slack y GitHub para mantener comunicación fluida.",
  },
  {
    q: "¿Qué incluye el mantenimiento post-lanzamiento?",
    a: "Ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, backups, monitoreo de rendimiento, corrección de errores y hasta 5 horas de cambios menores al mes según el plan contratado.",
  },
  {
    q: "¿Puedo ver el avance del proyecto durante el desarrollo?",
    a: "Absolutamente. Trabajamos con metodología ágil (Scrum), lo que significa que cada 1-2 semanas tenés una demo funcional del avance. Nunca esperás semanas sin ver nada.",
  },
  {
    q: "¿Qué tecnologías usan?",
    a: "Usamos React, Next.js, Node.js, TypeScript, PostgreSQL, Supabase, Tailwind CSS y Vercel como stack principal. Para e-commerce también usamos WooCommerce y para proyectos específicos integramos las herramientas que mejor se adapten al caso.",
  },
  {
    q: "¿Cómo es el proceso de pago?",
    a: "Trabajamos con un esquema de 50% al inicio del proyecto y 50% contra entrega. Para proyectos grandes podemos acordar pagos por hitos (etapas del proyecto). Aceptamos transferencia bancaria, SINPE Móvil y PayPal.",
  },
  {
    q: "¿El precio incluye el hosting y dominio?",
    a: "No están incluidos por defecto, pero los gestionamos por vos. El hosting en Vercel para proyectos web tiene versión gratuita que cubre la mayoría de los casos. El dominio tiene un costo anual aproximado de $15–20 USD que coordinaremos juntos.",
  },
  {
    q: "¿Qué pasa si quiero cambios después de la entrega?",
    a: "Los primeros 30 días post-lanzamiento incluyen correcciones sin costo adicional. Después, podés contratar uno de nuestros planes de mantenimiento o solicitar cambios puntuales que cotizamos por hora.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-brand-dark py-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="uppercase text-xs text-brand-cyan tracking-widest mb-4">FAQ</p>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Preguntas frecuentes.
          </h2>
          <p className="text-base text-white/50 leading-relaxed">
            Todo lo que necesitás saber antes de empezar.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="divide-y divide-white/7">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <button
                  className="w-full py-5 flex justify-between items-center gap-4 text-left cursor-pointer"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-white leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 text-brand-purple transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    <Plus size={20} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm text-white/55 leading-[1.75]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
