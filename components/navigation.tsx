"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const navLinks = [
  { name: "Work", href: "/work", scene: "II" },
  { name: "About", href: "/about", scene: "III" },
  { name: "Contact", href: "/contact", scene: "IV" },
];

export function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-700 ${
          isScrolled ? "backdrop-blur-xl" : ""
        }`}
        style={{
          backgroundColor: isScrolled ? "rgba(10,10,8,0.85)" : "transparent",
          borderBottom: isScrolled
            ? "1px solid rgba(220,210,190,0.06)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-20 md:h-24">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full border group-hover:border-[rgba(220,210,190,0.5)] transition-colors duration-500"
                  style={{ borderColor: "rgba(220,210,190,0.2)" }}
                />
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "rgba(220,210,190,0.3)" }}
                />
              </div>
              <span
                className="font-serif text-lg md:text-xl tracking-wide"
                style={{ color: "rgba(220,210,190,0.85)" }}
              >
                Oguzhan Cart
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-baseline gap-2 transition-colors duration-300"
                  style={{
                    color: isActive(link.href)
                      ? "rgba(220,210,190,0.9)"
                      : "rgba(220,210,190,0.4)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "rgba(220,210,190,0.9)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isActive(link.href)
                      ? "rgba(220,210,190,0.9)"
                      : "rgba(220,210,190,0.4)";
                  }}
                >
                  <span className="font-mono text-[8px] tracking-wider">
                    {link.scene}
                  </span>
                  <span className="text-sm tracking-wide font-medium">
                    {link.name}
                  </span>
                  {isActive(link.href) && (
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: "rgba(220,210,190,0.6)" }}
                    />
                  )}
                </Link>
              ))}
              <a
                href="mailto:oguzhancart1@gmail.com"
                className="px-5 py-2.5 text-sm tracking-wide font-medium transition-all duration-300"
                style={{
                  backgroundColor: "rgba(220,210,190,0.9)",
                  color: "#0a0a08",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(220,210,190,1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(220,210,190,0.9)";
                }}
              >
                {"Let's Talk"}
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              style={{ color: "rgba(220,210,190,0.75)" }}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-px transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                  style={{ backgroundColor: "currentColor" }}
                />
                <span
                  className={`w-full h-px transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
                  style={{ backgroundColor: "currentColor" }}
                />
                <span
                  className={`w-full h-px transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                  style={{ backgroundColor: "currentColor" }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[75] transition-all duration-500 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "#0a0a08" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
          }}
        />
        <div className="flex flex-col items-center justify-center h-full gap-10">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-baseline gap-3"
            style={{
              color: pathname === "/"
                ? "rgba(220,210,190,0.9)"
                : "rgba(220,210,190,0.8)",
            }}
          >
            <span
              className="font-mono text-[10px] tracking-wider"
              style={{ color: "rgba(220,210,190,0.3)" }}
            >
              I
            </span>
            <span className="font-serif text-3xl">Home</span>
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-baseline gap-3"
              style={{
                color: isActive(link.href)
                  ? "rgba(220,210,190,0.9)"
                  : "rgba(220,210,190,0.8)",
              }}
            >
              <span
                className="font-mono text-[10px] tracking-wider"
                style={{ color: "rgba(220,210,190,0.3)" }}
              >
                {link.scene}
              </span>
              <span className="font-serif text-3xl">{link.name}</span>
            </Link>
          ))}
          <div
            className="mt-8 w-16 h-px"
            style={{ backgroundColor: "rgba(220,210,190,0.1)" }}
          />
          <a
            href="mailto:oguzhancart1@gmail.com"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 px-8 py-4 text-sm tracking-wide"
            style={{
              backgroundColor: "rgba(220,210,190,0.85)",
              color: "#0a0a08",
            }}
          >
            {"Let's Talk"}
          </a>
        </div>
      </div>
    </>
  );
}
