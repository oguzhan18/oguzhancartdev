"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { color } from "@/lib/cinema-theme";

interface CountdownProps {
  onComplete: () => void;
}

type Phase = "leader" | "count" | "flash";

export function CinemaCountdown({ onComplete }: CountdownProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(3);
  const [phase, setPhase] = useState<Phase>("leader");
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const id = setTimeout(() => setPhase("count"), 800);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (phase !== "count") return;
    const id = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          setPhase("flash");
          setTimeout(() => onCompleteRef.current(), 500);
          return 0;
        }
        return prev - 1;
      });
    }, 600);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== "flash" || !containerRef.current) return;
    gsap.to(containerRef.current, {
      backgroundColor: "rgba(220,210,190,0.9)",
      duration: 0.08,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
        });
      },
    });
  }, [phase]);

  const sprocketColumn = (
    <div className="absolute top-0 bottom-2 w-6 hidden md:flex flex-col items-center justify-center gap-6">
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className="w-2.5 h-4"
          style={{ border: "1px solid rgba(220,210,190,0.08)", borderRadius: 1 }}
        />
      ))}
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ backgroundColor: color.bg }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.2) 3px, rgba(0,0,0,0.2) 6px)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 55% at 50% 50%, transparent 40%, rgba(0,0,0,0.85) 100%)" }} />

      {[
        "top-16 left-16 border-t-2 border-l-2",
        "top-16 right-16 border-t-2 border-r-2",
        "bottom-16 left-16 border-b-2 border-l-2",
        "bottom-16 right-16 border-b-2 border-r-2",
      ].map((cls) => (
        <div key={cls} className={`absolute w-12 h-12 ${cls}`} style={{ borderColor: "rgba(220,210,190,0.2)" }} />
      ))}

      {phase === "leader" && (
        <div className="text-center animate-pulse">
          <div className="w-16 h-16 mx-auto mb-6 border-2 rounded-full flex items-center justify-center" style={{ borderColor: "rgba(220,210,190,0.3)" }}>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "rgba(220,210,190,0.4)" }} />
          </div>
          <p className="font-mono text-[10px] tracking-[0.5em] uppercase" style={{ color: color.dim }}>Film Leader</p>
        </div>
      )}

      {phase === "count" && (
        <div className="relative flex items-center justify-center -translate-y-12 md:-translate-y-16">
          <svg className="w-56 h-56 md:w-72 md:h-72" viewBox="0 0 200 200" style={{ animation: "countdown-spin 2s linear infinite" }}>
            <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(220,210,190,0.12)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="75" fill="none" stroke="rgba(220,210,190,0.08)" strokeWidth="0.5" />
            <line x1="100" y1="5" x2="100" y2="35" stroke="rgba(220,210,190,0.25)" strokeWidth="1.5" />
            <line x1="100" y1="165" x2="100" y2="195" stroke="rgba(220,210,190,0.25)" strokeWidth="1.5" />
            <line x1="5" y1="100" x2="35" y2="100" stroke="rgba(220,210,190,0.25)" strokeWidth="1.5" />
            <line x1="165" y1="100" x2="195" y2="100" stroke="rgba(220,210,190,0.25)" strokeWidth="1.5" />
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i * 15 * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1={100 + Math.cos(angle) * 82}
                  y1={100 + Math.sin(angle) * 82}
                  x2={100 + Math.cos(angle) * 90}
                  y2={100 + Math.sin(angle) * 90}
                  stroke="rgba(220,210,190,0.15)"
                  strokeWidth={i % 3 === 0 ? "1.5" : "0.5"}
                />
              );
            })}
          </svg>
          <span
            className="absolute bottom-12 inset-0 flex items-center justify-center font-serif text-8xl md:text-9xl tabular-nums"
            style={{ color: color.text, textShadow: "0 0 40px rgba(220,210,190,0.15)" }}
          >
            {count}
          </span>
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="font-mono text-[9px] tracking-[0.4em] uppercase" style={{ color: color.dim }}>
              Scene {4 - count} of 4 -- Reel 01
            </span>
          </div>
        </div>
      )}

      <div className="absolute left-2 top-0 bottom-2"> {sprocketColumn}</div>
      <div className="absolute right-2 top-0 bottom-2"> {sprocketColumn}</div>

      <div className="absolute bottom-6 left-16 right-16 flex justify-between">
        <span className="font-mono text-[8px] tracking-[0.3em]" style={{ color: color.ghost }}>KODAK 5222 DOUBLE-X</span>
        <span className="font-mono text-[8px] tracking-[0.3em]" style={{ color: color.ghost }}>35MM -- OGUZHAN CART PRODUCTIONS</span>
      </div>

      <style jsx>{`
        @keyframes countdown-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
