import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = `${profile.name} — Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Text-only social preview card; no screenshots or imagery. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0f0f0e",
          color: "#ecebe5",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#8a8981", letterSpacing: 4 }}>
          {profile.name.toUpperCase()} — SOFTWARE ENGINEER
        </div>
        <div style={{ display: "flex", fontSize: 76, lineHeight: 1.05, maxWidth: 980 }}>
          {profile.headline}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#a5a49c" }}>
          <div style={{ width: 48, height: 2, background: "#d9a65b" }} />
          Frontend · React · Next.js · TypeScript
        </div>
      </div>
    ),
    size,
  );
}
