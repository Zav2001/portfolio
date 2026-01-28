"use client";

export function NeonGrid() {
    return (
        <div className="pointer-events-none fixed inset-0 z-0">
            {/* Perspective grid */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="cyber-grid absolute h-[200%] w-full opacity-20"
                    style={{
                        transform: "perspective(1000px) rotateX(60deg)",
                        transformOrigin: "center center",
                    }}
                />
            </div>

            {/* Glow pulses on grid intersections */}
            <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-2 w-2 rounded-full bg-neon-cyan animate-glow-pulse"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + i * 10}%`,
                            animationDelay: `${i * 0.5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Corner accent lights */}
            <div className="absolute left-0 top-0 h-64 w-64 bg-neon-cyan/10 blur-3xl" />
            <div className="absolute right-0 top-0 h-64 w-64 bg-neon-pink/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 bg-neon-purple/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 bg-neon-yellow/10 blur-3xl" />
        </div>
    );
}
