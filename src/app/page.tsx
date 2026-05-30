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
        <div className="pill-outer">
          {/* rotating border trail */}
          <div className="pill-border" />

          <div className="pill-inner">
            {/* full-bar shimmer sweep */}
            <div className="pill-shimmer" />

            {/* orb circle — iframe avoids React script init issues */}
            <div style={{
              width: 40, height: 40,
              minWidth: 40, flexShrink: 0,
              borderRadius: "50%",
              overflow: "hidden",
              transform: "translateZ(0)",
            }}>
              <iframe
                src="unicorn-orb.html"
                width={40}
                height={40}
                style={{ display: "block", border: "none" }}
                scrolling="no"
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
