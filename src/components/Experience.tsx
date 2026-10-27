import { experience } from "@/data/portfolio";
import { DevNote, Section, Tag } from "./ui";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      label="Experience"
      title="Where I've worked"
      intro="Company applications are confidential, so this section describes my responsibilities rather than specific products."
    >
      <ol className="relative border-l border-line">
        {experience.map((item) => {
          const isCurrent = item.end === null;

          return (
            <li key={`${item.company}-${item.start}`} className="relative pb-14 pl-8 last:pb-0 sm:pl-10">
              <span
                aria-hidden="true"
                className={`absolute top-2 -left-[5px] size-[9px] rounded-full border ${
                  isCurrent ? "border-accent bg-accent" : "border-line-strong bg-ink"
                }`}
              />

              <p className="font-mono text-xs tracking-[0.14em] text-subtle uppercase">
                <time dateTime={item.start}>{item.startLabel}</time>
                <span aria-hidden="true"> — </span>
                <span className="sr-only"> to </span>
                {item.end && item.endLabel ? (
                  <time dateTime={item.end}>{item.endLabel}</time>
                ) : (
                  <span className="text-accent">Present</span>
                )}
              </p>

              <h3 className="mt-3 font-serif text-3xl leading-tight text-fg">{item.role}</h3>
              <p className="mt-1 text-base text-muted">{item.company}</p>
              {item.location ? <p className="mt-0.5 text-sm text-subtle">{item.location}</p> : null}

              <p className="mt-5 max-w-2xl leading-relaxed text-fg/90">{item.summary}</p>

              {item.responsibilities.length > 0 ? (
                <ul className="mt-5 max-w-2xl space-y-2.5 text-[0.95rem] leading-relaxed text-muted">
                  {item.responsibilities.map((line) => (
                    <li key={line} className="grid grid-cols-[1rem_1fr] gap-2">
                      <span aria-hidden="true" className="text-subtle">
                        –
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {item.technologies.length > 0 ? (
                <ul aria-label={`Technologies used at ${item.company}`} className="mt-6 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </ul>
              ) : null}

              {item.todo ? <DevNote>{item.todo}</DevNote> : null}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
