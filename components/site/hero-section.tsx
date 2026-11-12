"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { heroCopy } from "./copy/hero";
import { useSiteLocale } from "./locale-provider";

const SLIDE_INTERVAL = 5000;

export function HeroSection() {
  const { locale } = useSiteLocale();
  const copy = heroCopy[locale];
  const [api, setApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = copy.hero.slides;

  const handleSelect = useCallback(() => {
    if (api) {
      setActiveSlide(api.selectedScrollSnap());
    }
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api, handleSelect]);

  useEffect(() => {
    if (!api || isPaused || slides.length < 2) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      if (!document.hidden) {
        api.scrollNext();
      }
    }, SLIDE_INTERVAL);

    return () => window.clearInterval(timer);
  }, [api, isPaused, slides.length]);

  return (
    <section
      id="home"
      aria-label={copy.hero.carouselLabel}
      className="relative isolate"
    >
      <Carousel
        setApi={setApi}
        opts={{ loop: true, duration: 55 }}
        className="overflow-hidden"
      >
        <CarouselContent className="ml-0">
          {slides.map((slide, index) => (
            <CarouselItem
              key={slide.title}
              className="min-h-135 overflow-hidden bg-primary-deep bg-cover bg-center pl-0"
              aria-label={copy.hero.slideLabel(index + 1, slides.length)}
              aria-description={slide.imageDescription}
              style={{
                backgroundImage: `linear-gradient(180deg, oklch(0.31 0.065 155 / 55%), oklch(0.31 0.065 155 / 88%)), linear-gradient(90deg, oklch(0.31 0.065 155 / 66%), transparent 85%), url('${slide.image}')`,
              }}
            >
              <div className="mx-auto flex min-h-135 max-w-6xl items-center px-5 py-20 sm:px-8 sm:py-24">
                <div className="max-w-2xl text-primary-foreground">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-primary-deep/30 px-3 py-1.5 text-xs font-medium tracking-wide text-white/95">
                    <span className="size-1.5 rounded-full bg-gold" />
                    {slide.badge}
                  </span>
                  <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl md:text-[3.55rem]">
                    {slide.title}
                  </h1>
                  <p className="mt-4 font-bn text-lg text-gold sm:text-xl">
                    {slide.subtitle}
                  </p>
                  <p className="mt-4 max-w-lg text-base leading-7 text-white/80">
                    {slide.description}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button
                      render={<a href="/products" />}
                      nativeButton={false}
                      className="h-11 rounded-lg bg-gold px-5 text-gold-foreground shadow-soft hover:bg-gold/90"
                    >
                      {copy.hero.viewSeed} <ArrowRight aria-hidden="true" />
                    </Button>
                    <Button
                      render={<a href="/contact" />}
                      nativeButton={false}
                      variant="outline"
                      className="h-11 rounded-lg border-white/40 bg-white/5 px-5 text-white hover:bg-white/15 hover:text-white"
                    >
                      {copy.hero.talkToTeam}
                    </Button>
                  </div>
                  <a
                    href="/about"
                    className="mt-14 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-white/75 transition-colors hover:text-white"
                  >
                    {copy.hero.aboutLink}
                    <ArrowDown className="size-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-x-0 bottom-5 z-10 mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <Button
                key={slide.title}
                type="button"
                variant="ghost"
                size="icon-sm"
                aria-label={copy.hero.slideLabel(index + 1, slides.length)}
                aria-current={activeSlide === index ? "true" : undefined}
                onClick={() => api?.scrollTo(index)}
                className={`h-2.5 min-h-2.5 w-7 rounded-full p-0 ${
                  activeSlide === index
                    ? "bg-gold hover:bg-gold/90"
                    : "bg-white/45 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={copy.hero.previous}
              onClick={() => api?.scrollPrev()}
              className="size-9 rounded-full border border-white/30 bg-primary-deep/35 text-white hover:bg-primary-deep/65 hover:text-white"
            >
              <ChevronLeft aria-hidden="true" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={copy.hero.next}
              onClick={() => api?.scrollNext()}
              className="size-9 rounded-full border border-white/30 bg-primary-deep/35 text-white hover:bg-primary-deep/65 hover:text-white"
            >
              <ChevronRight aria-hidden="true" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={isPaused ? copy.hero.play : copy.hero.pause}
              aria-pressed={isPaused}
              onClick={() => setIsPaused((paused) => !paused)}
              className="size-9 rounded-full border border-white/30 bg-primary-deep/35 text-white hover:bg-primary-deep/65 hover:text-white"
            >
              {isPaused ? (
                <Play aria-hidden="true" />
              ) : (
                <Pause aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
