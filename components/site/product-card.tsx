"use client";

import { ArrowRight } from "lucide-react";
import { productCardCopy } from "./copy/product-card";
import { useSiteLocale } from "./locale-provider";

export function ProductCard() {
  const { locale } = useSiteLocale();
  const copy = productCardCopy[locale];

  return (
    <article className="group overflow-hidden rounded-xl border border-border/80 bg-card shadow-card transition-shadow hover:shadow-lift">
      <div
        role="img"
        aria-label={copy.products.imageDescription}
        className="h-48 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=85')",
        }}
      />
      <div className="p-4">
        <div className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-wide text-primary">
          <span>{copy.products.category}</span>
          <span className="rounded-full bg-gold-soft px-2 py-0.5 text-gold-foreground">
            {copy.products.hybrid}
          </span>
        </div>
        <h3 className="mt-2 text-base font-semibold leading-snug">
          {copy.products.productName}
        </h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
          {copy.products.productDescription}
        </p>
        <a
          href="#contact"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-primary-deep"
        >
          {copy.products.details}
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
