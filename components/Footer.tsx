import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-mint-soft">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="block font-display text-lg font-semibold text-ink">
              The Optimization Journal
            </span>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate">
              Evidence-based articles on peptides, hormone health, longevity, and
              performance. We read the studies, cite our sources, and skip the hype.
            </p>
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-teal-deep">
              Topics
            </span>
            <ul className="mt-4 space-y-2 text-sm text-slate">
              <li><Link href="/category/peptides" className="hover:text-teal-deep">Peptides</Link></li>
              <li><Link href="/category/trt-hormones" className="hover:text-teal-deep">TRT & Hormones</Link></li>
              <li><Link href="/category/longevity" className="hover:text-teal-deep">Longevity</Link></li>
              <li><Link href="/category/fitness-recovery" className="hover:text-teal-deep">Fitness & Recovery</Link></li>
            </ul>
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-teal-deep">
              Journal
            </span>
            <ul className="mt-4 space-y-2 text-sm text-slate">
              <li><Link href="/about" className="hover:text-teal-deep">About</Link></li>
              <li><Link href="/articles" className="hover:text-teal-deep">All Articles</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-slate md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} The Optimization Journal. For educational and research purposes only.</p>
          <p>Not medical advice. Consult a licensed physician before making health decisions.</p>
        </div>
      </div>
    </footer>
  );
}
