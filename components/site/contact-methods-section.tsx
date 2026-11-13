"use client";

import {
  type LucideIcon,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
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
              href="tel:+8801303808217"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Phone className="size-4" aria-hidden="true" />
              {contact.phoneTitle}
            </a>
            <a
              href="https://wa.me/8801303808217"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-3 text-sm font-medium text-whatsapp-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              {contact.whatsappAction}
            </a>
          </div>

        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <ContactCard icon={MapPin} title={contact.officeTitle}>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm leading-6 text-muted-foreground transition-colors hover:text-primary"
            >
              {contact.address}
            </a>
          </ContactCard>

          <ContactCard icon={MapPin} title={contact.regionalOfficeTitle}>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(contact.regionalAddress)}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm leading-6 text-muted-foreground transition-colors hover:text-primary"
            >
              {contact.regionalAddress}
            </a>
          </ContactCard>

          <ContactCard icon={Phone} title={contact.phoneTitle}>
            <a
              href="tel:+8801303808217"
              dir="ltr"
              className="w-fit text-sm font-semibold text-primary hover:underline"
            >
              {contact.phone}
            </a>
          </ContactCard>

          <ContactCard icon={MessageCircle} title={contact.whatsappTitle}>
            <a
              href="https://wa.me/8801303808217"
              target="_blank"
              rel="noreferrer"
              dir="ltr"
              className="text-sm font-semibold text-primary hover:underline"
            >
              {contact.phone}
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
