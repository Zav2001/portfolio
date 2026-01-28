import * as React from "react"
import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("relative overflow-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40", className)}
        {...props}
    >
        {children}
    </div>
))
ScrollArea.displayName = "ScrollArea"

export { ScrollArea }
