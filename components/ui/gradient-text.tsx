import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-white via-violet-200 to-[#8B5CF6]",
        "bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
