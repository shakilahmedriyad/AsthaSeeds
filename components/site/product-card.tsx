"use client";

import Image from "next/image";
import type { HomepageProduct } from "./copy/product-card";

export function ProductCard({
  product,
  comingSoonLabel,
}: {
  product: HomepageProduct;
  comingSoonLabel: string;
}) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border/80 bg-card shadow-card transition-shadow hover:shadow-lift">
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <Image
          src={product.imageSrc}
          alt={product.imageDescription}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-primary-deep/10">
          <span className="rounded-full border border-white/40 bg-primary-deep/90 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            {comingSoonLabel}
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          {product.category}
        </p>
        <h3 className="mt-2 text-lg font-semibold leading-snug">
          {product.name}
        </h3>
      </div>
    </article>
  );
}
