import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
} as const;

export function Footer() {
    return (
        <footer className="relative border-t border-primary/20 glass-card">
            {/* Top accent line */}
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />

            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Brand section */}
                    <div className="space-y-4">
                        <h3
                            className="text-2xl font-bold gradient-text text-glow-cyan"
                            style={{ fontFamily: "var(--font-orbitron)" }}
                        >
                            {portfolioData.personalInfo.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {portfolioData.personalInfo.role}
                        </p>
                        <p className="text-xs text-muted-foreground">
                            {portfolioData.personalInfo.location}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <h4
                            className="text-sm font-bold text-primary uppercase tracking-wider"
                            style={{ fontFamily: "var(--font-orbitron)" }}
                        >
                            Navigation
                        </h4>
                        <nav className="flex flex-col space-y-2">
                            {portfolioData.nav.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm text-muted-foreground hover:text-primary hover:text-glow-cyan transition-all duration-300 w-fit"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Social links */}
                    <div className="space-y-4">
                        <h4
                            className="text-sm font-bold text-primary uppercase tracking-wider"
                            style={{ fontFamily: "var(--font-orbitron)" }}
                        >
                            Connect
                        </h4>
                        <div className="flex gap-4">
                            <a
                                href={portfolioData.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan hover:shadow-glow-md hover:scale-110 hover:rotate-6 transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href={portfolioData.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg border border-neon-pink/30 bg-neon-pink/10 text-neon-pink hover:shadow-glow-pink hover:scale-110 hover:rotate-6 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href={`mailto:${portfolioData.personalInfo.email}`}
                                className="p-3 rounded-lg border border-neon-purple/30 bg-neon-purple/10 text-neon-purple hover:shadow-glow-purple hover:scale-110 hover:rotate-6 transition-all duration-300"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="mt-12 pt-8 border-t border-primary/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-muted-foreground">
                            © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Built with <span className="text-neon-cyan">Next.js</span> & <span className="text-neon-pink">TypeScript</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute left-8 bottom-8 w-16 h-16 border-l-2 border-b-2 border-neon-cyan/30 rounded-bl-lg" />
            <div className="absolute right-8 bottom-8 w-16 h-16 border-r-2 border-b-2 border-neon-pink/30 rounded-br-lg" />
        </footer>
    );
}

