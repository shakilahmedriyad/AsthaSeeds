"use client";

import { Quote } from "lucide-react";
import { testimonialsSectionCopy } from "./copy/testimonials-section";
import { useSiteLocale } from "./locale-provider";

export function TestimonialsSection() {
  const { locale } = useSiteLocale();
  const copy = testimonialsSectionCopy[locale];

  return (
    <section
      className="bg-[#f2f0e7] px-5 py-20 sm:px-8 sm:py-24"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {copy.testimonials.eyebrow}
          </p>
          <h2
            id="testimonials-title"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-[2.1rem]"
          >
            {copy.testimonials.title}
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {copy.testimonials.items.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-xl border border-border/80 bg-card p-6 shadow-card"
            >
              <Quote className="size-5 text-brand-accent" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-6 text-foreground/90">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-border/80 pt-4">
                <p className="text-sm font-semibold">{testimonial.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {testimonial.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
