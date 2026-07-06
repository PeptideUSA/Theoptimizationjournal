import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/articles";

export default function ArticlesPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <span className="font-mono text-xs uppercase tracking-widest text-teal-deep">
        Journal
      </span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-ink">
        All Articles
      </h1>
      <p className="mt-3 max-w-xl text-slate">
        Every article, newest first. Each one is cited — look for the numbered tags.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {sorted.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
