import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <span className="inline-flex items-center rounded-full bg-mint px-4 py-1.5 font-mono text-xs font-medium text-teal-dark">
          Evidence-Based Health · Performance · Longevity
        </span>

        <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink md:text-7xl">
          Optimize
          <br />
          your health.
          <span className="cite-tag align-top text-sm">1</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
          Research-backed articles on peptides, TRT, longevity, nutrition, fitness,
          and recovery — every claim traced back to a study, not a supplement ad.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            href="/articles"
            className="rounded-full bg-teal-deep px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
          >
            Explore Articles
          </Link>
          <Link
            href="/category/longevity"
            className="rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-teal-deep hover:text-teal-deep"
          >
            Latest Research
          </Link>
        </div>
      </div>
    </section>
  );
}
