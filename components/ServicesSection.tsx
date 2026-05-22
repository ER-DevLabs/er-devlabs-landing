"use client";

import { motion } from "framer-motion";
import {
  LayoutTemplate,
  ShoppingBag,
  Building2,
  Paintbrush2,
  Wrench,
  BarChart2,
  Terminal,
  Plus,
} from "lucide-react";

const services = [
  {
    num: "01",
    Icon: LayoutTemplate,
    title: "Landing Pages",
    desc: "Páginas de alta conversión optimizadas para capturar leads.",
  },
  {
    num: "02",
    Icon: ShoppingBag,
    title: "Tiendas Online",
    desc: "E-commerce completo con carrito, pagos y panel admin.",
  },
  {
    num: "03",
    Icon: Building2,
    title: "Sitios Corporativos",
    desc: "Presencia web profesional con múltiples páginas y SEO.",
  },
  {
    num: "04",
    Icon: Paintbrush2,
    title: "Diseño UI/UX",
    desc: "Interfaces intuitivas prototipadas antes de desarrollar.",
  },
  {
    num: "05",
    Icon: Wrench,
    title: "Mantenimiento Web",
    desc: "Soporte continuo, backups y monitoreo de rendimiento.",
  },
  {
    num: "06",
    Icon: BarChart2,
    title: "SEO & Optimización",
    desc: "Posicionamiento en los primeros resultados de Google.",
  },
  {
    num: "07",
    Icon: Terminal,
    title: "Consultoría Técnica",
    desc: "Asesoría en arquitectura, stack y decisiones de producto.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-brand-dark py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase text-xs text-brand-cyan tracking-widest mb-4">
            NUESTROS SERVICIOS
          </p>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            ¿Qué construimos juntos?
          </h2>
          <p className="text-base text-white/50 max-w-xl mb-16 leading-relaxed">
            Desde la idea hasta el lanzamiento — cubrimos todo el ciclo de
            desarrollo digital con calidad y precisión.
          </p>
        </motion.div>

        {/* Grid: 7 service cards + 1 custom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {services.map(({ num, Icon, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-brand-surface border border-white/7 rounded-3xl p-7 hover:border-brand-purple/40 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-purple/10 transition-all duration-300 cursor-default"
            >
              <p className="text-xs font-bold text-white/20 tracking-widest mb-5">{num}</p>
              <div className="w-11 h-11 rounded-2xl bg-brand-purple/12 flex items-center justify-center mb-5">
                <Icon size={22} strokeWidth={1.5} className="text-brand-purple" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-white/50 leading-[1.65]">{desc}</p>
            </motion.div>
          ))}

          {/* Card 08 – custom slot */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 7 * 0.07 }}
            className="bg-brand-surface border-2 border-dashed border-white/10 rounded-3xl p-7 flex flex-col items-center justify-center text-center gap-4 hover:opacity-75 transition-opacity cursor-default min-h-[180px]"
          >
            <Plus size={32} className="text-white/30" aria-hidden="true" />
            <p className="text-sm text-white/30 font-medium">Tu proyecto</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
