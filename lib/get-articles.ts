import { createClient } from "@/lib/supabase/server";

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

export async function getPublishedArticles(): Promise<DbArticle[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("articles")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });
  return data ?? [];
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
  return data ?? [];
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
  return data ?? null;
}
