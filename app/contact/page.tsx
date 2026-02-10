"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CinemaWrapper } from "@/components/cinema-wrapper";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { name: "GitHub", url: "https://github.com/oguzhan18", label: "Open Source & Projects" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/o%C4%9Fuzhan-%C3%A7art-b73405199/", label: "Professional Network" },
  { name: "CodePen", url: "https://codepen.io/oguzhan1881", label: "Creative Experiments" },
  { name: "Medium", url: "https://medium.com/@oguzhancart1", label: "Technical Writing" },
  { name: "Portfolio", url: "https://oguzhancart.dev", label: "Personal Website" },
];

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
      );

      gsap.fromTo(
        emailRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: emailRef.current, start: "top 85%" },
        }
      );

      gsap.fromTo(
        linksRef.current?.querySelectorAll(".link-item") || [],
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: linksRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        infoRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: infoRef.current, start: "top 85%" },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <CinemaWrapper>
      <Navigation />

      <main className="relative z-10">
        <section className="min-h-[70vh] flex items-end pb-20 pt-40 px-6 md:px-12 lg:px-24">
          <div ref={heroRef} className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-4 mb-12">
              <span
                className="font-mono text-[9px] tracking-[0.5em] uppercase"
                style={{ color: "rgba(220,210,190,0.25)" }}
              >
                Scene IV -- Contact
              </span>
              <div
                className="flex-1 h-px"
                style={{ backgroundColor: "rgba(220,210,190,0.08)" }}
              />
            </div>

            <h1
              className="font-serif text-5xl md:text-7xl lg:text-[8rem] leading-[0.9] tracking-[-0.02em] mb-8"
              style={{ color: "rgba(220,210,190,0.95)" }}
            >
              {"Let's Create"}
              <span
                className="block italic mt-2"
                style={{
                  WebkitTextStroke: "1.5px rgba(220,210,190,0.5)",
                  color: "transparent",
                }}
              >
                Together
              </span>
            </h1>

            <p
              className="max-w-2xl text-base md:text-lg leading-relaxed"
              style={{ color: "rgba(220,210,190,0.45)" }}
            >
              Whether you have a project in mind, need consultation on CMS/CRM
              platforms, or want to collaborate on FinTech or e-commerce
              solutions -- every great story starts with a conversation.
            </p>
          </div>
        </section>

        <section
          ref={emailRef}
          className="py-24 md:py-40 px-6 md:px-12 lg:px-24"
          style={{ borderTop: "1px solid rgba(220,210,190,0.06)" }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <span
              className="inline-block text-[9px] font-mono tracking-[0.5em] uppercase mb-10"
              style={{ color: "rgba(220,210,190,0.25)" }}
            >
              Direct Line
            </span>

            <a
              href="mailto:oguzhancart1@gmail.com"
              className="group block"
            >
              <span
                className="block font-serif text-3xl md:text-5xl lg:text-7xl tracking-tight transition-colors duration-500"
                style={{ color: "rgba(220,210,190,0.75)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "rgba(220,210,190,0.95)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(220,210,190,0.75)";
                }}
              >
                oguzhancart1@gmail.com
              </span>
              <span
                className="block w-0 group-hover:w-full h-px mx-auto transition-all duration-700 mt-4"
                style={{ backgroundColor: "rgba(220,210,190,0.4)" }}
              />
            </a>

            <div className="mt-10 flex items-center justify-center gap-3">
              <span
                className="w-2 h-2 bg-green-500/70 rounded-full animate-pulse"
              />
              <span
                className="text-[10px] font-mono tracking-[0.3em] uppercase"
                style={{ color: "rgba(220,210,190,0.35)" }}
              >
                Available for projects & full-time opportunities
              </span>
            </div>
          </div>
        </section>

        <section
          ref={linksRef}
          className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
          style={{ borderTop: "1px solid rgba(220,210,190,0.04)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <span
                className="text-[9px] font-mono tracking-[0.5em] uppercase"
                style={{ color: "rgba(220,210,190,0.3)" }}
              >
                Channels
              </span>
              <div
                className="flex-1 h-px"
                style={{ backgroundColor: "rgba(220,210,190,0.06)" }}
              />
            </div>

            <div className="space-y-0">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-item group block"
                  style={{ borderTop: "1px solid rgba(220,210,190,0.06)" }}
                >
                  <div className="py-8 md:py-10 flex items-center justify-between">
                    <div className="flex items-center gap-6 md:gap-12">
                      <span
                        className="font-serif text-2xl md:text-3xl lg:text-4xl transition-colors duration-500"
                        style={{ color: "rgba(220,210,190,0.7)" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color =
                            "rgba(220,210,190,0.95)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color =
                            "rgba(220,210,190,0.7)";
                        }}
                      >
                        {link.name}
                      </span>
                      <span
                        className="hidden md:inline text-[10px] font-mono tracking-[0.3em] uppercase"
                        style={{ color: "rgba(220,210,190,0.2)" }}
                      >
                        {link.label}
                      </span>
                    </div>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ color: "rgba(220,210,190,0.3)" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </a>
              ))}
              <div
                style={{ borderTop: "1px solid rgba(220,210,190,0.06)" }}
              />
            </div>
          </div>
        </section>

        <section
          ref={infoRef}
          className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
          style={{ borderTop: "1px solid rgba(220,210,190,0.04)" }}
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            <div
              className="p-8 md:p-10"
              style={{
                backgroundColor: "rgba(220,210,190,0.02)",
                border: "1px solid rgba(220,210,190,0.06)",
              }}
            >
              <span
                className="block text-[9px] font-mono tracking-[0.3em] uppercase mb-4"
                style={{ color: "rgba(220,210,190,0.25)" }}
              >
                Location
              </span>
              <p
                className="font-serif text-xl mb-1"
                style={{ color: "rgba(220,210,190,0.7)" }}
              >
                Istanbul, Turkey
              </p>
              <p
                className="text-sm"
                style={{ color: "rgba(220,210,190,0.3)" }}
              >
                Sultangazi, GMT+3
              </p>
            </div>

            <div
              className="p-8 md:p-10"
              style={{
                backgroundColor: "rgba(220,210,190,0.02)",
                border: "1px solid rgba(220,210,190,0.06)",
              }}
            >
              <span
                className="block text-[9px] font-mono tracking-[0.3em] uppercase mb-4"
                style={{ color: "rgba(220,210,190,0.25)" }}
              >
                Specialization
              </span>
              <p
                className="font-serif text-xl mb-1"
                style={{ color: "rgba(220,210,190,0.7)" }}
              >
                Frontend Engineering
              </p>
              <p
                className="text-sm"
                style={{ color: "rgba(220,210,190,0.3)" }}
              >
                CMS, CRM, FinTech, E-Commerce
              </p>
            </div>

            <div
              className="p-8 md:p-10"
              style={{
                backgroundColor: "rgba(220,210,190,0.02)",
                border: "1px solid rgba(220,210,190,0.06)",
              }}
            >
              <span
                className="block text-[9px] font-mono tracking-[0.3em] uppercase mb-4"
                style={{ color: "rgba(220,210,190,0.25)" }}
              >
                Languages
              </span>
              <p
                className="font-serif text-xl mb-1"
                style={{ color: "rgba(220,210,190,0.7)" }}
              >
                Turkish & English
              </p>
              <p
                className="text-sm"
                style={{ color: "rgba(220,210,190,0.3)" }}
              >
                Available worldwide
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </CinemaWrapper>
  );
}
