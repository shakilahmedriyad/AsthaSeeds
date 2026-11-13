"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { aboutIntroCopy } from "./copy/about-intro-section";
import { useSiteLocale } from "./locale-provider";

export function AboutIntroSection() {
  const { locale } = useSiteLocale();
  const copy = aboutIntroCopy[locale];

  return (
    <section
      className="motif bg-secondary px-5 py-9 sm:px-8 sm:py-11"
      aria-labelledby="about-page-title"
    >
      <div className="mx-auto max-w-6xl">
        <nav
          aria-label={copy.about.breadcrumbLabel}
          className="flex items-center gap-1.5 text-xs text-muted-foreground"
        >
          <Link className="transition-colors hover:text-primary" href="/">
            {copy.about.breadcrumbHome}
          </Link>
          <ChevronRight className="size-3.5" aria-hidden="true" />
          <span aria-current="page">{copy.about.breadcrumbCurrent}</span>
        </nav>
        <div className="mt-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {copy.about.companyName}
          </p>
          <h1
            id="about-page-title"
            className="mt-2 text-3xl font-semibold tracking-tight text-primary-deep sm:text-4xl"
          >
            {copy.about.title}
          </h1>
          <p className="mt-3 text-lg font-medium leading-7 text-foreground sm:text-xl sm:leading-8">
            {copy.about.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
