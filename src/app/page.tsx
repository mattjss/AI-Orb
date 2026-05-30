"use client";

export default function Home() {
  return (
    <div style={{
      width: "100vw", height: "100vh",
      background: "#000000",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div style={{
        width: 422, height: 422,
        background: "#000000",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        {/* Pill */}
        <div style={{
          width: 360,
          height: 52,
          borderRadius: 26,
          background: "linear-gradient(90deg, #1c1c1e 0%, #0e0e10 100%)",
          border: "1px solid rgba(255,255,255,0.07)",
          display: "flex",
          alignItems: "center",
          paddingLeft: 6,
          paddingRight: 16,
          gap: 10,
          flexShrink: 0,
        }}>
          {/* Orb — wrapper clips iframe to circle */}
          <div style={{
            width: 40,
            height: 40,
            minWidth: 40,
            flexShrink: 0,
            borderRadius: "50%",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
            <iframe
              src="unicorn-orb.html"
              width={40}
              height={40}
              style={{ display: "block", border: "none" }}
              scrolling="no"
            />
          </div>

          {/* Shimmer text */}
          <span style={{
            whiteSpace: "nowrap",
            fontFamily: "ui-monospace, monospace",
            fontSize: 14,
            letterSpacing: "0.02em",
            color: "transparent",
            background: "linear-gradient(90deg, rgba(120,120,125,0.5) 0%, rgba(120,120,125,0.5) 40%, rgba(160,160,165,1) 50%, rgba(120,120,125,0.5) 60%, rgba(120,120,125,0.5) 100%)",
            backgroundSize: "200% 100%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "shimmer 3.5s linear infinite",
          }}>
            Agent thinking...
          </span>
        </div>
      </div>
    </div>
  );
}
