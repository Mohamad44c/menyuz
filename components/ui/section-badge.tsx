import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-white/10",
        "bg-white/5 px-3 py-1 text-xs font-medium tracking-wide backdrop-blur-sm",
        "text-violet-300",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
      {children}
    </span>
  );
}
