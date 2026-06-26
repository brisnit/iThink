import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/site";

export function FounderSection({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div
              className="img-halo absolute -inset-6 -z-20 rounded-[2.75rem]"
              aria-hidden
            />
            <div
              className="absolute -inset-3 -z-10 rounded-[2rem] gradient-brand opacity-90 blur-sm"
              aria-hidden
            />
            <div className="overflow-hidden rounded-[1.75rem] border-4 border-white shadow-glow">
              <Image
                src={images.chad}
                alt="Chad Furlong, founder of iTHINKBIG"
                width={640}
                height={760}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl border border-ink/10 bg-white px-5 py-3 text-center shadow-card">
              <div className="text-sm font-extrabold text-ink">
                Chad Furlong
              </div>
              <div className="text-xs font-medium uppercase tracking-wider text-brand-600">
                Founder & Speaker
              </div>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Meet the founder
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-balance sm:text-4xl md:text-5xl">
              One assembly changed his life. Now he changes millions.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-ink/65">
              At 16, Chad sat through a high school assembly in Northern
              California where speaker Donnie Moore had a profound impact on his
              life. In that moment he realized how much one inspiring moment
              could matter — and determined to live big and make a difference.
            </p>
          </Reveal>
          {!compact && (
            <Reveal delay={0.15}>
              <p className="mt-4 text-lg leading-relaxed text-ink/65">
                In 2000 he launched iTHINKBIG.org and has spoken to millions of
                students since. He&apos;s passionate about seeing young adults
                reach their full potential — and about The Garden of Dreams,
                where he&apos;s building a free daycare in Punta Colonet, Baja
                California, Mexico.
              </p>
            </Reveal>
          )}
          <Reveal delay={0.2}>
            <figure className="mt-7 rounded-2xl border-l-4 border-brand-500 bg-mist p-5">
              <Quote className="h-5 w-5 text-brand-500" aria-hidden />
              <blockquote className="mt-2 text-lg font-medium italic text-ink/80">
                “There is no passion to be found playing small — in settling for
                a life that is less than the one you are capable of living.”
              </blockquote>
              <figcaption className="mt-2 text-sm font-bold text-ink/60">
                — Nelson Mandela
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8">
              <ButtonLink href="/team" variant="outline">
                Read Chad&apos;s full story <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
