import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali", "latin"],
  variable: "--font-noto-bengali",
  display: "swap",
});

export const metadata: Metadata = {
  title: "আস্থা সিডস লিমিটেড | বাংলাদেশের জন্য মানসম্মত কৃষিবীজ",
  description:
    "আস্থা সিডস লিমিটেড বাংলাদেশে মানসম্মত কৃষিবীজ ও উদ্ভাবনী কৃষি সমাধান নিয়ে কাজ করে।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        inter.variable,
        notoSansBengali.variable,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
