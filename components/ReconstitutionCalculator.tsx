"use client";

import { useMemo, useState } from "react";

export default function ReconstitutionCalculator() {
  const [vialAmount, setVialAmount] = useState("5");
  const [vialUnit, setVialUnit] = useState<"mg" | "mcg">("mg");
  const [bacWater, setBacWater] = useState("2");
  const [desiredDose, setDesiredDose] = useState("250");
  const [doseUnit, setDoseUnit] = useState<"mcg" | "mg">("mcg");

  const results = useMemo(() => {
    const vial = parseFloat(vialAmount);
    const water = parseFloat(bacWater);
    const dose = parseFloat(desiredDose);

    if (!vial || !water || !dose || vial <= 0 || water <= 0 || dose <= 0) {
      return null;
    }

    // Normalize everything to mcg for the math
    const vialMcg = vialUnit === "mg" ? vial * 1000 : vial;
    const doseMcg = doseUnit === "mg" ? dose * 1000 : dose;

    const concentrationMcgPerMl = vialMcg / water;
    const volumeNeededMl = doseMcg / concentrationMcgPerMl;
    const units100 = volumeNeededMl * 100; // U-100 insulin syringe units
    const dosesPerVial = vialMcg / doseMcg;

    return {
      concentrationMcgPerMl,
      concentrationMgPerMl: concentrationMcgPerMl / 1000,
      volumeNeededMl,
      units100,
      dosesPerVial,
    };
  }, [vialAmount, vialUnit, bacWater, desiredDose, doseUnit]);

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-2xl border border-line bg-white p-6">
        <h2 className="font-display text-lg font-semibold text-ink">
          Enter your numbers
        </h2>

        <div className="mt-5 flex flex-col gap-5">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              Vial amount
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                inputMode="decimal"
                value={vialAmount}
                onChange={(e) => setVialAmount(e.target.value)}
                className="w-full rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-teal-deep focus:ring-1 focus:ring-teal-deep"
              />
              <select
                value={vialUnit}
                onChange={(e) => setVialUnit(e.target.value as "mg" | "mcg")}
                className="rounded-lg border border-line px-3 py-2.5 text-sm outline-none focus:border-teal-deep focus:ring-1 focus:ring-teal-deep"
              >
                <option value="mg">mg</option>
                <option value="mcg">mcg</option>
              </select>
            </div>
            <p className="mt-1 text-xs text-slate">
              The total amount of peptide in the vial, per the label or Certificate of Analysis.
            </p>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              Bacteriostatic water added
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                inputMode="decimal"
                value={bacWater}
                onChange={(e) => setBacWater(e.target.value)}
                className="w-full rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-teal-deep focus:ring-1 focus:ring-teal-deep"
              />
              <span className="flex items-center rounded-lg border border-line bg-mint-soft px-3 text-sm text-slate">
                mL
              </span>
            </div>
            <p className="mt-1 text-xs text-slate">
              How much diluent you're reconstituting the vial with.
            </p>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              Desired amount per dose
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                inputMode="decimal"
                value={desiredDose}
                onChange={(e) => setDesiredDose(e.target.value)}
                className="w-full rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-teal-deep focus:ring-1 focus:ring-teal-deep"
              />
              <select
                value={doseUnit}
                onChange={(e) => setDoseUnit(e.target.value as "mcg" | "mg")}
                className="rounded-lg border border-line px-3 py-2.5 text-sm outline-none focus:border-teal-deep focus:ring-1 focus:ring-teal-deep"
              >
                <option value="mcg">mcg</option>
                <option value="mg">mg</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-teal-deep p-6 text-white">
        <h2 className="font-display text-lg font-semibold">Results</h2>

        {results ? (
          <div className="mt-5 flex flex-col gap-5">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-mint">
                Concentration
              </span>
              <p className="mt-1 font-mono text-2xl font-semibold">
                {results.concentrationMcgPerMl.toLocaleString(undefined, {
                  maximumFractionDigits: 1,
                })}{" "}
                mcg/mL
              </p>
              <p className="text-sm text-mint/80">
                ({results.concentrationMgPerMl.toLocaleString(undefined, {
                  maximumFractionDigits: 3,
                })}{" "}
                mg/mL)
              </p>
            </div>

            <div className="border-t border-white/20 pt-5">
              <span className="font-mono text-xs uppercase tracking-widest text-mint">
                Volume for your dose
              </span>
              <p className="mt-1 font-mono text-2xl font-semibold">
                {results.volumeNeededMl.toLocaleString(undefined, {
                  maximumFractionDigits: 3,
                })}{" "}
                mL
              </p>
              <p className="text-sm text-mint/80">
                {results.units100.toLocaleString(undefined, {
                  maximumFractionDigits: 1,
                })}{" "}
                units on a U-100 insulin syringe
              </p>
            </div>

            <div className="border-t border-white/20 pt-5">
              <span className="font-mono text-xs uppercase tracking-widest text-mint">
                Doses per vial
              </span>
              <p className="mt-1 font-mono text-2xl font-semibold">
                {results.dosesPerVial.toLocaleString(undefined, {
                  maximumFractionDigits: 1,
                })}
              </p>
            </div>
          </div>
        ) : (
          <p className="mt-5 text-mint/80">
            Enter numbers on the left to see your results.
          </p>
        )}
      </div>
    </div>
  );
}
