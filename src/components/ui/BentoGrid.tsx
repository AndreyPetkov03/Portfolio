import { cn } from "@/src/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:auto-rows-[22rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  index,
  title,
  description,
  header,
}: {
  className?: string;
  index?: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "surface group/bento relative flex flex-col gap-5 overflow-hidden p-6 transition-colors duration-300 hover:border-white/[0.14] md:p-8",
        className
      )}
    >
      {/* Soft highlight that appears on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-violet-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover/bento:opacity-100"
      />
      <div className="relative">
        {index !== undefined && (
          <span className="font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
          {title}
        </h3>
        {description && (
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        )}
      </div>
      {header}
    </div>
  );
};
