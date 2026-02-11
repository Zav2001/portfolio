"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";
import { Download, Mail, MapPin, Send } from "lucide-react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    // REPLACE THIS WITH YOUR REAL EMAIL ADDRESS
    const MY_EMAIL = "zav13.17@mail.ru";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${MY_EMAIL}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Portfolio Message from ${formData.name}`, // Optional: Custom subject
                })
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                throw new Error("Form submission failed");
            }

        } catch (error) {
            console.error("Failed to send:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <section id="contact" className="relative container py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div>
                        <h2
                            className="text-3xl md:text-4xl font-bold tracking-tight gradient-text text-glow-primary mb-4"
                            style={{ fontFamily: "var(--font-orbitron)" }}
                        >
                            Get in Touch
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            I'm currently open to new opportunities. Whether you have a question or just want to say hi,
                            I'll try my best to get back to you!
                        </p>
                    </div>

                    <div className="space-y-4">
                        <a
                            href={`mailto:${portfolioData.personalInfo.email}`}
                            className="flex items-center space-x-4 text-muted-foreground hover:text-primary group transition-all duration-300"
                        >
                            <div className="p-3 rounded-lg border border-primary/30 bg-primary/10 shadow-nebula-primary group-hover:shadow-[0_0_20px_rgba(var(--glow-primary),0.6)] group-hover:scale-110 transition-all">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <span className="text-lg">{portfolioData.personalInfo.email}</span>
                        </a>

                        <div className="flex items-center space-x-4 text-muted-foreground group">
                            <div className="p-3 rounded-lg border border-secondary/30 bg-secondary/10 shadow-nebula-secondary">
                                <MapPin className="h-6 w-6 text-secondary" />
                            </div>
                            <span className="text-lg">{portfolioData.personalInfo.location}</span>
                        </div>

                        {/* <a
                            href="/resume.pdf"
                            download
                            className="flex items-center space-x-4 text-muted-foreground hover:text-primary group transition-all duration-300"
                        >
                            <div className="p-3 rounded-lg border border-neon-purple/30 bg-neon-purple/10 shadow-glow-sm group-hover:shadow-glow-md group-hover:scale-110 transition-all">
                                <Download className="h-6 w-6 text-neon-purple" />
                            </div>
                            <span className="text-lg">Download Resume / CV</span>
                        </a> */}
                    </div>

                    {/* Decorative element */}
                    <div className="hidden md:block relative h-32">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-lg animate-nebula-pulse" />
                        <div className="absolute inset-0 nebula-grid opacity-20 rounded-lg" />
                    </div>
                </div>

                <Card className="shadow-nebula-primary hover:shadow-[0_0_25px_rgba(var(--glow-primary),0.4)] transition-all duration-500">
                    <CardHeader>
                        <CardTitle style={{ fontFamily: "var(--font-orbitron)" }}>
                            Send a Message
                        </CardTitle>
                        <CardDescription>
                            Fill out the form below and I'll get back to you as soon as possible.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Simple Honeypot to prevent spam bots */}
                            <input type="text" name="_honey" style={{ display: 'none' }} />

                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-primary">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    required
                                    className="flex h-12 w-full rounded-md border-2 border-input bg-background/50 px-4 py-2 text-sm transition-all focus-visible:outline-none focus-visible:border-primary focus-visible:shadow-nebula-primary disabled:cursor-not-allowed disabled:opacity-50"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-primary">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="flex h-12 w-full rounded-md border-2 border-input bg-background/50 px-4 py-2 text-sm transition-all focus-visible:outline-none focus-visible:border-primary focus-visible:shadow-nebula-primary disabled:cursor-not-allowed disabled:opacity-50"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-primary">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    className="flex min-h-[140px] w-full rounded-md border-2 border-input bg-background/50 px-4 py-3 text-sm transition-all focus-visible:outline-none focus-visible:border-primary focus-visible:shadow-nebula-primary disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Your message..."
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full group"
                                disabled={status === "submitting"}
                                variant={status === "success" ? "neon" : status === "error" ? "destructive" : "default"}
                            >
                                {status === "submitting" ? (
                                    <>Sending...</>
                                ) : status === "success" ? (
                                    <>✓ Message Sent!</>
                                ) : status === "error" ? (
                                    <>⚠ Error - Try Again</>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>

            {/* Decorative accent line */}
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </section>
    );
}