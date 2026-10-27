/**
 * Public base URL of the site, used for metadata, robots.txt and the sitemap.
 *
 * Resolution order:
 * 1. NEXT_PUBLIC_SITE_URL (set this once you connect a custom domain)
 * 2. VERCEL_PROJECT_PRODUCTION_URL (provided automatically by Vercel)
 * 3. http://localhost:3000 for local development
 *
 * No environment variable is required for the site to build or run.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}
