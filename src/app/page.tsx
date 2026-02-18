"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Prevent duplicate initialization
    if ((window as any).__usLoaded) {
      try {
        const u = (window as any).UnicornStudio;
        if (u && u.init) u.init();
      } catch (_) {}
      return;
    }

    const u = (window as any).UnicornStudio;
    if (u && u.init) {
      (window as any).__usLoaded = true;
      try { u.init(); } catch (_) {}
      return;
    }

    if (document.querySelector('script[data-us-script]')) return;

    (window as any).UnicornStudio = { isInitialized: false };
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";
    script.setAttribute("data-us-script", "true");
    script.onload = function () {
      (window as any).__usLoaded = true;
      try { (window as any).UnicornStudio.init(); } catch (_) {}
    };
    (document.head || document.body).appendChild(script);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000000",
      }}
    >
      <div
        style={{
          width: 1000,
          height: 1000,
          background: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <div
          className="metal-border"
          style={{
            width: 410,
            minWidth: 410,
            height: 52,
            borderRadius: 26,
            background: "#131314",
            border: "1px solid #262628",
            display: "flex",
            alignItems: "center",
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 8,
            paddingBottom: 8,
            overflow: "visible",
            zIndex: 0,
          }}
        >
          {/* Orb frame: outer border ring */}
          <div
            className="metal-border"
            style={{
              width: 36,
              height: 36,
              minWidth: 36,
              minHeight: 36,
              flexShrink: 0,
              position: "relative",
              borderRadius: "50%",
              border: "1px solid #262628",
              background: "#131314",
              boxSizing: "border-box",
              zIndex: 0,
            }}
          >
            {/* Inner mask: clips the orb so fuzzy edges hide behind the border */}
            <div
              style={{
                position: "absolute",
                inset: 1,
                borderRadius: "50%",
                overflow: "hidden",
                zIndex: 1,
              }}
            >
              {/* Orb embed: 58x58 centered inside the 36x36 frame, clipped by the inner mask */}
              <div
                data-us-project="z71YPGJALoAcv8R1HEZD"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: 58,
                  height: 58,
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
            </div>
          </div>
          <span
            style={{
              position: "relative",
              zIndex: 1,
              marginLeft: 8,
              flexShrink: 0,
              whiteSpace: "nowrap",
              fontFamily: "ui-monospace, monospace",
              fontSize: 14,
              letterSpacing: "0.01em",
              color: "transparent",
              background: "linear-gradient(90deg, rgba(109,107,107,0.5) 0%, rgba(109,107,107,0.5) 40%, rgba(109,107,107,1) 50%, rgba(109,107,107,0.5) 60%, rgba(109,107,107,0.5) 100%)",
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
