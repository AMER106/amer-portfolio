import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import { Section } from "./ui";

export default function Projects() {
  // Verified, featured projects first; unverified entries last.
  const ordered = [...projects].sort((a, b) => {
    const rank = (p: (typeof projects)[number]) =>
      (p.status === "verified" ? 0 : 2) + (p.featured ? 0 : 1);
    return rank(a) - rank(b);
  });

  return (
    <Section
      id="projects"
      index="03"
      label="Projects"
      title="Selected work"
      intro="Personal projects. My professional work is covered under Experience."
    >
      {ordered.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {ordered.map((project) => (
            <div
              key={project.slug}
              className={
                ordered.length === 1 || (project.status === "verified" && project.featured)
                  ? "md:col-span-2"
                  : ""
              }
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted">Project write-ups are on the way.</p>
      )}
    </Section>
  );
}
