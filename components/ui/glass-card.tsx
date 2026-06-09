import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.15] bg-white/[0.06] backdrop-blur-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
