"use client";

import { useState } from "react";

export default function ShareButtons({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const [copied, setCopied] = useState(false);

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}`;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(url)}`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable; silently ignore.
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="font-mono text-xs uppercase tracking-widest text-slate">
        Share
      </span>

      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-teal-deep hover:text-teal-deep"
      >
        Facebook
      </a>

      <a
        href={xUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-teal-deep hover:text-teal-deep"
      >
        X / Twitter
      </a>

      <button
        onClick={handleCopy}
        className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-teal-deep hover:text-teal-deep"
      >
        {copied ? "Link copied!" : "Copy link (for Instagram)"}
      </button>
    </div>
  );
}
