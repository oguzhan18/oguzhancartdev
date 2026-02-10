const BASE = "220,210,190";

export const color = {
  text: `rgba(${BASE},0.95)`,
  body: `rgba(${BASE},0.65)`,
  muted: `rgba(${BASE},0.45)`,
  dim: `rgba(${BASE},0.3)`,
  ghost: `rgba(${BASE},0.15)`,
  hairline: `rgba(${BASE},0.06)`,
  fill: `rgba(${BASE},0.9)`,
  fillHover: `rgba(${BASE},1)`,
  stripBorder: `rgba(${BASE},0.25)`,
  bg: "#0a0a08",
  bgPanel: "rgba(12,12,10,1)",
  dark: "#0a0a08",
  outlineStroke: `rgba(${BASE},0.6)`,
} as const;

export const border = {
  section: `1px solid ${color.hairline}`,
  subtle: `1px solid ${color.ghost}`,
  strip: `1.5px solid ${color.stripBorder}`,
  cropMark: `rgba(${BASE},0.12)`,
} as const;

export const type = {
  filmMeta: "font-mono text-[8px] tracking-[0.3em]",
  label: "font-mono text-[9px] tracking-[0.5em] uppercase font-semibold",
  caption: "font-mono text-[10px] tracking-[0.4em] uppercase font-medium",
} as const;

export const overlay = {
  scanLines:
    "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.05) 1px, rgba(0,0,0,0.05) 2px)",
  vignette:
    "radial-gradient(ellipse 65% 55% at 50% 50%, transparent 35%, rgba(0,0,0,0.6) 100%)",
} as const;
