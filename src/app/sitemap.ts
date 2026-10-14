import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = ["", "/projects/", "/writing/"].map((route) => ({ url: `${profile.domain}${route || "/"}`, changeFrequency: "monthly", priority: route ? 0.7 : 1 }));
  return [...routes, ...projects.map((project) => ({ url: `${profile.domain}/projects/${project.slug}/`, changeFrequency: "yearly" as const, priority: 0.6 }))];
}
