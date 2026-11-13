"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { SeedProductCard } from "./seed-product-card";
import { productCatalogCopy } from "./copy/product-catalog-section";
import { useSiteLocale } from "./locale-provider";

export function ProductCatalogSection() {
  const { locale } = useSiteLocale();
  const copy = productCatalogCopy[locale];
  const [query, setQuery] = useState("");
  const catalog = copy.productsPage;

  const filteredProducts = useMemo(() => {
    const searchTerm = query.trim().toLocaleLowerCase(locale);

    if (!searchTerm) {
      return catalog.products;
    }

    return catalog.products.filter((product) =>
      [
        product.name,
        product.variety,
        product.description,
        product.season,
        product.maturity,
        product.pack,
      ]
        .join(" ")
        .toLocaleLowerCase(locale)
        .includes(searchTerm),
    );
  }, [catalog.products, locale, query]);

  return (
    <section
      className="bg-background px-5 py-8 sm:px-8 sm:py-10"
      aria-label={catalog.title}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
              <span className="size-1.5 rounded-full bg-brand-accent-on-dark" />
              {catalog.category}
            </span>
            <span className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
              {catalog.seedCount(filteredProducts.length)}
            </span>
          </div>
          <label className="relative block w-full sm:max-w-xs">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <span className="sr-only">{catalog.searchLabel}</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={catalog.searchPlaceholder}
              className="h-10 w-full rounded-full border border-input bg-card pl-9 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
            />
          </label>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="mt-5 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <SeedProductCard key={product.name} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-xl border border-dashed border-border bg-card px-5 py-12 text-center">
            <p className="text-sm text-muted-foreground">{catalog.noResults}</p>
            <Button
              type="button"
              variant="outline"
              className="mt-4"
              onClick={() => setQuery("")}
            >
              {catalog.clearSearch}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
