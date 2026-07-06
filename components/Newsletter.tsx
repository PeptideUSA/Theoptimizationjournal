export default function Newsletter() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl bg-teal-deep px-8 py-14 text-center md:px-16">
        <span className="font-mono text-xs uppercase tracking-widest text-mint">
          Free research guide
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
          Get the Peptide Research Guide
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mint/90">
          A plain-English breakdown of the most-studied research peptides, delivered
          to your inbox. No spam, just the studies.
        </p>
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="you@email.com"
            className="w-full flex-1 rounded-full border-0 px-5 py-3 text-sm text-ink outline-none ring-1 ring-white/20 placeholder:text-slate focus:ring-2 focus:ring-mint"
          />
          <button
            type="submit"
            className="rounded-full bg-mint px-6 py-3 text-sm font-semibold text-teal-dark transition-colors hover:bg-white"
          >
            Send it to me
          </button>
        </form>
      </div>
    </section>
  );
}
