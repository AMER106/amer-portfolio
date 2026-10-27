"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import type { NavItem } from "@/data/portfolio";
import ResumeLink from "./ResumeLink";

type Props = {
  name: string;
  items: NavItem[];
  resumeAvailable: boolean;
};

export default function Navbar({ name, items, resumeAvailable }: Props) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }

    function onResize() {
      if (window.matchMedia("(min-width: 768px)").matches) setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="font-serif text-2xl tracking-tight text-fg">
          {name}
          <span className="text-accent" aria-hidden="true">
            .
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted transition-colors duration-200 hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ResumeLink
            available={resumeAvailable}
            label="CV"
            className="rounded-full border border-line-strong px-4 py-1.5 text-sm text-fg transition-colors duration-200 hover:border-accent hover:text-accent"
          />
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center text-fg md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X aria-hidden="true" className="size-5" strokeWidth={1.75} />
          ) : (
            <Menu aria-hidden="true" className="size-5" strokeWidth={1.75} />
          )}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </nav>

      <div id={menuId} hidden={!open} className="border-t border-line md:hidden">
        <ul className="mx-auto flex max-w-6xl flex-col px-5 pt-2 pb-6 sm:px-8">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line py-3 font-serif text-2xl text-fg"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <ResumeLink
              available={resumeAvailable}
              className="rounded-full border border-line-strong px-4 py-2 text-sm text-fg"
            />
          </li>
        </ul>
      </div>
    </header>
  );
}
