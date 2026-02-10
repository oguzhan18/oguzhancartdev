"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const technologies = [
  "ANGULAR",
  "REACT",
  "NEXT.JS",
  "VUE.JS",
  "TYPESCRIPT",
  "NESTJS",
  "THREE.JS",
  "TAILWIND",
  "NODE.JS",
  "DOCKER",
];

export function MarqueeSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 35,
        repeat: -1,
      });
      gsap.to(marquee2Ref.current, {
        xPercent: 50,
        ease: "none",
        duration: 28,
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        backgroundColor: "#0a0a08",
        borderTop: "1px solid rgba(220,210,190,0.06)",
        borderBottom: "1px solid rgba(220,210,190,0.06)",
      }}
    >
      <div className="flex justify-center gap-16 mb-8" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={`pt-${i}`} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "rgba(220,210,190,0.04)" }} />
        ))}
      </div>

      <div className="mb-6 overflow-hidden">
        <div ref={marqueeRef} className="flex whitespace-nowrap">
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center">
              {technologies.map((tech) => (
                <span
                  key={`${setIndex}-${tech}`}
                  className="flex items-center gap-6 mx-6"
                >
                  <span
                    className="text-4xl md:text-6xl lg:text-7xl font-serif cursor-default transition-colors duration-500"
                    style={{ color: "rgba(220,210,190,0.06)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(220,210,190,0.2)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(220,210,190,0.06)"; }}
                  >
                    {tech}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "rgba(220,210,190,0.08)" }} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden">
        <div ref={marquee2Ref} className="flex whitespace-nowrap" style={{ transform: "translateX(-50%)" }}>
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center">
              {[...technologies].reverse().map((tech) => (
                <span
                  key={`${setIndex}-${tech}-rev`}
                  className="flex items-center gap-6 mx-6"
                >
                  <span
                    className="text-4xl md:text-6xl lg:text-7xl font-serif cursor-default transition-colors duration-500 text-outline"
                    style={{ WebkitTextStroke: "1px rgba(220,210,190,0.06)", color: "transparent" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.cssText = "-webkit-text-stroke: 1px rgba(220,210,190,0.2); color: transparent;"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.cssText = "-webkit-text-stroke: 1px rgba(220,210,190,0.06); color: transparent;"; }}
                  >
                    {tech}
                  </span>
                  <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "rgba(220,210,190,0.05)" }} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-16 mt-8" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={`pb-${i}`} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "rgba(220,210,190,0.04)" }} />
        ))}
      </div>
    </section>
  );
}
