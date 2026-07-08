"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const supabase = createClient();
    const { error } = await supabase
      .from("subscribers")
      .insert({ email: email.trim().toLowerCase() });

    if (error) {
      setStatus("error");
      setErrorMessage(
        error.code === "23505"
          ? "That email is already subscribed."
          : "Something went wrong. Please try again."
      );
      return;
    }

    setStatus("success");
    setEmail("");
  }

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
          to your inbox — plus our monthly newsletter with new research and new
          articles. No spam, unsubscribe anytime.
        </p>

        {status === "success" ? (
          <p className="mx-auto mt-8 max-w-md rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white">
            You&rsquo;re in. Check your inbox soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full flex-1 rounded-full border-0 px-5 py-3 text-sm text-ink outline-none ring-1 ring-white/20 placeholder:text-slate focus:ring-2 focus:ring-mint"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-mint px-6 py-3 text-sm font-semibold text-teal-dark transition-colors hover:bg-white disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send it to me"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-sm text-red-200">{errorMessage}</p>
        )}
      </div>
    </section>
  );
}

