import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ParallaxBackground } from "@/components/ui/parallax-background";
import { NeonGrid } from "@/components/ui/neon-grid";
import { portfolioData } from "@/data/portfolio";
import "./globals.css";
import { ChatWidget } from "@/components/ChatWidget";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://zaven-portfolio.vercel.app"),
  title: {
    template: `%s | ${portfolioData.personalInfo.name}`,
    default: `${portfolioData.personalInfo.name} - ${portfolioData.personalInfo.role}`,
  },
  description: portfolioData.personalInfo.bio,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://zaven-portfolio.vercel.app",
    siteName: portfolioData.personalInfo.name,
    title: portfolioData.personalInfo.name,
    description: portfolioData.personalInfo.bio,
    images: [
      {
        url: "/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
        alt: portfolioData.personalInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.personalInfo.name,
    description: portfolioData.personalInfo.bio,
    creator: "@yourhandle",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Add JSON-LD structure
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.personalInfo.name,
    url: process.env.NEXT_PUBLIC_APP_URL || "https://zaven-portfolio.vercel.app",
    jobTitle: portfolioData.personalInfo.role,
    sameAs: [
      portfolioData.socials.github,
      portfolioData.socials.linkedin,
      portfolioData.socials.twitter,
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${orbitron.variable} ${spaceGrotesk.variable} font-sans`} style={{ fontFamily: "var(--font-space-grotesk)" }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CustomCursor />
          <NeonGrid />
          <ParallaxBackground />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>

        <ChatWidget />
      </body>
    </html>
  );
}

