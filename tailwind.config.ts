import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // Cyberpunk Neon Colors
                "neon-cyan": "#00f0ff",
                "neon-pink": "#ff006e",
                "neon-purple": "#8b00ff",
                "neon-yellow": "#ffea00",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                "glow-sm": "0 0 10px rgba(0, 255, 255, 0.5)",
                "glow-md": "0 0 15px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.3)",
                "glow-lg": "0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.3)",
                "glow-xl": "0 0 25px rgba(0, 255, 255, 1), 0 0 50px rgba(0, 255, 255, 0.7), 0 0 75px rgba(0, 255, 255, 0.5), 0 0 100px rgba(0, 255, 255, 0.3)",
                "glow-pink": "0 0 15px rgba(255, 0, 110, 0.6), 0 0 30px rgba(255, 0, 110, 0.3)",
                "glow-purple": "0 0 15px rgba(139, 0, 255, 0.6), 0 0 30px rgba(139, 0, 255, 0.3)",
                "glow-destructive": "0 0 15px rgba(255, 0, 0, 0.6), 0 0 30px rgba(255, 0, 0, 0.3)",
            },
            animation: {
                "glow-pulse": "glow-pulse 2s ease-in-out infinite",
                "float": "float 3s ease-in-out infinite",
                "slide-up": "slide-up 0.6s ease-out",
                "slide-right": "slide-right 0.6s ease-out",
                "scale-in": "scale-in 0.5s ease-out",
                "glitch": "glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite",
                "neon-flicker": "neon-flicker 1.5s infinite",
            },
            keyframes: {
                "glow-pulse": {
                    "0%, 100%": {
                        boxShadow: "0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3)",
                    },
                    "50%": {
                        boxShadow: "0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.6), 0 0 60px rgba(0, 255, 255, 0.4)",
                    },
                },
                "float": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                "slide-up": {
                    from: { opacity: "0", transform: "translateY(30px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                "slide-right": {
                    from: { opacity: "0", transform: "translateX(-30px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                "scale-in": {
                    from: { opacity: "0", transform: "scale(0.9)" },
                    to: { opacity: "1", transform: "scale(1)" },
                },
                "glitch": {
                    "0%": { transform: "translate(0)" },
                    "20%": { transform: "translate(-2px, 2px)" },
                    "40%": { transform: "translate(-2px, -2px)" },
                    "60%": { transform: "translate(2px, 2px)" },
                    "80%": { transform: "translate(2px, -2px)" },
                    "100%": { transform: "translate(0)" },
                },
                "neon-flicker": {
                    "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": {
                        opacity: "1",
                    },
                    "20%, 24%, 55%": {
                        opacity: "0.8",
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
