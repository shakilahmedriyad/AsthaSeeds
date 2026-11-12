import type { Metadata } from "next";
import { ContactMethodsSection } from "@/components/site/contact-methods-section";
import { ContactPageIntro } from "@/components/site/contact-page-intro";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { SiteLocaleProvider } from "@/components/site/locale-provider";

export const metadata: Metadata = {
  title: "যোগাযোগ করুন | শোনালী সিডস",
  description:
    "ফোন, হোয়াটসঅ্যাপ বা ইমেইলে শোনালী সিডসের সঙ্গে যোগাযোগ করুন।",
};

export default function ContactPage() {
  return (
    <SiteLocaleProvider>
      <SiteHeader />
      <main>
        <ContactPageIntro />
        <ContactMethodsSection />
      </main>
      <SiteFooter />
    </SiteLocaleProvider>
  );
}
