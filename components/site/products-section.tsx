"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SeedProductCard } from "./seed-product-card";
import { productsSectionCopy } from "./copy/products-section";
import { productCatalogCopy } from "./copy/product-catalog-section";
import { useSiteLocale } from "./locale-provider";

export function ProductsSection() {
  const { locale } = useSiteLocale();
  const copy = productsSectionCopy[locale];
  const products = productCatalogCopy[locale].productsPage.products;

  return (
    <section
      id="products"
      className="scroll-mt-24 bg-[#f2f0e7] px-5 py-20 sm:px-8 sm:py-24"
      aria-labelledby="products-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              {copy.products.eyebrow}
            </p>
            <h2
              id="products-title"
              className="mt-3 text-3xl font-semibold tracking-tight sm:text-[2.1rem]"
            >
              {copy.products.title}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              {copy.products.description}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-secondary"
          >
            {copy.products.seeAll}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {products.map((product) => (
            <SeedProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
