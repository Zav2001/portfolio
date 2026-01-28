import { MetadataRoute } from "next";
import { portfolioData } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://your-portfolio.com"; // Configuration needed

    const routes = [
        "",
        "/projects",
        "/about",
        "/contact",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 1,
    }));

    const projectRoutes = portfolioData.projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [...routes, ...projectRoutes];
}
