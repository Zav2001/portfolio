import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function generateStaticParams() {
    return portfolioData.projects.map((project) => ({
        slug: project.slug,
    }));
}

// Fixed: params is now a Promise
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = portfolioData.projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };
    return {
        title: project.title,
        description: project.description,
    };
}

// Fixed: Component is async and params is awaited
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    console.log("Requested slug:", slug);
    console.log("Available projects:", portfolioData.projects.map(p => p.slug));

    const project = portfolioData.projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="container py-12 md:py-24 space-y-12">
            <ScrollReveal>
                <div>
                    <Button variant="ghost" asChild className="mb-8 pl-0 hover:pl-2 transition-all">
                        <Link href="/projects">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                        </Link>
                    </Button>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">{project.title}</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">{project.description}</p>
                    </div>
                </div>
            </ScrollReveal>

            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-8">
                    {/* Image Placeholder */}
                    {/* <ScrollReveal delay={0.2}>
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted flex items-center justify-center">
                            <span className="text-muted-foreground text-lg">Project Screenshot</span>
                        </div>
                    </ScrollReveal> */}

                    <ScrollReveal delay={0.4}>
                        <div className="prose dark:prose-invert max-w-none">
                            <h2>Case Study</h2>
                            {project.caseStudy ? (
                                <>
                                    <h3>The Problem</h3>
                                    <p>{project.caseStudy.problem}</p>

                                    <h3>The Solution</h3>
                                    <p>{project.caseStudy.solution}</p>

                                    <h3>Challenges</h3>
                                    <ul>
                                        {project.caseStudy.challenges.map((c, i) => <li key={i}>{c}</li>)}
                                    </ul>

                                    <h3>Learnings</h3>
                                    <ul>
                                        {project.caseStudy.learnings.map((l, i) => <li key={i}>{l}</li>)}
                                    </ul>

                                    <h3>Impact</h3>
                                    <p>{project.caseStudy.impact}</p>
                                </>
                            ) : (
                                <p>No detailed case study available for this project.</p>
                            )}
                        </div>
                    </ScrollReveal>
                </div>

                <div className="w-full md:w-80 space-y-8">
                    <ScrollReveal delay={0.6}>
                        <div className="p-6 border rounded-lg space-y-6 sticky top-24">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map(tech => (
                                        <Badge key={tech} variant="secondary">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                {project.link && (
                                    <Button asChild>
                                        <a href={project.link.url} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Visit Live Site
                                        </a>
                                    </Button>
                                )}
                                {project.repo && (
                                    <Button variant="outline" asChild>
                                        <a href={project.repo.url} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" /> View Source
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
}