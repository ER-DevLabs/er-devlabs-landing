"use client";

import { motion } from "framer-motion";
import { Rocket, Code2, Users, HeartHandshake } from "lucide-react";

const values = [
  {
    Icon: Code2,
    title: "Código de calidad",
    desc: "Escribimos código limpio, documentado y escalable. Cada proyecto está pensado para crecer contigo a largo plazo.",
  },
  {
    Icon: Rocket,
    title: "Velocidad de entrega",
    desc: "Metodología ágil con sprints cortos y demos frecuentes. Pasás de idea a producto en semanas, no meses.",
  },
  {
    Icon: Users,
    title: "Comunicación directa",
    desc: "Sin intermediarios. Trabajás directo con el equipo que construye tu producto, con total transparencia.",
  },
  {
    Icon: HeartHandshake,
    title: "Compromiso real",
    desc: "No somos una agencia de cientos. Somos un equipo pequeño, enfocado y comprometido con tu éxito.",
  },
];

const stats = [
  { value: "3+", label: "Años de experiencia" },
  { value: "3+", label: "Proyectos entregados" },
  { value: "LATAM", label: "Mercado objetivo" },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-brand-dark py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="uppercase text-xs text-brand-purple tracking-widest mb-4">
            SOBRE NOSOTROS
          </p>
          <h2
            className="font-bold text-white mb-5"
            style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Tecnología que trabaja<br className="hidden md:block" /> para tu negocio.
          </h2>
          <p className="text-base text-white/50 max-w-2xl leading-relaxed">
            Somos un estudio de desarrollo de software con base en Costa Rica,
            especializado en construir productos digitales que generan resultados
            medibles. Combinamos diseño, tecnología y estrategia para convertir tus
            ideas en plataformas que realmente funcionan, con el rigor de un equipo
            senior y la agilidad de un estudio boutique.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {values.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-brand-surface border border-white/7 rounded-2xl p-6 flex gap-5"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-purple/12 flex items-center justify-center flex-shrink-0">
                <Icon size={20} strokeWidth={1.5} className="text-brand-purple" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1.5">{title}</h3>
                <p className="text-sm text-white/50 leading-[1.65]">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 border border-white/7 rounded-2xl overflow-hidden"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`p-7 text-center ${i < stats.length - 1 ? "border-r border-white/7" : ""}`}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent leading-none">
                {stat.value}
              </div>
              <div className="text-xs text-white/40 mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
