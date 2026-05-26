"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "ER-Iron CRM",
    category: "CRM · SaaS",
    bgClass: "from-indigo-900 via-slate-900 to-brand-dark",
    span: "md:col-span-7",
    href: "https://er-iron.com/",
  },
  {
    title: "Soluciones Integrales",
    category: "Corporativo · Web",
    bgClass: "from-teal-900 via-cyan-900 to-brand-dark",
    span: "md:col-span-5",
    href: "https://www.solucionesintegralesrq.com/",
  },
  {
    title: "Naturamastore",
    category: "E-commerce · Natural",
    bgClass: "from-orange-900 via-amber-900 to-brand-dark",
    span: "md:col-span-12",
    href: "https://naturamastore.com/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="bg-brand-dark py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <p className="uppercase text-xs text-brand-purple tracking-widest mb-4">
              PROYECTOS DESTACADOS
            </p>
            <h2
              className="font-bold text-white mb-4"
              style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              Lo que hemos construido.
            </h2>
            <p className="text-base text-white/50 max-w-xl leading-relaxed">
              Una selección de proyectos donde tecnología y estrategia se
              combinaron para generar resultados reales.
            </p>
          </div>
          <a
            href="#contacto"
            className="hidden md:inline-block text-sm font-semibold text-white/50 hover:text-white transition-colors whitespace-nowrap"
          >
            Ver todos →
          </a>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`${project.span} bg-gradient-to-br ${project.bgClass} border border-white/7 rounded-3xl overflow-hidden relative aspect-video md:aspect-auto md:min-h-[300px] group cursor-pointer block`}
            >
              {/* Title */}
              <div className="absolute top-5 left-5 z-[5] text-base font-bold text-white/90 drop-shadow-sm">
                {project.title}
              </div>

              {/* Category tag */}
              <div className="absolute bottom-4 left-4 z-[5] bg-white/6 border border-white/10 rounded-full px-3 py-1 text-xs font-medium text-white/50">
                {project.category}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10">
                <span className="bg-white/95 text-brand-dark text-xs font-semibold px-4 py-2 rounded-full group-hover:bg-white transition-colors">
                  Ver proyecto →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
