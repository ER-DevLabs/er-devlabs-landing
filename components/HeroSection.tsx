"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55 z-[1]" aria-hidden="true" />

      {/* Bottom fade to brand-dark */}
      <div
        className="absolute bottom-0 left-0 right-0 h-56 z-[2] pointer-events-none"
        style={{ background: "linear-gradient(to top, #0B0B18, transparent)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-28 w-full max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-widest text-xs text-white/50 mb-8"
        >
          COSTA RICA · SOFTWARE STUDIO
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-bold leading-[0.92] tracking-[-0.03em] mb-6"
          style={{ fontSize: "clamp(52px, 9vw, 120px)" }}
        >
          <span className="block text-white">Soluciones Digitales</span>
          <span className="block bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">
            que Convierten.
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-xl text-base text-white/55 leading-[1.7] mb-12"
        >
          No solo código — transformación real. Convertimos ideas en plataformas,
          datos en decisiones, y objetivos en logros medibles.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#proyectos"
            className="bg-gradient-to-r from-brand-purple to-brand-cyan text-white rounded-full px-7 py-3.5 font-semibold hover:scale-105 transition-transform duration-200"
          >
            Ver nuestros proyectos
          </a>
          <a
            href="mailto:elias@erdevlabs.com"
            className="bg-transparent border border-white/20 text-white rounded-full px-7 py-3.5 font-semibold hover:border-white/50 hover:bg-white/5 transition-all duration-200"
          >
            Hablemos
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs text-white/35 tracking-widest">SCROLL</span>
        <div className="h-10 w-px bg-white/15 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full animate-scroll-dot bg-white/70" style={{ height: "40%" }} />
        </div>
      </div>
    </section>
  );
}
