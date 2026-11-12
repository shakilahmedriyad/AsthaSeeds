"use client";

import { FileCheck2 } from "lucide-react";
import { credentialsSectionCopy } from "./copy/credentials-section";
import { useSiteLocale } from "./locale-provider";

export function CredentialsSection() {
  const { locale } = useSiteLocale();
  const copy = credentialsSectionCopy[locale];

  return (
    <section
      className="bg-background px-5 py-16 sm:px-8 sm:py-20"
      aria-labelledby="credentials-title"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {copy.about.credentialsEyebrow}
          </p>
          <h2
            id="credentials-title"
            className="mt-2 text-3xl font-semibold tracking-tight"
          >
            {copy.about.credentialsTitle}
          </h2>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {copy.about.credentials.map((credential) => (
            <article
              key={credential.title}
              className="flex min-h-20 items-start gap-3 rounded-lg border border-dashed border-border bg-card p-4"
            >
              <FileCheck2
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-sm font-semibold leading-snug">
                  {credential.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {credential.reference}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
