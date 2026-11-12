import type { Metadata } from "next";
import { ContactSection } from "@/components/site/contact-section";
import { ProductCatalogSection } from "@/components/site/product-catalog-section";
import { ProductsPageIntro } from "@/components/site/products-page-intro";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { SiteLocaleProvider } from "@/components/site/locale-provider";

export const metadata: Metadata = {
  title: "আমাদের বীজ | শোনালী সিডস",
  description:
    "বাংলাদেশের কৃষকদের জন্য শোনালী সিডসের হাইব্রিড ভুট্টার বীজ দেখুন।",
};

export default function ProductsPage() {
  return (
    <SiteLocaleProvider>
      <SiteHeader />
      <main>
        <ProductsPageIntro />
        <ProductCatalogSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </SiteLocaleProvider>
  );
}
