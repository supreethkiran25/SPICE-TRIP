import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="relative min-h-[280px] sm:min-h-[320px] flex items-center overflow-hidden bg-[#171717]">
      <Image
        src="/images/destinations/nepal.jpg"
        alt="Mountain landscape"
        fill
        sizes="100vw"
        quality={75}
        priority={false}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-[0.06em] mb-2">
            Ready to plan?
          </h2>
          <p className="text-sm sm:text-base text-white/75 font-light">
            Let&apos;s craft your next adventure together.
          </p>
        </div>

        <Link
          href="/contact#enquiry"
          className="inline-flex items-center gap-2 self-start sm:self-auto bg-white hover:bg-[#F5F5F4] text-[#171717] text-sm font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Enquire Now
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
