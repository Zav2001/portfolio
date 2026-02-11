"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function Stats() {
    if (!portfolioData.stats) return null;

    return (
        <section className="py-12 relative overflow-hidden bg-background/50">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {portfolioData.stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
