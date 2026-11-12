"use client";

import { ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactSectionCopy } from "./copy/contact-section";
import { useSiteLocale } from "./locale-provider";

export function ContactSection() {
  const { locale } = useSiteLocale();
  const copy = contactSectionCopy[locale];

  return (
    <section
      id="contact"
      className="motif motif-light scroll-mt-24 bg-primary px-5 py-12 text-primary-foreground sm:px-8 sm:py-14"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            {copy.contact.eyebrow}
          </p>
          <h2
            id="contact-title"
            className="mt-2 max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {copy.contact.title}
          </h2>
          <p className="mt-2 text-sm text-primary-foreground/75">
            {copy.contact.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            render={<a href="tel:+8801711000000" />}
            nativeButton={false}
            className="h-10 rounded-lg bg-gold px-4 text-gold-foreground hover:bg-gold/90"
          >
            <Phone aria-hidden="true" /> {copy.contact.call}
          </Button>
          <Button
            render={<a href="mailto:info@shonaliseeds.com.bd" />}
            nativeButton={false}
            variant="outline"
            className="h-10 rounded-lg border-white/30 bg-transparent px-4 text-white hover:bg-white/10 hover:text-white"
          >
            {copy.contact.email} <ChevronRight aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
