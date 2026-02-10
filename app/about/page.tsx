"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CinemaWrapper } from "@/components/cinema-wrapper";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "6+", label: "Years of Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "35+", label: "Live Websites" },
  { value: "8+", label: "Frameworks Mastered" },
];

const expertise = [
  { name: "Angular", years: "5+" },
  { name: "React / Next.js", years: "4+" },
  { name: "Vue.js / Nuxt.js", years: "3+" },
  { name: "TypeScript", years: "5+" },
  { name: "Three.js / WebGL", years: "2+" },
  { name: "NestJS / Node.js", years: "4+" },
  { name: "Tailwind / SASS", years: "5+" },
  { name: "Docker / DevOps", years: "3+" },
];

const experience = [
  {
    role: "Frontend Developer",
    company: "PATH / Turkuvaz Media Group",
    period: "2025 - Present",
    description:
      "Developed a dynamic Atomic Design frontend enabling 35+ news sites (including ahaber.com.tr) to be managed from a single project. Worked with Tailwind CSS, Pure JS, and Razor ASP.NET Core.",
  },
  {
    role: "Frontend Developer",
    company: "Teamso",
    period: "2025",
    description:
      "Built full frontend for an HR solutions platform. Established design system, refactored codebase, and created reusable component libraries using Next.js, Vue.js, and SASS.",
  },
  {
    role: "Frontend Developer",
    company: "Jengal Software / Dopinger",
    period: "2023 - 2025",
    description:
      "Created SEO-focused, AI-supported CMS ensuring high performance. Developed social media software and e-commerce platforms with Angular, React, SASS, NestJS, and Jenkins.",
  },
  {
    role: "Frontend Developer",
    company: "Aifa Soft",
    period: "2021 - 2023",
    description:
      "Built marketplace price tracking (Trendyol, Amazon, Hepsiburada), gold labor calculation software, personnel management QR systems, exchange rate displays with WebSocket, and payment modules.",
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
      );

      gsap.fromTo(
        statsRef.current?.querySelectorAll(".stat-item") || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: statsRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        bioRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: bioRef.current, start: "top 80%" },
        }
      );

      const expItems =
        expRef.current?.querySelectorAll(".exp-item") || [];
      expItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 85%" },
          }
        );
      });

      gsap.fromTo(
        skillsRef.current?.querySelectorAll(".skill-item") || [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: skillsRef.current, start: "top 80%" },
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
                Scene III -- About
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
              The Director
              <span
                className="block italic mt-2"
                style={{
                  WebkitTextStroke: "1.5px rgba(220,210,190,0.5)",
                  color: "transparent",
                }}
              >
                Behind the Code
              </span>
            </h1>

            <p
              className="max-w-2xl text-base md:text-lg leading-relaxed"
              style={{ color: "rgba(220,210,190,0.45)" }}
            >
              6+ years of crafting scalable web applications across CMS, CRM,
              FinTech, and e-commerce domains. Every line of code is a frame in
              a larger story.
            </p>
          </div>
        </section>

        <section
          ref={statsRef}
          className="py-16 md:py-20 px-6 md:px-12 lg:px-24"
          style={{
            borderTop: "1px solid rgba(220,210,190,0.06)",
            borderBottom: "1px solid rgba(220,210,190,0.06)",
          }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item text-center md:text-left">
                <span
                  className="block font-serif text-5xl md:text-6xl lg:text-7xl mb-2"
                  style={{ color: "rgba(220,210,190,0.8)" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[10px] font-mono tracking-[0.3em] uppercase"
                  style={{ color: "rgba(220,210,190,0.3)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section
          ref={bioRef}
          className="py-24 md:py-40 px-6 md:px-12 lg:px-24"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16 lg:gap-24">
            <div className="lg:col-span-3 space-y-8">
              <span
                className="inline-block text-[9px] font-mono tracking-[0.5em] uppercase"
                style={{ color: "rgba(220,210,190,0.3)" }}
              >
                Biography
              </span>
              <div
                className="space-y-6 text-base md:text-lg leading-relaxed"
                style={{ color: "rgba(220,210,190,0.5)" }}
              >
                <p>
                  With over 6 years of professional experience, I specialize in
                  building responsive, scalable web applications using
                  JavaScript, TypeScript, and modern frontend frameworks. From
                  Angular to React, Vue to Next.js -- every tool is a brushstroke
                  in a bigger picture.
                </p>
                <p>
                  I have a proven track record in creating innovative UI/UX
                  designs, developing modular CMS and CRM platforms, and
                  integrating advanced features like SEO modules and AI tools. My
                  work has powered 35+ live news sites at Turkuvaz Media.
                </p>
                <p>
                  Passionate about FinTech, e-commerce, and media domains. I
                  bring clean code principles, SOLID architecture, and Atomic
                  Design methodology to every project. Graduated from Ataturk
                  University in Computer Programming.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 flex items-center">
              <div
                className="relative p-8 md:p-10 w-full"
                style={{
                  backgroundColor: "rgba(220,210,190,0.02)",
                  border: "1px solid rgba(220,210,190,0.06)",
                }}
              >
                <div
                  className="absolute top-2 left-2 w-4 h-4 border-t border-l"
                  style={{ borderColor: "rgba(220,210,190,0.1)" }}
                />
                <div
                  className="absolute top-2 right-2 w-4 h-4 border-t border-r"
                  style={{ borderColor: "rgba(220,210,190,0.1)" }}
                />
                <div
                  className="absolute bottom-2 left-2 w-4 h-4 border-b border-l"
                  style={{ borderColor: "rgba(220,210,190,0.1)" }}
                />
                <div
                  className="absolute bottom-2 right-2 w-4 h-4 border-b border-r"
                  style={{ borderColor: "rgba(220,210,190,0.1)" }}
                />

                <blockquote
                  className="font-serif text-xl md:text-2xl italic leading-relaxed mb-6"
                  style={{ color: "rgba(220,210,190,0.65)" }}
                >
                  &ldquo;Clean code is not written by following a set of rules.
                  You don&apos;t become a craftsman by learning a list of
                  heuristics.&rdquo;
                </blockquote>
                <cite
                  className="text-[10px] font-mono tracking-[0.3em] uppercase not-italic"
                  style={{ color: "rgba(220,210,190,0.25)" }}
                >
                  &mdash; Robert C. Martin
                </cite>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={expRef}
          className="py-24 md:py-40 px-6 md:px-12 lg:px-24"
          style={{ borderTop: "1px solid rgba(220,210,190,0.04)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <span
                className="text-[9px] font-mono tracking-[0.5em] uppercase"
                style={{ color: "rgba(220,210,190,0.3)" }}
              >
                Filmography
              </span>
              <div
                className="flex-1 h-px"
                style={{ backgroundColor: "rgba(220,210,190,0.06)" }}
              />
            </div>

            <div className="space-y-0">
              {experience.map((exp) => (
                <div
                  key={exp.company}
                  className="exp-item group"
                  style={{
                    borderTop: "1px solid rgba(220,210,190,0.06)",
                  }}
                >
                  <div className="py-10 md:py-14 grid md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-3">
                      <span
                        className="font-mono text-[10px] tracking-[0.3em] uppercase"
                        style={{ color: "rgba(220,210,190,0.3)" }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <div className="md:col-span-4">
                      <h3
                        className="font-serif text-xl md:text-2xl mb-1"
                        style={{ color: "rgba(220,210,190,0.85)" }}
                      >
                        {exp.role}
                      </h3>
                      <span
                        className="text-sm font-medium"
                        style={{ color: "rgba(220,210,190,0.5)" }}
                      >
                        {exp.company}
                      </span>
                    </div>
                    <div className="md:col-span-5">
                      <p
                        className="leading-relaxed text-sm"
                        style={{ color: "rgba(220,210,190,0.4)" }}
                      >
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div
                style={{
                  borderTop: "1px solid rgba(220,210,190,0.06)",
                }}
              />
            </div>
          </div>
        </section>

        <section
          ref={skillsRef}
          className="py-24 md:py-40 px-6 md:px-12 lg:px-24"
          style={{ borderTop: "1px solid rgba(220,210,190,0.04)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <span
                className="text-[9px] font-mono tracking-[0.5em] uppercase"
                style={{ color: "rgba(220,210,190,0.3)" }}
              >
                Technical Reel
              </span>
              <div
                className="flex-1 h-px"
                style={{ backgroundColor: "rgba(220,210,190,0.06)" }}
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {expertise.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-item group p-6 md:p-8 transition-all duration-500 cursor-default"
                  style={{
                    backgroundColor: "rgba(220,210,190,0.02)",
                    border: "1px solid rgba(220,210,190,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(220,210,190,0.2)";
                    e.currentTarget.style.backgroundColor =
                      "rgba(220,210,190,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(220,210,190,0.06)";
                    e.currentTarget.style.backgroundColor =
                      "rgba(220,210,190,0.02)";
                  }}
                >
                  <span
                    className="block font-serif text-lg md:text-xl mb-2"
                    style={{ color: "rgba(220,210,190,0.8)" }}
                  >
                    {skill.name}
                  </span>
                  <span
                    className="text-[9px] font-mono tracking-[0.3em] uppercase"
                    style={{ color: "rgba(220,210,190,0.25)" }}
                  >
                    {skill.years}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </CinemaWrapper>
  );
}
