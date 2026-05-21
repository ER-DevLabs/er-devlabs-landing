export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#070a0f",
        padding: "24px",
        textAlign: "center",
      }}
    >
      {/* Logo */}
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" style={{ marginBottom: "20px" }}>
        <rect x="2" y="4" width="18" height="10" rx="3" fill="#8B5CF6" />
        <rect x="12" y="18" width="18" height="10" rx="3" fill="#06B6D4" />
      </svg>

      <p
        style={{
          fontFamily: "monospace",
          fontSize: "10px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#2d3f54",
          marginBottom: "32px",
        }}
      >
        ER DevLabs
      </p>

      <h1
        style={{
          fontSize: "clamp(28px, 5vw, 48px)",
          fontWeight: 600,
          color: "#f1f5f9",
          letterSpacing: "-0.025em",
          lineHeight: 1.1,
          marginBottom: "16px",
          maxWidth: "480px",
        }}
      >
        Estamos construyendo algo nuevo.
      </h1>

      <p
        style={{
          fontSize: "15px",
          color: "#4a6580",
          maxWidth: "360px",
          lineHeight: 1.6,
          marginBottom: "40px",
        }}
      >
        La nueva versión del sitio está en camino. Mientras tanto, podés escribirnos directamente.
      </p>

      <a
        href="mailto:elias@erdevlabs.com"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 24px",
          background: "linear-gradient(135deg, #7c3aed, #0891b2)",
          color: "#ffffff",
          fontSize: "14px",
          fontWeight: 500,
          borderRadius: "10px",
          textDecoration: "none",
        }}
      >
        elias@erdevlabs.com
      </a>
    </main>
  );
}
