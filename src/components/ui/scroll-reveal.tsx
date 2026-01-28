"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    variant?: "slide-up" | "slide-right" | "scale-in" | "glow-in";
    delay?: number;
}

export function ScrollReveal({
    children,
    variant = "slide-up",
    delay = 0
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        element.classList.add("animate-in");
                        element.style.opacity = "1";
                    }, delay);
                    observer.unobserve(element);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [delay]);

    const animationClasses = {
        "slide-up": "animate-slide-up",
        "slide-right": "animate-slide-right",
        "scale-in": "animate-scale-in",
        "glow-in": "animate-scale-in opacity-0",
    };

    return (
        <div
            ref={ref}
            className={`opacity-0 ${animationClasses[variant]}`}
            style={{ animationFillMode: "forwards" }}
        >
            {children}
        </div>
    );
}
