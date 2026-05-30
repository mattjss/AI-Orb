"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const w = window as any;
    if (w.UnicornStudio?.init) {
      w.UnicornStudio.init();
    } else {
      w.UnicornStudio = { isInitialized: false };
      const s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";
      s.onload = () => w.UnicornStudio.init();
      document.head.appendChild(s);
    }
  }, []);

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
        {/* Pill */}
        <div style={{
          width: 358,
          height: 52,
          borderRadius: 26,
          background: "#0A0A0B",
          border: "1px solid #1e1e20",
          display: "flex",
          alignItems: "center",
          paddingLeft: 8,
          paddingRight: 8,
        }}>
          {/* Orb — outer ring */}
          <div style={{
            width: 36,
            height: 36,
            minWidth: 36,
            flexShrink: 0,
            borderRadius: "50%",
            border: "1px solid #252527",
            background: "#0A0A0B",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            {/* Inner circle clips the Unicorn canvas */}
            <div className="orb-circle">
              <div className="orb-us-wrap">
                <div
                  data-us-project="1pR6h5M1hBZZGegkYa8W"
                  style={{ width: "1440px", height: "900px" }}
                />
              </div>
            </div>
          </div>

          {/* Shimmer text */}
          <span style={{
            marginLeft: 8,
            flexShrink: 0,
            whiteSpace: "nowrap",
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
          }}>
            Agent thinking...
          </span>
        </div>
      </div>
    </div>
  );
}
