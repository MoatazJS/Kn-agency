import { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center cursor-pointer transition-all duration-300 font-sans text-base font-medium",
          "px-8 py-4", // Padding: 16px 32px
          variant === "primary" && [
            "bg-kn-black text-kn-white border-none",
            "hover:bg-kn-white hover:text-kn-black hover:border hover:border-kn-black", // Adding border on hover to handle white-on-white bg issue if any, or just strictly following "Hover: White bg + Black text"
            // Design says: Hover: White bg + Black text. On a white background this might disappear without a border.
            // The secondary button has a border. The design doesn't explicitly say add border to primary on hover, but implied for visibility or maybe it's only used on dark backgrounds?
            // "Primary Button... Background: Black... Hover: White bg + Black text"
            // Let's add a thin border on hover for visibility on white backgrounds, or maybe a subtle box shadow?
            // The design says "Rule: No shadows."
            // Let's assume the primary button might be used on white. If it turns white text black and white bg, it blends in.
            // I'll add a border-kn-black on hover to be safe and consistent with the "invert" look.
            "hover:ring-1 hover:ring-kn-black text-center",
          ],
          variant === "secondary" && [
            "bg-transparent text-kn-black border border-kn-black",
            "hover:bg-kn-black hover:text-kn-white",
          ],
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
