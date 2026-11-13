"use client";

import Image from "next/image";
import { CircleUserRound, Mail, Quote } from "lucide-react";
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
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2
            id="team-title"
            className="text-3xl font-semibold tracking-tight sm:text-[2.1rem]"
          >
            {copy.about.title}
          </h2>
        </div>

        <div className="mt-8 grid gap-5">
          {copy.about.members.map((member) => (
            <article
              key={member.name}
              className="mx-auto grid w-full max-w-3xl gap-5 rounded-xl border border-border/80 bg-card p-5 shadow-card sm:grid-cols-[140px_1fr_2fr] sm:items-center sm:gap-8 sm:p-6"
            >
              <div className="relative mx-auto aspect-square w-full max-w-35 overflow-hidden rounded-xl bg-secondary sm:mx-0">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 140px"
                    className="object-cover"
                  />
                ) : (
                  <CircleUserRound
                    className="size-full p-5 text-muted-foreground"
                    aria-hidden="true"
                  />
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {member.role}
                </p>
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Mail className="size-4" aria-hidden="true" />
                    {member.email}
                  </a>
                )}
              </div>
              {member.quote && (
                <div className="border-t border-border/80 pt-4 sm:border-l sm:border-t-0 sm:py-1 sm:pl-6 sm:pt-1">
                  <Quote
                    className="size-5 text-brand-accent"
                    aria-hidden="true"
                  />
                  <blockquote className="mt-3 text-sm leading-6 text-foreground/90">
                    “{member.quote}”
                  </blockquote>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
