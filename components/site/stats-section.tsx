"use client";

import { statsSectionCopy } from "./copy/stats-section";
import { useSiteLocale } from "./locale-provider";

export function StatsSection() {
  const { locale } = useSiteLocale();
  const copy = statsSectionCopy[locale];

  return (
    <section
      aria-label={copy.stats.label}
      className="border-b border-border/70 bg-card"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-border/70">
        {copy.stats.items.map((stat) => (
          <div key={stat.label} className="px-5 py-6 text-center sm:py-7">
            <p className="text-2xl font-semibold tracking-tight text-primary">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
