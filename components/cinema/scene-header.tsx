import { color, type as t } from "@/lib/cinema-theme";

interface SceneHeaderProps {
  scene: string;
  label: string;
}

export function SceneHeader({ scene, label }: SceneHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-6" aria-hidden="true">
      <div className="w-12 h-px" style={{ backgroundColor: color.ghost }} />
      <span className={t.label} style={{ color: color.dim }}>
        {scene} -- {label}
      </span>
      <div className="flex-1 h-px" style={{ backgroundColor: color.hairline }} />
    </div>
  );
}
