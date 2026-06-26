import type { Metadata } from "next";
import { Share2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { ContactCard } from "@/components/ContactCard";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with iTHINKBIG. Call 619.888.4856, email chad@ithinkbig.org, or send us a message. 1807 Cable Street, San Diego, CA 92107.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title={
          <>
            Let&apos;s <span className="text-gradient">connect</span>
          </>
        }
        description="Questions, dates, or details — we're here. Reach out and let's start a conversation about inspiring your students."
      />

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <ContactCard />
            <Reveal>
              <div className="mt-6 rounded-3xl border border-ink/10 bg-mist p-7">
                <h3 className="text-lg font-extrabold text-ink">
                  Spread the word
                </h3>
                <p className="mt-2 text-ink/65">
                  Become an active advocate for inspiring young adults. Share us
                  with your network.
                </p>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 font-bold text-ink transition-colors hover:border-brand-500 hover:text-brand-600"
                >
                  <Share2 className="h-5 w-5" /> Follow on Instagram
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Send a message"
              title="We'll get right back to you"
              className="mb-8"
            />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
