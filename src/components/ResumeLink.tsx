import { Download } from "lucide-react";

/** The CV is served from public/resume.pdf. */
const RESUME_PATH = "/resume.pdf";

type Props = {
  available: boolean;
  className?: string;
  label?: string;
};

/**
 * Links to /resume.pdf. If public/resume.pdf is missing, shows a warning in
 * development and renders nothing in production, so visitors never hit a 404.
 */
export default function ResumeLink({ available, className = "", label = "Download CV" }: Props) {
  if (!available) {
    if (process.env.NODE_ENV !== "development") return null;
    return (
      <span
        role="note"
        className={`inline-flex items-center gap-2 border border-dashed border-amber-400/70 px-3 py-1.5 font-mono text-xs text-amber-200 ${className}`}
      >
        CV missing — add public/resume.pdf
      </span>
    );
  }

  return (
    <a
      href={RESUME_PATH}
      download="MD-Amer-CV.pdf"
      className={`inline-flex items-center gap-2 ${className}`}
    >
      <Download aria-hidden="true" className="size-4" strokeWidth={1.75} />
      {label}
      <span className="sr-only"> (PDF)</span>
    </a>
  );
}
