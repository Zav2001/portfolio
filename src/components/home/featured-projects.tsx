import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
    const featured = portfolioData.projects.slice(0, 3);

    return (
        <section id="projects" className="py-12 md:py-24 bg-muted/30">
            <div className="container space-y-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="space-y-1">
                        <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
                        <p className="text-muted-foreground">Some of my recent work.</p>
                    </div>
                    <Button variant="ghost" asChild>
                        <Link href="/projects">
                            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featured.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
