import { skillGroups } from "@/data/portfolio";
import { Section } from "./ui";

export default function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      label="Skills"
      title="Tools I work with"
      intro="Grouped by area. My strongest, everyday experience is on the frontend."
    >
      <div className="grid border-t border-line sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="border-b border-line py-7 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
          >
            <h3 className="text-base font-medium text-fg">{group.title}</h3>
            <p className="mt-1 text-sm text-subtle">{group.context}</p>
            <ul className="mt-4 flex flex-wrap gap-x-1 gap-y-1.5 text-[0.95rem] text-muted">
              {group.items.map((skill, index) => (
                <li key={skill.name}>
                  {skill.name}
                  {skill.note ? (
                    <span className="ml-1 font-mono text-xs text-subtle">({skill.note})</span>
                  ) : null}
                  {index < group.items.length - 1 ? (
                    <span aria-hidden="true" className="ml-1 text-line-strong">
                      /
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
