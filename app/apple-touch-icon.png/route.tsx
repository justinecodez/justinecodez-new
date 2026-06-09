import { ImageResponse } from "next/og";
import { BrandTile, brand } from "@/lib/brand";

export const dynamic = "force-static";

// Apple touch icons get rounded by iOS itself, so fill the full square
// with ink behind the tile to avoid transparent corners.
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: brand.ink,
        }}
      >
        <BrandTile size={180} />
      </div>
    ),
    { width: 180, height: 180 }
  );
}
