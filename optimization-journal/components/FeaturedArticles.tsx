import ArticleCard from "@/components/ArticleCard";
import { getFeatured } from "@/lib/articles";

export default function FeaturedArticles() {
  const featured = getFeatured();

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

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {featured.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
