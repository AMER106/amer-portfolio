import { ArrowDown, ArrowUpRight } from "lucide-react";
import { experience, profile } from "@/data/portfolio";
import ResumeLink from "./ResumeLink";
import { Container, ExternalLink } from "./ui";

export default function Hero({ resumeAvailable }: { resumeAvailable: boolean }) {
  const current = experience.find((item) => item.end === null);
  // Render "maintainable" in italic serif as the single typographic accent.
  const [before, after] = profile.headline.split("maintainable");

  const facts = [
    current && {
      term: "Currently",
      detail: `${current.role}, ${current.company}`,
    },
    { term: "Focus", detail: "React · Next.js · TypeScript" },
    { term: "Based in", detail: profile.location },
  ].filter((fact): fact is { term: string; detail: string } => Boolean(fact));

  return (
    <section id="top" aria-labelledby="hero-heading">
      <Container className="grid gap-14 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:grid-cols-12 lg:gap-8 lg:pt-32">
        <div className="lg:col-span-8">
          <p className="font-mono text-xs tracking-[0.18em] text-subtle uppercase">
            {profile.name}
            <span aria-hidden="true" className="mx-2 text-accent">
              —
            </span>
            {profile.title}, frontend-focused
          </p>

          <h1
            id="hero-heading"
            className="mt-6 font-serif text-[2.75rem] leading-[1.02] tracking-tight text-balance text-fg sm:text-6xl lg:text-[5.25rem]"
          >
            {after !== undefined ? (
              <>
                {before}
                <em className="text-accent">maintainable</em>
                {after}
              </>
            ) : (
              profile.headline
            )}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-accent"
            >
              View experience
              <ArrowDown aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm text-fg transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
            <ResumeLink
              available={resumeAvailable}
              className="rounded-full border border-line-strong px-5 py-2.5 text-sm text-fg transition-colors duration-200 hover:border-accent hover:text-accent"
            />
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li>
              <ExternalLink
                href={profile.github}
                className="group inline-flex items-center gap-1 text-muted transition-colors duration-200 hover:text-fg"
              >
                GitHub
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.75}
                />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href={profile.linkedin}
                className="group inline-flex items-center gap-1 text-muted transition-colors duration-200 hover:text-fg"
              >
                LinkedIn
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.75}
                />
              </ExternalLink>
            </li>
          </ul>
        </div>

        <aside aria-label="At a glance" className="self-end lg:col-span-4">
          <dl className="border-t border-line-strong">
            {facts.map((fact) => (
              <div
                key={fact.term}
                className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line py-4 text-sm"
              >
                <dt className="font-mono text-xs tracking-[0.14em] text-subtle uppercase">
                  {fact.term}
                </dt>
                <dd className="text-fg">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </Container>
    </section>
  );
}
