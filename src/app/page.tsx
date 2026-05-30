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

            {/* orb — iframe overscaled 120% so no black letterbox at edges */}
            <div className="orb-mask" style={{
              width: 38, height: 38,
              minWidth: 38, flexShrink: 0,
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

            {/* shimmer text */}
            <span className="shimmer-text">Agent thinking...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
