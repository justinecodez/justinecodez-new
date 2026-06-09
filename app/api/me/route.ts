import { me } from "@/lib/me";

export const dynamic = "force-static";

// Exported as a static file (out/api/me) at build time; nginx serves it
// with JSON content-type, CORS, and caching headers.
export async function GET() {
  return new Response(JSON.stringify(me, null, 2) + "\n", {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
