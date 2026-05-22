"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "100%", label: "Proyectos entregados a tiempo" },
  { value: "3+", label: "Años construyendo productos digitales" },
  { value: "LATAM", label: "Alcance regional desde Costa Rica" },
  { value: "24/7", label: "Soporte post-lanzamiento disponible" },
];

export default function MetricsSection() {
  return (
    <section className="bg-brand-dark border-y border-white/5 py-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`px-6 py-8 text-center ${
                i < metrics.length - 1
                  ? "border-r border-white/7"
                  : ""
              } ${i < 2 ? "border-b md:border-b-0 border-white/7" : ""}`}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent leading-none">
                {metric.value}
              </div>
              <div className="text-xs text-white/40 mt-2 leading-snug">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
