interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  textClassName?: string;
}

export default function Logo({
  size = "sm",
  showText = true,
  textClassName,
}: LogoProps) {
  const dims = { sm: 28, md: 40, lg: 56 }[size];
  const fontSize = { sm: "text-sm", md: "text-base", lg: "text-xl" }[size];

  return (
    <div className="flex items-center gap-2.5">
      {/* Mark: two offset rounded rectangles */}
      <svg
        width={dims}
        height={dims}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Purple bar — top, left-aligned */}
        <rect x="2" y="4" width="18" height="10" rx="3" fill="#8B5CF6" />
        {/* Cyan bar — bottom, right-shifted */}
        <rect x="12" y="18" width="18" height="10" rx="3" fill="#06B6D4" />
      </svg>

      {showText && (
        <span
          className={`font-bold tracking-tight ${fontSize} ${textClassName ?? ""}`}
          style={{
            background: "linear-gradient(90deg, #8B5CF6 0%, #06B6D4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ERDevLabs
        </span>
      )}
    </div>
  );
}
