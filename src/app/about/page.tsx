import { About } from "@/components/home/about";
import { Skills } from "@/components/home/skills";
import { Experience } from "@/components/home/experience";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me",
    description: "Learn more about my background, experience, and skills.",
};

export default function AboutPage() {
    return (
        <div className="pt-12">
            <div className="container text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    A deeper look into my journey and what drives me.
                </p>
            </div>
            <About />
            <Experience />
            <Skills />
        </div>
    );
}
