"use client";

import { useEffect, useRef } from "react";

export function ParallaxBackground() {
    const layerOneRef = useRef<HTMLDivElement>(null);
    const layerTwoRef = useRef<HTMLDivElement>(null);
    const layerThreeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;

            if (layerOneRef.current) {
                layerOneRef.current.style.transform = `translateY(${scrolled * 0.1}px)`;
            }
            if (layerTwoRef.current) {
                layerTwoRef.current.style.transform = `translateY(${scrolled * 0.2}px)`;
            }
            if (layerThreeRef.current) {
                layerThreeRef.current.style.transform = `translateY(${scrolled * 0.05}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            {/* Base layer - Animated grid */}
            <div
                ref={layerOneRef}
                className="cyber-grid absolute inset-0 opacity-30"
            />

            {/* Second layer - Floating geometric shapes */}
            <div
                ref={layerTwoRef}
                className="absolute inset-0"
            >
                <div className="absolute left-[10%] top-[20%] h-32 w-32 animate-float rounded-lg border border-neon-cyan/20 bg-neon-cyan/5" />
                <div className="absolute right-[15%] top-[40%] h-24 w-24 animate-float rounded-full border border-neon-pink/20 bg-neon-pink/5" style={{ animationDelay: "1s" }} />
                <div className="absolute left-[70%] top-[60%] h-40 w-40 animate-float border border-neon-purple/20 bg-neon-purple/5" style={{ animationDelay: "2s", clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
                <div className="absolute left-[20%] top-[70%] h-28 w-28 animate-float rounded-lg border border-neon-yellow/20 bg-neon-yellow/5" style={{ animationDelay: "1.5s" }} />
            </div>

            {/* Third layer - Neon accent lines */}
            <div
                ref={layerThreeRef}
                className="absolute inset-0"
            >
                <div className="absolute left-0 top-[30%] h-px w-full bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />
                <div className="absolute left-0 top-[60%] h-px w-full bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />
                <div className="absolute left-[40%] top-0 h-full w-px bg-gradient-to-b from-transparent via-neon-purple/20 to-transparent" />
            </div>

            {/* Radial gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />
        </div>
    );
}
