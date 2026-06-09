import { ImageResponse } from "next/og";
import { BrandTile } from "@/lib/brand";

export const dynamic = "force-static";

export async function GET() {
  return new ImageResponse(<BrandTile size={512} />, { width: 512, height: 512 });
}
