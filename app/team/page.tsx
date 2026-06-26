import type { Metadata } from "next";
import Image from "next/image";
import { Heart, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { images, site, founderTimeline } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team — Chad Furlong, Founder",
  description:
    "Meet Chad Furlong, founder of iTHINKBIG. Inspired by one assembly at 16, he launched iTHINKBIG in 2000 and has spoken to millions of students since.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="The team"
        crumbs={[{ label: "Home", href: "/" }, { label: "Team" }]}
        title={
          <>
            Meet <span className="text-gradient">Chad Furlong</span>
          </>
        }
        description="Founder, speaker, and the heart behind iTHINKBIG — passionate about seeing young adults reach their full potential and pursue their unique passions."
      />

      {/* Founder profile */}
      <section className="container-x py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-[1.75rem] border border-ink/10 shadow-2xl">
                <Image
                  src={images.chad}
                  alt="Chad Furlong, founder of iTHINKBIG"
                  width={720}
                  height={860}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <div className="mt-5 rounded-2xl border border-ink/10 bg-white p-5 text-center shadow-card">
                <div className="text-lg font-extrabold text-ink">
                  Chad Furlong
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                  Founder & Speaker
                </div>
                <div className="mt-2 flex items-center justify-center gap-1.5 text-sm text-ink/55">
                  <MapPin className="h-4 w-4" /> San Diego, CA
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="His story"
              title="One inspiring moment can change a life."
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/70">
              <Reveal>
                <p>
                  When Chad was 16, he was a student at Alameda High School in
                  the Bay Area of Northern California. As most students are
                  required to do, he sat through several school assemblies. At
                  one particular assembly, Donnie Moore spoke and had a profound
                  impact on Chad&apos;s life. It was then that he realized the
                  impact an inspiring moment could have — and he determined to
                  live big and make a difference.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  In 2000, he launched iTHINKBIG.org and has spoken to over 2.5
                  million students since that time. He is passionate about seeing
                  young adults reach their full potential and pursue their
                  individual and unique passions.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  He is also passionate about his project, El Jardin De Los
                  Sueños / The Garden of Dreams, where he is actively launching a
                  free daycare in Punta Colonet, Baja California, Mexico. Chad
                  resides in San Diego, CA and is the proud father of Miracle and
                  Nataly.
                </p>
              </Reveal>
            </div>

            <Reveal>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/book">Bring Chad to your school</ButtonLink>
                <ButtonLink href="/mexico" variant="outline">
                  <Heart className="h-4 w-4 text-brand-600" /> The Garden of
                  Dreams
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-mist py-16 md:py-24">
        <div className="container-x">
          <SectionHeader
            align="center"
            eyebrow="Founder story"
            title="From one assembly to millions inspired"
            className="mb-14"
          />
          <ol className="relative mx-auto max-w-3xl">
            <span
              className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-0.5 bg-gradient-to-b from-brand-500 to-accent md:left-1/2 md:-translate-x-1/2"
              aria-hidden
            />
            {founderTimeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.05}>
                <li
                  className={`relative mb-8 flex gap-6 md:mb-12 md:w-1/2 md:gap-0 ${
                    i % 2 === 0
                      ? "md:ml-0 md:pr-12 md:text-right"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <span
                    className={`absolute left-[12px] top-1 z-10 h-4 w-4 rounded-full border-4 border-mist bg-brand-600 md:left-auto ${
                      i % 2 === 0
                        ? "md:-right-2 md:translate-x-1/2"
                        : "md:-left-2 md:-translate-x-1/2"
                    }`}
                    aria-hidden
                  />
                  <div className="ml-10 rounded-2xl border border-ink/10 bg-white p-5 shadow-card md:ml-0">
                    <div className="text-sm font-extrabold uppercase tracking-wider text-brand-600">
                      {item.year}
                    </div>
                    <h3 className="mt-1 text-lg font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">
                      {item.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        eyebrow={`Reach Chad directly @ ${site.phone}`}
        title="Ready to inspire your students?"
      />
    </>
  );
}
