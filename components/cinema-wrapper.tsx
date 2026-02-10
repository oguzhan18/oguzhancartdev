"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { FilmGrain } from "@/components/film-grain";

export function CinemaWrapper({ children }: { children: ReactNode }) {
  const flickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      if (!flickerRef.current) return;
      const shouldFlicker = Math.random() > 0.88;
      if (shouldFlicker) {
        flickerRef.current.style.opacity = String(
          Math.random() * 0.08 + 0.01
        );
        setTimeout(() => {
          if (flickerRef.current) flickerRef.current.style.opacity = "0";
        }, 40 + Math.random() * 60);
      }
    }, 250);
    return () => clearInterval(flickerInterval);
  }, []);

  return (
    <div style={{ backgroundColor: "#0a0a08", color: "rgba(220,210,190,1)" }}>
      <div className="fixed inset-0 z-[90] pointer-events-none">
        <FilmGrain />
      </div>

      <div
        className="fixed inset-0 z-[91] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
        }}
      />

      <div
        className="fixed inset-0 z-[91] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div
        ref={flickerRef}
        className="fixed inset-0 z-[91] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundColor: "rgba(220,210,190,0)",
          transition: "opacity 0.04s",
        }}
      />

      <div
        className="fixed left-0 top-0 bottom-0 w-10 md:w-12 z-[92] pointer-events-none hidden lg:block overflow-hidden"
        aria-hidden="true"
        style={{ backgroundColor: "rgba(8,8,6,0.95)", borderRight: "1.5px solid rgba(220,210,190,0.15)" }}
      >
        <div className="film-strip-scroll w-full" style={{ height: "200%" }}>
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={`gl-${i}`} className="flex items-center justify-center" style={{ height: "28px", marginBottom: "16px" }}>
              <div className="w-5 h-3.5 md:w-6 md:h-4" style={{ border: "1.5px solid rgba(220,210,190,0.25)", borderRadius: "1.5px" }} />
            </div>
          ))}
        </div>
      </div>
      <div
        className="fixed right-0 top-0 bottom-0 w-10 md:w-12 z-[92] pointer-events-none hidden lg:block overflow-hidden"
        aria-hidden="true"
        style={{ backgroundColor: "rgba(8,8,6,0.95)", borderLeft: "1.5px solid rgba(220,210,190,0.15)" }}
      >
        <div className="film-strip-scroll w-full" style={{ height: "200%", animationDirection: "reverse" }}>
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={`gr-${i}`} className="flex items-center justify-center" style={{ height: "28px", marginBottom: "16px" }}>
              <div className="w-5 h-3.5 md:w-6 md:h-4" style={{ border: "1.5px solid rgba(220,210,190,0.25)", borderRadius: "1.5px" }} />
            </div>
          ))}
        </div>
      </div>

      {children}
    </div>
  );
}
