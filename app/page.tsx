"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { color, border, overlay, type as t } from "@/lib/cinema-theme";
import {
  FEATURED_PROJECTS,
  SERVICES,
  STATS,
  TECH_STACK,
  EXPERIENCE,
  FAQ_ITEMS,
} from "@/lib/data";
import { CinemaCountdown, FilmFrame, SceneHeader } from "@/components/cinema";
import { Navigation } from "@/components/navigation";
import { MarqueeSection } from "@/components/marquee-section";
import { Footer } from "@/components/footer";
import { CinemaWrapper } from "@/components/cinema-wrapper";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [countdownDone, setCountdownDone] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCountdownComplete = useCallback(() => setCountdownDone(true), []);

  useEffect(() => {
    if (!countdownDone) return;

    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
        opacity: 0,
        y: 40,
      });

      const tl = gsap.timeline({ delay: 0.4 });
      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.6")
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4");

      gsap.to(heroRef.current, {
        x: "random(-0.3, 0.3)",
        y: "random(-0.3, 0.3)",
        duration: 0.08,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });

      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
          },
        );
      });
    });

    return () => ctx.revert();
  }, [countdownDone]);

  return (
    <>
      {!countdownDone && <CinemaCountdown onComplete={handleCountdownComplete} />}

      <div style={{ opacity: countdownDone ? 1 : 0, transition: "opacity 0.8s ease-in" }}>
        <CinemaWrapper>
          <Navigation />

          <main className="relative z-10">
            <HeroSection
              heroRef={heroRef}
              titleRef={titleRef}
              subtitleRef={subtitleRef}
              ctaRef={ctaRef}
            />

            <MarqueeSection />
            <StatsSection />
            <ServicesSection />
            <FeaturedWorkSection />
            <TechStackSection />
            <ExperienceSection />
            <FaqSection openIndex={openFaq} onToggle={(i) => setOpenFaq(openFaq === i ? null : i)} />
            <CtaSection />
          </main>

          <Footer />
        </CinemaWrapper>
      </div>
    </>
  );
}

interface HeroRefs {
  heroRef: React.RefObject<HTMLDivElement | null>;
  titleRef: React.RefObject<HTMLHeadingElement | null>;
  subtitleRef: React.RefObject<HTMLParagraphElement | null>;
  ctaRef: React.RefObject<HTMLDivElement | null>;
}

function HeroSection({ heroRef, titleRef, subtitleRef, ctaRef }: HeroRefs) {
  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 pt-28 md:pt-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 45% 40% at 50% 48%, rgba(220,210,190,0.04) 0%, transparent 70%)" }}
      />
 

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="mb-8 md:mb-10">
          <span
            className="inline-block px-6 py-3 text-[10px] md:text-xs font-mono tracking-[0.5em] uppercase font-semibold"
            style={{ color: color.body, border: border.subtle }}
          >
            Frontend Developer -- 6+ Years of Craft
          </span>
        </div>

        <h1
          ref={titleRef}
          className="font-serif text-[3.5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-normal leading-[0.85] tracking-[-0.02em] mb-10 md:mb-14"
        >
          <span className="block" style={{ color: color.text }}>Crafting</span>
          <span className="block italic" style={{ WebkitTextStroke: `1.5px ${color.outlineStroke}`, color: "transparent" }}>Digital</span>
          <span className="block" style={{ color: color.text }}>Experiences</span>
        </h1>

        <p
          ref={subtitleRef}
          className="max-w-2xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed font-sans tracking-wide"
          style={{ color: color.body }}
        >
          Building responsive, scalable web applications with Angular, React, Next.js,
          Vue.js, and TypeScript. Specializing in enterprise CMS, CRM, FinTech, and
          e-commerce solutions that serve millions of users.
        </p>

        <div ref={ctaRef} className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 px-10 py-5 text-sm font-bold tracking-wider transition-all duration-500 uppercase"
            style={{ backgroundColor: color.fill, color: color.dark }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = color.fillHover; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = color.fill; }}
          >
            <span>View Selected Work</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 tracking-wider uppercase"
            style={{ color: color.muted }}
            onMouseEnter={(e) => { e.currentTarget.style.color = color.text; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = color.muted; }}
          >
            <span>Get in Touch</span>
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex absolute left-10 top-1/2 -translate-y-1/2 -rotate-90 origin-center items-center gap-4 z-10">
        <div className="w-10 h-px" style={{ backgroundColor: color.ghost }} />
        <span className={t.label} style={{ color: color.dim }}>Istanbul, Turkey</span>
      </div>
      <div className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 rotate-90 origin-center items-center gap-4 z-10">
        <span className={t.label} style={{ color: color.dim }}>Est. 2018</span>
        <div className="w-10 h-px" style={{ backgroundColor: color.ghost }} />
      </div>

      <div className={`absolute bottom-4 left-16 ${t.filmMeta} z-10 hidden md:block`} style={{ color: color.ghost }} aria-hidden="true">KODAK 5222 DOUBLE-X</div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24" style={{ borderTop: border.section }}>
      <div className="max-w-7xl mx-auto">
        <SceneHeader scene="Scene II" label="At a Glance" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat) => (
            <FilmFrame key={stat.label} className="animate-on-scroll p-8 md:p-10 text-center">
              <span className="block font-serif text-5xl md:text-6xl lg:text-7xl font-normal mb-3" style={{ color: color.text }}>{stat.value}</span>
              <span className="block text-sm md:text-base font-semibold mb-2 tracking-wide" style={{ color: color.body }}>{stat.label}</span>
              <span className={`block ${t.caption}`} style={{ color: color.dim }}>{stat.detail}</span>
            </FilmFrame>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24" style={{ borderTop: border.section }}>
      <div className="max-w-7xl mx-auto">
        <SceneHeader scene="Scene III" label="Services" />
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-16">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight max-w-2xl" style={{ color: color.text }}>
            What I <span className="italic" style={{ WebkitTextStroke: `1px ${color.muted}`, color: "transparent" }}>Bring</span> to the Table
          </h2>
          <p className="max-w-md text-sm md:text-base leading-relaxed" style={{ color: color.muted }}>
            From initial architecture to final deployment, I deliver end-to-end frontend solutions optimized for performance, accessibility, and search engine visibility.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {SERVICES.map((service, i) => (
            <FilmFrame key={service.title} className="animate-on-scroll group p-8 md:p-10 transition-colors duration-500 hover:bg-[rgba(220,210,190,0.02)]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center font-serif text-2xl" style={{ color: color.muted, border: `1px solid ${color.ghost}` }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl mb-3 font-medium" style={{ color: color.text }}>{service.title}</h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: color.muted }}>{service.description}</p>
                </div>
              </div>
            </FilmFrame>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedWorkSection() {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden" style={{ borderTop: border.section }}>
      <SectionFilmStrip side="left" />
      <SectionFilmStrip side="right" />

      <div className="relative z-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <SceneHeader scene="Scene IV" label="Featured Reels" />

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-16 md:mb-20">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.01em] flex flex-wrap items-baseline gap-x-4 gap-y-0" style={{ color: color.text }}>
              <span>Selected</span>
              <span className="italic" style={{ WebkitTextStroke: `1.5px ${color.outlineStroke}`, color: "transparent" }}>Work</span>
            </h2>
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 pb-2 transition-all duration-500 self-start sm:self-auto"
              style={{ borderBottom: border.subtle }}
              onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = color.muted; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = color.ghost; }}
            >
              <span className={t.caption} style={{ color: color.muted }}>View Complete Reel</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke={color.muted}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {FEATURED_PROJECTS.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>

          <div className="mt-16 text-center md:hidden">
            <Link href="/work" className={`inline-flex items-center gap-3 px-8 py-4 ${t.caption} transition-all duration-500`} style={{ color: color.muted, border: border.subtle }}>
              <span>View All Reels</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: (typeof FEATURED_PROJECTS)[number]; index: number }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link href="/work" className="animate-on-scroll group block h-full">
      <div className="flex flex-col h-full" style={{ border: border.section }}>
        <div className="relative shrink-0">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={project.image || "/favicon-32x32.png"}
              alt={`${project.title} - ${project.category} by Oguzhan Cart`}
              fill
              quality={65}
              priority={index === 0}
              loading={index === 0 ? undefined : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
              style={{ filter: "sepia(0.5) contrast(1.15) brightness(0.65) saturate(0.35)" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 pointer-events-none" style={{ background: overlay.scanLines }} />
            <div className="absolute inset-0 pointer-events-none" style={{ background: overlay.vignette }} />
            <div className={`absolute top-3 left-3 ${t.filmMeta} tracking-[0.3em] uppercase text-[10px]`} style={{ color: color.dim }}>Reel {num}</div>
            <div className={`absolute bottom-3 right-3 ${t.filmMeta} text-[10px]`} style={{ color: color.ghost }}>{`>> ${16 + index}A`}</div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-14 h-14 flex items-center justify-center rounded-full" style={{ backgroundColor: "rgba(220,210,190,0.15)", backdropFilter: "blur(8px)", border: border.subtle }}>
                <svg className="w-5 h-5 ml-0.5" fill={color.text} viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 p-5 md:p-6">
          <span className={`${t.label} block mb-2`} style={{ color: color.dim }}>{project.category}</span>
          <h3 className="font-serif text-xl md:text-2xl lg:text-3xl leading-[1.15] mb-3 font-normal tracking-[-0.01em]" style={{ color: color.text }}>
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: color.muted }}>{project.description}</p>
          <div className="inline-flex items-center gap-3 group-hover:gap-5 transition-all duration-500">
            <span className="w-6 h-px transition-all duration-500 group-hover:w-10" style={{ backgroundColor: color.dim }} />
            <span className={t.caption} style={{ color: color.muted }}>View Project</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function SectionFilmStrip({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";

  return (
    <div
      className={`absolute ${isLeft ? "left-0" : "right-0"} top-0 bottom-0 w-12 md:w-16 hidden lg:block z-20 overflow-hidden`}
      style={{
        backgroundColor: color.bgPanel,
        [isLeft ? "borderRight" : "borderLeft"]: `2px solid ${color.stripBorder}`,
      }}
    >
      <div className="film-strip-scroll w-full" style={{ height: "200%", ...(isLeft ? {} : { animationDirection: "reverse" }) }}>
        {Array.from({ length: 80 }).map((_, i) => (
          <div key={`${side}-${i}`} className="flex items-center justify-center" style={{ height: 32, marginBottom: 12 }}>
            <div className="w-6 h-4 md:w-7 md:h-[18px]" style={{ border: `1.5px solid ${color.stripBorder}`, borderRadius: 2, backgroundColor: "rgba(220,210,190,0.04)", boxShadow: "0 0 6px rgba(220,210,190,0.06)" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function TechStackSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24" style={{ borderTop: border.section }}>
      <div className="max-w-7xl mx-auto">
        <SceneHeader scene="Scene V" label="Tech Stack" />
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-16" style={{ color: color.text }}>
          Tools of the <span className="italic" style={{ WebkitTextStroke: `1px ${color.muted}`, color: "transparent" }}>Trade</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {TECH_STACK.map((group) => (
            <div key={group.category} className="animate-on-scroll">
              <span className={`block ${t.caption} mb-6 pb-4`} style={{ color: color.dim, borderBottom: border.section }}>{group.category}</span>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: color.dim }} />
                    <span className="text-sm font-medium" style={{ color: color.body }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24" style={{ borderTop: border.section }}>
      <div className="max-w-7xl mx-auto">
        <SceneHeader scene="Scene VI" label="Filmography" />
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-16" style={{ color: color.text }}>
          Career <span className="italic" style={{ WebkitTextStroke: `1px ${color.muted}`, color: "transparent" }}>Timeline</span>
        </h2>
        <div className="flex flex-col gap-0">
          {EXPERIENCE.map((exp, i) => (
            <div
              key={exp.company}
              className="animate-on-scroll group flex gap-6 md:gap-10"
              style={{
                borderTop: i === 0 ? `1px solid rgba(220,210,190,0.08)` : "none",
                borderBottom: `1px solid rgba(220,210,190,0.08)`,
              }}
            >
              <div className="flex-shrink-0 py-8 md:py-10 w-24 md:w-44">
                <span className="font-mono text-[10px] md:text-xs tracking-widest font-medium" style={{ color: color.dim }}>{exp.year}</span>
              </div>
              <div className="flex-1 py-8 md:py-10">
                <h3 className="font-serif text-lg md:text-2xl font-medium mb-1" style={{ color: color.text }}>{exp.role}</h3>
                <p className={`${t.caption} mb-3`} style={{ color: color.dim }}>{exp.company}</p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: color.muted }}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-3 text-sm font-semibold tracking-wider uppercase transition-colors duration-300"
            style={{ color: color.muted }}
            onMouseEnter={(e) => { e.currentTarget.style.color = color.text; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = color.muted; }}
          >
            <span>Read Full Story</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FaqSection({ openIndex, onToggle }: { openIndex: number | null; onToggle: (i: number) => void }) {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24" style={{ borderTop: border.section }}>
      <div className="max-w-4xl mx-auto">
        <SceneHeader scene="Scene VII" label="FAQ" />
        <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-16" style={{ color: color.text }}>
          Frequently Asked <span className="italic" style={{ WebkitTextStroke: `1px ${color.muted}`, color: "transparent" }}>Questions</span>
        </h2>
        <div className="flex flex-col">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="animate-on-scroll" style={{ borderBottom: `1px solid rgba(220,210,190,0.08)` }}>
              <button
                type="button"
                className="w-full flex items-center justify-between py-7 md:py-8 text-left transition-colors duration-300 cursor-pointer"
                onClick={() => onToggle(i)}
              >
                <span className="text-base md:text-lg font-semibold pr-6" style={{ color: openIndex === i ? color.text : color.body }}>{item.question}</span>
                <span
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center transition-transform duration-300"
                  style={{ border: `1px solid ${color.ghost}`, transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke={color.muted}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-500"
                style={{ maxHeight: openIndex === i ? 200 : 0, opacity: openIndex === i ? 1 : 0 }}
              >
                <p className="pb-7 md:pb-8 text-sm md:text-base leading-relaxed pr-16" style={{ color: color.muted }}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24" style={{ borderTop: border.section }}>
      <div className="max-w-5xl mx-auto text-center animate-on-scroll">
        <SceneHeader scene="Scene VIII" label="Epilogue" />
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.9] mb-8" style={{ color: color.text }}>
          {"Let's Create"}
          <span className="block italic mt-2" style={{ WebkitTextStroke: `1.5px ${color.outlineStroke}`, color: "transparent" }}>Something Great</span>
        </h2>
        <p className="max-w-xl mx-auto text-base md:text-lg leading-relaxed mb-12" style={{ color: color.muted }}>
          I'm available for freelance projects and full-time positions.
          Currently based in Istanbul, working with teams worldwide.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:oguzhancart1@gmail.com"
            className="group inline-flex items-center gap-3 px-10 py-5 text-sm font-bold tracking-wider uppercase transition-all duration-500"
            style={{ backgroundColor: color.fill, color: color.dark }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = color.fillHover; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = color.fill; }}
          >
            <span>oguzhancart1@gmail.com</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <Link href="/contact" className="text-sm font-semibold tracking-wider uppercase transition-colors duration-300" style={{ color: color.muted }} onMouseEnter={(e) => { e.currentTarget.style.color = color.text; }} onMouseLeave={(e) => { e.currentTarget.style.color = color.muted; }}>
            All Channels
          </Link>
        </div>
      </div>
    </section>
  );
}
