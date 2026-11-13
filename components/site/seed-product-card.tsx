"use client";

import { CalendarDays, Clock3, Package, Search } from "lucide-react";
import { Dialog } from "@base-ui/react/dialog";
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
        className="relative h-52 shrink-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.02]"
        style={{ backgroundImage: `url('${product.image}')` }}
      >
        <div className="absolute inset-0 bg-primary-deep/10">
          <span className="absolute right-3 top-3 z-10 rounded-full border border-white/40 bg-primary-deep/95 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
            {details.comingSoon}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-wide text-primary">
          <span>{product.category}</span>
          <span className="rounded-full bg-brand-accent-soft px-2 py-0.5 text-brand-accent">
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
          <Dialog.Root>
            <Dialog.Trigger
              render={
                <Button
                  variant="outline"
                  className="h-9 rounded-lg border-primary/20 px-2 text-xs text-primary hover:bg-secondary"
                />
              }
            >
              <Search aria-hidden="true" />
              {details.viewDetails}
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/50 transition-opacity data-ending-style:opacity-0 data-starting-style:opacity-0" />
              <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 flex w-[calc(100vw-2rem)] max-w-sm -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-xl border border-border bg-card p-6 text-foreground shadow-xl">
                <div>
                  <Dialog.Title className="text-lg font-semibold">
                    {details.comingSoon}
                  </Dialog.Title>
                  <Dialog.Description className="mt-2 text-sm leading-6 text-muted-foreground">
                    {details.comingSoonMessage}
                  </Dialog.Description>
                </div>
                <Dialog.Close
                  render={
                    <Button className="self-end" />
                  }
                >
                  {details.close}
                </Dialog.Close>
              </Dialog.Popup>
            </Dialog.Portal>
          </Dialog.Root>
          <Button
            render={
              <a
                href={`mailto:md@asthaseeds.com?subject=${encodeURIComponent(product.name)}`}
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
