import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "after:animate-shimmer relative overflow-hidden rounded-md bg-accent after:absolute after:-left-full after:h-full after:w-full after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent dark:after:via-neutral-400/10",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
