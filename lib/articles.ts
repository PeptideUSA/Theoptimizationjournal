export type Category = "Peptides" | "TRT & Hormones" | "Longevity" | "Fitness & Recovery";

export type Article = {
  slug: string;
  title: string;
  category: Category;
  excerpt: string;
  readTime: string;
  date: string;
  featured?: boolean;
  citations: number;
};

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

export const articles: Article[] = [
  {
    slug: "what-is-bpc-157",
    title: "What Is BPC-157? A Look at the Current Research",
    category: "Peptides",
    excerpt:
      "BPC-157 is one of the most talked-about research peptides. Here's what animal and early human studies actually show about its mechanisms.",
    readTime: "8 min read",
    date: "2026-07-01",
    featured: true,
    citations: 12,
  },
  {
    slug: "ruo-vs-clinical-use",
    title: "RUO vs. Clinical Use: Understanding the Peptide Research Landscape",
    category: "Peptides",
    excerpt:
      "Research-use-only compounds occupy a specific, legal, and important space in the research ecosystem. Here's how that landscape actually works.",
    readTime: "10 min read",
    date: "2026-06-24",
    featured: true,
    citations: 9,
  },
  {
    slug: "tirzepatide-vs-semaglutide",
    title: "Tirzepatide vs. Semaglutide: What the Head-to-Head Trials Show",
    category: "Peptides",
    excerpt:
      "Both are GLP-1 receptor agonists, but the trial data on efficacy, weight loss, and side effect profiles diverges in important ways.",
    readTime: "9 min read",
    date: "2026-06-15",
    citations: 14,
  },
  {
    slug: "retatrutide-next-glp1",
    title: "Retatrutide: The Next GLP-1? What We Know So Far",
    category: "Peptides",
    excerpt:
      "Early-phase trial data on the triple agonist generating buzz in longevity and weight-management research circles.",
    readTime: "7 min read",
    date: "2026-06-08",
    citations: 6,
  },
  {
    slug: "low-t-symptoms-and-diagnosis",
    title: "Low T Symptoms: What the Research Says About Diagnosis",
    category: "TRT & Hormones",
    excerpt:
      "Fatigue and low libido get blamed on testosterone often. Here's what the endocrine societies actually require for a diagnosis.",
    readTime: "8 min read",
    date: "2026-06-20",
    featured: true,
    citations: 11,
  },
  {
    slug: "trt-and-fertility",
    title: "TRT and Fertility: What Men Should Know Before Starting",
    category: "TRT & Hormones",
    excerpt:
      "Exogenous testosterone suppresses the HPG axis and sperm production. What the research says about reversibility and alternatives.",
    readTime: "9 min read",
    date: "2026-06-11",
    citations: 10,
  },
  {
    slug: "natural-ways-to-support-testosterone",
    title: "Natural Ways to Support Testosterone: Sleep, Lifting, and Diet",
    category: "TRT & Hormones",
    excerpt:
      "Before considering therapy, the evidence behind sleep quality, resistance training, and body composition is stronger than most think.",
    readTime: "7 min read",
    date: "2026-05-30",
    citations: 8,
  },
  {
    slug: "nad-and-aging",
    title: "NAD+ and Aging: What the Studies Actually Show",
    category: "Longevity",
    excerpt:
      "NAD+ precursors are a longevity-supplement staple. Here's what human trials show versus what's still only demonstrated in mice.",
    readTime: "9 min read",
    date: "2026-06-27",
    featured: true,
    citations: 13,
  },
  {
    slug: "rapamycin-for-longevity",
    title: "Rapamycin for Longevity: Promising Data, Real Caveats",
    category: "Longevity",
    excerpt:
      "The mTOR-inhibiting drug has extended lifespan in every model organism tested. Human data is a different story — here's where it stands.",
    readTime: "10 min read",
    date: "2026-06-18",
    citations: 15,
  },
  {
    slug: "vo2-max-longevity-marker",
    title: "VO2 Max as a Longevity Marker: Why It Matters More Than You Think",
    category: "Longevity",
    excerpt:
      "Cardiorespiratory fitness may be a stronger predictor of all-cause mortality than any lab panel you can order.",
    readTime: "6 min read",
    date: "2026-06-05",
    citations: 9,
  },
  {
    slug: "zone-2-training-explained",
    title: "Zone 2 Training Explained",
    category: "Fitness & Recovery",
    excerpt:
      "Low-intensity aerobic work builds mitochondrial density and metabolic flexibility. Here's how to actually find your Zone 2.",
    readTime: "7 min read",
    date: "2026-06-22",
    citations: 7,
  },
  {
    slug: "recovery-for-weekend-golfers",
    title: "Recovery for Weekend Golfers: Mobility Work That Actually Moves the Needle",
    category: "Fitness & Recovery",
    excerpt:
      "Thoracic rotation and hip mobility limit both your swing and your Monday morning. A research-backed mobility routine for golfers.",
    readTime: "6 min read",
    date: "2026-06-02",
    citations: 5,
  },
];

export function getFeatured(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getByCategory(category: Category): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
