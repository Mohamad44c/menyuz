export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Orb 1 — blue-ish, top-left */}
      <div
        style={{
          width: 600,
          height: 600,
          top: "-10%",
          left: "-10%",
          position: "absolute",
          opacity: 0.3,
          mixBlendMode: "screen",
          background: "radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)",
          animation: "orb-drift 12s ease-in-out infinite",
        }}
      />
      {/* Orb 2 — product accent (violet), top-right */}
      <div
        style={{
          width: 500,
          height: 500,
          top: "-5%",
          right: "-8%",
          position: "absolute",
          opacity: 0.25,
          mixBlendMode: "screen",
          background: "radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)",
          animation: "orb-drift 15s ease-in-out infinite",
          animationDelay: "-5s",
        }}
      />
      {/* Orb 3 — complement (pink/rose), bottom-center */}
      <div
        style={{
          width: 400,
          height: 400,
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          position: "absolute",
          opacity: 0.2,
          mixBlendMode: "screen",
          background: "radial-gradient(circle, rgba(236,72,153,0.5) 0%, transparent 70%)",
          animation: "orb-drift 18s ease-in-out infinite",
          animationDelay: "-10s",
        }}
      />
    </div>
  );
}
