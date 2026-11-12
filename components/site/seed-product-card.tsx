"use client";

import { CalendarDays, Clock3, Package, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { productCatalogCopy } from "./copy/product-catalog-section";
import { seedProductCardCopy } from "./copy/seed-product-card";
import { useSiteLocale } from "./locale-provider";

type SeedProduct =
  (typeof productCatalogCopy)[keyof typeof productCatalogCopy]["productsPage"]["products"][number];

export function SeedProductCard({ product }: { product: SeedProduct }) {
  const { locale } = useSiteLocale();
  const details = seedProductCardCopy[locale].productsPage;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/80 bg-card shadow-card transition-shadow hover:shadow-lift">
      <div
        role="img"
        aria-label={`${product.imageDescription}: ${product.name}`}
        className="h-52 shrink-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.02]"
        style={{ backgroundImage: `url('${product.image}')` }}
      />
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-wide text-primary">
          <span>{details.category}</span>
          <span className="rounded-full bg-gold-soft px-2 py-0.5 text-gold-foreground">
            {product.variety}
          </span>
        </div>
        <h2 className="mt-2 text-base font-semibold leading-snug">
          {product.name}
        </h2>
        <p className="mt-1.5 min-h-10 text-sm leading-5 text-muted-foreground">
          {product.description}
        </p>
        <dl className="mt-3 space-y-2 text-xs text-muted-foreground">
          <div className="flex items-start gap-2">
            <CalendarDays
              className="mt-0.5 size-3.5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <dt className="sr-only">{details.season}</dt>
            <dd>
              <span className="font-medium text-foreground">
                {details.season}:
              </span>{" "}
              {product.season}
            </dd>
          </div>
          <div className="flex items-start gap-2">
            <Clock3
              className="mt-0.5 size-3.5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <dt className="sr-only">{details.maturity}</dt>
            <dd>
              <span className="font-medium text-foreground">
                {details.maturity}:
              </span>{" "}
              {product.maturity}
            </dd>
          </div>
          <div className="flex items-start gap-2">
            <Package
              className="mt-0.5 size-3.5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <dt className="sr-only">{details.pack}</dt>
            <dd>
              <span className="font-medium text-foreground">
                {details.pack}:
              </span>{" "}
              {product.pack}
            </dd>
          </div>
        </dl>
        <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
          <Button
            render={<Link href="/#contact" />}
            nativeButton={false}
            variant="outline"
            className="h-9 rounded-lg border-primary/20 px-2 text-xs text-primary hover:bg-secondary"
          >
            <Search aria-hidden="true" />
            {details.viewDetails}
          </Button>
          <Button
            render={
              <a
                href={`mailto:info@shonaliseeds.com.bd?subject=${encodeURIComponent(product.name)}`}
              />
            }
            nativeButton={false}
            className="h-9 rounded-lg bg-primary px-2 text-xs text-primary-foreground hover:bg-primary/90"
          >
            {details.inquire}
          </Button>
        </div>
      </div>
    </article>
  );
}
