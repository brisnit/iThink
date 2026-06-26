import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { SectionHeader } from "@/components/SectionHeader";
import { StatCard } from "@/components/StatCard";
import { TopicCard } from "@/components/TopicCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FounderSection } from "@/components/FounderSection";
import { CTASection } from "@/components/CTASection";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { stats, topics, testimonials, audiences } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* Stat strip */}
      <section className="gradient-ink relative overflow-hidden">
        <div className="container-x relative py-16 md:py-20">
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <StatCard {...s} tone="light" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Mission intro */}
      <section className="container-x py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Why iTHINKBIG"
              title={
                <>
                  We mine the passion in the hearts of young people — and channel
                  it toward their{" "}
                  <span className="text-gradient">personal win.</span>
                </>
              }
              description="Through a high-energy, creative, and heartfelt approach, we're uniquely equipped to speak to your students in an effective way. We help them recognize their potential — even when it's hard for them to see it through the layers of life that may have covered it up."
            />
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-ink/10 bg-mist p-7">
                <p className="text-xl font-bold leading-snug text-ink">
                  “Healthy thinking will produce healthy living.”
                </p>
                <p className="mt-3 text-ink/60">
                  Fulfilling something significant begins with how a person
                  thinks about themselves. That&apos;s where we start.
                </p>
                <ButtonLink href="/about" variant="outline" className="mt-6">
                  Our mission <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Topics preview */}
      <section className="bg-mist py-16 md:py-24">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="What we do"
              title="Assemblies built for real impact"
              description="From overcoming obstacles to leadership and prevention, every program is tailored to your students and your goals."
            />
            <Reveal>
              <ButtonLink href="/what-we-do" variant="dark">
                See all programs <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.slice(0, 6).map((topic, i) => (
              <StaggerItem key={topic.title} className="h-full">
                <TopicCard topic={topic} index={i} />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal>
            <div className="mt-10 flex flex-wrap items-center gap-2">
              <span className="text-sm font-bold text-ink/50">
                Perfect for:
              </span>
              {audiences.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-sm font-semibold text-ink/70"
                >
                  {a}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <FounderSection compact />

      {/* Testimonials */}
      <section className="bg-mist py-16 md:py-24">
        <div className="container-x">
          <SectionHeader
            align="center"
            eyebrow="References"
            title="Schools keep inviting us back"
            description="Don't take our word for it — here's what administrators and educators say after an iTHINKBIG assembly."
            className="mb-12"
          />
          <Stagger className="grid gap-5 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <StaggerItem key={t.name} className="h-full">
                <TestimonialCard testimonial={t} featured={i === 0} />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal>
            <div className="mt-10 text-center">
              <Link
                href="/references"
                className="inline-flex items-center gap-2 text-base font-bold text-brand-700 hover:text-brand-900"
              >
                Read more references <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
