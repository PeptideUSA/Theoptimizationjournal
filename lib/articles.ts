export type Category =
  | "Peptides"
  | "TRT & Hormones"
  | "Longevity"
  | "Fitness & Recovery";

export const categories: { name: Category; slug: string; blurb: string }[] = [
  {
    name: "Peptides",
    slug: "peptides",
    blurb: "Research-use compounds, mechanisms, and what the data actually supports.",
  },
  {
    name: "TRT & Hormones",
    slug: "trt-hormones",
    blurb: "Testosterone, hormone optimization, and the clinical research behind it.",
  },
  {
    name: "Longevity",
    slug: "longevity",
    blurb: "Healthspan, biomarkers, and interventions with real evidence behind them.",
  },
  {
    name: "Fitness & Recovery",
    slug: "fitness-recovery",
    blurb: "Training, recovery, and nutrition — for athletes and weekend golfers alike.",
  },
];

export function categorySlug(name: string) {
  return categories.find((c) => c.name === name)?.slug ?? "";
}

export function readTimeFor(body: string) {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}
