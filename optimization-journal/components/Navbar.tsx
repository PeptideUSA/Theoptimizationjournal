import Link from "next/link";

const navLinks = [
  { label: "Peptides", href: "/category/peptides" },
  { label: "TRT & Hormones", href: "/category/trt-hormones" },
  { label: "Longevity", href: "/category/longevity" },
  { label: "Fitness", href: "/category/fitness-recovery" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group">
          <span className="block font-display text-xl font-semibold tracking-tight text-ink">
            The Optimization Journal
          </span>
          <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-teal-deep">
            Evidence-Based Health · Performance · Longevity
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate transition-colors hover:text-teal-deep"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
