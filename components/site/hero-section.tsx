"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteLocale } from "./locale-provider";

export function HeroSection() {
  const { copy } = useSiteLocale();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-primary-deep bg-cover bg-center"
      aria-labelledby="hero-title"
      style={{
        backgroundImage:
          "linear-gradient(180deg, oklch(0.31 0.065 155 / 55%), oklch(0.31 0.065 155 / 88%)), linear-gradient(90deg, oklch(0.31 0.065 155 / 66%), transparent 85%), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=85')",
      }}
    >
      <div className="mx-auto flex min-h-135 max-w-6xl items-center px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-primary-deep/30 px-3 py-1.5 text-xs font-medium tracking-wide text-white/95">
            <span className="size-1.5 rounded-full bg-gold" />
            {copy.hero.badge}
          </span>
          <h1
            id="hero-title"
            className="mt-6 max-w-xl text-4xl font-semibold leading-[1.25] tracking-[-0.02em] sm:text-5xl md:text-[3.55rem]"
          >
            {copy.hero.title}
          </h1>
          <p className="mt-4 font-bn text-lg text-gold sm:text-xl">
            {copy.hero.subtitle}
          </p>
          <p className="mt-4 max-w-lg text-base leading-7 text-white/80">
            {copy.hero.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              render={<a href="#products" />}
              nativeButton={false}
              className="h-11 rounded-lg bg-gold px-5 text-gold-foreground shadow-soft hover:bg-gold/90"
            >
              {copy.hero.viewSeed} <ArrowRight aria-hidden="true" />
            </Button>
            <Button
              render={<a href="#contact" />}
              nativeButton={false}
              variant="outline"
              className="h-11 rounded-lg border-white/40 bg-white/5 px-5 text-white hover:bg-white/15 hover:text-white"
            >
              {copy.hero.talkToTeam}
            </Button>
          </div>
          <a
            href="#about"
            className="mt-14 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-white/75 transition-colors hover:text-white"
          >
            {copy.hero.aboutLink}
            <ArrowDown className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
