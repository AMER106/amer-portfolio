import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { DevNote, ExternalLink, Tag } from "./ui";

const linkClass =
  "group inline-flex items-center gap-1 text-sm text-fg underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent";

export default function ProjectCard({ project }: { project: Project }) {
  const verified = project.status === "verified";
  const headingId = `project-${project.slug}`;

  return (
    <article
      aria-labelledby={headingId}
      className="flex flex-col border border-line bg-surface transition-colors duration-300 hover:border-line-strong"
    >
      {verified && project.image ? (
        <div className="border-b border-line">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(min-width: 1024px) 40rem, 100vw"
            className="h-auto w-full"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-[0.14em] text-subtle uppercase">
          {project.kind}
          {!verified ? (
            <span className="rounded-full border border-line-strong px-2 py-0.5 tracking-[0.08em] text-muted normal-case">
              Write-up in progress
            </span>
          ) : null}
        </p>

        <h3 id={headingId} className="mt-3 font-serif text-3xl leading-tight text-fg">
          {project.name}
        </h3>

        {verified ? (
          <>
            {project.summary ? (
              <p className="mt-4 leading-relaxed text-muted">{project.summary}</p>
            ) : null}

            {project.contribution ? (
              <div className="mt-6">
                <h4 className="font-mono text-xs tracking-[0.14em] text-subtle uppercase">
                  My contribution
                </h4>
                <p className="mt-2 leading-relaxed text-fg/90">{project.contribution}</p>
              </div>
            ) : null}

            {project.technologies.length > 0 ? (
              <ul aria-label={`Technologies used in ${project.name}`} className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </ul>
            ) : null}
          </>
        ) : (
          <p className="mt-4 leading-relaxed text-muted">
            Details of this project and my contribution will be published here once they have been
            confirmed.
          </p>
        )}

        {project.repoNote ? <p className="mt-4 text-sm text-subtle">{project.repoNote}</p> : null}

        {verified && (project.demoUrl || project.repoUrl) ? (
          <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-8">
            {project.demoUrl ? (
              <ExternalLink href={project.demoUrl} className={linkClass}>
                Live demo<span className="sr-only">: {project.name}</span>
                <ArrowUpRight aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
              </ExternalLink>
            ) : null}
            {project.repoUrl ? (
              <ExternalLink href={project.repoUrl} className={linkClass}>
                Source code<span className="sr-only">: {project.name}</span>
                <ArrowUpRight aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
              </ExternalLink>
            ) : null}
          </div>
        ) : null}

        {project.todo && project.todo.length > 0 ? (
          <DevNote>
            Verify before marking <code>status: &quot;verified&quot;</code>:
            <ul className="mt-1 list-disc pl-4">
              {project.todo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </DevNote>
        ) : null}
      </div>
    </article>
  );
}
