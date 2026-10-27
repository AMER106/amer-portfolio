import { existsSync } from "node:fs";
import path from "node:path";

/** True when public/resume.pdf exists. Evaluated on the server at build time. */
export function hasResume(): boolean {
  return existsSync(path.join(process.cwd(), "public", "resume.pdf"));
}
