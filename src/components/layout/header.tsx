"use client";

import * as React from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full glass-card border-b border-primary/20 shadow- glow-sm">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="mr-6 flex items-center space-x-2 group">
                    <span
                        className="text-xl font-bold gradient-text group-hover:text-glow-cyan transition-all"
                        style={{ fontFamily: "var(--font-orbitron)" }}
                    >
                        {portfolioData.personalInfo.name}
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    {portfolioData.nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="relative text-foreground/60 hover:text-primary transition-all duration-300 hover:text-glow-cyan after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-neon-cyan after:to-neon-pink hover:after:w-full after:transition-all after:duration-300"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <a
                        href="/resume.pdf"
                        download
                        className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-full border border-primary/20 transition-all hover:shadow-glow-sm"
                    >
                        <Download className="w-4 h-4" />
                        <span>CV</span>
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        className="text-primary hover:text-glow-cyan"
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-primary/20">
                    <div className="container py-4 flex flex-col space-y-4 glass">
                        {portfolioData.nav.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-sm font-medium text-foreground/80 hover:text-primary hover:text-glow-cyan transition-all duration-300 py-2 px-4 rounded hover:bg-primary/10"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <a
                            href="/resume.pdf"
                            download
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3 px-4 rounded-lg shadow-glow-sm"
                        >
                            <Download className="w-4 h-4" />
                            Download CV
                        </a>
                    </div>
                </div>
            )}

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
        </header>
    );
}

