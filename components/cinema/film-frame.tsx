import React from "react";
import { color, border } from "@/lib/cinema-theme";

interface FilmFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function FilmFrame({ children, className = "" }: FilmFrameProps) {
  const markStyle = { borderColor: border.cropMark };

  return (
    <div
      className={`relative ${className}`}
      style={{ border: `1px solid ${color.hairline}` }}
    >
      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l" style={markStyle} />
      <div className="absolute top-2 right-2 w-4 h-4 border-t border-r" style={markStyle} />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l" style={markStyle} />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r" style={markStyle} />
      {children}
    </div>
  );
}
