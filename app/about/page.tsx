import type { Metadata } from "next";
import { AboutIntroSection } from "@/components/site/about-intro-section";
import { AboutTeamSection } from "@/components/site/about-team-section";
import { CredentialsSection } from "@/components/site/credentials-section";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { SiteLocaleProvider } from "@/components/site/locale-provider";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে | শোনালী সিডস",
  description:
    "শোনালী সিডসের দল ও নিবন্ধনের তথ্য জানুন। বাংলাদেশের কৃষকদের মানসম্মত বীজ দিতে আমরা প্রতিশ্রুতিবদ্ধ।",
};

export default function AboutPage() {
  return (
    <SiteLocaleProvider>
      <SiteHeader />
      <main>
        <AboutIntroSection />
        <AboutTeamSection />
        <CredentialsSection />
      </main>
      <SiteFooter />
    </SiteLocaleProvider>
  );
}
