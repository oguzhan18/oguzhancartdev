"use client";

import { useEffect, useRef } from "react";

export function FilmGrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let frame = 0;

    const resize = () => {
      const w = canvas.offsetWidth || window.innerWidth;
      const h = canvas.offsetHeight || window.innerHeight;
      if (w > 0 && h > 0) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const drawGrain = () => {
      frame++;
      const { width, height } = canvas;
      if (width === 0 || height === 0) {
        resize();
        animationId = requestAnimationFrame(drawGrain);
        return;
      }
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 40;
        data[i] = noise;
        data[i + 1] = noise;
        data[i + 2] = noise;
        data[i + 3] = 35;
      }

      if (Math.random() > 0.92) {
        const scratchX = Math.floor(Math.random() * width);
        const scratchWidth = Math.random() > 0.5 ? 1 : 2;
        for (let y = 0; y < height; y++) {
          for (let sx = 0; sx < scratchWidth; sx++) {
            const idx = ((y * width) + Math.min(scratchX + sx, width - 1)) * 4;
            data[idx] = 200;
            data[idx + 1] = 200;
            data[idx + 2] = 200;
            data[idx + 3] = Math.random() * 60 + 20;
          }
        }
      }

      const dustCount = Math.floor(Math.random() * 3);
      for (let d = 0; d < dustCount; d++) {
        const dx = Math.floor(Math.random() * width);
        const dy = Math.floor(Math.random() * height);
        const radius = Math.floor(Math.random() * 3) + 1;
        for (let ox = -radius; ox <= radius; ox++) {
          for (let oy = -radius; oy <= radius; oy++) {
            if (ox * ox + oy * oy <= radius * radius) {
              const px = dx + ox;
              const py = dy + oy;
              if (px >= 0 && px < width && py >= 0 && py < height) {
                const idx = ((py * width) + px) * 4;
                const brightness = Math.random() > 0.5 ? 220 : 30;
                data[idx] = brightness;
                data[idx + 1] = brightness;
                data[idx + 2] = brightness;
                data[idx + 3] = 60;
              }
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
      animationId = requestAnimationFrame(drawGrain);
    };

    drawGrain();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-20"
      aria-hidden="true"
    />
  );
}
