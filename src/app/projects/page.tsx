import { ProjectCard } from "@/components/project-card";
import { portfolioData } from "@/data/portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "A selection of projects I've worked on.",
};

export default function ProjectsPage() {
    return (
        <div className="container py-12 md:py-24 space-y-12">
            <div className="space-y-4 text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
                <p className="text-xl text-muted-foreground">
                    Here is a complete list of projects I have worked on, ranging from web applications to open source libraries.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </div>
    );
}
