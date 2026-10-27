/**
 * Single source of truth for all portfolio content.
 *
 * Rules for editing this file:
 * - Only add information that is accurate and verifiable.
 * - Anything marked `TODO` is still awaiting verified details. TODOs are
 *   surfaced on the page as dashed "Dev only" notes when running `npm run dev`
 *   and are never rendered in a production build.
 * - Optional fields (institution, result, images, links) stay hidden until
 *   they are filled in.
 */

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  headline: string;
  intro: string;
};

export type About = {
  /** Factual summary of background. Rendered in production. */
  paragraphs: string[];
  /** Optional first-person paragraph, written by MD Amer. Hidden until set. */
  personalNote: string | null;
};

export type ExperienceItem = {
  role: string;
  company: string;
  /** Optional, e.g. "Visakhapatnam, India — Virtual". Hidden when omitted. */
  location?: string;
  /** ISO year-month, used for the <time> element. */
  start: string;
  end: string | null;
  startLabel: string;
  /** null while the role is ongoing. */
  endLabel: string | null;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  todo?: string;
};

export type ProjectImage = {
  /** Path under /public, e.g. "/images/ai-resume.png". Must be a genuine screenshot. */
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  name: string;
  kind: "Personal project" | "Academic project" | "Open-source contribution";
  /**
   * "verified": every displayed field has been confirmed.
   * "unverified": only the project name is shown, labelled as a write-up in progress.
   */
  status: "verified" | "unverified";
  featured: boolean;
  summary?: string;
  contribution?: string;
  technologies: string[];
  image?: ProjectImage;
  demoUrl?: string;
  repoUrl?: string;
  /** Use when the repository is owned by someone else, e.g. "Hosted on a collaborator's GitHub". */
  repoNote?: string;
  todo?: string[];
};

export type SkillGroup = {
  title: string;
  /** Plain-language context about how the skills in this group have been used. */
  context: string;
  items: { name: string; note?: string }[];
};

export type EducationItem = {
  qualification: string;
  field: string;
  start: string;
  end: string;
  /** Leave null until verified. Not rendered while null. */
  institution: string | null;
  /** Leave null until verified. Not rendered while null. */
  result: string | null;
};

export type LearningItem = {
  title: string;
  /** Training provider or awarding organisation. */
  issuer: string;
  /** ISO date or year-month of completion, used for the <time> element. */
  date: string;
  /** Human-readable date or period, e.g. "Dec 2024" or "Mar — May 2022". */
  dateLabel: string;
  description: string;
  /** Optional link to a certificate, course page or write-up. */
  href?: string;
};

/* -------------------------------------------------------------------------- */
/* Content                                                                    */
/* -------------------------------------------------------------------------- */

export const profile: Profile = {
  name: "MD Amer",
  title: "Software Engineer",
  location: "India",
  email: "arabamer031@gmail.com",
  github: "https://github.com/amer106",
  linkedin: "https://linkedin.com/in/md-amer",
  headline: "Building thoughtful, maintainable web experiences.",
  intro:
    "I'm a frontend-focused Software Engineer based in India. I build and maintain web applications with React, Next.js and TypeScript, currently at Asian Crowd Tech.",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const about: About = {
  paragraphs: [
    "I completed a Bachelor of Technology in Mechanical Engineering (2020–2023) and then moved into software development.",
    "My first role in the field was a web developer internship at ABTS from August to December 2024. Since January 2025 I have worked as a Software Engineer at Asian Crowd Tech Pvt Ltd, where I build and maintain production web applications.",
    "My work is centred on the frontend — React, Next.js and TypeScript — alongside API integration, server-state management and the backend and database work needed to connect an interface to its data.",
  ],
  // TODO(MD Amer): add a short first-person paragraph in your own words, e.g.
  // what you enjoy about frontend engineering or what you want to study next.
  personalNote: null,
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Asian Crowd Tech Pvt Ltd",
    start: "2025-01",
    end: null,
    startLabel: "Jan 2025",
    endLabel: null,
    summary:
      "Building and maintaining production web applications, with a focus on the frontend.",
    responsibilities: [
      "Build and maintain production web applications with React, Next.js and TypeScript.",
      "Develop reusable, maintainable frontend components and responsive interfaces.",
      "Integrate REST APIs and handle asynchronous data and authentication workflows.",
      "Manage server state and caching with React Query.",
      "Debug API integration, authentication and data-flow issues.",
      "Work with MongoDB and PostgreSQL for application data and backend integration.",
      "Contribute to frontend architecture, usability and code organisation.",
      "Collaborate through Git/GitHub workflows and code reviews.",
      "Deploy applications to Vercel across development, staging and production environments.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React Query",
      "MongoDB",
      "PostgreSQL",
      "Vercel",
    ],
    todo: "Confirm these responsibilities belong to this role (they are taken from the resume-wide list).",
  },
  {
    role: "Web Development Tutor",
    company: "Loma IT Solutions",
    location: "Visakhapatnam, India — Virtual",
    start: "2025-07",
    end: "2025-09",
    startLabel: "Jul 2025",
    endLabel: "Sep 2025",
    summary: "Taught web development to final-year B.Tech students.",
    responsibilities: [
      "Covered HTML, CSS, JavaScript, React.js and Node.js.",
      "Helped students understand web development concepts through explanations and practical learning.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
  },
  {
    role: "Web Developer Intern",
    company: "ABTS",
    start: "2024-08",
    end: "2024-12",
    startLabel: "Aug 2024",
    endLabel: "Dec 2024",
    summary: "Web development internship.",
    responsibilities: [],
    technologies: [],
    todo: "Add 2–3 verified responsibilities and the technologies used during the ABTS internship.",
  },
];

// Not currently rendered: the Projects section was removed from the page.
// To bring it back, re-add <Projects /> in src/app/page.tsx and a "Projects" nav item.
export const projects: Project[] = [
  {
    slug: "ai-powered-resume",
    name: "AI-powered-resume",
    kind: "Personal project",
    // Switch to "verified" and `featured: true` once the details below are confirmed.
    status: "unverified",
    featured: false,
    technologies: [],
    repoNote: "Code is hosted in a collaborator's GitHub repository.",
    todo: [
      "Exact repository URL (and confirmation it may be linked publicly)",
      "My specific contribution",
      "Implemented features, described factually",
      "Technology stack",
      "Public demo URL, if one exists",
      "A genuine screenshot for /public/images (optional)",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend development",
    context: "Used day to day in professional work.",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS" },
      { name: "Material UI" },
    ],
  },
  {
    title: "State management & API integration",
    context: "Used in professional work to connect interfaces to their data.",
    items: [
      { name: "React Query" },
      { name: "REST APIs" },
      { name: "Async data handling" },
      { name: "Authentication workflows" },
    ],
  },
  {
    title: "Backend technologies",
    context: "Working knowledge, supporting frontend and integration work.",
    items: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "JDBC" },
      { name: "Spring Boot", note: "familiar" },
    ],
  },
  {
    title: "Databases",
    context: "Used for application data and backend integration.",
    items: [{ name: "MongoDB" }, { name: "PostgreSQL" }],
  },
  {
    title: "Programming languages",
    context: "JavaScript and TypeScript are my primary languages.",
    items: [
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "Java" },
      { name: "Python", note: "familiar" },
    ],
  },
  {
    title: "Tools & deployment",
    context: "Part of the everyday team workflow.",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Code reviews" },
      { name: "Vercel" },
    ],
  },
];

export const education: EducationItem[] = [
  {
    qualification: "Bachelor of Technology",
    field: "Mechanical Engineering",
    start: "2020",
    end: "2023",
    // TODO(MD Amer): add institution name once you want it shown.
    institution: null,
    // TODO(MD Amer): add CGPA/percentage only if you want it shown.
    result: null,
  },
];

// Completed courses, newest first. Add only courses or certificates you have
// actually completed. The block is hidden while empty.
export const learning: LearningItem[] = [
  {
    title: "Professional course in Java and web technologies",
    issuer: "JSpiders — Java Training and Development Center",
    date: "2024-12-28",
    dateLabel: "Dec 2024",
    description: "Covered Core Java, J2EE, SQL, Web Technology and Frameworks.",
  },
  {
    title: "Python course",
    issuer: "Naresh i Technologies",
    date: "2022-05",
    dateLabel: "Mar — May 2022",
    description: "Completed a course in Python.",
  },
];
