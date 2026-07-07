import { notFound } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";
import { categories } from "@/lib/articles";
import { getArticlesByCategory } from "@/lib/get-articles";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) notFound();

  const items = await getArticlesByCategory(category.name);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <span className="font-mono text-xs uppercase tracking-widest text-teal-deep">
        Topic
      </span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-ink">
        {category.name}
      </h1>
      <p className="mt-3 max-w-xl text-slate">{category.blurb}</p>

      {items.length > 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-slate">No articles here yet — check back soon.</p>
      )}
    </section>
  );
}
