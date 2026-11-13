import type { Metadata } from "next";
import { ContactMethodsSection } from "@/components/site/contact-methods-section";
import { ContactPageIntro } from "@/components/site/contact-page-intro";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { SiteLocaleProvider } from "@/components/site/locale-provider";

export const metadata: Metadata = {
  title: "যোগাযোগ করুন | আস্থা সিডস লিমিটেড",
  description:
    "ফোন, হোয়াটসঅ্যাপ বা ইমেইলে আস্থা সিডস লিমিটেডের সঙ্গে যোগাযোগ করুন।",
};

export default function ContactPage() {
  return (
    <SiteLocaleProvider>
      <SiteHeader />
      <main className="flex-1">
        <ContactPageIntro />
        <ContactMethodsSection />
      </main>
      <SiteFooter />
    </SiteLocaleProvider>
  );
}
