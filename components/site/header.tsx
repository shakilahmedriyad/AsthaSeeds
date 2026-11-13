"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Brand } from "./brand";
import { LanguageSwitcher } from "./language-switcher";
import { siteHeaderCopy } from "./copy/site-header";
import { useSiteLocale } from "./locale-provider";

export function SiteHeader() {
  const { locale } = useSiteLocale();
  const navigation = siteHeaderCopy[locale].navigation;
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isAboutPage = pathname === "/about";
  const isProductsPage = pathname === "/products";
  const isContactPage = pathname === "/contact";
  const homeHref = isHomePage ? "#home" : "/";
  const aboutHref = "/about";
  const productsHref = "/products";
  const contactHref = "/contact";
  const homeClass = isHomePage
    ? "font-medium text-primary"
    : "transition-colors hover:text-primary";
  const aboutClass = isAboutPage
    ? "font-medium text-primary"
    : "transition-colors hover:text-primary";
  const productsClass = isProductsPage
    ? "font-medium text-primary"
    : "transition-colors hover:text-primary";
  const contactClass = isContactPage
    ? "font-medium text-primary"
    : "transition-colors hover:text-primary";

  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-19 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <Brand />
        <nav
          aria-label={navigation.label}
          className="hidden items-center gap-8 text-sm text-muted-foreground md:flex"
        >
          <Link
            className={homeClass}
            href={homeHref}
            aria-current={isHomePage ? "page" : undefined}
          >
            {navigation.home}
          </Link>
          <Link
            className={aboutClass}
            href={aboutHref}
            aria-current={isAboutPage ? "page" : undefined}
          >
            {navigation.about}
          </Link>
          <Link
            className={productsClass}
            href={productsHref}
            aria-current={isProductsPage ? "page" : undefined}
          >
            {navigation.products}
          </Link>
          <Link
            className={contactClass}
            href={contactHref}
            aria-current={isContactPage ? "page" : undefined}
          >
            {navigation.contact}
          </Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <Button
            render={<Link href={contactHref} />}
            nativeButton={false}
            className="hidden h-10 rounded-full bg-brand-accent px-5 text-sm text-brand-accent-foreground shadow-soft hover:bg-brand-accent/90 sm:inline-flex"
          >
            {navigation.getInTouch} <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      </div>
      <nav
        aria-label={navigation.label}
        className="flex items-center justify-center gap-5 border-t border-border/70 px-4 py-2.5 text-xs text-muted-foreground md:hidden"
      >
        <Link
          className={homeClass}
          href={homeHref}
          aria-current={isHomePage ? "page" : undefined}
        >
          {navigation.home}
        </Link>
        <Link
          className={aboutClass}
          href={aboutHref}
          aria-current={isAboutPage ? "page" : undefined}
        >
          {navigation.about}
        </Link>
        <Link
          className={productsClass}
          href={productsHref}
          aria-current={isProductsPage ? "page" : undefined}
        >
          {navigation.products}
        </Link>
        <Link
          className={contactClass}
          href={contactHref}
          aria-current={isContactPage ? "page" : undefined}
        >
          {navigation.contact}
        </Link>
      </nav>
    </header>
  );
}
