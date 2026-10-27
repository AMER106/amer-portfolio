import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import ResumeLink from "./ResumeLink";
import { ExternalLink, Section } from "./ui";

const rowClass =
  "group flex items-center justify-between gap-4 border-b border-line py-5 text-fg transition-colors duration-200 hover:text-accent";

export default function Contact({ resumeAvailable }: { resumeAvailable: boolean }) {
  return (
    <Section
      id="contact"
      index="05"
      label="Contact"
      title="Get in touch"
      intro="For roles, study enquiries or questions about my work, email is the best way to reach me."
    >
      <a
        href={`mailto:${profile.email}`}
        className="inline-flex items-center gap-3 text-2xl font-light tracking-tight break-all text-fg underline decoration-line-strong decoration-1 underline-offset-8 transition-colors duration-200 hover:text-accent hover:decoration-accent sm:text-4xl"
      >
        <Mail aria-hidden="true" className="size-6 shrink-0 sm:size-7" strokeWidth={1.5} />
        {profile.email}
      </a>

      <ul className="mt-12 border-t border-line">
        <li>
          <ExternalLink href={profile.github} className={rowClass}>
            <span>
              <span className="block text-base">GitHub</span>
              <span className="block font-mono text-xs text-subtle">
                {profile.github.replace("https://", "")}
              </span>
            </span>
            <ArrowUpRight aria-hidden="true" className="size-5 shrink-0" strokeWidth={1.5} />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href={profile.linkedin} className={rowClass}>
            <span>
              <span className="block text-base">LinkedIn</span>
              <span className="block font-mono text-xs text-subtle">
                {profile.linkedin.replace("https://", "")}
              </span>
            </span>
            <ArrowUpRight aria-hidden="true" className="size-5 shrink-0" strokeWidth={1.5} />
          </ExternalLink>
        </li>
      </ul>

      <div className="mt-10">
        <ResumeLink
          available={resumeAvailable}
          className="rounded-full border border-line-strong px-5 py-2.5 text-sm text-fg transition-colors duration-200 hover:border-accent hover:text-accent"
        />
      </div>
    </Section>
  );
}
