import { ImageResponse } from "next/og";
import { getPost } from "@/lib/posts";
import { BrandMark, brand } from "@/lib/brand";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const post = getPost("utc-vs-eat-epoch-boundary-bug");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: brand.ink,
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
            {"// WAR STORY"}
          </div>
          <div
            style={{
              color: brand.paper,
              fontSize: 58,
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: 1020,
            }}
          >
            {post?.title ?? "Engineering notes"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {(post?.tags ?? []).map((tag) => (
              <div
                key={tag}
                style={{
                  color: brand.orange,
                  border: "1px solid rgba(240, 140, 0, 0.45)",
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
              borderTop: "1px solid #2a2b30",
              paddingTop: 28,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <BrandMark height={44} color={brand.paper} />
              <div style={{ color: "#9b9c9f", fontSize: 26 }}>{site.name}</div>
            </div>
            <div style={{ color: "#6f7074", fontSize: 24 }}>justinecodez.com</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
