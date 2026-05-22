"use client";

import { motion } from "framer-motion";

export default function MissionVisionSection() {
  return (
    <section
      id="mision"
      className="relative bg-brand-dark py-24 px-6 overflow-hidden"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      >
        <source src="/modern-abstract-background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/85 z-[1]" aria-hidden="true" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2
            className="font-bold text-white"
            style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Misión &amp; Visión.
          </h2>
        </motion.div>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-purple/6 border border-brand-purple/20 rounded-3xl p-10"
          >
            <p className="text-xs font-semibold text-brand-purple tracking-widest mb-5">
              MISIÓN
            </p>
            <h3 className="text-2xl font-bold text-white mb-4">
              Impulsar el crecimiento de cada cliente.
            </h3>
            <p className="text-sm text-white/55 leading-[1.7]">
              Creamos soluciones tecnológicas innovadoras que convierten la
              transformación digital en una ventaja competitiva real para cada
              negocio que confía en nosotros.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-brand-cyan/6 border border-brand-cyan/20 rounded-3xl p-10"
          >
            <p className="text-xs font-semibold text-brand-cyan tracking-widest mb-5">
              VISIÓN
            </p>
            <h3 className="text-2xl font-bold text-white mb-4">
              Ser el socio tech de referencia en América Latina.
            </h3>
            <p className="text-sm text-white/55 leading-[1.7]">
              Soluciones digitales inteligentes que potencien el éxito empresarial
              y creen valor duradero en cada industria, posicionando a nuestros
              clientes como líderes en sus mercados.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
