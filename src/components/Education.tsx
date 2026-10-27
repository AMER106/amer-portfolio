import { ArrowUpRight } from "lucide-react";
import { education, learning } from "@/data/portfolio";
import { DevNote, ExternalLink, Section } from "./ui";

export default function Education() {
  return (
    <Section id="education" index="04" label="Education" title="Education & learning">
      <ul className="border-t border-line">
        {education.map((item) => (
          <li
            key={`${item.qualification}-${item.start}`}
            className="grid gap-2 border-b border-line py-7 sm:grid-cols-[10rem_1fr] sm:gap-8"
          >
            <p className="font-mono text-xs tracking-[0.14em] text-subtle uppercase sm:pt-2">
              <time dateTime={item.start}>{item.start}</time>
              <span aria-hidden="true">–</span>
              <span className="sr-only"> to </span>
              <time dateTime={item.end}>{item.end}</time>
            </p>
            <div>
              <h3 className="font-serif text-3xl leading-tight text-fg">{item.qualification}</h3>
              <p className="mt-1 text-muted">{item.field}</p>
              {item.institution ? <p className="mt-1 text-muted">{item.institution}</p> : null}
              {item.result ? <p className="mt-1 text-sm text-subtle">{item.result}</p> : null}
            </div>
          </li>
        ))}
      </ul>

      {education.some((item) => item.institution === null) ? (
        <DevNote>
          Institution and result are hidden until set in <code>education</code>.
        </DevNote>
      ) : null}

      {learning.length > 0 ? (
        <div className="mt-14">
          <h3 className="font-mono text-xs tracking-[0.14em] text-subtle uppercase">
            Courses &amp; certificates
          </h3>
          <ul className="mt-4 border-t border-line">
            {learning.map((item) => (
              <li
                key={item.title}
                className="grid gap-2 border-b border-line py-6 sm:grid-cols-[10rem_1fr] sm:gap-8"
              >
                <p className="font-mono text-xs tracking-[0.14em] text-subtle uppercase sm:pt-1">
                  <time dateTime={item.date}>{item.dateLabel}</time>
                </p>
                <div>
                  <h4 className="text-lg text-fg">
                    {item.href ? (
                      <ExternalLink
                        href={item.href}
                        className="inline-flex items-center gap-1 underline decoration-line-strong underline-offset-4 hover:text-accent hover:decoration-accent"
                      >
                        {item.title}
                        <ArrowUpRight aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
                      </ExternalLink>
                    ) : (
                      item.title
                    )}
                  </h4>
                  <p className="mt-1 text-muted">{item.issuer}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Section>
  );
}
