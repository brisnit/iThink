import Link from "next/link";
import { Phone, Mail, MapPin, Share2, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden gradient-ink text-white">
      <div className="grid-dots absolute inset-0 opacity-40" aria-hidden />

      {/* Footer CTA band */}
      <div className="container-x relative border-b border-white/10 py-14">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Ready when you are
            </p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
              Book today @{" "}
              <a href={site.phoneHref} className="text-accent hover:underline">
                {site.phone}
              </a>
            </h2>
          </div>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-bold text-ink transition-transform hover:-translate-y-0.5"
          >
            Book an Assembly <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="container-x relative grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            A nonprofit 501(c)(3) inspiring the young through high-energy
            motivational assemblies since 2000.
          </p>
          <p className="mt-4 text-sm font-bold tracking-wide text-accent">
            “Inspire the Young.”
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/75 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/book"
                className="text-sm font-semibold text-accent transition-colors hover:text-accent-soft"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                {site.address.line1}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </span>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 hover:text-accent"
              >
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.emailHref}
                className="flex items-center gap-3 break-all hover:text-accent"
              >
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">
            Spread the word
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Become an active advocate for inspiring young adults. Share us
            online or tell a colleague.
          </p>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
          >
            <Share2 className="h-4 w-4" /> Share on Instagram
          </a>
        </div>
      </div>

      <div className="container-x relative flex flex-col items-center justify-between gap-2 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row">
        <p>
          © {new Date().getFullYear()} iTHINKBIG.org — Nonprofit 501(c)(3). All
          rights reserved.
        </p>
        <p>Inspire the Young · San Diego, CA</p>
      </div>
    </footer>
  );
}
