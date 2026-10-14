import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/data/projects";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";

export default function HomePage() {
  return <>
    <section className="hero page-wrap">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> COMPUTER SCIENCE / SOFTWARE / AI AUTOMATION</div>
        <h1>Building software,<br /><em>automations,</em> and<br />AI-powered experiences<span className="accent-dot">.</span></h1>
        <p className="hero-intro">I’m Muhammad Taha Malik, a Computer Science student and developer exploring full-stack engineering, intelligent automation, and AI voice agents. I enjoy turning ideas into practical, working products.</p>
        <div className="hero-actions"><Link className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↘</span></Link><Link className="button button-quiet" href="#contact">Get in touch <span aria-hidden="true">↗</span></Link></div>
      </div>
      <div className="hero-art" aria-label="A diagram of software and automation concepts" role="img">
        <div className="art-coordinate">SYS / 01.26</div><div className="art-orbit orbit-outer"><i /><i /></div><div className="art-orbit orbit-inner"><i /></div><div className="art-core"><span>TM</span><small>IDEA → SYSTEM</small></div>
        <span className="art-label label-code">{`{ code }`}</span><span className="art-label label-flow">↗ workflow</span><span className="art-label label-api">API<span> ● </span>connected</span><div className="art-foot"><span>THOUGHTFUL BY DESIGN</span><span>01 — 07</span></div>
      </div>
      <div className="hero-bottom"><span>ISLAMABAD, PAKISTAN</span><span>SCROLL TO EXPLORE <b>↓</b></span></div>
    </section>

    <section className="section section-projects page-wrap" id="projects">
      <div className="section-heading"><div><span className="section-index">01 / SELECTED WORK</span><h2>Things I’ve <em>built.</em></h2></div><Link className="text-link" href="/projects/">All projects <span aria-hidden="true">↗</span></Link></div>
      <div className="project-grid featured-grid">{featuredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
    </section>

    <section className="section about-section" id="about"><div className="page-wrap about-layout">
      <div className="about-heading"><span className="section-index">02 / A LITTLE ABOUT ME</span><h2>Curious by nature.<br /><em>Practical by choice.</em></h2><p className="about-note">A backend engineer learning in public and building with intent.</p></div>
      <div className="about-body"><p>I’m a Computer Science student drawn to the systems behind useful products: the APIs, data models, and automations that make an idea dependable in everyday use.</p><p>My work spans MERN applications, Python services, and AI-enabled workflows. I’m especially interested in how voice agents and automation can make routine interactions feel simpler.</p><div className="experience-block"><span className="section-index">CURRENTLY</span><div><strong>{profile.experience.role} <span>at</span> {profile.experience.company}</strong><small>{profile.experience.location} · {profile.experience.dates}</small></div><Link href="/projects/trillesai-website/" aria-label="Read about TrillesAI website project">↗</Link></div><div className="education-block"><span className="section-index">EDUCATION</span><div><strong>{profile.education.degree}</strong><small>{profile.education.institution} · {profile.education.dates}</small></div></div><Link className="text-link about-link" href="/projects/">Explore my projects ↗</Link></div>
    </div></section>

    <section className="section skills-section page-wrap"><div className="section-heading"><div><span className="section-index">03 / TOOLS OF THE TRADE</span><h2>What I work <em>with.</em></h2></div><p>Technologies are tools. The interesting part is what they help us make.</p></div><div className="skills-list">{skillGroups.map((group, index) => <div className="skill-row" key={group.name}><span className="skill-number">0{index + 1}</span><h3>{group.name}</h3><div>{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>

    <section className="section contact-section" id="contact"><div className="page-wrap contact-layout"><div><span className="section-index">04 / HAVE A GOOD ONE IN MIND?</span><h2>Let’s make<br /><em>something useful.</em></h2></div><div className="contact-copy"><p>Have a project, an interesting problem, or an idea you’d like to explore? I’d be glad to hear about it.</p><a className="button button-primary" href={`mailto:${profile.email}`}>Start a conversation <span aria-hidden="true">↗</span></a><div className="contact-details"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.socials.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><span>{profile.location}</span></div></div></div></section>
  </>;
}
