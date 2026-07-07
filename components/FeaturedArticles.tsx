import ArticleCard from "@/components/ArticleCard";
import { getPublishedArticles } from "@/lib/get-articles";

export default async function FeaturedArticles() {
  const articles = await getPublishedArticles();
  const featured = articles.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex items-end justify-between">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-teal-deep">
            Featured
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
            Start here
          </h2>
        </div>
      </div>

      {featured.length > 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-slate">
          No articles published yet — check back soon.
        </p>
      )}
    </section>
  );
}
