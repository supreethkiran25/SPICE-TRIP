"use client";

import { useEffect } from "react";

type LenisInstance = {
  raf: (time: number) => void;
  destroy: () => void;
  scrollTo: (target: HTMLElement | string | number, options?: object) => void;
};

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let animationFrameId = 0;
    let lenis: LenisInstance | null = null;
    let idleHandle: number | ReturnType<typeof setTimeout> | undefined;

    const start = () => {
      if (cancelled) return;
      void import("lenis").then(({ default: Lenis }) => {
        if (cancelled) return;
        lenis = new Lenis({
          duration: 1.05,
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 1.15,
        }) as LenisInstance;

        (window as unknown as { __lenis?: LenisInstance }).__lenis = lenis;

        const raf = (time: number) => {
          lenis?.raf(time);
          animationFrameId = requestAnimationFrame(raf);
        };
        animationFrameId = requestAnimationFrame(raf);
      });
    };

    // Don't block first paint — start Lenis when the browser is idle
    if ("requestIdleCallback" in window) {
      idleHandle = window.requestIdleCallback(start, { timeout: 1500 });
    } else {
      idleHandle = setTimeout(start, 250);
    }

    return () => {
      cancelled = true;
      if (typeof idleHandle === "number" && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleHandle);
      } else if (idleHandle) {
        clearTimeout(idleHandle as ReturnType<typeof setTimeout>);
      }
      cancelAnimationFrame(animationFrameId);
      lenis?.destroy();
      delete (window as unknown as { __lenis?: LenisInstance }).__lenis;
    };
  }, []);

  return <>{children}</>;
}
