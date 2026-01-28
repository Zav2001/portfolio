"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

type Message = {
    role: "user" | "assistant";
    content: string;
};

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hi! I'm an AI assistant. Ask me anything about this portfolio!" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Suggested questions to help the user get started
    const suggestions = [
        "What are your top skills?",
        "Tell me about your best project",
        "How can I contact you?",
        "Do you know React?"
    ];

    // Auto-scroll to bottom whenever messages change
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isLoading]);

    const handleSubmit = async (e?: React.FormEvent, customInput?: string) => {
        e?.preventDefault();
        const messageToSend = customInput || input;

        if (!messageToSend.trim() || isLoading) return;

        // Add user message to UI
        const userMessage: Message = { role: "user", content: messageToSend };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: [...messages, userMessage] }),
            });

            if (!response.ok) throw new Error("Failed to fetch");

            const data = await response.json();
            const botMessage: Message = { role: "assistant", content: data.content };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error(error);
            setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I'm having trouble connecting right now. Please try again later!" }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSuggestionClick = (text: string) => {
        handleSubmit(undefined, text);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end sm:bottom-8 sm:right-8">
            {/* Chat Window */}
            {isOpen && (
                <Card className="mb-4 w-[300px] sm:w-[380px] h-[500px] shadow-2xl border-primary/20 flex flex-col animate-in slide-in-from-bottom-5 duration-300">
                    <CardHeader className="bg-primary/5 border-b p-4 flex flex-row items-center justify-between space-y-0">
                        <CardTitle className="text-sm font-bold flex items-center gap-2">
                            <Bot className="w-4 h-4 text-primary" />
                            Portfolio Assistant
                        </CardTitle>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
                            <X className="w-4 h-4" />
                        </Button>
                    </CardHeader>

                    <CardContent className="flex-1 p-0 overflow-hidden relative">
                        <ScrollArea className="h-full p-4">
                            <div className="space-y-4">
                                {messages.map((m, i) => (
                                    <div
                                        key={i}
                                        className={`flex gap-3 ${m.role === "user" ? "justify-end" : "justify-start"
                                            }`}
                                    >
                                        {m.role === "assistant" && (
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                <Bot className="w-4 h-4 text-primary" />
                                            </div>
                                        )}

                                        <div
                                            className={`rounded-lg px-3 py-2 max-w-[80%] text-sm ${m.role === "user"
                                                    ? "bg-primary text-primary-foreground"
                                                    : "bg-muted text-foreground border"
                                                }`}
                                        >
                                            {m.content}
                                        </div>

                                        {m.role === "user" && (
                                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                                                <User className="w-4 h-4 text-muted-foreground" />
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {/* Loading Bubble */}
                                {isLoading && (
                                    <div className="flex gap-3 justify-start animate-pulse">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Bot className="w-4 h-4 text-primary" />
                                        </div>
                                        <div className="bg-muted border rounded-lg px-3 py-2 text-sm text-muted-foreground flex items-center gap-1">
                                            <span className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                            <span className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                            <span className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                        </div>
                                    </div>
                                )}

                                {/* Suggestions Section: Only show if there is only 1 message (the welcome message) */}
                                {messages.length === 1 && !isLoading && (
                                    <div className="mt-4">
                                        <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                                            <Sparkles className="w-3 h-3" /> Suggested Questions
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {suggestions.map((text) => (
                                                <button
                                                    key={text}
                                                    onClick={() => handleSuggestionClick(text)}
                                                    className="text-xs bg-muted hover:bg-primary/10 hover:text-primary hover:border-primary border transition-all rounded-full px-3 py-1.5 text-left"
                                                >
                                                    {text}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div ref={scrollRef} />
                            </div>
                        </ScrollArea>
                    </CardContent>

                    <CardFooter className="p-3 border-t bg-background">
                        <form onSubmit={(e) => handleSubmit(e)} className="flex w-full gap-2">
                            <Input
                                placeholder="Ask about my experience..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1"
                                disabled={isLoading}
                            />
                            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                                <Send className="w-4 h-4" />
                            </Button>
                        </form>
                    </CardFooter>
                </Card>
            )}

            {/* Toggle Button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                size="icon"
                className="h-12 w-12 rounded-full shadow-lg shadow-primary/20 hover:scale-110 transition-transform"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </Button>
        </div>
    );
}