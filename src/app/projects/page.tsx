import type { Metadata } from "next";
import { ProjectExplorer } from "@/components/project-explorer";

export const metadata: Metadata = { title: "Projects", description: "Selected full-stack applications, AI automations, voice agents, and technical experiments by Muhammad Taha Malik.", alternates: { canonical: "/projects/" } };

export default function ProjectsPage() {
  return <section className="page-wrap archive-page"><div className="archive-heading"><span className="section-index">THE WORK / 01—07</span><h1>A collection of<br /><em>useful things.</em></h1><p>Applications, automation workflows, and experiments built to solve practical problems.</p></div><ProjectExplorer /></section>;
}
