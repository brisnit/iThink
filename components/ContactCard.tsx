import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export function ContactCard() {
  return (
    <div className="overflow-hidden rounded-3xl gradient-ink p-7 text-white shadow-glow">
      <h3 className="text-xl font-extrabold">Talk to a real human</h3>
      <p className="mt-2 text-sm text-white/65">
        Prefer to call? We&apos;d love to hear about your school and students.
      </p>
      <ul className="mt-6 space-y-4">
        <li>
          <a
            href={site.phoneHref}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-accent"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-ink">
              <Phone className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wider text-white/50">
                Call us
              </span>
              <span className="text-lg font-bold">{site.phone}</span>
            </span>
          </a>
        </li>
        <li>
          <a
            href={site.emailHref}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-accent"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-ink">
              <Mail className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs uppercase tracking-wider text-white/50">
                Email us
              </span>
              <span className="block truncate text-lg font-bold">
                {site.email}
              </span>
            </span>
          </a>
        </li>
        <li>
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-ink">
              <MapPin className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wider text-white/50">
                Visit
              </span>
              <span className="text-base font-bold leading-tight">
                {site.address.line1}, {site.address.city},{" "}
                {site.address.state} {site.address.zip}
              </span>
            </span>
          </div>
        </li>
      </ul>
      <a
        href={site.phoneHref}
        className="mt-6 block rounded-2xl bg-accent px-5 py-4 text-center text-base font-extrabold uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5"
      >
        Book today @ {site.phone}
      </a>
    </div>
  );
}
