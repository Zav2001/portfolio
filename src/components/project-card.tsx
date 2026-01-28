import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type portfolioData } from "@/data/portfolio";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import * as motion from "framer-motion/client";

type Project = typeof portfolioData.projects[0];

const badgeVariants = ["cyan", "pink", "purple"] as const;

// Project Card Component - displaying project details and link
export function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            whileHover={{ scale: 1.02, rotateY: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="h-full"
        >
            <Card className="flex flex-col h-full overflow-hidden group relative">
                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-neon-pink/10 to-neon-purple/10" />
                </div>

                {/* Project preview */}
                <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
                    <motion.div
                        className="flex h-full items-center justify-center text-muted-foreground w-full bg-black/20"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <span
                            className="text-lg font-medium text-primary text-glow-cyan"
                            style={{ fontFamily: "var(--font-orbitron)" }}
                        >
                            {project.title}
                        </span>
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                        {project.link && (
                            <Button size="icon" variant="neon" className="rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
                                <a href={project.link.url} target="_blank" rel="noopener noreferrer" title="View Live">
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            </Button>
                        )}
                        {project.repo && (
                            <Button size="icon" variant="neon" className="rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                <a href={project.repo.url} target="_blank" rel="noopener noreferrer" title="View Code">
                                    <Github className="h-4 w-4" />
                                </a>
                            </Button>
                        )}
                    </div>
                </div>

                <CardHeader className="relative z-10">
                    <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.techStack.map((tech, index) => (
                            <Badge key={tech} variant={badgeVariants[index % badgeVariants.length]}>
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </CardHeader>

                <CardContent className="flex-grow relative z-10">
                    <CardDescription className="line-clamp-3">
                        {project.description}
                    </CardDescription>
                </CardContent>

                <CardFooter className="flex gap-2 relative z-10">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                        <Link href={`/projects/${project.slug}`}>
                            View Case Study
                        </Link>
                    </Button>
                    <div className="flex gap-2 md:hidden">
                        {/* Mobile only links as desktop has hover overlay */}
                        {project.repo && (
                            <Button variant="ghost" size="icon" asChild title="View Code">
                                <a href={project.repo.url} target="_blank" rel="noopener noreferrer">
                                    <Github className="h-4 w-4" />
                                </a>
                            </Button>
                        )}
                        {project.link && (
                            <Button variant="ghost" size="icon" asChild title="View Live">
                                <a href={project.link.url} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            </Button>
                        )}
                    </div>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
