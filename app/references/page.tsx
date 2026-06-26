import type { Metadata } from "next";
import { Star } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "References & Testimonials",
  description:
    "Hear from administrators and educators across the country about their iTHINKBIG assembly experience — relevant, motivational, and remarkable.",
};

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        eyebrow="References"
        crumbs={[{ label: "Home", href: "/" }, { label: "References" }]}
        title={
          <>
            What educators say after an{" "}
            <span className="text-gradient">iTHINKBIG assembly</span>
          </>
        }
        description="It takes a special presenter to capture every student and teacher in the building. Here's what the people who book us — year after year — have to say."
      >
        <div className="flex items-center gap-3 text-white/75">
          <div className="flex">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <span className="font-semibold">
            Trusted by schools &amp; districts nationwide
          </span>
        </div>
      </PageHero>

      <section className="container-x py-16 md:py-24">
        <Stagger className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <StaggerItem key={t.name} className="h-full">
              <TestimonialCard testimonial={t} featured={i % 3 === 0} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Pull quote band */}
      <section className="bg-mist py-16 md:py-24">
        <div className="container-x">
          <Reveal>
            <blockquote className="mx-auto max-w-4xl text-center text-2xl font-bold leading-snug text-ink text-balance sm:text-3xl md:text-4xl">
              “Every year I use iTHINKBIG.ORG to present to my city schools.
              I&apos;m amazed by how they put our desired content and goals first
              and{" "}
              <span className="text-gradient">hit the mark perfectly.</span>”
            </blockquote>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-center text-sm font-bold uppercase tracking-wider text-ink/50">
              — Nate Landis, Urban Youth Collaborative · Founder &amp; President
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Join the schools that keep coming back"
        title="Become our next great reference."
      />
    </>
  );
}
