export type ProjectCategory = "Full Stack" | "AI Automation" | "AI Agents" | "Experiments";
export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  featured: boolean;
  status: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  visual: "shop" | "workflow" | "voice" | "qalam" | "mail" | "docker" | "trilles";
  overview?: string;
  motivation?: string;
  solution?: string;
  architecture?: string;
  features?: string[];
  lessons?: string;
};

export const projects: Project[] = [
  {
    slug: "shopit",
    name: "ShopIT",
    eyebrow: "Commerce · automation",
    description: "A MERN e-commerce application connected to an abandoned-cart recovery workflow with reminders and recovery tracking.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "n8n", "Airtable", "Gmail"],
    category: "Full Stack",
    featured: true,
    status: "Project",
    visual: "shop",
    overview: "A full-stack e-commerce application paired with an automated abandoned-cart recovery workflow.",
    motivation: "Recovering an incomplete cart requires timely follow-up and a way to track customer reminders.",
    solution: "The application connects cart events to an n8n workflow that uses webhooks, scheduled checks, customer reminders, and recovery tracking.",
    architecture: "MERN application with an n8n automation workflow connected through webhooks, Airtable, and Gmail.",
    features: ["Product, cart, and order APIs", "Webhook-triggered recovery workflow", "Scheduled cart checks and customer reminders", "Cart recovery tracking"],
  },
  {
    slug: "facebook-ad-generator",
    name: "AI-Powered Facebook Ad Generator",
    eyebrow: "Creative operations",
    description: "An automation workflow that turns product information into marketing copy and creative options, with structured storage and an approval step.",
    technologies: ["n8n", "OpenAI", "Airtable", "Supabase"],
    category: "AI Automation",
    featured: true,
    status: "Workflow",
    visual: "workflow",
    overview: "A workflow for generating marketing copy and advertising creative options from product information.",
    solution: "AI generation is connected to structured data storage, image hosting, and an approval workflow.",
    architecture: "n8n coordinates OpenAI generation, Airtable records, and Supabase image hosting.",
    features: ["Product information as input", "Generated copy and creative options", "Structured storage", "Approval workflow"],
  },
  {
    slug: "voice-appointment-agent",
    name: "AI Voice Appointment Booking Agent",
    eyebrow: "Conversational systems",
    description: "A voice-agent project designed to handle appointment booking and related requests through conversation and workflow integrations.",
    technologies: ["Retell AI or Vapi", "n8n", "Webhooks", "Database integrations"],
    category: "AI Agents",
    featured: true,
    status: "Project",
    visual: "voice",
    overview: "A conversational voice agent concept for appointment booking and related requests.",
    solution: "Voice interactions connect to workflow integrations through n8n, webhooks, and database integrations.",
    architecture: "Retell AI or Vapi handles voice interactions; n8n and webhooks connect the conversation to supporting systems.",
  },
  {
    slug: "qalam-cms",
    name: "Qalam CMS",
    eyebrow: "Education · mobile",
    description: "A university management application concept built with Flutter and a Node.js backend, focused on student-facing academic functionality.",
    technologies: ["Flutter", "Node.js", "Express.js", "MongoDB"],
    category: "Full Stack",
    featured: false,
    status: "Concept",
    visual: "qalam",
    overview: "A university management application concept with authentication and student-focused academic functionality.",
    architecture: "Flutter client with a Node.js and Express.js backend backed by MongoDB.",
  },
  {
    slug: "mail-classification",
    name: "Mail Classification Automation",
    eyebrow: "Workflow design",
    description: "An email workflow designed to classify incoming messages and organize results to reduce repetitive manual work.",
    technologies: ["n8n", "Email integrations", "AI classification where applicable"],
    category: "AI Automation",
    featured: false,
    status: "Workflow",
    visual: "mail",
    overview: "An automation workflow for classifying incoming emails and organizing their results.",
  },
  {
    slug: "dograh-self-hosted-voice-assistant",
    name: "Dograh Self-Hosted Voice Assistant",
    eyebrow: "Infrastructure · exploration",
    description: "An experimental self-hosted AI voice assistant environment built around Docker and supporting infrastructure services.",
    technologies: ["Docker", "PostgreSQL", "Redis", "MinIO", "cloudflared"],
    category: "Experiments",
    featured: false,
    status: "Experiment",
    visual: "docker",
    overview: "An experiment in running a self-hosted AI voice assistant environment with Docker and supporting services.",
    architecture: "The listed environment includes Docker, PostgreSQL, Redis, MinIO, and cloudflared.",
  },
  {
    slug: "trillesai-website",
    name: "TrillesAI.com",
    eyebrow: "Website · architecture",
    description: "A company website presenting AI solutions, case studies, a team showcase, and a client contact platform.",
    technologies: ["Web development", "Responsive design", "Website architecture"],
    category: "Full Stack",
    featured: false,
    status: "Built at TrillesAI",
    visual: "trilles",
    overview: "Designed and developed a company website for TrillesAI to present AI solutions, case studies, the team, and a client contact platform.",
    features: ["Case studies and project portfolio", "Team showcase", "Client contact platform", "Responsive interface"],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
