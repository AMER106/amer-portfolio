import { about } from "@/data/portfolio";
import { DevNote, Section } from "./ui";

export default function About() {
  return (
    <Section id="about" index="01" label="About" title="From mechanical engineering to software">
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {about.personalNote ? (
        <blockquote className="mt-10 max-w-2xl border-l-2 border-accent pl-6 font-serif text-2xl leading-snug text-fg">
          <p>{about.personalNote}</p>
        </blockquote>
      ) : (
        <DevNote>
          Add a short first-person paragraph in <code>about.personalNote</code> (src/data/portfolio.ts).
          It appears here as a pull quote once set.
        </DevNote>
      )}
    </Section>
  );
}
