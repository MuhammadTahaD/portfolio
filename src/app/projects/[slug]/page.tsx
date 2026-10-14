import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/project-visual";
import { getProject, projects } from "@/data/projects";
import { profile } from "@/data/profile";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return { title: "Project not found" };
  return { title: project.name, description: project.description, alternates: { canonical: `/projects/${project.slug}/` }, openGraph: { title: `${project.name} — Taha Malik`, description: project.description, url: `${profile.domain}/projects/${project.slug}/` } };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return <article className="page-wrap case-study"><Link className="back-link" href="/projects/">← All projects</Link><div className="case-heading"><span className="section-index">{project.category.toUpperCase()} / {project.status.toUpperCase()}</span><h1>{project.name}<span className="accent-dot">.</span></h1><p>{project.description}</p></div><ProjectVisual kind={project.visual} className="case-visual" />
    <div className="case-layout"><div className="case-main"><span className="section-index">OVERVIEW</span><p className="case-overview">{project.overview ?? project.description}</p>{project.motivation && <section><h2>Motivation</h2><p>{project.motivation}</p></section>}{project.solution && <section><h2>Solution</h2><p>{project.solution}</p></section>}{project.architecture && <section><h2>Architecture</h2><p>{project.architecture}</p></section>}{project.features && <section><h2>Key features</h2><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></section>}{project.lessons && <section><h2>Lessons learned</h2><p>{project.lessons}</p></section>}<p className="case-note">More project notes and implementation details will be added as they’re documented.</p></div><aside className="case-sidebar"><div><span className="section-index">CATEGORY</span><p>{project.category}</p></div><div><span className="section-index">STATUS</span><p>{project.status}</p></div><div><span className="section-index">BUILT WITH</span><div className="tech-list case-tech">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div><div className="case-links"><span className="section-index">EXPLORE</span>{project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a> : <span className="unavailable-link">Repository not listed</span>}{project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer">Live demo ↗</a> : <span className="unavailable-link">Live demo not listed</span>}</div></aside></div><div className="next-project"><span className="section-index">KEEP EXPLORING</span><Link href="/projects/">View all projects <span>↗</span></Link></div>
  </article>;
}
