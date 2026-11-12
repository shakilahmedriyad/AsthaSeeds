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
  title: "শোনালী সিডস | ভালো ফলনের জন্য মানসম্মত ভুট্টার বীজ",
  description:
    "বাংলাদেশের মাটি ও মৌসুমের উপযোগী, মান যাচাই করা ভুট্টার বীজ। সারাদেশে আমাদের ডিলারদের কাছে শোনালী সিডসের বীজ পাবেন।",
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
