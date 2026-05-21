export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070a0f] flex flex-col items-center justify-center overflow-hidden">
      {/* Grid dots */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Content */}
      <div className="relative flex flex-col items-center text-center px-6 max-w-lg">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-14">
          <div
            className="flex items-center justify-center w-7 h-7 rounded-md bg-blue-600"
            style={{ boxShadow: "0 0 20px rgba(59,130,246,0.35)" }}
          >
            <svg viewBox="0 0 18 18" fill="none" className="w-4 h-4">
              <rect x="2" y="3" width="5" height="1.8" rx="0.5" fill="white" fillOpacity="0.9" />
              <rect x="2" y="6.8" width="7" height="1.8" rx="0.5" fill="white" fillOpacity="0.9" />
              <rect x="2" y="10.6" width="5" height="1.8" rx="0.5" fill="white" fillOpacity="0.9" />
              <rect x="12" y="3" width="4" height="9.4" rx="0.5" fill="white" fillOpacity="0.55" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-white tracking-tight">
            ER DevLabs
          </span>
        </div>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a2332] bg-[#0c1117] mb-8">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500" />
          </span>
          <span className="text-[10px] font-mono text-[#64748b] tracking-[0.14em] uppercase">
            Scheduled maintenance
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#f1f5f9] leading-tight tracking-tight mb-4">
          Estamos preparando algo{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
            }}
          >
            grande.
          </span>
        </h1>

        <p className="text-[14px] text-[#4a6580] leading-relaxed mb-10">
          El sitio vuelve mañana con todo operativo.
          <br />
          Mientras tanto, podés contactarnos directamente.
        </p>

        {/* CTA */}
        <a
          href="mailto:hola@erdevlabs.com"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#1a2332] hover:border-[#2d3f54] text-[#64748b] hover:text-[#94a3b8] text-sm font-medium rounded-lg transition-all"
        >
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
            <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
            <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          hola@erdevlabs.com
        </a>
      </div>

      {/* Bottom mono line */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <span className="text-[10px] font-mono text-[#1e2d3d] tracking-widest">
          ER-DEVLABS · SYSTEM MAINTENANCE · v2.1
        </span>
      </div>
    </main>
  );
}
