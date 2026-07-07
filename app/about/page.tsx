export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <span className="font-mono text-xs uppercase tracking-widest text-teal-deep">
        About
      </span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-ink">
        Why this journal exists
      </h1>
      <div className="mt-6 space-y-6 leading-relaxed text-slate">
        <p>
          The Optimization Journal covers peptides, hormone health, longevity, and
          performance — the way the research actually reads, not the way it gets
          summarized in a 15-second video. Every article links back to primary
          sources so you can check our work.
        </p>
        <p>
          This is a research and education resource. It does not sell anything,
          diagnose anything, or replace a conversation with a licensed physician.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-line bg-mint-soft p-6">
        <span className="font-mono text-xs uppercase tracking-widest text-teal-deep">
          Get in touch
        </span>
        <p className="mt-2 text-sm text-slate">
          Questions, corrections, or press &amp; partnership inquiries:
        </p>
        <a
          href="mailto:optimize@theoptimizationjournal.com"
          className="mt-1 inline-block font-medium text-teal-deep hover:underline"
        >
          optimize@theoptimizationjournal.com
        </a>
      </div>
    </section>
  );
}
