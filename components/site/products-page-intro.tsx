"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { productsPageIntroCopy } from "./copy/products-page-intro";
import { useSiteLocale } from "./locale-provider";

export function ProductsPageIntro() {
  const { locale } = useSiteLocale();
  const copy = productsPageIntroCopy[locale];

  return (
    <section
      className="motif bg-secondary px-5 py-9 sm:px-8 sm:py-11"
      aria-labelledby="products-page-title"
    >
      <div className="mx-auto max-w-6xl">
        <nav
          aria-label={copy.productsPage.breadcrumbLabel}
          className="flex items-center gap-1.5 text-xs text-muted-foreground"
        >
          <Link className="transition-colors hover:text-primary" href="/">
            {copy.productsPage.breadcrumbHome}
          </Link>
          <ChevronRight className="size-3.5" aria-hidden="true" />
          <span aria-current="page">{copy.productsPage.breadcrumbCurrent}</span>
        </nav>
        <h1
          id="products-page-title"
          className="mt-2 text-3xl font-semibold tracking-tight text-primary-deep sm:text-4xl"
        >
          {copy.productsPage.title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          {copy.productsPage.description}
        </p>
      </div>
    </section>
  );
}
