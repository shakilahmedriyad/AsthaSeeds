"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { siteMetadataCopy } from "./copy/site-metadata";
import type { SiteLocale } from "./locale";

const STORAGE_KEY = "shonali-seeds-language";
const LOCALE_CHANGE_EVENT = "shonali-seeds-language-change";

function subscribeToLocale(onChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) {
      onChange();
    }
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(LOCALE_CHANGE_EVENT, onChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(LOCALE_CHANGE_EVENT, onChange);
  };
}

function getLocaleSnapshot(): SiteLocale {
  const savedLocale = window.localStorage.getItem(STORAGE_KEY);
  return savedLocale === "bn" ? "bn" : "en";
}

function getServerLocaleSnapshot(): SiteLocale {
  return "en";
}

type SiteLocaleContextValue = {
  locale: SiteLocale;
  setLocale: (locale: SiteLocale) => void;
};

const SiteLocaleContext = createContext<SiteLocaleContextValue | null>(null);

export function SiteLocaleProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const locale = useSyncExternalStore(
    subscribeToLocale,
    getLocaleSnapshot,
    getServerLocaleSnapshot,
  );
  const pageTitle =
    pathname === "/about"
      ? siteMetadataCopy[locale].about.pageTitle
      : pathname === "/products"
        ? siteMetadataCopy[locale].productsPage.pageTitle
        : pathname === "/contact"
          ? siteMetadataCopy[locale].contactPage.pageTitle
          : siteMetadataCopy[locale].pageTitle;
  const metaDescription =
    pathname === "/about"
      ? siteMetadataCopy[locale].about.metaDescription
      : pathname === "/products"
        ? siteMetadataCopy[locale].productsPage.metaDescription
        : pathname === "/contact"
          ? siteMetadataCopy[locale].contactPage.metaDescription
          : siteMetadataCopy[locale].metaDescription;

  const setLocale = useCallback((nextLocale: SiteLocale) => {
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT));
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = pageTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", metaDescription);
  }, [locale, metaDescription, pageTitle]);

  return (
    <SiteLocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </SiteLocaleContext.Provider>
  );
}

export function useSiteLocale() {
  const context = useContext(SiteLocaleContext);

  if (!context) {
    throw new Error("useSiteLocale must be used within SiteLocaleProvider.");
  }

  return {
    ...context,
  };
}
