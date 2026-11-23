import { createClient } from "@/lib/supabase/server";
import { localArticles } from "@/lib/local-articles";

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

function byNewest(a: DbArticle, b: DbArticle) {
  return Date.parse(b.created_at) - Date.parse(a.created_at);
}

function mergeArticles(remote: DbArticle[], category?: string): DbArticle[] {
  const slugs = new Set(remote.map((article) => article.slug));
  const extras = localArticles.filter((article) => {
    if (!article.published || slugs.has(article.slug)) return false;
    if (category && article.category !== category) return false;
    return true;
  });
  return [...remote, ...extras].sort(byNewest);
}

export async function getPublishedArticles(): Promise<DbArticle[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("articles")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });
  return mergeArticles(data ?? []);
}

export async function getArticlesByCategory(
  category: string
): Promise<DbArticle[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("articles")
    .select("*")
    .eq("published", true)
    .eq("category", category)
    .order("created_at", { ascending: false });
  return mergeArticles(data ?? [], category);
}

export async function getArticleBySlug(
  slug: string
): Promise<DbArticle | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("articles")
    .select("*")
    .eq("published", true)
    .eq("slug", slug)
    .single();
  if (data) return data;
  return (
    localArticles.find((article) => article.published && article.slug === slug) ??
    null
  );
}
