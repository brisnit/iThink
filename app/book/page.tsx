import type { Metadata } from "next";
import { HeartHandshake, Megaphone, Share2, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { ContactCard } from "@/components/ContactCard";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Now — Live Deeply. Live Courageously.",
  description:
    "Book iTHINKBIG today for an unforgettable, inspiring assembly. Make a lasting difference in the lives of your students. Call 619.888.4856.",
};

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book now"
        crumbs={[{ label: "Home", href: "/" }, { label: "Book Now" }]}
        title={
          <>
            Live deeply.{" "}
            <span className="text-gradient">Live courageously.</span>
          </>
        }
        description="You can make a lasting difference in the lives of your students. Book iTHINKBIG today for an unforgettable and inspiring presentation."
      >
        <a
          href={site.phoneHref}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-extrabold text-ink transition-transform hover:-translate-y-0.5"
        >
          <Phone className="h-5 w-5" /> {site.phone}
        </a>
      </PageHero>

      {/* Form + contact */}
      <section className="container-x py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Request a date"
              title="Tell us about your school"
              description="Fill out the form and we'll be in touch quickly to craft the perfect program for your students."
              className="mb-8"
            />
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <ContactCard />
            </div>
          </div>
        </div>
      </section>

      {/* Donate + Spread the word */}
      <section className="bg-mist py-16 md:py-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal>
            <div
              id="donate"
              className="flex h-full scroll-mt-28 flex-col rounded-3xl border border-ink/10 bg-white p-8 shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-white">
                <HeartHandshake className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-2xl font-extrabold text-ink">Donate</h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink/65">
                Your donation allows us to continue our important work in the
                lives of students around the world. Thank you in advance for
                investing into the young… our future!
              </p>
              <a
                href={site.emailHref}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-bold text-white transition-transform hover:-translate-y-0.5"
              >
                Make a donation
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-8 shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white">
                <Megaphone className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-2xl font-extrabold text-ink">
                Spread the word
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink/65">
                Tell your colleagues about iTHINKBIG.org. There&apos;s no better
                way to make more of an impact than to use your network to become
                an active advocate for inspiring young adults. Share us on
                Instagram or call a colleague and tell them about iTHINKBIG.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 font-bold text-ink transition-colors hover:border-brand-500 hover:text-brand-600"
                >
                  <Share2 className="h-5 w-5" /> Share
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 font-bold text-ink transition-colors hover:border-brand-500 hover:text-brand-600"
                >
                  <Phone className="h-5 w-5" /> Call a colleague
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
