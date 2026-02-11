import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

const badgeVariants = ["indigo", "emerald", "accent"] as const;

export function Skills() {
    return (
        <section id="skills" className="relative py-16 md:py-24">
            <div className="container space-y-12">
                <h2
                    className="text-3xl md:text-4xl font-bold tracking-tight text-center gradient-text text-glow-primary"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                >
                    Skills & Technologies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioData.skills.map((skillGroup, groupIndex) => (
                        <div
                            key={skillGroup.category}
                            className="glass-card p-6 rounded-lg shadow-nebula-primary hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-all duration-300 hover:-translate-y-2 group"
                            style={{
                                animationDelay: `${groupIndex * 0.1}s`,
                                border: "1px solid rgba(99, 102, 241, 0.1)"
                            }}
                        >
                            <h3
                                className="text-xl font-semibold mb-4 text-primary group-hover:text-glow-primary transition-all"
                                style={{ fontFamily: "var(--font-orbitron)" }}
                            >
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill, index) => (
                                    <Badge
                                        key={skill}
                                        variant={badgeVariants[index % badgeVariants.length]}
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative accent line */}
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </section>
    );
}

