import { notFound } from "next/navigation";
import ArticleForm from "@/components/ArticleForm";
import { createClient } from "@/lib/supabase/server";

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("id", id)
    .single();

  if (!article) notFound();

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <span className="font-mono text-xs uppercase tracking-widest text-teal-deep">
        Admin
      </span>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
        Edit Article
      </h1>
      <ArticleForm
        mode="edit"
        articleId={article.id}
        initial={{
          title: article.title,
          category: article.category,
          excerpt: article.excerpt ?? "",
          body: article.body,
          published: article.published,
        }}
      />
    </section>
  );
}
