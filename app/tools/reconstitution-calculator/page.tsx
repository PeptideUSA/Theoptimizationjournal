import ReconstitutionCalculator from "@/components/ReconstitutionCalculator";

export default function ReconstitutionCalculatorPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <span className="font-mono text-xs uppercase tracking-widest text-teal-deep">
        Tool
      </span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-ink">
        Reconstitution Calculator
      </h1>
      <p className="mt-3 max-w-2xl text-slate">
        Figure out concentration and draw volume when reconstituting a
        lyophilized vial with bacteriostatic water. Enter the vial amount, how
        much diluent you're using, and your desired amount per dose.
      </p>

      <div className="mt-10">
        <ReconstitutionCalculator />
      </div>

      <div className="mt-10 rounded-2xl border border-line bg-mint-soft p-6 text-sm text-slate">
        This calculator performs unit conversion math only — it does not
        recommend a dose. All figures should be independently verified before
        use. For laboratory and research purposes only; not medical advice.
      </div>
    </section>
  );
}
