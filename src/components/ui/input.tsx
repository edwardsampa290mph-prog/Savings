import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-md bg-ink-2 px-3 text-sm text-paper shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 placeholder:text-haze focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_color-mix(in_srgb,var(--color-sage)_55%,transparent)] disabled:cursor-not-allowed disabled:opacity-40",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
