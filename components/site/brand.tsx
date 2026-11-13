"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brandCopy } from "./copy/brand";
import { useSiteLocale } from "./locale-provider";

export function Brand({ light = false }: { light?: boolean }) {
  const { locale } = useSiteLocale();
  const copy = brandCopy[locale];
  const isHomePage = usePathname() === "/";

  return (
    <Link
      href={isHomePage ? "#home" : "/"}
      className="inline-flex min-w-0 items-center gap-2.5"
      aria-label={copy.brand.homeLabel}
    >
      <span
        className={`flex shrink-0 items-center rounded-md px-1.5 py-0.5 ${
          light ? "h-20 w-40" : "h-11 w-22"
        }`}
      >
        <Image
          src="/AsthaSeeds.svg"
          alt=""
          width={485}
          height={239}
          className="h-full w-full object-contain"
        />
      </span>
    </Link>
  );
}
