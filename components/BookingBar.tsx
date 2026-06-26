"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export function BookingBar() {
  const pathname = usePathname();
  if (pathname.startsWith("/book")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 lg:hidden">
      <div className="flex items-center gap-2 rounded-2xl border border-ink/10 bg-white/95 p-2 shadow-2xl backdrop-blur">
        <a
          href={site.phoneHref}
          aria-label={`Call ${site.phone}`}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-ink/10 text-ink"
        >
          <Phone className="h-5 w-5" />
        </a>
        <Link
          href="/book"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-brand-600 font-bold text-white"
        >
          Book an Assembly <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
