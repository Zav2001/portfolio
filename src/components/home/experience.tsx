import { portfolioData } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function Experience() {
    return (
        <section id="experience" className="relative container py-16 md:py-24 space-y-12">
            <h2
                className="text-3xl md:text-4xl font-bold tracking-tight text-center gradient-text text-glow-primary"
                style={{ fontFamily: "var(--font-orbitron)" }}
            >
                Work Experience
            </h2>
            <div className="max-w-3xl mx-auto space-y-8 relative">
                {/* Nebula timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-50 hidden md:block" />

                {portfolioData.experience.map((job, index) => (
                    <div key={index} className="relative pl-0 md:pl-12">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-6 hidden md:block">
                            <div className="w-8 h-8 rounded-full border-2 border-primary bg-background shadow-nebula-primary animate-nebula-pulse" />
                        </div>

                        <Card className="hover:shadow-[0_0_20px_rgba(var(--glow-primary),0.3)] transition-all duration-500 nebula-border border-none">
                            <CardHeader>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                                    <div className="flex-1">
                                        <CardTitle
                                            className="text-xl"
                                            style={{ fontFamily: "var(--font-orbitron)" }}
                                        >
                                            {job.role}
                                        </CardTitle>
                                        <CardDescription className="text-lg font-medium text-primary text-glow-primary">
                                            {job.company}
                                        </CardDescription>
                                    </div>
                                    <span className="text-sm font-semibold bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-full shadow-nebula-primary whitespace-nowrap">
                                        {job.period}
                                    </span>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                                    {job.achievements.map((achievement, i) => (
                                        <li key={i} className="hover:text-foreground transition-colors">
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>

            {/* Decorative accent line */}
            <div className="absolute left-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        </section>
    );
}

