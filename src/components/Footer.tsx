import { ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Container } from "./ui";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-4 py-10 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}. Built with Next.js and Tailwind CSS.
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-fg"
        >
          Back to top
          <ArrowUp aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
        </a>
      </Container>
    </footer>
  );
}
