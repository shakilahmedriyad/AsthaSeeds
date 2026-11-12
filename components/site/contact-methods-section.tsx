"use client";

import {
  type LucideIcon,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { contactMethodsCopy } from "./copy/contact-methods-section";
import { useSiteLocale } from "./locale-provider";

export function ContactMethodsSection() {
  const { locale } = useSiteLocale();
  const copy = contactMethodsCopy[locale];
  const contact = copy.contactPage;

  return (
    <section
      className="bg-background px-5 py-12 sm:px-8 sm:py-16"
      aria-labelledby="contact-methods-title"
    >
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
        <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-card sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {contact.channelsTitle}
          </p>
          <h2
            id="contact-methods-title"
            className="mt-3 text-2xl font-semibold tracking-tight"
          >
            {contact.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {contact.description}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <a
              href="tel:+8801711000000"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Phone className="size-4" aria-hidden="true" />
              {contact.phoneTitle}
            </a>
            <a
              href="https://wa.me/8801711000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-3 text-sm font-medium text-whatsapp-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              {contact.whatsappAction}
            </a>
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <h3 className="text-sm font-semibold">{contact.socialsTitle}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {contact.socials.map((social, index) => {
                return (
                  <div
                    key={social.shortName}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-xs font-medium text-foreground"
                    title={contact.socialsNote}
                  >
                    <SocialIcon
                      name={social.shortName}
                      index={index}
                    />
                    {social.name}
                  </div>
                );
              })}
            </div>
            <p className="mt-3 text-xs leading-5 text-muted-foreground">
              {contact.socialsNote}
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <ContactCard
            icon={MapPin}
            title={contact.officeTitle}
            className="sm:col-span-2"
          >
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm leading-6 text-muted-foreground transition-colors hover:text-primary"
            >
              {contact.address}
            </a>
          </ContactCard>

          <ContactCard icon={Phone} title={contact.phoneTitle}>
            <div className="flex flex-col gap-1.5">
              {contact.phones.map((phone, index) => (
                <a
                  key={phone}
                  href={
                    index === 0
                      ? "tel:+8801711000000"
                      : "tel:+8801811000000"
                  }
                  dir="ltr"
                  className="w-fit text-sm font-semibold text-primary hover:underline"
                >
                  {phone}
                </a>
              ))}
            </div>
          </ContactCard>

          <ContactCard icon={MessageCircle} title={contact.whatsappTitle}>
            <a
              href="https://wa.me/8801711000000"
              target="_blank"
              rel="noreferrer"
              dir="ltr"
              className="text-sm font-semibold text-primary hover:underline"
            >
              {contact.phones[0]}
            </a>
          </ContactCard>

          <ContactCard icon={Mail} title={contact.emailTitle}>
            <a
              href={`mailto:${contact.email}`}
              dir="ltr"
              className="break-all text-sm font-semibold text-primary hover:underline"
            >
              {contact.email}
            </a>
          </ContactCard>

          <ContactCard icon={Clock3} title={contact.hoursTitle}>
            <p className="text-sm leading-6 text-muted-foreground">
              {contact.hours}
            </p>
          </ContactCard>

          <Link
            href="/products"
            className="group flex min-h-24 items-center justify-between rounded-xl border border-primary/10 bg-secondary/70 p-5 transition-colors hover:bg-secondary sm:col-span-2"
          >
            <span>
              <span className="block text-xs font-semibold uppercase tracking-wide text-primary">
                {copy.navigation.products}
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">
                {copy.productsPage.description}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="text-lg text-primary transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  className = "",
  children,
}: {
  icon: LucideIcon;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <article
      className={`flex gap-3.5 rounded-xl border border-border/80 bg-card p-5 shadow-card ${className}`}
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <h3 className="text-sm font-semibold">{title}</h3>
        <div className="mt-1.5">{children}</div>
      </div>
    </article>
  );
}

function SocialIcon({ name, index }: { name: string; index: number }) {
  return (
    <span
      className="flex size-7 items-center justify-center rounded-full bg-secondary text-primary"
      aria-hidden="true"
    >
      {index === 0 ? (
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
          <path d="M13.3 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.1v3.2h2.8V21h3.4Z" />
        </svg>
      ) : index === 1 ? (
        <svg
          viewBox="0 0 24 24"
          className="size-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.6" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      ) : (
        <Send className="size-4" />
      )}
      <span className="sr-only">{name}</span>
    </span>
  );
}
