"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { siteCopy, type SiteLocale } from "./copy";

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
  return savedLocale === "en" ? "en" : "bn";
}

function getServerLocaleSnapshot(): SiteLocale {
  return "bn";
}

type SiteLocaleContextValue = {
  locale: SiteLocale;
  setLocale: (locale: SiteLocale) => void;
};

const SiteLocaleContext = createContext<SiteLocaleContextValue | null>(null);

export function SiteLocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeToLocale,
    getLocaleSnapshot,
    getServerLocaleSnapshot,
  );
  const copy = siteCopy[locale];

  const setLocale = useCallback((nextLocale: SiteLocale) => {
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT));
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = copy.pageTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", copy.metaDescription);
  }, [copy.metaDescription, copy.pageTitle, locale]);

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
    copy: siteCopy[context.locale],
  };
}
