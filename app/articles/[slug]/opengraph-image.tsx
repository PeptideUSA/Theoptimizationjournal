import { ImageResponse } from "next/og";
import { getArticleBySlug } from "@/lib/get-articles";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  const title = article?.title ?? "The Optimization Journal";
  const category = article?.category ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0F5E4E",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#D7F2E3",
              marginBottom: 24,
            }}
          >
            {category ? `The Optimization Journal · ${category}` : "The Optimization Journal"}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 58,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.15,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 24,
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
