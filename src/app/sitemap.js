import { projects } from "@/data/projects";

export default function sitemap() {
  const baseUrl = "https://smallbusinessstudio.in";

  const staticRoutes = [
    "",
    "/services",
    "/portfolio",
    "/industries",
    "/about",
    "/process",
    "/contact",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/portfolio/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
