import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/LogoutButton";

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="flex items-center justify-between">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-teal-deep">
            Admin
          </span>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
            Articles
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/new"
            className="rounded-full bg-teal-deep px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-dark"
          >
            + New Article
          </Link>
          <LogoutButton />
        </div>
      </div>

      <div className="mt-10 divide-y divide-line rounded-2xl border border-line">
        {articles && articles.length > 0 ? (
          articles.map((article) => (
            <div
              key={article.id}
              className="flex items-center justify-between gap-4 px-6 py-4"
            >
              <div>
                <p className="font-medium text-ink">{article.title}</p>
                <p className="mt-1 text-xs text-slate">
                  {article.category} ·{" "}
                  {article.published ? (
                    <span className="text-teal-deep">Published</span>
                  ) : (
                    <span className="text-amber-600">Draft</span>
                  )}
                </p>
              </div>
              <Link
                href={`/admin/edit/${article.id}`}
                className="shrink-0 rounded-full border border-line px-4 py-2 text-xs font-semibold text-ink hover:border-teal-deep hover:text-teal-deep"
              >
                Edit
              </Link>
            </div>
          ))
        ) : (
          <p className="px-6 py-10 text-center text-slate">
            No articles yet — click &ldquo;New Article&rdquo; to write your first one.
          </p>
        )}
      </div>
    </section>
  );
}
