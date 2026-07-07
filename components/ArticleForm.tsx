"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const CATEGORIES = [
  "Peptides",
  "TRT & Hormones",
  "Longevity",
  "Fitness & Recovery",
];

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

type ArticleFormProps = {
  mode: "new" | "edit";
  articleId?: string;
  initial?: {
    title: string;
    category: string;
    excerpt: string;
    body: string;
    published: boolean;
  };
};

export default function ArticleForm({ mode, articleId, initial }: ArticleFormProps) {
  const router = useRouter();
  const [title, setTitle] = useState(initial?.title ?? "");
  const [category, setCategory] = useState(initial?.category ?? CATEGORIES[0]);
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [body, setBody] = useState(initial?.body ?? "");
  const [published, setPublished] = useState(initial?.published ?? true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const supabase = createClient();

    if (mode === "new") {
      const slug = slugify(title);
      const { error } = await supabase.from("articles").insert({
        slug,
        title,
        category,
        excerpt,
        body,
        published,
      });
      setSaving(false);
      if (error) {
        setError(error.message);
        return;
      }
    } else {
      const { error } = await supabase
        .from("articles")
        .update({
          title,
          category,
          excerpt,
          body,
          published,
          updated_at: new Date().toISOString(),
        })
        .eq("id", articleId);
      setSaving(false);
      if (error) {
        setError(error.message);
        return;
      }
    }

    router.push("/admin");
    router.refresh();
  }

  async function handleDelete() {
    if (!articleId) return;
    if (!confirm("Delete this article? This can't be undone.")) return;

    const supabase = createClient();
    setSaving(true);
    const { error } = await supabase.from("articles").delete().eq("id", articleId);
    setSaving(false);
    if (error) {
      setError(error.message);
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-teal-deep focus:ring-1 focus:ring-teal-deep"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-teal-deep focus:ring-1 focus:ring-teal-deep"
        >
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">
          Excerpt <span className="font-normal text-slate">(short summary, shown on cards)</span>
        </label>
        <textarea
          required
          rows={2}
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="w-full rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-teal-deep focus:ring-1 focus:ring-teal-deep"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Body</label>
        <textarea
          required
          rows={16}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full rounded-lg border border-line px-4 py-2.5 text-sm leading-relaxed outline-none focus:border-teal-deep focus:ring-1 focus:ring-teal-deep"
          placeholder="Write the full article here. Separate paragraphs with a blank line."
        />
      </div>

      <label className="flex items-center gap-2 text-sm text-ink">
        <input
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
          className="h-4 w-4 rounded border-line text-teal-deep focus:ring-teal-deep"
        />
        Published (visible on the live site)
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="mt-2 flex items-center justify-between">
        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-teal-deep px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark disabled:opacity-60"
        >
          {saving ? "Saving…" : mode === "new" ? "Publish" : "Save changes"}
        </button>

        {mode === "edit" && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={saving}
            className="text-sm font-medium text-red-600 hover:underline"
          >
            Delete article
          </button>
        )}
      </div>
    </form>
  );
}
