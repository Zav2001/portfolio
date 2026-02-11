import { portfolioData } from "@/data/portfolio";

export function About() {
    return (
        <section id="about" className="relative container py-16 md:py-24">
            <div className="glass-card p-8 md:p-12 rounded-2xl shadow-nebula-primary hover:shadow-[0_0_30px_rgba(var(--glow-primary),0.3)] transition-all duration-500 nebula-border border-none">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <h2
                            className="text-3xl md:text-4xl font-bold tracking-tight gradient-text text-glow-primary"
                            style={{ fontFamily: "var(--font-orbitron)" }}
                        >
                            About Me
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I am a passionate software engineer with a focus on building web applications that are accessible, performant, and delightful to use.
                            With a background in {portfolioData.education[0].degree}, I bring a strong computer science foundation to modern frontend development.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Currently based in {portfolioData.personalInfo.location}, I enjoy working on challenging problems that require creative solutions.
                            When I'm not coding, I contribute to open source and explore new technologies.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-4">
                            <div className="px-4 py-2 rounded-lg border border-primary/30 bg-primary/10 text-primary shadow-nebula-primary">
                                <span className="text-sm font-semibold">React Expert</span>
                            </div>
                            <div className="px-4 py-2 rounded-lg border border-secondary/30 bg-secondary/10 text-secondary shadow-nebula-secondary">
                                <span className="text-sm font-semibold">TypeScript</span>
                            </div>
                            {/* <div className="px-4 py-2 rounded-lg border border-neon-purple/30 bg-neon-purple/10 text-neon-purple shadow-glow-purple">
                                <span className="text-sm font-semibold">AWS</span>
                            </div> */}
                        </div>
                    </div>

                    {/* Nebula profile placeholder */}
                    <div className="w-full md:w-1/3 aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-nebula-pulse" />
                        <div className="absolute inset-0 nebula-grid opacity-20" />
                        <div className="relative z-10 text-center">
                            <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-primary shadow-[0_0_20px_rgba(var(--glow-primary),0.5)] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                <span className="text-4xl">👨‍💻</span>
                            </div>
                            <span
                                className="text-xl font-bold gradient-text text-glow-primary"
                                style={{ fontFamily: "var(--font-orbitron)" }}
                            >
                                {portfolioData.personalInfo.name.split(' ')[0]}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute right-8 bottom-8 w-24 h-24 border border-secondary/20 rounded-lg rotate-12 animate-float" />
        </section>
    );
}

