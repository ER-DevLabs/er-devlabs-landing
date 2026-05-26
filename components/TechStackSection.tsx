"use client";

/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

const techs = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    invert: false,
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    invert: false,
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    invert: false,
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    invert: false,
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    invert: false,
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    invert: false,
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    invert: false,
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    invert: true,
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    invert: true,
  },
  {
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    invert: false,
  },
  {
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg",
    invert: false,
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    invert: false,
  },
  {
    name: "n8n",
    icon: "https://cdn.simpleicons.org/n8n",
    invert: false,
  },
  {
    name: "Retell AI",
    icon: "/retell-ai-icon.svg",
    invert: false,
  },
];

export default function TechStackSection() {
  return (
    <section id="stack" className="bg-brand-dark py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="uppercase text-xs text-brand-cyan tracking-widest mb-4">
            TECNOLOGÍAS
          </p>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Nuestro stack tecnológico.
          </h2>
          <p className="text-base text-white/50 max-w-xl leading-relaxed">
            Herramientas probadas en producción, seleccionadas por rendimiento,
            escalabilidad y velocidad de entrega.
          </p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-brand-surface border border-white/7 rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-brand-purple/40 hover:scale-105 transition-all duration-200 cursor-default"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className="object-contain w-10 h-10"
                  style={tech.invert ? { filter: "invert(1)" } : undefined}
                />
              </div>
              <span className="text-xs font-medium text-white/60 text-center leading-tight">
                {tech.name}
              </span>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
