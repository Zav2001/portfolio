import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "outline" | "accent" | "indigo" | "emerald";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant = "default", ...props }, ref) => {
        const variants = {
            default: "bg-primary/20 text-primary border border-primary/30 shadow-nebula-primary hover:scale-105",
            secondary: "bg-secondary/20 text-secondary border border-secondary/30 shadow-nebula-secondary hover:scale-105",
            outline: "border border-primary/30 text-primary hover:bg-primary/10 hover:scale-105",
            accent: "bg-accent/20 text-accent border border-accent/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:scale-105",
            indigo: "bg-[#6366f1]/20 text-[#6366f1] border border-[#6366f1]/30 shadow-nebula-primary hover:scale-105",
            emerald: "bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/30 shadow-nebula-secondary hover:scale-105",
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
