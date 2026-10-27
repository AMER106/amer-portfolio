# MD Amer — Portfolio

Personal portfolio for MD Amer, a frontend-focused Software Engineer.
Built with Next.js (App Router), TypeScript (strict) and Tailwind CSS v4. It's a single static page with no backend, database or environment variables required.

## Project structure

```
src/
  app/
    layout.tsx            Fonts, metadata (title, description, Open Graph)
    page.tsx              Composes the sections
    globals.css           Colour tokens, focus styles, reduced-motion rules
    icon.svg              Text-based "MA" favicon
    opengraph-image.tsx   Text-only social preview image (generated at build)
    robots.ts             /robots.txt
    sitemap.ts            /sitemap.xml
  components/
    Navbar.tsx            Client component (mobile menu); everything else is a server component
    Hero.tsx  About.tsx  Experience.tsx  Projects.tsx (hidden)  ProjectCard.tsx
    Skills.tsx  Education.tsx  Contact.tsx  Footer.tsx
    ResumeLink.tsx        Link to /resume.pdf (hidden if the file is missing)
    ui.tsx                Section, Container, Tag, ExternalLink, DevNote
  data/
    portfolio.ts          ALL content lives here — edit this file, not the components
  lib/
    resume.ts             Checks whether public/resume.pdf exists
    site.ts               Resolves the public site URL
public/
  images/                 Genuine project screenshots only
  resume.pdf              ← you add this (see below)
```

## Run locally

Requires Node.js 18.18+ (tested with Node 24).

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:3000. In development, dashed yellow **"Dev only · TODO"** notes mark content that still needs verified details. They never appear in a production build.

Production build and local preview:

```bash
npm run build
```

```bash
npm run start
```

Checks:

```bash
npm run lint
```

```bash
npx tsc --noEmit
```

## Editing content

Everything is in `src/data/portfolio.ts`:

- `profile`: name, email, links, hero text
- `about.paragraphs` and `about.personalNote` (your own first-person paragraph; hidden while `null`)
- `experience`: roles, responsibilities, technologies
- `projects`: project cards (currently not shown; see below)
- `skillGroups`: skills by category, with a plain-language context line
- `education`: `institution` and `result` stay hidden while `null`
- `learning`: "Courses & certificates" list; hidden while empty

### Projects section (currently hidden)

The Projects section has been taken off the page. `Projects.tsx`, `ProjectCard.tsx` and the `projects` data are kept so it can be restored. To bring it back:

1. In `src/app/page.tsx`, import `Projects` from `@/components/Projects` and render `<Projects />` between `<Experience />` and `<Skills />`.
2. In `navItems` (`src/data/portfolio.ts`), add `{ label: "Projects", href: "#projects" }` after Experience.
3. Renumber the `index` props: Projects `03`, Skills `04`, Education `05`, Contact `06`.

Each project has `status: "verified" | "unverified"`.

- **unverified**: only the name is shown, labelled "Write-up in progress". Summary, technologies and links are not rendered.
- **verified**: summary, contribution, technologies, image and links are rendered. Set `featured: true` to make the card span the full width and sort first.

To publish **AI-powered-resume**: fill in `summary`, `contribution`, `technologies`, `repoUrl` (only if the owner agrees to it being linked) and `demoUrl` (if one exists). Then set `status: "verified"` and `featured: true`, and remove the `todo` list.

For a screenshot, put a real image in `public/images/` and add
`image: { src: "/images/your-file.png", alt: "Describe what the screenshot shows", width: 1600, height: 1000 }`.

## CV

The CV link points to **`/resume.pdf`**. Put your final PDF at:

```
public/resume.pdf
```

While the file is missing:
- `npm run dev` shows a dashed "CV missing — add public/resume.pdf" notice where the links would be.
- `npm run build` prints a warning and the CV links are left out of the page, so visitors never hit a 404.

Rebuild after adding the file. Before you commit it, check the PDF doesn't contain anything you don't want to be public (phone number, home address and so on).

## Deploying to GitHub and Vercel

### 1. Create the GitHub repository

Create an empty repository on GitHub (for example `md-amer-portfolio`) **without** a README, .gitignore or licence. Then, from this folder:

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Initial portfolio"
```

```bash
git branch -M main
```

```bash
git remote add origin https://github.com/amer106/md-amer-portfolio.git
```

```bash
git push -u origin main
```

Git will open a browser or Git Credential Manager window to sign in. Never paste a token into a chat or a file in this repository.

### 2. Import into Vercel

1. Sign in at https://vercel.com with your GitHub account.
2. **Add New… → Project**, then pick `md-amer-portfolio` and click **Import**.
3. Framework preset: **Next.js** (auto-detected). Leave the build command (`next build`), output settings and root directory as the defaults.
4. No environment variables are needed. Click **Deploy**.
5. When it finishes, open the `*.vercel.app` URL and work through the checklist below.

Each later `git push` to `main` deploys to production automatically. Pushes to other branches get preview URLs.

### 3. Production checklist

- [ ] `public/resume.pdf` added and the CV link downloads the right file
- [ ] `npm run lint`, `npx tsc --noEmit` and `npm run build` pass locally
- [ ] No "Dev only" notes are visible on the deployed site (they shouldn't be; they're dev-only)
- [ ] Every remaining TODO in `src/data/portfolio.ts` is either filled in with verified facts or deliberately left hidden
- [ ] Email, GitHub and LinkedIn links open the right pages
- [ ] Checked on a phone: menu opens and closes, nothing scrolls sideways
- [ ] `/robots.txt` and `/sitemap.xml` show the production URL, not localhost
- [ ] Social preview looks right (paste the URL into a LinkedIn post draft, or use https://www.opengraph.xyz)

### 4. Custom domain (optional, later)

1. Buy a domain from any registrar.
2. In Vercel: **Project → Settings → Domains → Add**, and enter the domain.
3. Add the DNS records Vercel shows (usually an `A` record for the apex domain and a `CNAME` for `www`) at your registrar. Vercel issues HTTPS automatically once DNS resolves.
4. In **Settings → Environment Variables**, add `NEXT_PUBLIC_SITE_URL` = `https://yourdomain.com` for Production, then redeploy. This makes canonical URLs, Open Graph, robots.txt and the sitemap use the custom domain.

Without `NEXT_PUBLIC_SITE_URL`, the site uses the Vercel production URL automatically (`VERCEL_PROJECT_PRODUCTION_URL`), and `http://localhost:3000` locally.
