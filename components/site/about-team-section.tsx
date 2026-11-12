"use client";

import { aboutTeamCopy } from "./copy/about-team-section";
import { useSiteLocale } from "./locale-provider";

const teamInitials = ["KH", "NJ", "SI", "RA", "SA", "MR", "TA", "FY"];

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
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {copy.about.teamEyebrow}
          </p>
          <h2
            id="team-title"
            className="mt-2 text-3xl font-semibold tracking-tight"
          >
            {copy.about.teamTitle}
          </h2>
        </div>

        <article className="mx-auto mt-8 grid max-w-2xl gap-5 rounded-xl border border-border/80 bg-card p-5 shadow-card sm:grid-cols-[112px_1fr] sm:items-center sm:p-6">
          <div
            aria-hidden="true"
            className="flex aspect-square items-center justify-center rounded-xl bg-secondary text-2xl font-semibold text-primary"
          >
            AR
          </div>
          <div>
            <h3 className="text-lg font-semibold">Md. Abdur Rahman</h3>
            <p className="mt-0.5 text-sm font-medium text-primary">
              {copy.about.leaderRole}
            </p>
            <blockquote className="mt-3 text-sm italic leading-6 text-muted-foreground">
              “{copy.about.leaderQuote}”
            </blockquote>
          </div>
        </article>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {copy.about.team.map((member, index) => (
            <article
              key={member.name}
              className="flex min-h-36 flex-col items-center rounded-xl border border-border/80 bg-card px-3 py-4 text-center shadow-card sm:min-h-40 sm:px-4 sm:py-5"
            >
              <span
                aria-hidden="true"
                className="flex size-12 items-center justify-center rounded-xl bg-secondary text-sm font-semibold text-primary"
              >
                {teamInitials[index]}
              </span>
              <h3 className="mt-3 text-sm font-semibold leading-snug">
                {member.name}
              </h3>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                {member.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
