import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { TopicCard } from "@/components/TopicCard";
import { CTASection } from "@/components/CTASection";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { topics, audiences } from "@/lib/site";

export const metadata: Metadata = {
  title: "What We Do — Assembly Programs",
  description:
    "Motivational assemblies on thinking big, goal setting, anti-bullying, Red Ribbon Week, leadership, testing motivation, staff development, retreats, and more.",
};

const groups = ["Inspiration", "Prevention", "Leadership", "Events"] as const;

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        crumbs={[{ label: "Home", href: "/" }, { label: "What We Do" }]}
        title={
          <>
            Programs that meet students{" "}
            <span className="text-gradient">where they are.</span>
          </>
        }
        description="Whatever your goal — inspiration, prevention, leadership, or a signature school event — we tailor a high-energy presentation that puts your desired content and outcomes first."
      >
        <div className="flex flex-wrap gap-2">
          {audiences.map((a) => (
            <span
              key={a}
              className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-semibold text-white/85 backdrop-blur"
            >
              {a}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="container-x py-16 md:py-24">
        <SectionHeader
          eyebrow="Assembly topics"
          title="Choose a focus — or let's design something custom"
          description="Every topic below can be shaped for middle school, high school, leadership groups, staff, or camps. We hit the mark perfectly because we put your goals first."
          className="mb-12"
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, i) => (
            <StaggerItem key={topic.title} className="h-full">
              <TopicCard topic={topic} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Who it's for */}
      <section className="bg-mist py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Who it's for"
              title="Built for every corner of your school community"
              description="From a packed gym of students to an intimate staff seminar, our approach flexes to your audience and your moment."
            />
            <Reveal delay={0.1}>
              <ButtonLink href="/book" className="mt-7">
                Book your program
              </ButtonLink>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Stagger className="grid gap-3 sm:grid-cols-2">
              {[
                "Middle Schools",
                "High Schools",
                "Leadership & ASB Groups",
                "Staff Development",
                "Teacher Seminars",
                "Student Retreats",
                "Camps",
                "Homecoming & School Events",
              ].map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-white p-4 shadow-card">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="font-semibold text-ink">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Groups legend */}
      <section className="container-x py-16 md:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => {
            const count = topics.filter((t) => t.group === g).length;
            return (
              <Reveal key={g}>
                <div className="rounded-2xl border border-ink/10 bg-white p-6 text-center shadow-card">
                  <div className="text-4xl font-extrabold text-gradient">
                    {count}
                  </div>
                  <div className="mt-1 text-sm font-bold uppercase tracking-wide text-ink/70">
                    {g} programs
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Let's build the assembly your students will never forget."
        primaryLabel="Book an Assembly"
      />
    </>
  );
}
