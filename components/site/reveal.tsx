"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children }: { children: ReactNode }) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    element.classList.add("reveal-pending");

    if (!("IntersectionObserver" in window)) {
      element.classList.add("is-visible");
      return;
    }

    const reveal = () => {
      element.classList.add("is-visible");
      observer.unobserve(element);
      window.removeEventListener("scroll", revealIfPassed);
    };
    const revealIfPassed = () => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        reveal();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
          reveal();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -24px 0px" },
    );

    observer.observe(element);
    window.addEventListener("scroll", revealIfPassed, { passive: true });
    revealIfPassed();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", revealIfPassed);
    };
  }, []);

  return <div ref={elementRef}>{children}</div>;
}
