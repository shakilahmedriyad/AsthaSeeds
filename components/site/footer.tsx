"use client";

import { MapPin, Phone, Truck, UsersRound } from "lucide-react";
import { Brand } from "./brand";
import { useSiteLocale } from "./locale-provider";

export function SiteFooter() {
  const { copy } = useSiteLocale();

  return (
    <footer className="motif motif-light bg-primary-deep px-5 text-primary-foreground sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr]">
        <div>
          <Brand light />
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
            {copy.footer.description}
          </p>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
            {copy.footer.quickLinks}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li>
              <a className="hover:text-white" href="#home">
                {copy.navigation.home}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#about">
                {copy.navigation.about}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#products">
                {copy.navigation.products}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#contact">
                {copy.navigation.contact}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
            {copy.footer.contact}
          </h2>
          <address className="mt-4 space-y-3 text-sm not-italic text-white/70">
            <p className="flex items-start gap-2.5">
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-gold"
                aria-hidden="true"
              />
              {copy.footer.address}
            </p>
            <a
              href="tel:+8801711000000"
              className="flex items-center gap-2.5 hover:text-white"
            >
              <Phone className="size-4 text-gold" aria-hidden="true" />
              +880 1711-000000
            </a>
            <a
              href="mailto:info@shonaliseeds.com.bd"
              className="flex items-center gap-2.5 hover:text-white"
            >
              <UsersRound className="size-4 text-gold" aria-hidden="true" />
              info@shonaliseeds.com.bd
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 py-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{copy.footer.copyright}</p>
          <p className="inline-flex items-center gap-1.5">
            <Truck className="size-3.5" aria-hidden="true" />
            {copy.footer.proud}
          </p>
        </div>
      </div>
    </footer>
  );
}
