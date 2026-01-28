import { Contact } from "@/components/home/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with me.",
};

export default function ContactPage() {
    return (
        <div className="pt-12">
            <div className="container text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Have a project in mind or just want to chat?
                </p>
            </div>
            <Contact />
        </div>
    );
}
