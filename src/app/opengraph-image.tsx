import { ImageResponse } from "next/og";
import { meta, brand } from "@content/site";

/**
 * Open Graph image — gerada via next/og (Edge runtime, Satori).
 *
 * Resolve-se em `/opengraph-image`. Next injecta `<meta og:image>` automático.
 * Visual neutro: void background, wordmark + tagline + barra accent.
 * Cada projecto pode personalizar livremente — system fonts via Satori.
 */

export const runtime = "edge";
export const alt = meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const Void = "#16171A";
  const White = "#F6F4EF";
  const Cyan = "#BFA075";
  const Slate = "#D3CBBF";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: Void,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: Cyan,
            fontSize: 26,
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {brand.location}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div
            style={{
              display: "flex",
              color: White,
              fontSize: 200,
              fontWeight: 700,
              letterSpacing: "0.12em",
              lineHeight: 1,
              textTransform: "uppercase",
            }}
          >
            {brand.name}
          </div>
          <div
            style={{
              display: "flex",
              color: White,
              fontSize: 48,
              fontWeight: 500,
              maxWidth: 880,
              lineHeight: 1.2,
            }}
          >
            {brand.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", color: Slate, fontSize: 24 }}>
            {new URL(meta.url).host}
          </div>
          <div
            style={{
              display: "flex",
              width: 240,
              height: 6,
              background: Cyan,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
