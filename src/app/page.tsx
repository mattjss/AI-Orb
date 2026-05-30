"use client";

const ORB_URL = "https://www.unicorn.studio/embed/1pR6h5M1hBZZGegkYa8W";

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
        <div className="pill-outer">
          {/* rotating border trail */}
          <div className="pill-border" />

          <div className="pill-inner">
            {/* full-bar shimmer sweep */}
            <div className="pill-shimmer" />

            {/* orb — 36px container, 32px iframe inset 2px to hide fuzzy edge */}
            <div style={{
              width: 36, height: 36,
              minWidth: 36, flexShrink: 0,
              position: "relative",
              background: "#0A0A0B",
              borderRadius: "50%",
            }}>
              <div className="orb-mask" style={{ position: "absolute", left: 2, top: 2, width: 32, height: 32 }}>
                <iframe
                  src={ORB_URL}
                  title="AI orb"
                  style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", border: "none" }}
                />
              </div>
            </div>

            {/* shimmer text */}
            <span className="shimmer-text">Agent thinking...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
