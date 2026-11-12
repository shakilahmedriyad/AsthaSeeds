"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand } from "./brand";
import { LanguageSwitcher } from "./language-switcher";
import { useSiteLocale } from "./locale-provider";

export function SiteHeader() {
  const { copy } = useSiteLocale();
  const navigation = copy.navigation;

  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-19 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <Brand />
        <nav
          aria-label={navigation.label}
          className="hidden items-center gap-8 text-sm text-muted-foreground md:flex"
        >
          <a className="font-medium text-primary" href="#home">
            {navigation.home}
          </a>
          <a className="transition-colors hover:text-primary" href="#about">
            {navigation.about}
          </a>
          <a
            className="transition-colors hover:text-primary"
            href="#products"
          >
            {navigation.products}
          </a>
          <a
            className="transition-colors hover:text-primary"
            href="#contact"
          >
            {navigation.contact}
          </a>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <Button
            render={<a href="#contact" />}
            nativeButton={false}
            className="hidden h-10 rounded-full bg-gold px-5 text-sm text-gold-foreground shadow-soft hover:bg-gold/90 sm:inline-flex"
          >
            {navigation.getInTouch} <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      </div>
      <nav
        aria-label={navigation.label}
        className="flex items-center justify-center gap-5 border-t border-border/70 px-4 py-2.5 text-xs text-muted-foreground md:hidden"
      >
        <a className="font-medium text-primary" href="#home">
          {navigation.home}
        </a>
        <a className="transition-colors hover:text-primary" href="#about">
          {navigation.about}
        </a>
        <a className="transition-colors hover:text-primary" href="#products">
          {navigation.products}
        </a>
        <a className="transition-colors hover:text-primary" href="#contact">
          {navigation.contact}
        </a>
      </nav>
    </header>
  );
}
