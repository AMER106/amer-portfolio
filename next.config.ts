import type { NextConfig } from "next";
import { existsSync } from "node:fs";
import path from "node:path";

if (!existsSync(path.join(process.cwd(), "public", "resume.pdf"))) {
  console.warn(
    "\n⚠  public/resume.pdf is missing. The CV download link is hidden until the file is added.\n",
  );
}

const nextConfig: NextConfig = {
  poweredByHeader: false,
};

export default nextConfig;
