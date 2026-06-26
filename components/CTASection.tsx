import { ArrowRight, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

type Props = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export function CTASection({
  eyebrow = "Live deeply. Live courageously.",
  title = "Book an unforgettable, inspiring presentation.",
  description = "You can make a lasting difference in the lives of your students. Book iTHINKBIG today.",
  primaryLabel = "Book Now",
  primaryHref = "/book",
}: Props) {
  return (
    <section className="container-x py-16 md:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-ink px-6 py-14 text-center text-white md:px-16 md:py-20">
          <div className="grid-dots absolute inset-0 opacity-40" aria-hidden />
          <div
            className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-balance sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mt-5 text-lg text-white/70">{description}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={primaryHref} variant="accent" size="lg">
                {primaryLabel} <ArrowRight className="h-5 w-5" />
              </ButtonLink>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                <Phone className="h-5 w-5 text-accent" /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
