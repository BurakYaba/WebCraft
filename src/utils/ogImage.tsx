import { ImageResponse } from "next/og";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

/**
 * Shared branded OG image generator (next/og ImageResponse).
 * Used by per-route opengraph-image.tsx files so every page gets its own
 * unique, on-brand social preview instead of sharing one generic logo image.
 */
export function renderOgImage(title: string, subtitle?: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#181716",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: wordmark */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#f84525",
              color: "#ffffff",
              fontSize: 28,
              fontWeight: 700,
              marginRight: 16,
            }}
          >
            W
          </div>
          <div style={{ color: "#ffffff", fontSize: 30, fontWeight: 700 }}>
            WebCraft
          </div>
        </div>

        {/* Middle: title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 980,
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: title.length > 45 ? 54 : 66,
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              style={{
                color: "#a3a3a3",
                fontSize: 28,
                marginTop: 20,
              }}
            >
              {subtitle}
            </div>
          )}
        </div>

        {/* Bottom: accent bar + domain */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 48,
              height: 6,
              background: "#f84525",
              borderRadius: 3,
              marginRight: 16,
            }}
          />
          <div style={{ color: "#a3a3a3", fontSize: 22 }}>webcraft.tr</div>
        </div>
      </div>
    ),
    { ...OG_IMAGE_SIZE }
  );
}
