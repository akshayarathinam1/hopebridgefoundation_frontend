import { clsx } from "clsx";

interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export default function SectionLabel({
  children,
  light = false,
  className,
}: SectionLabelProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 text-xs font-bold tracking-[0.12em] uppercase mb-3",
        light ? "text-brand-red-light" : "text-brand-red",
        className
      )}
    >
      <span
        className={clsx(
          "block h-0.5 w-8 rounded-full",
          light ? "bg-brand-red-light" : "bg-brand-red"
        )}
      />
      {children}
    </span>
  );
}
