import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold font-body transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] active:scale-[0.98] rounded-full",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full",
        outline:
          "border-2 border-foreground/20 bg-transparent text-foreground hover:border-primary hover:text-primary rounded-full",
        secondary:
          "bg-secondary text-secondary-foreground hover:shadow-[0_0_40px_hsl(var(--secondary)/0.5)] rounded-full",
        ghost: 
          "hover:bg-muted hover:text-foreground rounded-lg",
        link: 
          "text-primary underline-offset-4 hover:underline",
        hero: 
          "bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full hover:shadow-[0_0_60px_hsl(var(--primary)/0.6)] hover:scale-105 active:scale-[0.98] text-base",
        "hero-outline":
          "border-2 border-foreground/30 bg-transparent text-foreground font-bold px-8 py-4 rounded-full hover:border-primary hover:text-primary hover:bg-primary/5 text-base",
        glass:
          "bg-card/30 backdrop-blur-xl border border-border/30 text-foreground hover:bg-card/50 hover:border-primary/30 rounded-2xl",
        pill:
          "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground rounded-full text-xs font-medium",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-base",
        xl: "h-16 px-12 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
