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
      <span className="flex h-11 w-[5.5rem] shrink-0 items-center rounded-md bg-white px-1.5 py-0.5">
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
