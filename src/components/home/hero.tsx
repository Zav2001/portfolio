import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
    return (
        <section className="container relative flex flex-col items-center justify-center py-24 md:py-32 text-center lg:py-40 space-y-8">
            <div className="space-y-6 max-w-3xl animate-slide-up">
                <h1
                    className="text-4xl font-extrabold tracking-tight lg:text-6xl"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                >
                    Hi, I&apos;m <span className="gradient-text text-glow-cyan inline-block animate-float relative">
                        {portfolioData.personalInfo.name}
                    </span>
                </h1>
                <h2
                    className="text-2xl font-semibold text-primary sm:text-3xl text-glow-cyan"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                >
                    {portfolioData.personalInfo.role}
                </h2>
                <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl leading-relaxed">
                    {portfolioData.personalInfo.bio}
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <Button asChild size="lg" className="h-12 px-8 group">
                    <Link href="/contact">
                        Get in touch <Mail className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="h-12 px-8 group">
                    <Link href="/projects">
                        View Projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild className="h-12 px-8 group bg-primary/20 hover:bg-primary/30 border-primary/30 text-primary">
                    <a href="/resume.pdf" download>
                        Download CV <Download className="ml-2 h-4 w-4 group-hover:animate-bounce" />
                    </a>
                </Button>
            </div>

            <div className="flex items-center gap-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <a
                    href={portfolioData.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]"
                >
                    <Github className="h-7 w-7" />
                </a>
                <a
                    href={portfolioData.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]"
                >
                    <Linkedin className="h-7 w-7" />
                </a>
            </div>

            {/* Decorative elements */}
            <div className="absolute left-0 top-1/4 h-2 w-32 bg-gradient-to-r from-neon-cyan/50 to-transparent blur-sm" />
            <div className="absolute right-0 top-3/4 h-2 w-32 bg-gradient-to-l from-neon-pink/50 to-transparent blur-sm" />
        </section>
    );
}

