"use client";

const ORB_URL = "https://www.unicorn.studio/embed/1pR6h5M1hBZZGegkYa8W";

export default function Home() {
  return (
    <div style={{
      width: "100vw", height: "100vh",
      background: "#101010",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div style={{
        width: 422, height: 422,
        background: "#101010",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        <div className="pill-outer">
          <div className="pill-border" />

          <div className="pill-inner">
            {/* orb — 28px circle, iframe 150% to fill with no black edge */}
            <div className="orb-mask" style={{
              width: 28, height: 28,
              minWidth: 28, flexShrink: 0,
              position: "relative",
              overflow: "hidden",
            }}>
              <iframe
                src={ORB_URL}
                title="AI orb"
                style={{
                  position: "absolute",
                  left: "-25%", top: "-25%",
                  width: "150%", height: "150%",
                  border: "none",
                }}
              />
            </div>

            <span className="shimmer-text">Agent thinking...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
