import { localArticles } from "@/content/articles";
import { createClient } from "@/lib/supabase/server";
import { connection } from "next/server";

export type DbArticle = {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string | null;
  body: string;
  published: boolean;
  created_at: string;
  updated_at: string;
};

function canQuerySupabase() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

function byNewest(articles: DbArticle[]) {
  return [...articles].sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}

// File-backed articles override a database row with the same slug.
function mergeArticles(remote: DbArticle[], local: DbArticle[]) {
  const bySlug = new Map<string, DbArticle>();
  for (const article of remote) bySlug.set(article.slug, article);
  for (const article of local) {
    if (article.published) bySlug.set(article.slug, article);
  }
  return byNewest([...bySlug.values()]);
}

export async function getPublishedArticles(): Promise<DbArticle[]> {
  await connection();
  if (!canQuerySupabase()) return byNewest(localArticles.filter((a) => a.published));

  const supabase = await createClient();
  const { data } = await supabase
    .from("articles")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });
  return mergeArticles(data ?? [], localArticles);
}

export async function getArticlesByCategory(
  category: string
): Promise<DbArticle[]> {
  await connection();
  const local = localArticles.filter(
    (article) => article.published && article.category === category
  );
  if (!canQuerySupabase()) return byNewest(local);

  const supabase = await createClient();
  const { data } = await supabase
    .from("articles")
    .select("*")
    .eq("published", true)
    .eq("category", category)
    .order("created_at", { ascending: false });
  return mergeArticles(data ?? [], local);
}

export async function getArticleBySlug(
  slug: string
): Promise<DbArticle | null> {
  await connection();
  const local = localArticles.find(
    (article) => article.published && article.slug === slug
  );
  if (local) return local;
  if (!canQuerySupabase()) return null;

  const supabase = await createClient();
  const { data } = await supabase
    .from("articles")
    .select("*")
    .eq("published", true)
    .eq("slug", slug)
    .maybeSingle();
  return data ?? null;
}
