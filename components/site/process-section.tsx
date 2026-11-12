"use client";

import { processSectionCopy } from "./copy/process-section";
import { useSiteLocale } from "./locale-provider";

export function ProcessSection() {
  const { locale } = useSiteLocale();
  const copy = processSectionCopy[locale];

  return (
    <section
      className="motif px-5 py-20 sm:px-8 sm:py-24"
      aria-labelledby="process-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {copy.process.eyebrow}
          </p>
          <h2
            id="process-title"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-[2.1rem]"
          >
            {copy.process.title}
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {copy.process.items.map((step) => (
            <article
              key={step.number}
              className="rounded-xl border border-border/80 bg-card p-6 shadow-card"
            >
              <span className="text-3xl font-semibold tracking-tight text-gold">
                {step.number}
              </span>
              <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
