"use client";

const UNICORN_EMBED_URL = "https://www.unicorn.studio/embed/1pR6h5M1hBZZGegkYa8W";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#111" }}>
      <div
        style={{
          width: 1000,
          height: 1000,
          background: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "scale(1.25)",
          transformOrigin: "center center",
        }}
      >
        <div
          style={{
            width: 410,
            height: 52,
            borderRadius: 26,
            background: "#0A0A0B",
            border: "1px solid #161617",
            display: "flex",
            alignItems: "center",
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 8,
            paddingBottom: 8,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              minWidth: 36,
              minHeight: 36,
              flexShrink: 0,
              position: "relative",
              background: "#0A0A0B",
              borderRadius: "50%",
            }}
          >
            {/* Orb inset 2px so outer ring is solid #0A0A0B — covers fuzzy iframe edge */}
            <div
              className="orb-mask"
              style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 32,
                height: 32,
              }}
            >
              <iframe
                src={UNICORN_EMBED_URL}
                title="AI orb"
                style={{ position: "absolute", left: 0, top: 0, width: 32, height: 32, border: "none" }}
              />
            </div>
          </div>
          <span
            style={{
              marginLeft: 8,
              fontFamily: "ui-monospace, monospace",
              fontSize: 14,
              letterSpacing: "0.01em",
              color: "transparent",
              background: "linear-gradient(90deg, rgba(79,79,79,0.5) 0%, rgba(79,79,79,0.5) 40%, rgba(79,79,79,1) 50%, rgba(79,79,79,0.5) 60%, rgba(79,79,79,0.5) 100%)",
              backgroundSize: "200% 100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer 3.5s linear infinite",
            }}
          >
            Agent thinking...
          </span>
        </div>
      </div>
    </div>
  );
}
