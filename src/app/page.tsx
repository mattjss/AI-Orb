"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const initUnicorn = () => {
      const us = (window as any).UnicornStudio;
      if (us && us.destroy) {
        us.destroy();
      }
      if (us && us.init) {
        us.init();
      }
    };

    const u = (window as any).UnicornStudio;
    if (u && u.init) {
      initUnicorn();
    } else {
      (window as any).UnicornStudio = { isInitialized: false };
      const i = document.createElement("script");
      i.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";
      i.onload = function () {
        (window as any).UnicornStudio.init();
      };
      (document.head || document.body).appendChild(i);
    }

    return () => {
      const us = (window as any).UnicornStudio;
      if (us && us.destroy) {
        us.destroy();
      }
    };
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
          }}
        >
          {/* Orb frame: outer border ring */}
          <div
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
            }}
          >
            {/* Inner mask: clips the orb so fuzzy edges hide behind the border */}
            <div
              style={{
                position: "absolute",
                inset: 1,
                borderRadius: "50%",
                overflow: "hidden",
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
