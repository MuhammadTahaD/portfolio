import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/project-visual";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article className={`project-card project-card-${index % 3}`}>
      <Link className="project-visual-link" href={`/projects/${project.slug}/`} aria-label={`Read about ${project.name}`}><ProjectVisual kind={project.visual} /></Link>
      <div className="project-card-meta"><span>{project.eyebrow}</span><span>{project.status}</span></div>
      <h3><Link href={`/projects/${project.slug}/`}>{project.name}<span aria-hidden="true">↗</span></Link></h3>
      <p>{project.description}</p>
      <div className="tech-list" aria-label="Technologies">{project.technologies.slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}</div>
    </article>
  );
}
