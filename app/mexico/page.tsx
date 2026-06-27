import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Globe2, Users, Heart } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "iTHINKBIG in Mexico — The Garden of Dreams",
  description:
    "In Punta Colonet, Baja California, iTHINKBIG is building a facility — El Jardín de los Sueños — to inspire the young in this community of 6,000. Visit ¡Buena Onda!",
};

const facts = [
  { icon: Users, value: "6,000", label: "People in Punta Colonet" },
  { icon: Heart, value: "Free", label: "Daycare in progress" },
  { icon: Globe2, value: "Baja CA", label: "Mexico" },
];

export default function MexicoPage() {
  return (
    <>
      <PageHero
        eyebrow="Give back"
        crumbs={[{ label: "Home", href: "/" }, { label: "Mexico" }]}
        title={
          <>
            Inspiring the young in{" "}
            <span className="text-gradient">Punta Colonet</span>
          </>
        }
        description="El Jardín de los Sueños — The Garden of Dreams — is where our mantra travels south of the border. We've mobilized our networks, energy, and funding to build a facility that lives out “Inspire the Young” in this small Mexican community."
      />

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-6">
            <div className="relative mx-auto max-w-md">
              <div className="overflow-hidden rounded-[1.75rem] border border-ink/10 shadow-2xl">
                <Image
                  src={images.mexico}
                  alt="¡Buena Onda! — The Garden of Dreams in Punta Colonet, Mexico"
                  width={304}
                  height={304}
                  sizes="(min-width: 1024px) 28rem, 100vw"
                  className="aspect-square h-auto w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="The Garden of Dreams"
              title="A free daycare — and a promise to be part of their story."
              description="We have met hundreds of amazing young people in this town of 6,000, and we personally take on the responsibility to be a part of their success story."
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-ink/65">
                Founder Chad Furlong is actively launching a free daycare in
                Punta Colonet, Baja California, Mexico — extending the heart of
                iTHINKBIG far beyond the school assembly stage.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href={site.social.buenaOnda}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-bold text-white shadow-[0_14px_30px_-12px_rgba(13,58,240,0.7)] transition-transform hover:-translate-y-0.5"
              >
                Visit ¡Buena Onda! <ArrowUpRight className="h-5 w-5" />
              </a>
            </Reveal>
          </div>
        </div>

        <Stagger className="mt-16 grid gap-4 sm:grid-cols-3">
          {facts.map((f) => (
            <StaggerItem key={f.label}>
              <div className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-mist p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-brand text-white">
                  <f.icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-2xl font-extrabold text-ink">
                    {f.value}
                  </div>
                  <div className="text-sm text-ink/55">{f.label}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CTASection
        eyebrow="Invest in the young — our future"
        title="Your donation continues this important work."
        description="Thank you in advance for investing into the lives of students around the world."
        primaryLabel="Support the mission"
        primaryHref="/book#donate"
      />
    </>
  );
}
