"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 25,
        repeat: -1,
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#0a0a08",
        borderTop: "1px solid rgba(220,210,190,0.04)",
      }}
    >
      <div
        className="py-8 md:py-12 overflow-hidden"
        style={{ borderBottom: "1px solid rgba(220,210,190,0.04)" }}
      >
        <div ref={marqueeRef} className="flex whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="font-serif leading-none tracking-tight mx-8"
              style={{
                fontSize: "clamp(4rem, 12vw, 14rem)",
                color: "rgba(220,210,190,0.03)",
              }}
            >
              OGUZHAN CART
            </span>
          ))}
        </div>
      </div>

      <div className="py-12 md:py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ border: "1px solid rgba(220,210,190,0.15)" }}
                  />
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "rgba(220,210,190,0.2)" }}
                  />
                </div>
                <span
                  className="font-serif text-lg"
                  style={{ color: "rgba(220,210,190,0.7)" }}
                >
                  Oguzhan Cart
                </span>
              </div>
              <p
                className="text-sm leading-relaxed max-w-xs"
                style={{ color: "rgba(220,210,190,0.25)" }}
              >
                Frontend Developer crafting scalable web applications
                across CMS, CRM, FinTech, and e-commerce domains.
              </p>
            </div>

            <div className="md:text-center">
              <span
                className="block text-[9px] font-mono tracking-[0.3em] uppercase mb-6 font-medium"
                style={{ color: "rgba(220,210,190,0.2)" }}
              >
                Scenes
              </span>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Work", href: "/work", scene: "II" },
                  { label: "About", href: "/about", scene: "III" },
                  { label: "Contact", href: "/contact", scene: "IV" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center justify-start md:justify-center gap-2 text-sm transition-colors duration-300"
                    style={{ color: "rgba(220,210,190,0.3)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color =
                        "rgba(220,210,190,0.7)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color =
                        "rgba(220,210,190,0.3)";
                    }}
                  >
                    <span className="font-mono text-[8px]">{link.scene}</span>
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="md:text-right">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-3 text-sm transition-colors duration-300 group"
                style={{ color: "rgba(220,210,190,0.3)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "rgba(220,210,190,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(220,210,190,0.3)";
                }}
              >
                <span className="font-mono tracking-wider">Rewind</span>
                <span
                  className="w-10 h-10 flex items-center justify-center transition-all duration-300"
                  style={{ border: "1px solid rgba(220,210,190,0.08)" }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div
            className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(220,210,190,0.04)" }}
          >
            <p
              className="text-[10px] font-mono tracking-[0.2em]"
              style={{ color: "rgba(220,210,190,0.15)" }}
            >
              &copy; {currentYear} OGUZHAN CART PRODUCTIONS. ALL RIGHTS
              RESERVED.
            </p>
            <p
              className="text-[10px] font-mono tracking-[0.2em]"
              style={{ color: "rgba(220,210,190,0.15)" }}
            >
              CRAFTED WITH PRECISION -- REEL 01 OF 01
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
