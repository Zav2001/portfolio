import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "outline" | "cyan" | "pink" | "purple";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant = "default", ...props }, ref) => {
        const variants = {
            default: "bg-primary/20 text-primary border border-primary/50 shadow-glow-sm hover:shadow-glow-md hover:scale-105",
            secondary: "bg-secondary/20 text-secondary border border-secondary/50 shadow-glow-pink hover:scale-105",
            outline: "border border-primary/50 text-primary hover:bg-primary/10 hover:shadow-glow-sm hover:scale-105",
            cyan: "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50 shadow-glow-sm hover:shadow-glow-md hover:scale-105",
            pink: "bg-neon-pink/20 text-neon-pink border border-neon-pink/50 shadow-[0_0_10px_rgba(255,0,110,0.5)] hover:shadow-[0_0_20px_rgba(255,0,110,0.8)] hover:scale-105",
            purple: "bg-neon-purple/20 text-neon-purple border border-neon-purple/50 shadow-glow-purple hover:shadow-[0_0_20px_rgba(139,0,255,0.8)] hover:scale-105",
        }

        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300",
                    variants[variant],
                    className
                )}
                {...props}
            />
        )
    }
)
Badge.displayName = "Badge"

export { Badge }
