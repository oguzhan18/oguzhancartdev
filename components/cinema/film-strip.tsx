import { color, border } from "@/lib/cinema-theme";

interface FilmStripProps {
  side: "left" | "right";
  count?: number;
}

export function FilmStrip({ side, count = 60 }: FilmStripProps) {
  const isLeft = side === "left";

  return (
    <div
      className={`fixed ${isLeft ? "left-0" : "right-0"} top-0 bottom-0 w-10 md:w-12 z-[92] pointer-events-none hidden lg:block overflow-hidden`}
      aria-hidden="true"
      style={{
        backgroundColor: "rgba(8,8,6,0.95)",
        [isLeft ? "borderRight" : "borderLeft"]: border.strip,
      }}
    >
      <div
        className="film-strip-scroll w-full"
        style={{
          height: "200%",
          ...(isLeft ? {} : { animationDirection: "reverse" }),
        }}
      >
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={`${side}-${i}`}
            className="flex items-center justify-center"
            style={{ height: 28, marginBottom: 16 }}
          >
            <div
              className="w-5 h-3.5 md:w-6 md:h-4"
              style={{
                border: `1.5px solid ${color.stripBorder}`,
                borderRadius: "1.5px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
