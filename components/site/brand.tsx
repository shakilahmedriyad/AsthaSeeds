"use client";

import { Sprout } from "lucide-react";
import { useSiteLocale } from "./locale-provider";

export function Brand({ light = false }: { light?: boolean }) {
  const { copy } = useSiteLocale();

  return (
    <a
      href="#home"
      className="inline-flex items-center gap-2.5"
      aria-label={copy.brand.homeLabel}
    >
      <span className="flex size-10 items-center justify-center rounded-full bg-gold text-primary-deep">
        <Sprout className="size-5" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-semibold tracking-tight ${
            light ? "text-primary-foreground" : "text-primary-deep"
          }`}
        >
          {copy.brand.name}
        </span>
        <span
          className={`mt-1 text-[0.66rem] ${
            light ? "text-primary-foreground/65" : "text-muted-foreground"
          }`}
        >
          {copy.brand.tagline}
        </span>
      </span>
    </a>
  );
}
