import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categorySlug, readTimeFor } from "@/lib/articles";
import { getArticleBySlug } from "@/lib/get-articles";
import ShareButtons from "@/components/ShareButtons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return { title: "Article not found" };
  }

  const url = `https://theoptimizationjournal.com/articles/${article.slug}`;

  return {
    title: `${article.title} — The Optimization Journal`,
    description: article.excerpt ?? undefined,
    openGraph: {
      title: article.title,
      description: article.excerpt ?? undefined,
      url,
      type: "article",
      siteName: "The Optimization Journal",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt ?? undefined,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  const url = `https://theoptimizationjournal.com/articles/${article.slug}`;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href={`/category/${categorySlug(article.category)}`}
        className="font-mono text-xs uppercase tracking-widest text-teal-deep hover:underline"
      >
        {article.category}
      </Link>

      <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
        {article.title}
      </h1>

      <div className="mt-5 flex items-center gap-4 border-b border-line pb-6 text-sm text-slate">
        <span>{readTimeFor(article.body)}</span>
        <span>·</span>
        <span>
          {new Date(article.created_at).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>

      {article.excerpt && (
        <p className="mt-8 text-lg leading-relaxed text-slate">
          {article.excerpt}
        </p>
      )}

      <div className="mt-8 space-y-6 whitespace-pre-line leading-relaxed text-ink/90">
        {article.body}
      </div>

      <div className="mt-12 rounded-2xl border border-line bg-mint-soft p-6 text-sm text-slate">
        This article is for educational and research purposes only and is not
        medical advice. Consult a licensed physician before making health
        decisions.
      </div>

      <div className="mt-8 border-t border-line pt-8">
        <ShareButtons url={url} title={article.title} />
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
