"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { galleryPageCopy } from "./copy/gallery-page";
import { useSiteLocale } from "./locale-provider";

export function GalleryPage() {
  const { locale } = useSiteLocale();
  const copy = galleryPageCopy[locale].gallery;

  return (
    <>
      <section
        className="motif motif-light bg-secondary/60 px-5 py-8 sm:px-8 sm:py-10"
        aria-labelledby="gallery-title"
      >
        <div className="mx-auto max-w-6xl">
          <nav
            aria-label={copy.breadcrumbLabel}
            className="flex items-center gap-2 text-xs text-muted-foreground"
          >
            <Link href="/" className="transition-colors hover:text-primary">
              {copy.breadcrumbHome}
            </Link>
            <ArrowRight className="size-3" aria-hidden="true" />
            <span aria-current="page">{copy.breadcrumbCurrent}</span>
          </nav>
          <h1
            id="gallery-title"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {copy.title}
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            {copy.description}
          </p>
        </div>
      </section>

      <section className="flex-1 bg-[#faf8f2] px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <span className="mr-2 inline-block size-1.5 rounded-full bg-brand-accent align-middle" />
            {copy.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            {copy.featureTitle}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {copy.featureDescription}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {copy.photos.map((photo) => (
              <a
                key={photo.src}
                href={photo.src}
                target="_blank"
                rel="noreferrer"
                aria-label={`${copy.openPhoto}: ${photo.alt}`}
                className={`group relative block h-80 overflow-hidden rounded-xl bg-secondary shadow-card sm:h-72 ${
                  photo.layout === "wide" ? "lg:col-span-2" : ""
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={
                    photo.layout === "wide"
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-full bg-white/90 text-foreground shadow-sm transition-colors group-hover:bg-white">
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-10 text-sm font-medium text-white">
                  {photo.caption}
                </span>
              </a>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            {copy.photoHint}
          </p>
        </div>
      </section>
    </>
  );
}
