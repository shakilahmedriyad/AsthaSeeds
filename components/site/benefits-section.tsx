"use client";

import {
  FlaskConical,
  Headset,
  PackageCheck,
  ShieldCheck,
  Sprout,
  Tag,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { benefitsSectionCopy } from "./copy/benefits-section";
import { useSiteLocale } from "./locale-provider";

const benefitIcons: LucideIcon[] = [
  Sprout,
  ShieldCheck,
  FlaskConical,
  Tag,
  PackageCheck,
  Headset,
];

export function BenefitsSection() {
  const { locale } = useSiteLocale();
  const copy = benefitsSectionCopy[locale];

  return (
    <section
      id="about"
      className="motif scroll-mt-24 bg-background px-5 py-20 sm:px-8 sm:py-24"
      aria-labelledby="benefits-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {copy.benefits.eyebrow}
          </p>
          <h2
            id="benefits-title"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-[2.1rem]"
          >
            {copy.benefits.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {copy.benefits.description}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copy.benefits.items.map(({ title, description }, index) => {
            const Icon = benefitIcons[index];

            return (
              <article
                key={title}
                className="rounded-xl border border-border/80 bg-card p-5 shadow-card transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
