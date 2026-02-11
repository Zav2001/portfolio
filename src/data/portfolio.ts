export const portfolioData = {
    personalInfo: {
        name: "Zaven Ghazaryan",
        role: "Software Engineer (React / TypeScript)",
        bio: "Front-End Engineer with 4+ years of experience building scalable, high-performance web applications using React and TypeScript. I specialize in designing complex UI systems, modernizing legacy front-end architectures, and delivering maintainable, production-ready solutions for enterprise products.",
        location: "Yerevan, Armenia",
        email: "zav.ghazaryan01@gmail.com",
        avatar: "/profile-placeholder.jpg",
    },
    socials: {
        github: "https://github.com/Zav2001",
        linkedin: "https://linkedin.com/in/zaven-gh",
        twitter: "https://twitter.com/",
    },
    nav: [
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Experience", href: "/#experience" }, // Section on home or separate page
        { label: "Contact", href: "/contact" },
    ],
    skills: [
        {
            category: "Frontend Core",
            items: ["React", "TypeScript", "JavaScript", "Redux/Redux Toolkit", "Next.js", "HTML/CSS"],
        },
        {
            category: "Backend & DevOps",
            items: ["Python", "AWS (S3, ECS, Lambda, API Gateway)", "Terraform", "CI/CD Pipelines"],
        },
        {
            category: "Tools & Performance",
            items: ["Webpack", "Vite", "Git", "PDF Rendering", "Responsive Design", "Performance Optimization"],
        },
    ],
    projects: [
        {
            slug: "document-intelligence-pdf-viewer",
            title: "Enterprise PDF Viewer & Document Intelligence",
            description: "A high-performance custom PDF viewer built from scratch for enterprise document processing, featuring advanced navigation, zooming, annotation, and real-time rendering capabilities.",
            techStack: ["React", "TypeScript", "PDF.js", "react-pdf"],
            link: {
                label: "Cognaize Platform",
                url: "https://cognaize.com",
            },
            repo: null,
            thumbnail: "/projects/pdf-viewer.jpg",
            caseStudy: {
                problem: "Enterprise users needed a robust PDF viewer that could handle large financial documents with precise control over rendering, navigation, and page management within a Document Intelligence platform.",
                solution: "Designed and implemented a custom PDF viewer from scratch using react-pdf and pdfjs libraries. Built complete UI controls for document navigation, zoom levels (fit-to-width, fit-to-page, custom %), page jumping, and smooth scrolling. Optimized rendering performance for documents with 100+ pages.",
                impact: "Enabled efficient document processing for enterprise FinTech clients. Improved document review time by 40% with intuitive controls. Supports thousands of concurrent users processing financial documents daily.",
                challenges: [
                    "Managing memory efficiently for large PDF files (100+ MB)",
                    "Implementing smooth zoom and pan interactions",
                    "Handling edge cases in PDF rendering across different document types",
                    "Optimizing Canvas rendering performance"
                ],
                learnings: [
                    "Deep understanding of PDF.js internals and Canvas API",
                    "Performance optimization for heavy DOM operations",
                    "Complex state management for document viewers",
                    "Browser rendering pipeline optimization"
                ],
            },
        },
        {
            slug: "quiqspread-v1-modernization",
            title: "QuiqSpread v1 - Frontend & DevOps",
            description: "Led the frontend modernization and DevOps improvements for QuiqSpread v1, migrating legacy architectures to modern tooling and optimizing deployment pipelines.",
            techStack: ["React", "TypeScript", "Webpack", "CI/CD (CircleCI)", "DevOps (AWS, Terraform)", "Performance Optimization"],
            link: {
                label: "Cognaize",
                url: "https://cognaize.com",
            },
            repo: null,
            thumbnail: "/projects/modernization.jpg",
            caseStudy: {
                problem: "The QuiqSpread v1 platform monitored by Moody's suffered from slow build times (5+ minutes) and outdated dependencies, hindering the team's ability to ship features quickly.",
                solution: "Led the migration from Webpack 4 to Webpack 5/Vite, reducing build times significantly. Contributed to DevOps efforts by enhancing CI/CD pipelines and unifying development environments. Systematically upgraded legacy React patterns to modern TypeScript standards.",
                impact: "Reduced build times by 83% (5 min → 45 sec). Stabilized the deployment pipeline for critical financial releases. Improved developer experience/HMR (3s → 500ms), accelerating the team's velocity.",
                challenges: [
                    "Migrating complex enterprise build configurations without regression",
                    "Ensuring zero downtime for global financial users",
                    "Coordinating DevOps changes with feature development",
                    "Managing dependency breaking changes"
                ],
                learnings: [
                    "Advanced Webpack configuration",
                    "Enterprise DevOps & CI/CD best practices",
                    "Legacy codebase modernization strategies",
                    "Infrastructure stability management"
                ],
            },
        },
        {
            slug: "quiqspread-v2-api",
            title: "QuiqSpread v2 - API Integration",
            description: "Architected the API integration layer for the next-generation QuiqSpread v2 platform, connecting frontend interfaces with AWS-backed microservices and AI models.",
            techStack: ["AWS (Lambda, API Gateway, AWS Secrets Manager)", "Python (FastAPI)", "REST"],
            link: {
                label: "Cognaize",
                url: "https://cognaize.com",
            },
            repo: null,
            thumbnail: "/projects/aws-platform.jpg",
            caseStudy: {
                problem: "QuiqSpread v2 required a scalable, secure way to connect modern frontend interfaces with complex backend AI services and secure document storage.",
                solution: "Built the frontend API integration layer interacting with AWS API Gateway and Lambda. Implemented AWS Secrets Manager for secure credential handling. Collaborated on Python backend schemas and Terraform infrastructure to ensure type-safe, robust communication between UI and services.",
                impact: "Enabled secure, real-time processing of sensitive financial data. Eliminated hardcoded credentials (100% security compliance). Supported the platform's scaling to handle increased document loads.",
                challenges: [
                    "Securing API communication for financial data",
                    "Handling long-running AI process requests",
                    "Coordinating schema changes across Frontend/Backend/AI teams",
                ],
                learnings: [
                    "Secure API design for Fintech",
                    "AWS Serverless patterns (Lambda, API Gateway)",
                    "Cross-functional system architecture"
                ],
            },
        },
        {
            slug: "vesh-am-transportation",
            title: "Vesh.am - Transportation Company Website",
            description: "A multilingual (Armenian, English, Russian) production website for a transportation company, featuring responsive design, SEO optimization, and customer contact integration.",
            techStack: ["React", "Vite", "JavaScript", "CSS", "SEO", "Schema.org"],
            link: {
                label: "Live Site",
                url: "https://vesh.am",
            },
            repo: null,
            thumbnail: "/projects/vesh-am.jpg",
            caseStudy: {
                problem: "A transportation company needed a professional, multilingual web presence to attract customers and provide easy contact options across Armenia.",
                solution: "Built a modern, responsive website using React and Vite with comprehensive SEO optimization including Open Graph meta tags, Schema.org structured data, and multilingual support. Implemented clean UI with service showcase and prominent contact information.",
                impact: "Live production website serving customers in Armenia. Supports 3 languages (Armenian, Russian, English) for broader reach. Optimized for search engines and mobile devices.",
                challenges: [
                    "Implementing proper multilingual SEO",
                    "Optimizing for Armenian language SEO",
                    "Creating responsive design for mobile users",
                    "Implementing Schema.org structured data"
                ],
                learnings: [
                    "Advanced SEO techniques and meta tags",
                    "Multilingual website architecture",
                    "Production deployment and maintenance",
                    "Client communication and requirements gathering"
                ],
            },
        },
        {
            slug: "football-shop-ecommerce",
            title: "Football Shop - E-Commerce Platform",
            description: "Bachelor's degree diploma project: A full-featured e-commerce platform for football merchandise with shopping cart, product management, and checkout functionality.",
            techStack: ["React", "HTML", "CSS", "E-Commerce", "Git"],
            link: null,
            repo: {
                label: "GitHub",
                url: "https://github.com/Zav2001/footballshop",
            },
            thumbnail: "/projects/football-shop.jpg",
            caseStudy: {
                problem: "Bachelor's degree capstone project requiring a complete e-commerce solution demonstrating full-stack development skills and understanding of online retail systems.",
                solution: "Developed a comprehensive e-commerce platform for football merchandise featuring product catalog, shopping cart, user authentication, and order management. Implemented responsive design for cross-device compatibility.",
                impact: "Successfully completed bachelor's degree diploma project. Demonstrated understanding of e-commerce architecture, user authentication, state management, and responsive web design principles.",
                challenges: [
                    "Implementing secure shopping cart functionality",
                    "Managing product inventory and categories",
                    "Creating intuitive user checkout flow",
                    "Ensuring code quality for academic evaluation"
                ],
                learnings: [
                    "Full e-commerce development lifecycle",
                    "State management for shopping applications",
                    "Git version control best practices",
                    "Academic project documentation and presentation"
                ],
            },
        },
    ],
    experience: [
        {
            company: "Cognaize",
            role: "Software Engineer",
            period: "Sep 2021 - Present",
            description: "Building enterprise-grade front-end applications for FinTech and Document Intelligence solutions.",
            achievements: [
                "Designed and implemented a custom PDF Viewer from scratch using react-pdf and pdfjs, enabling efficient document rendering, navigation, zooming, and page control for enterprise users.",
                "Built and maintained large-scale front-end features using React and TypeScript, ensuring strong type safety, code quality, and long-term maintainability.",
                "Modernized legacy front-end codebases by upgrading deprecated and incompatible packages, improving build stability and development experience.",
                "Migrated and optimized build tooling (Webpack 4 → Webpack 5/Vite), reducing build times and improving local development performance.",
                "Collaborated closely with backend and AI teams to integrate AWS-based architectures, including secure access to S3-hosted documents and model-generated PDFs.",
                "Developed secure frontend API integrations (GET, POST, PUT, DELETE) and implemented AWS Secrets Manager usage for dynamic credential handling.",
                "Contributed to infrastructure efforts by writing and maintaining Terraform configurations for AWS services (S3, ECS, EC2, Lambda, API Gateway, Batch, ECR).",
                "Enhanced CI/CD pipelines to enable smoother deployments and faster iteration cycles.",
            ],
        },
    ],
    education: [
        {
            institution: "European University of Armenia",
            degree: "Bachelor's degree, Information Technology",
            year: "2019 - 2024",
        },
    ],
    stats: [
        { label: "Years Experience", value: "4+" },
        { label: "Projects Completed", value: "5+" },
        { label: "Technologies", value: "20+" },
    ]
};
