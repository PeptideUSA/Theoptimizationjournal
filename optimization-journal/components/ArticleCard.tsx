import Link from "next/link";
import type { Article } from "@/lib/articles";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:border-teal-deep hover:shadow-[0_4px_24px_rgba(15,94,78,0.08)]"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-widest text-teal-deep">
          {article.category}
        </span>
        <span className="cite-tag">{article.citations}</span>
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-teal-deep">
        {article.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
        {article.excerpt}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-xs text-slate">
        <span>{article.readTime}</span>
        <span>
          {new Date(article.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>
    </Link>
  );
}
