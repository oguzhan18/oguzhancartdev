"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CinemaWrapper } from "@/components/cinema-wrapper";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Turkuvaz Media / PATH",
    category: "Media & News Platform",
    year: "2025",
    role: "Frontend Developer",
    description:
      "Developed a dynamic Atomic Design frontend enabling Turkuvaz Media news sites to be managed from a single project. Deployed across 35+ news sites including ahaber.com.tr with shared architecture.",
    tags: ["Atomic Design", "Tailwind", "Pure JS", "Razor ASP.NET Core"],
    metrics: { sites: "35+", architecture: "Atomic" },
    image: "/images/project-01.jpg",
    frame: "FRM 0001",
  },
  {
    id: 2,
    title: "Teamso HR Platform",
    category: "Human Resources SaaS",
    year: "2025",
    role: "Frontend Developer",
    description:
      "Full frontend development for an HR solutions platform. Built new modules, established design system, refactored codebase, and created reusable component libraries.",
    tags: ["Next.js", "Vue.js", "SASS", "Figma"],
    metrics: { modules: "12+", stack: "Hybrid" },
    image: "/images/project-02.jpg",
    frame: "FRM 0025",
  },
  {
    id: 3,
    title: "Dopinger CMS",
    category: "SEO & AI-Powered CMS",
    year: "2023 - 2025",
    role: "Frontend Developer @ Jengal Software",
    description:
      "Created an SEO-focused, AI-supported CMS program ensuring high website construction performance. Developed social media software and e-commerce platforms with mobile-friendly clean code.",
    tags: ["Angular", "React", "SASS", "NestJS", "Jenkins"],
    metrics: { performance: "98", seo: "A+" },
    image: "/images/project-03.jpg",
    frame: "FRM 0049",
  },
  {
    id: 4,
    title: "Marketplace & FinTech Suite",
    category: "E-Commerce & Finance",
    year: "2021 - 2023",
    role: "Frontend Developer @ Aifa Soft",
    description:
      "Built marketplace price tracking across Trendyol, Amazon, Hepsiburada. Developed gold labor calculation software, personnel management QR systems, exchange rate displays with WebSocket, and payment modules.",
    tags: ["Angular", ".NET Core", "NestJS", "Flutter", "WebSocket"],
    metrics: { platforms: "8+", realtime: "Live" },
    image: "/images/project-04.jpg",
    frame: "FRM 0073",
  },
];

export default function WorkPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
      );

      const items =
        projectsRef.current?.querySelectorAll(".project-item") || [];
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 88%" },
          }
        );
      });
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
                Scene II -- Selected Work
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
              Selected
              <span
                className="block italic mt-2"
                style={{
                  WebkitTextStroke: "1.5px rgba(220,210,190,0.5)",
                  color: "transparent",
                }}
              >
                Filmography
              </span>
            </h1>

            <p
              className="max-w-2xl text-base md:text-lg leading-relaxed"
              style={{ color: "rgba(220,210,190,0.45)" }}
            >
              A curated collection of digital products built across media,
              fintech, e-commerce, and SaaS industries over 6+ years.
            </p>
          </div>
        </section>

        <section
          ref={projectsRef}
          className="py-12 md:py-24 px-6 md:px-12 lg:px-24"
        >
          <div className="max-w-7xl mx-auto space-y-32 md:space-y-48">
            {projects.map((project, index) => (
              <article key={project.id} className="project-item group">
                <div
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
                >
                  <div
                    className={`relative overflow-hidden ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  >
                    <div
                      className="relative aspect-[4/3] p-3 md:p-4"
                      style={{
                        backgroundColor: "rgba(220,210,190,0.015)",
                        border: "1px solid rgba(220,210,190,0.08)",
                      }}
                    >
                      <div
                        className="absolute top-2 left-2 w-5 h-5 border-t border-l"
                        style={{ borderColor: "rgba(220,210,190,0.15)" }}
                      />
                      <div
                        className="absolute top-2 right-2 w-5 h-5 border-t border-r"
                        style={{ borderColor: "rgba(220,210,190,0.15)" }}
                      />
                      <div
                        className="absolute bottom-2 left-2 w-5 h-5 border-b border-l"
                        style={{ borderColor: "rgba(220,210,190,0.15)" }}
                      />
                      <div
                        className="absolute bottom-2 right-2 w-5 h-5 border-b border-r"
                        style={{ borderColor: "rgba(220,210,190,0.15)" }}
                      />

                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          src={project.image || "/favicon-32x32.png"}
                          alt={`${project.title} - ${project.category}`}
                          fill
                          quality={65}
                          className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                          style={{
                            filter:
                              "sepia(0.6) contrast(1.1) brightness(0.7) saturate(0.3)",
                          }}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background:
                              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
                          }}
                        />

                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background:
                              "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, rgba(0,0,0,0.5) 100%)",
                          }}
                        />
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end pointer-events-none">
                        <span
                          className="font-mono text-[9px] tracking-[0.3em]"
                          style={{ color: "rgba(220,210,190,0.2)" }}
                        >
                          {project.frame}
                        </span>
                        <span
                          className="font-mono text-[9px] tracking-[0.3em]"
                          style={{ color: "rgba(220,210,190,0.2)" }}
                        >
                          {project.year}
                        </span>
                      </div>

                      <div className="absolute top-5 right-5 pointer-events-none">
                        <span
                          className="font-mono text-[7px] tracking-[0.2em]"
                          style={{ color: "rgba(220,210,190,0.1)" }}
                        >
                          KODAK 5222
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                  >
                    <div
                      className="flex items-center gap-4 text-[10px] font-mono tracking-[0.3em] uppercase"
                      style={{ color: "rgba(220,210,190,0.3)" }}
                    >
                      <span>{project.category}</span>
                      <span
                        className="w-6 h-px"
                        style={{
                          backgroundColor: "rgba(220,210,190,0.15)",
                        }}
                      />
                      <span>{project.year}</span>
                    </div>

                    <h2
                      className="font-serif text-3xl md:text-4xl lg:text-5xl"
                      style={{ color: "rgba(220,210,190,0.9)" }}
                    >
                      {project.title}
                    </h2>

                    <p
                      className="text-xs font-mono tracking-wider font-medium"
                      style={{ color: "rgba(220,210,190,0.45)" }}
                    >
                      {project.role}
                    </p>

                    <p
                      className="leading-relaxed text-base max-w-lg"
                      style={{ color: "rgba(220,210,190,0.4)" }}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-[9px] font-mono tracking-wider font-medium"
                          style={{
                            color: "rgba(220,210,190,0.35)",
                            border: "1px solid rgba(220,210,190,0.1)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-10 pt-6">
                      {Object.entries(project.metrics).map(
                        ([key, value]) => (
                          <div key={key}>
                            <span
                              className="block font-serif text-3xl md:text-4xl"
                              style={{
                                color: "rgba(220,210,190,0.75)",
                              }}
                            >
                              {value}
                            </span>
                            <span
                              className="text-[9px] font-mono tracking-[0.3em] uppercase"
                              style={{
                                color: "rgba(220,210,190,0.25)",
                              }}
                            >
                              {key}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {index < projects.length - 1 && (
                  <div
                    className="flex items-center justify-center gap-3 mt-32 md:mt-48"
                    aria-hidden="true"
                  >
                    <div
                      className="w-20 h-px"
                      style={{
                        backgroundColor: "rgba(220,210,190,0.06)",
                      }}
                    />
                    <span
                      className="font-mono text-[8px] tracking-[0.3em]"
                      style={{ color: "rgba(220,210,190,0.1)" }}
                    >
                      CUT
                    </span>
                    <div
                      className="w-20 h-px"
                      style={{
                        backgroundColor: "rgba(220,210,190,0.06)",
                      }}
                    />
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </CinemaWrapper>
  );
}
