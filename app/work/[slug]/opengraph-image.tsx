import { ImageResponse } from "next/og";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const title = study?.title ?? "Case Study";
  const tags = study ? [...study.tags, ...study.stack.slice(0, 3)] : [];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0f172a",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#0f766e",
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            {"// CASE STUDY"}
          </div>
          <div
            style={{
              color: "#f8fafc",
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  color: "#f59e0b",
                  border: "1px solid rgba(245, 158, 11, 0.4)",
                  borderRadius: 4,
                  padding: "8px 18px",
                  fontSize: 22,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid #1e293b",
              paddingTop: 28,
            }}
          >
            <div style={{ color: "#94a3b8", fontSize: 26 }}>{site.name}</div>
            <div style={{ color: "#475569", fontSize: 24 }}>justinecodez.com</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
