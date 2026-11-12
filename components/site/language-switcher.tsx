"use client";

import { Button } from "@/components/ui/button";
import { useSiteLocale } from "./locale-provider";

export function LanguageSwitcher() {
  const { locale, setLocale, copy } = useSiteLocale();

  return (
    <div
      aria-label={copy.navigation.languageLabel}
      className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1"
    >
      <Button
        type="button"
        size="sm"
        variant={locale === "bn" ? "secondary" : "ghost"}
        aria-pressed={locale === "bn"}
        onClick={() => setLocale("bn")}
        className="h-8 rounded-full px-2.5 text-xs"
      >
        বাংলা
      </Button>
      <Button
        type="button"
        size="sm"
        variant={locale === "en" ? "secondary" : "ghost"}
        aria-pressed={locale === "en"}
        onClick={() => setLocale("en")}
        className="h-8 rounded-full px-2.5 text-xs"
      >
        English
      </Button>
    </div>
  );
}
