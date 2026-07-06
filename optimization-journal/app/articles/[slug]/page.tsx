import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href={`/category/${article.category
          .toLowerCase()
          .replace(/ & /g, "-")
          .replace(/\s+/g, "-")}`}
        className="font-mono text-xs uppercase tracking-widest text-teal-deep hover:underline"
      >
        {article.category}
      </Link>

      <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
        {article.title}
      </h1>

      <div className="mt-5 flex items-center gap-4 border-b border-line pb-6 text-sm text-slate">
        <span>{article.readTime}</span>
        <span>·</span>
        <span>
          {new Date(article.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <span>·</span>
        <span className="cite-tag">{article.citations} sources</span>
      </div>

      <p className="mt-8 text-lg leading-relaxed text-slate">{article.excerpt}</p>

      <div className="mt-8 space-y-6 leading-relaxed text-ink/90">
        <p>
          This article template is ready for your full write-up
          <span className="cite-tag">1</span>. Draft your research summary here —
          pull from PubMed, cite each claim with a <code className="rounded bg-mint-soft px-1.5 py-0.5 font-mono text-sm text-teal-dark">cite-tag</code>{" "}
          styled link back to the source, and keep the tone editorial and
          evidence-first.
        </p>
        <p>
          A good structure for this section: what it is, what the research
          actually shows (separating animal studies from human trials), what's
          still unknown, and a plain-language summary at the end.
        </p>
      </div>

      <div className="mt-12 rounded-2xl border border-line bg-mint-soft p-6 text-sm text-slate">
        This article is for educational and research purposes only and is not
        medical advice. Consult a licensed physician before making health
        decisions.
      </div>

      <Link
        href="/articles"
        className="mt-10 inline-block font-mono text-sm text-teal-deep hover:underline"
      >
        ← Back to all articles
      </Link>
    </article>
  );
}
