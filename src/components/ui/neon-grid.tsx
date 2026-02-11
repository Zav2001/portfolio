"use client";

import { useEffect, useState } from "react";

export function NebulaGrid() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-0">
            {/* Perspective grid */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="nebula-grid absolute h-[200%] w-full opacity-25"
                    style={{
                        transform: "perspective(1000px) rotateX(60deg)",
                        transformOrigin: "center center",
                    }}
                />
            </div>

            {/* Subtle floating particles/glows - only on client */}
            {isMounted && (
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute h-1 w-1 rounded-full bg-primary/40 animate-nebula-pulse shadow-[0_0_10px_rgba(var(--glow-primary),0.3)]"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${3 + Math.random() * 4}s`,
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Soft Nebula background glows */}
            <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] bg-primary/10 blur-[120px] rounded-full" />
            <div className="absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] bg-secondary/10 blur-[120px] rounded-full" />
            <div className="absolute left-[30%] top-[40%] h-[300px] w-[300px] bg-accent/5 blur-[100px] rounded-full" />
        </div>
    );
}
