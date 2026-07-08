import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#0F5E4E",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#D7F2E3",
            marginBottom: 28,
          }}
        >
          Evidence-Based Health · Performance · Longevity
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.1,
          }}
        >
          The Optimization
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.1,
          }}
        >
          Journal
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 26,
            color: "#D7F2E3",
          }}
        >
          theoptimizationjournal.com
        </div>
      </div>
    ),
    { ...size }
  );
}
