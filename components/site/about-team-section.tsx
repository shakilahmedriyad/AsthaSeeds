"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { aboutTeamCopy } from "./copy/about-team-section";
import { useSiteLocale } from "./locale-provider";

export function AboutTeamSection() {
  const { locale } = useSiteLocale();
  const copy = aboutTeamCopy[locale];

  return (
    <section
      className="bg-[#f2f0e7] px-5 py-16 sm:px-8 sm:py-20"
      aria-labelledby="team-title"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2
            id="team-title"
            className="mt-2 text-3xl font-semibold tracking-tight"
          >
            {copy.about.chairmanTitle}
          </h2>
        </div>

        <article className="mx-auto mt-8 grid max-w-3xl gap-6 rounded-xl border border-border/80 bg-card p-5 shadow-card sm:grid-cols-[180px_1fr] sm:items-center sm:p-6">
          <div className="relative mx-auto aspect-square w-full max-w-45 overflow-hidden rounded-xl bg-secondary sm:mx-0">
            <Image
              src="/ariful-profile.png"
              alt={copy.about.chairmanImageAlt}
              fill
              sizes="(max-width: 640px) 100vw, 180px"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Ariful Hasan</h3>
            <p className="mt-0.5 text-sm font-medium text-primary">
              {copy.about.chairmanRole}
            </p>
            <a
              href="mailto:md@asthaseeds.com"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <Mail className="size-4" aria-hidden="true" />
              md@asthaseeds.com
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
