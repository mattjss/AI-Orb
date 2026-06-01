"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const ORB_URL = "https://www.unicorn.studio/embed/1pR6h5M1hBZZGegkYa8W";

type AgentState = "idle" | "listening" | "thinking";

const PARTICLES = [
  { phase: 0,   radius: 116, size: 2.5, dur: 20 },
  { phase: 90,  radius: 120, size: 2,   dur: 26 },
  { phase: 180, radius: 114, size: 3,   dur: 17 },
  { phase: 270, radius: 118, size: 2,   dur: 24 },
  { phase: 45,  radius: 130, size: 2,   dur: 30 },
  { phase: 135, radius: 126, size: 3,   dur: 23 },
  { phase: 225, radius: 132, size: 2.5, dur: 35 },
  { phase: 315, radius: 128, size: 2,   dur: 28 },
];

export default function Home() {
  const [agentState, setAgentState] = useState<AgentState>("idle");
  const [volume, setVolume] = useState(0);

  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number>(0);
  const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dataArrayRef = useRef<Uint8Array<ArrayBuffer> | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const stopMic = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    streamRef.current?.getTracks().forEach(t => t.stop());
    streamRef.current = null;
    audioCtxRef.current?.close();
    audioCtxRef.current = null;
    if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
    silenceTimerRef.current = null;
    setVolume(0);
  }, []);

  const startListening = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const ctx = new AudioContext();
      audioCtxRef.current = ctx;
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 512;
      analyserRef.current = analyser;
      dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount) as Uint8Array<ArrayBuffer>;
      ctx.createMediaStreamSource(stream).connect(analyser);

      setAgentState("listening");

      const tick = () => {
        analyser.getByteFrequencyData(dataArrayRef.current!);
        const avg = dataArrayRef.current!.reduce((a, b) => a + b, 0) / dataArrayRef.current!.length;
        const vol = Math.min(avg / 70, 1);
        setVolume(vol);

        if (vol < 0.06) {
          if (!silenceTimerRef.current) {
            silenceTimerRef.current = setTimeout(() => {
              stopMic();
              setAgentState("thinking");
              setTimeout(() => setAgentState("idle"), 3200);
            }, 1500);
          }
        } else {
          if (silenceTimerRef.current) {
            clearTimeout(silenceTimerRef.current);
            silenceTimerRef.current = null;
          }
        }
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    } catch {
      console.warn("Microphone access denied");
    }
  }, [stopMic]);

  const handleMic = useCallback(() => {
    if (agentState === "idle") {
      startListening();
    } else if (agentState === "listening") {
      stopMic();
      setAgentState("idle");
    }
  }, [agentState, startListening, stopMic]);

  useEffect(() => () => { stopMic(); }, [stopMic]);

  const isListening = agentState === "listening";
  const isThinking = agentState === "thinking";

  const orbScale = isThinking ? 1.06 : 1 + volume * 0.16;
  const orbBrightness = isThinking ? 1.18 : 1 + volume * 1.1;
  const orbSaturate = isThinking ? 1.2 : 1 + volume * 0.3;
  const glowRadius = 56 + volume * 110;
  const glowOpacity = 0.12 + volume * 0.32;

  return (
    <div style={{
      width: "100vw", height: "100vh",
      background: "#101010",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div style={{
        width: 422, height: 422,
        background: "#101010",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
        flexShrink: 0,
      }}>

        {/* ambient glow — silver/platinum */}
        <div style={{
          position: "absolute",
          width: glowRadius * 2,
          height: glowRadius * 2,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(185,190,208,${glowOpacity}) 0%, transparent 70%)`,
          filter: `blur(${38 + volume * 20}px)`,
          transform: "translateY(-28px)",
          transition: isThinking
            ? "all 1.2s ease"
            : "all 0.08s linear",
          pointerEvents: "none",
          zIndex: 0,
        }} />

        {/* orb + particles */}
        <div style={{
          position: "relative",
          width: 202,
          height: 202,
          zIndex: 1,
          transform: `scale(${orbScale})`,
          filter: `brightness(${orbBrightness}) saturate(${orbSaturate})`,
          transition: isThinking
            ? "transform 1.0s ease, filter 1.0s ease"
            : "transform 0.06s linear, filter 0.08s linear",
        }}>

          {/* particle dots */}
          <div
            className={`particles state-${agentState}`}
            style={{
              position: "absolute",
              width: 290,
              height: 290,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          >
            {PARTICLES.map((p, i) => (
              <div
                key={i}
                className="particle-orbit"
                style={{
                  animationDuration: `${p.dur}s`,
                  animationDelay: `-${(p.phase / 360) * p.dur}s`,
                }}
              >
                <div
                  className="particle-dot"
                  style={{
                    width: p.size,
                    height: p.size,
                    top: `calc(50% - ${p.radius}px)`,
                    left: `calc(50% - ${p.size / 2}px)`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* metal border frame + orb */}
          <div className="orb-frame">
            <div className="orb-inner">
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
          </div>

        </div>

        {/* status label */}
        <span className={`status-text state-${agentState}`}>
          {agentState === "idle" && "tap to speak"}
          {agentState === "listening" && "listening"}
          {agentState === "thinking" && "thinking"}
        </span>

        {/* mic button */}
        <button
          onClick={handleMic}
          disabled={isThinking}
          className={`mic-btn state-${agentState}`}
          aria-label={isListening ? "Stop" : "Speak"}
        >
          {isListening ? (
            <svg width={14} height={14} viewBox="0 0 14 14" fill="currentColor">
              <rect x="2.5" y="2.5" width="9" height="9" rx="1.5" />
            </svg>
          ) : (
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5.5" y="1.5" width="5" height="7.5" rx="2.5" />
              <path d="M2.5 8A5.5 5.5 0 0 0 13.5 8" />
              <line x1="8" y1="13.5" x2="8" y2="15" />
              <line x1="5.5" y1="15" x2="10.5" y2="15" />
            </svg>
          )}
        </button>

      </div>
    </div>
  );
}
