import { ImageResponse } from "next/og";
import { BrandMark, brand } from "@/lib/brand";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — Solution Architect & Software Consultant, Dar es Salaam`;

export default async function OgImage() {
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
        <BrandMark height={170} color={brand.paper} />

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ color: brand.paper, fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
            {site.name}
          </div>
          <div style={{ color: "#9b9c9f", fontSize: 32 }}>
            Solution Architect &amp; Software Consultant — Dar es Salaam, Tanzania
          </div>
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
          <div style={{ color: brand.orange, fontSize: 26 }}>Tujenge Pamoja.</div>
          <div style={{ color: "#6f7074", fontSize: 24 }}>justinecodez.com</div>
        </div>
      </div>
    ),
    size
  );
}
