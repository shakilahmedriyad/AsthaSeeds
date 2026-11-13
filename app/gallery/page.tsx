import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/footer";
import { GalleryPage } from "@/components/site/gallery-page";
import { SiteHeader } from "@/components/site/header";
import { SiteLocaleProvider } from "@/components/site/locale-provider";

export const metadata: Metadata = {
  title: "গ্যালারি | আস্থা সিডস লিমিটেড",
  description:
    "আস্থা সিডস লিমিটেডের মাঠ পরিদর্শন ও বাংলাদেশের কৃষি কার্যক্রমের ছবি দেখুন।",
};

export default function GalleryRoute() {
  return (
    <SiteLocaleProvider>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <GalleryPage />
      </main>
      <SiteFooter />
    </SiteLocaleProvider>
  );
}
