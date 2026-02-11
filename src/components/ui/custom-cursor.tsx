"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorGlowRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });
    const isHovering = useRef(false);

    useEffect(() => {
        // Check if device supports hover (not touch device)
        const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
        if (isTouchDevice) return;

        const cursor = cursorRef.current;
        const cursorGlow = cursorGlowRef.current;
        if (!cursor || !cursorGlow) return;

        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = target.closest("a, button, input, textarea, select, [role='button']");
            isHovering.current = !!isClickable;
        };

        const animate = () => {
            // Smooth cursor following with easing
            const dx = mousePos.current.x - cursorPos.current.x;
            const dy = mousePos.current.y - cursorPos.current.y;

            cursorPos.current.x += dx * 0.15;
            cursorPos.current.y += dy * 0.15;

            if (cursor && cursorGlow) {
                const scale = isHovering.current ? 1.5 : 1;
                const glowScale = isHovering.current ? 2 : 1;

                cursor.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px) scale(${scale})`;
                cursorGlow.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px) scale(${glowScale})`;
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        const animationFrame = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    // Don't render on touch devices
    if (typeof window !== "undefined" && window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
        return null;
    }

    return (
        <>
            {/* Main cursor */}
            <div
                ref={cursorRef}
                className="pointer-events-none fixed left-0 top-0 z-[9999] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary transition-all duration-200 ease-out shadow-[0_0_10px_rgba(var(--glow-primary),0.5)]"
                style={{ mixBlendMode: "screen" }}
            />

            {/* Cursor glow */}
            <div
                ref={cursorGlowRef}
                className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-30 blur-xl transition-all duration-300 ease-out shadow-[0_0_30px_rgba(var(--glow-primary),0.3)]"
            />
        </>
    );
}
