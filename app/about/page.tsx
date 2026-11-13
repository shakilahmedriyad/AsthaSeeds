import type { Metadata } from "next";
import { AboutIntroSection } from "@/components/site/about-intro-section";
import { AboutTeamSection } from "@/components/site/about-team-section";
import { AboutStorySection } from "@/components/site/about-story-section";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { SiteLocaleProvider } from "@/components/site/locale-provider";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে | আস্থা সিডস লিমিটেড",
  description:
    "আস্থা সিডস লিমিটেডের লক্ষ্য, আন্তর্জাতিক অংশীদারত্ব এবং বাংলাদেশের কৃষির জন্য মানসম্মত বীজ নিয়ে জানুন।",
};

export default function AboutPage() {
  return (
    <SiteLocaleProvider>
      <SiteHeader />
      <main>
        <AboutIntroSection />
        <AboutStorySection />
        <AboutTeamSection />
      </main>
      <SiteFooter />
    </SiteLocaleProvider>
  );
}
