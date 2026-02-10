"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [titleRef.current, subtitleRef.current, taglineRef.current],
        { opacity: 0 }
      );
      gsap.set(scrollIndicatorRef.current, { opacity: 0 });

      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(taglineRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          titleRef.current,
          { opacity: 1, duration: 0.15 },
          "-=0.2"
        )
        .fromTo(
          titleRef.current,
          { x: () => Math.random() * 6 - 3, y: () => Math.random() * 4 - 2 },
          { x: 0, y: 0, duration: 1, ease: "steps(10)" },
          "-=0.15"
        )
        .to(
          subtitleRef.current,
          { opacity: 1, duration: 1.2, ease: "power2.out" },
          "-=0.4"
        )
        .to(
          scrollIndicatorRef.current,
          { opacity: 1, duration: 0.8 },
          "-=0.3"
        );

      gsap.to(containerRef.current, {
        x: "random(-0.3, 0.3)",
        y: "random(-0.3, 0.3)",
        duration: 0.08,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });

      gsap.to(scrollIndicatorRef.current?.querySelector(".scroll-line"), {
        scaleY: 1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 overflow-hidden"
      style={{ backgroundColor: "#0a0a08" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 45% 40% at 50% 48%, rgba(220,210,190,0.03) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-4"
        aria-hidden="true"
      >
        <div className="w-12 h-px" style={{ backgroundColor: "rgba(220,210,190,0.1)" }} />
        <span className="font-mono text-[8px] tracking-[0.5em] uppercase" style={{ color: "rgba(220,210,190,0.15)" }}>
          Scene I
        </span>
        <div className="w-12 h-px" style={{ backgroundColor: "rgba(220,210,190,0.1)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div ref={taglineRef} className="mb-8 md:mb-12">
          <span
            className="inline-block px-6 py-3 text-[10px] md:text-xs font-mono tracking-[0.5em] uppercase"
            style={{
              color: "rgba(220,210,190,0.45)",
              border: "1px solid rgba(220,210,190,0.1)",
            }}
          >
            Frontend Developer -- 6+ Years of Craft
          </span>
        </div>

        <h1
          ref={titleRef}
          className="font-serif text-[3rem] md:text-[5rem] lg:text-[7.5rem] xl:text-[9.5rem] font-normal leading-[0.85] tracking-[-0.02em] mb-10 md:mb-14"
        >
          <span className="block" style={{ color: "rgba(220,210,190,0.9)" }}>
            Crafting
          </span>
          <span
            className="block italic"
            style={{
              WebkitTextStroke: "1px rgba(220,210,190,0.5)",
              color: "transparent",
            }}
          >
            Digital
          </span>
          <span className="block" style={{ color: "rgba(220,210,190,0.9)" }}>
            Experiences
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="max-w-xl mx-auto text-sm md:text-base leading-relaxed font-sans tracking-wide"
          style={{ color: "rgba(220,210,190,0.35)" }}
        >
          Passionate about building responsive, scalable web applications
          with Angular, React, Next.js, Vue.js, and TypeScript. Specializing in
          CMS, CRM, FinTech, and e-commerce solutions.
        </p>

        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-wide transition-all duration-500"
            style={{
              backgroundColor: "rgba(220,210,190,0.85)",
              color: "#0a0a08",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(220,210,190,1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(220,210,190,0.85)";
            }}
          >
            <span>View Selected Work</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm transition-colors duration-300 tracking-wide"
            style={{ color: "rgba(220,210,190,0.35)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "rgba(220,210,190,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(220,210,190,0.35)";
            }}
          >
            <span>Get in Touch</span>
          </a>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
      >
        <span className="text-[9px] font-mono tracking-[0.4em] uppercase" style={{ color: "rgba(220,210,190,0.2)" }}>
          Scroll
        </span>
        <div className="w-px h-12 relative overflow-hidden" style={{ backgroundColor: "rgba(220,210,190,0.08)" }}>
          <div
            className="scroll-line absolute top-0 left-0 w-full origin-top"
            style={{ height: "100%", transform: "scaleY(0)", backgroundColor: "rgba(220,210,190,0.35)" }}
          />
        </div>
      </div>

      <div className="hidden lg:flex absolute left-10 top-1/2 -translate-y-1/2 -rotate-90 origin-center items-center gap-4 z-10">
        <div className="w-10 h-px" style={{ backgroundColor: "rgba(220,210,190,0.1)" }} />
        <span className="text-[8px] font-mono tracking-[0.5em] uppercase" style={{ color: "rgba(220,210,190,0.15)" }}>
          Istanbul, Turkey
        </span>
      </div>
      <div className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 rotate-90 origin-center items-center gap-4 z-10">
        <span className="text-[8px] font-mono tracking-[0.5em] uppercase" style={{ color: "rgba(220,210,190,0.15)" }}>
          Est. 2018
        </span>
        <div className="w-10 h-px" style={{ backgroundColor: "rgba(220,210,190,0.1)" }} />
      </div>

      <div className="absolute bottom-4 left-16 font-mono text-[8px] tracking-[0.3em] z-10 hidden md:block" style={{ color: "rgba(220,210,190,0.1)" }} aria-hidden="true">
        KODAK 5222 DOUBLE-X
      </div>
      <div className="absolute bottom-4 right-16 font-mono text-[8px] tracking-[0.3em] z-10 hidden md:block" style={{ color: "rgba(220,210,190,0.1)" }} aria-hidden="true">
        16A &gt;&gt; 17 &gt;&gt; 18
      </div>
    </section>
  );
}
