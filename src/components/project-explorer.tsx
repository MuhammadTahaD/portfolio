"use client";

import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

const categories: ("All" | ProjectCategory)[] = ["All", "Full Stack", "AI Automation", "AI Agents", "Experiments"];

export function ProjectExplorer() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");
  const results = useMemo(() => projects.filter((project) => {
    const matchesCategory = category === "All" || project.category === category;
    const searchable = `${project.name} ${project.description} ${project.technologies.join(" ")}`.toLocaleLowerCase();
    return matchesCategory && searchable.includes(query.trim().toLocaleLowerCase());
  }), [category, query]);

  return <>
    <div className="project-controls">
      <div className="filter-list" aria-label="Filter projects by category">{categories.map((item) => <button key={item} className={category === item ? "active" : ""} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}<span>{item === "All" ? projects.length : projects.filter((p) => p.category === item).length}</span></button>)}</div>
      <label className="search-field"><span className="sr-only">Search projects by name or technology</span><span aria-hidden="true">⌕</span><input type="search" placeholder="Search projects" value={query} onChange={(event) => setQuery(event.target.value)} /></label>
    </div>
    <p className="results-count" aria-live="polite">{results.length} {results.length === 1 ? "project" : "projects"}</p>
    {results.length > 0 ? <div className="project-grid">{results.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div> : <div className="empty-results"><span>—</span><h2>No projects found</h2><p>Try another name, technology, or category.</p><button type="button" className="text-link" onClick={() => { setCategory("All"); setQuery(""); }}>Clear filters ↗</button></div>}
  </>;
}
