import type { ReactNode } from "react";

/** Shared layout primitives used by every section. */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

type SectionProps = {
  id: string;
  index: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

/** Editorial section: label column on the left, content on the right (lg+). */
export function Section({ id, index, label, title, intro, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-line">
      <Container className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:gap-8">
        <header className="lg:col-span-4">
          <p className="font-mono text-xs tracking-[0.18em] text-subtle uppercase">
            <span className="text-accent">{index}</span>
            <span aria-hidden="true"> / </span>
            {label}
          </p>
          <h2
            id={headingId}
            className="mt-4 max-w-sm font-serif text-4xl leading-[1.05] tracking-tight text-fg sm:text-5xl"
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-muted">{intro}</p>
          ) : null}
        </header>
        <div className="lg:col-span-8">{children}</div>
      </Container>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
      {children}
    </li>
  );
}

/** Opens in a new tab and tells screen-reader users that it does. */
export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

/**
 * Highlights missing, unverified content while running `npm run dev`.
 * Renders nothing in production builds.
 */
export function DevNote({ children }: { children: ReactNode }) {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div
      role="note"
      className="mt-6 border border-dashed border-amber-400/60 bg-amber-400/5 px-4 py-3 font-mono text-xs leading-relaxed text-amber-200"
    >
      <strong className="font-semibold">Dev only · TODO</strong>
      <div className="mt-1">{children}</div>
    </div>
  );
}
