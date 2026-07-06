import Link from "next/link";
import { categories } from "@/lib/articles";

export default function CategoryStrip() {
  return (
    <section className="border-y border-line bg-mint-soft">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <span className="font-mono text-xs uppercase tracking-widest text-teal-deep">
          Browse by topic
        </span>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group rounded-2xl border border-line bg-white p-6 transition-all hover:border-teal-deep"
            >
              <h3 className="font-display text-lg font-semibold text-ink group-hover:text-teal-deep">
                {cat.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {cat.blurb}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
