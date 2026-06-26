import type { Metadata } from "next";
import { Brain, HeartPulse, Sparkles, Target } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { StatCard } from "@/components/StatCard";
import { CTASection } from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About & Mission",
  description:
    "iTHINKBIG is a nonprofit 501(c)(3) founded in San Diego in 2000. Our mission: inspire the young through motivational presentations that unleash their greatness.",
};

const pillars = [
  {
    icon: Brain,
    title: "Mindset first",
    body: "Fulfilling a significant task begins with how a person thinks about themselves. We start with healthy thinking.",
  },
  {
    icon: Sparkles,
    title: "Unleash greatness",
    body: "We help students recognize the potential within them — even when life has covered it up.",
  },
  {
    icon: Target,
    title: "Channel the passion",
    body: "We mine the passion in the hearts of young people and channel it toward their personal win.",
  },
  {
    icon: HeartPulse,
    title: "Lasting impact",
    body: "Inspired students positively impact themselves, their families, communities, and the world.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About & Mission"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        title={
          <>
            Our mission is to{" "}
            <span className="text-gradient">inspire the young.</span>
          </>
        }
        description="iTHINKBIG was founded in San Diego, CA in 2000 as a nonprofit 501(c)(3). Since then we've effectively inspired over 3 million students across the nation — at the forefront of inspiring students to overcome obstacles and live a big life."
      >
        <ButtonLink href="/book" variant="accent" size="lg">
          Book an Assembly
        </ButtonLink>
      </PageHero>

      {/* Mission body */}
      <section className="container-x py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Why mindset matters"
              title="Healthy thinking produces healthy living."
              description="We believe inspiring students will help unleash the greatness that exists within them to positively impact themselves, their families, communities, and the world. We understand that fulfilling that significant task begins with how a person thinks about him or herself."
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-ink/65">
                We uniquely and effectively help your students recognize their
                potential, even if it&apos;s difficult for them to see it
                through the layers of life that may have covered it up. In our
                presentations, we mine the passion in the hearts of young people
                and channel it toward their personal win.
              </p>
            </Reveal>
          </div>

          {/* Mandela quote */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <figure className="sticky top-28 overflow-hidden rounded-3xl gradient-ink p-8 text-white shadow-glow">
                <div
                  className="grid-dots absolute inset-0 opacity-30"
                  aria-hidden
                />
                <span
                  className="relative font-display text-7xl leading-none text-accent"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <blockquote className="relative -mt-6 text-2xl font-bold leading-snug">
                  There is no passion to be found playing small — in settling
                  for a life that is less than the one you are capable of
                  living.
                </blockquote>
                <figcaption className="relative mt-6 text-sm font-bold uppercase tracking-wider text-accent">
                  — Nelson Mandela
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-mist py-16 md:py-24">
        <div className="container-x">
          <SectionHeader
            align="center"
            eyebrow="What drives us"
            title="The beliefs behind every presentation"
            className="mb-12"
          />
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <StaggerItem key={p.title} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-card transition-transform hover:-translate-y-1">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-white">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {p.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Impact stats */}
      <section className="gradient-ink">
        <div className="container-x py-16 md:py-20">
          <SectionHeader
            align="center"
            tone="light"
            eyebrow="Our impact"
            title="A quarter century of inspiring the young"
            className="mb-12"
          />
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <StatCard {...s} tone="light" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </>
  );
}
