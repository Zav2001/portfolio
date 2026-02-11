import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "neon" | "destructive";
    size?: "default" | "sm" | "lg" | "icon";
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        const variants = {
            default: "bg-primary text-primary-foreground shadow-nebula-primary hover:shadow-[0_0_20px_rgba(var(--glow-primary),0.6)] hover:scale-105 transition-all duration-300",
            secondary: "bg-secondary text-secondary-foreground shadow-nebula-secondary hover:shadow-[0_0_20px_rgba(var(--glow-secondary),0.6)] hover:scale-105 transition-all duration-300",
            outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary/10 shadow-nebula-primary hover:scale-105 transition-all duration-300",
            ghost: "glass hover:bg-primary/10 hover:shadow-nebula-primary transition-all duration-300",
            link: "text-primary underline-offset-4 hover:underline hover:text-glow-primary",
            neon: "nebula-border relative overflow-hidden bg-transparent text-primary font-bold shadow-nebula-primary hover:shadow-[0_0_25px_rgba(var(--glow-primary),0.8)] hover:scale-110 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/0 before:via-primary/20 before:to-primary/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
            destructive: "bg-destructive text-destructive-foreground shadow-[0_0_15px_rgba(255,0,0,0.4)] hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] hover:scale-105 transition-all duration-300",
        }

        const sizes = {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
        }

        return (
            <Comp
                className={cn(
                    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
