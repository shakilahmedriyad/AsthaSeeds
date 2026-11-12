"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { contactPageIntroCopy } from "./copy/contact-page-intro";
import { useSiteLocale } from "./locale-provider";

export function ContactPageIntro() {
  const { locale } = useSiteLocale();
  const copy = contactPageIntroCopy[locale];

  return (
    <section
      className="motif bg-secondary px-5 py-9 sm:px-8 sm:py-11"
      aria-labelledby="contact-page-title"
    >
      <div className="mx-auto max-w-6xl">
        <nav
          aria-label={copy.contactPage.breadcrumbLabel}
          className="flex items-center gap-1.5 text-xs text-muted-foreground"
        >
          <Link className="transition-colors hover:text-primary" href="/">
            {copy.contactPage.breadcrumbHome}
          </Link>
          <ChevronRight className="size-3.5" aria-hidden="true" />
          <span aria-current="page">{copy.contactPage.breadcrumbCurrent}</span>
        </nav>
        <h1
          id="contact-page-title"
          className="mt-2 text-3xl font-semibold tracking-tight text-primary-deep sm:text-4xl"
        >
          {copy.contactPage.title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          {copy.contactPage.description}
        </p>
      </div>
    </section>
  );
}
