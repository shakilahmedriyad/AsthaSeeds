"use client";

import { Check, MapPin } from "lucide-react";
import { reachSectionCopy } from "./copy/reach-section";
import { useSiteLocale } from "./locale-provider";

export function ReachSection() {
  const { locale } = useSiteLocale();
  const copy = reachSectionCopy[locale];

  return (
    <section
      className="border-y border-border/70 bg-card px-5 py-16 sm:px-8 sm:py-20"
      aria-labelledby="reach-title"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {copy.reach.eyebrow}
          </p>
          <h2
            id="reach-title"
            className="mt-3 max-w-sm text-3xl font-semibold tracking-tight"
          >
            {copy.reach.title}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            {copy.reach.description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {copy.reach.divisions.map((division, index) => {
            const served = index < 7;

            return (
              <article
                key={division}
                className={`rounded-lg border p-3.5 ${
                  served
                    ? "border-primary/10 bg-secondary/80"
                    : "border-border bg-background"
                }`}
              >
                <p className="text-sm font-semibold">{division}</p>
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                  {served ? (
                    <>
                      <Check
                        className="size-3.5 text-primary"
                        aria-hidden="true"
                      />
                      {copy.reach.served}
                    </>
                  ) : (
                    <>
                      <MapPin
                        className="size-3.5 text-brand-accent"
                        aria-hidden="true"
                      />
                      {copy.reach.comingSoon}
                    </>
                  )}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
