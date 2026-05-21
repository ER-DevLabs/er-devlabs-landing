"use client";

const TECH = [
  "React", "Next.js", "Node.js", "TypeScript", "PostgreSQL",
  "Docker", "Stripe", "MercadoPago", "Tailwind CSS", "AWS",
  "REST APIs", "Redis", "Shopify", "WooCommerce", "Figma",
];

const SERVICES_LIST = [
  "E-commerce", "Webs de Negocios", "Software a Medida", "CRM",
  "Automatizaciones", "SaaS", "Mobile-first", "SEO técnico",
  "Consultoría", "Landing Pages", "APIs", "Panel Admin",
];

function Row({ items, dir }: { items: string[]; dir: "left" | "right" }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div
        className={dir === "left" ? "animate-marquee-left" : "animate-marquee-right"}
        style={{ display: "flex", width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 mx-3 shrink-0"
          >
            <span className="w-1 h-1 rounded-full" style={{ background: i % 3 === 0 ? "#8B5CF6" : i % 3 === 1 ? "#06B6D4" : "#2d3f54", opacity: 0.6 }} />
            <span className="text-[11px] font-mono text-[#3d5165] whitespace-nowrap tracking-[0.04em]">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative py-6 overflow-hidden border-y border-[#1a2332]">
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #070a0f, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, #070a0f, transparent)" }}
      />
      <div className="space-y-3">
        <Row items={TECH} dir="left" />
        <Row items={SERVICES_LIST} dir="right" />
      </div>
    </div>
  );
}
