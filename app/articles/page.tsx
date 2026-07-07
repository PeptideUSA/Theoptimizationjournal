import ArticleCard from "@/components/ArticleCard";
import { getPublishedArticles } from "@/lib/get-articles";

export default async function ArticlesPage() {
  const articles = await getPublishedArticles();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <span className="font-mono text-xs uppercase tracking-widest text-teal-deep">
        Journal
      </span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-ink">
        All Articles
      </h1>
      <p className="mt-3 max-w-xl text-slate">
        Every article, newest first.
      </p>

      {articles.length > 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-slate">No articles published yet — check back soon.</p>
      )}
    </section>
  );
}
