"use client";

import Image from "next/image";
import { aboutStoryCopy } from "./copy/about-story-section";
import { useSiteLocale } from "./locale-provider";

export function AboutStorySection() {
  const { locale } = useSiteLocale();
  const copy = aboutStoryCopy[locale].about;

  return (
    <>
      <section
        className="bg-background px-5 py-12 sm:px-8 sm:py-16"
        aria-labelledby="about-story-title"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              {copy.storyEyebrow}
            </p>
            <h2
              id="about-story-title"
              className="mt-2 text-2xl font-semibold tracking-tight text-primary-deep sm:text-3xl"
            >
              {copy.storyTitle}
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
              <p>{copy.introduction}</p>
              <p>{copy.collaboration}</p>
            </div>

            <h3 className="mt-7 text-sm font-semibold text-foreground">
              {copy.productInterestsLabel}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {copy.productInterests.map((interest) => (
                <li
                  key={interest}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-primary-deep"
                >
                  {interest}
                </li>
              ))}
            </ul>

            <div className="mt-7 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
              <p>{copy.partnerships}</p>
              <p>{copy.localValue}</p>
            </div>
          </div>

          <figure className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-secondary shadow-card lg:max-w-none">
            <Image
              src="/photo-1650105930370-e26f34bc0260.avif"
              alt={copy.farmerImageAlt}
              fill
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      <section
        className="bg-secondary/60 px-5 py-12 sm:px-8 sm:py-16"
        aria-labelledby="about-vision-title"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-secondary shadow-card">
            <Image
              src="/photo-1787684607223-e7544fd89bb7.avif"
              alt={copy.visionImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </figure>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              {copy.visionEyebrow}
            </p>
            <h2
              id="about-vision-title"
              className="mt-2 text-2xl font-semibold tracking-tight text-primary-deep sm:text-3xl"
            >
              {copy.visionTitle}
            </h2>
            <p className="mt-5 text-lg font-medium leading-8 text-foreground">
              {copy.visionStatement}
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              {copy.visionDescription}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
