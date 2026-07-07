import ArticleForm from "@/components/ArticleForm";

export default function NewArticlePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <span className="font-mono text-xs uppercase tracking-widest text-teal-deep">
        Admin
      </span>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
        New Article
      </h1>
      <ArticleForm mode="new" />
    </section>
  );
}
