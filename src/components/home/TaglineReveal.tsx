"use client";

import { useEffect, useRef, useState } from "react";

const LINE_ONE = "Every trip should feel";
const LINE_TWO = "personal before you board";

function RevealLine({ text }: { text: string }) {
  const words = text.split(" ");
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const [active, setActive] = useState<boolean[]>(() => words.map(() => false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive((prev) => {
              if (prev[i]) return prev;
              const next = [...prev];
              next[i] = true;
              return next;
            });
            observer.unobserve(el);
          }
        },
        { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [words.length]);

  return (
    <p
      className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-[680px] leading-none"
      style={{ textWrap: "balance" }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className={`inline-block mr-3 last:mr-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            active[i] ? "text-[#18181B] opacity-100" : "text-[#18181B] opacity-30"
          }`}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

export default function TaglineReveal() {
  return (
    <section className="bg-[#FAF9F5] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 md:space-y-6">
          <RevealLine text={LINE_ONE} />
          <RevealLine text={LINE_TWO} />
        </div>
      </div>
    </section>
  );
}
