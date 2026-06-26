"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-ink text-white">
      <div className="grid-dots absolute inset-0 opacity-50" aria-hidden />
      {/* floating shapes */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-x relative grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-32">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/85 backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-accent" />
            One of the nation&apos;s top assembly programs
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="mt-6 text-5xl font-extrabold leading-[0.98] tracking-tight text-balance sm:text-6xl md:text-7xl"
          >
            Inspire the Young to{" "}
            <span className="relative whitespace-nowrap">
              <span className="text-gradient">Think Big</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden
              >
                <motion.path
                  d="M3 8C60 3 140 2 297 7"
                  stroke="#00e0ff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.6, ease }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl"
          >
            Over{" "}
            <strong className="font-bold text-white">3,000,000 students</strong>{" "}
            inspired since 2000. Through a high-energy, creative, and heartfelt
            approach, we&apos;re uniquely equipped to reach your students in a
            way they&apos;ll never forget.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <ButtonLink href="/book" variant="accent" size="lg">
              Book an Assembly <ArrowRight className="h-5 w-5" />
            </ButtonLink>
            <ButtonLink
              href="/what-we-do"
              size="lg"
              className="border border-white/20 bg-white/5 text-white backdrop-blur hover:bg-white/10"
            >
              Explore Programs
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center gap-3 text-sm text-white/60"
          >
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-accent text-accent"
                  aria-hidden
                />
              ))}
            </div>
            <span>Trusted by schools & districts nationwide</span>
          </motion.div>
        </div>

        {/* Visual stat panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.25 }}
          className="lg:col-span-5"
        >
          <div className="relative mx-auto max-w-md rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <div className="absolute -right-3 -top-3 rounded-full bg-accent px-4 py-1.5 text-sm font-extrabold text-ink shadow-glow">
              Since 2000
            </div>
            <div className="text-center">
              <div className="text-7xl font-extrabold leading-none tracking-tighter md:text-8xl">
                <span className="text-gradient">3M+</span>
              </div>
              <p className="mt-2 text-base font-bold uppercase tracking-wide text-white/80">
                Students inspired
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { k: "Nationwide", v: "Assemblies" },
                { k: "501(c)(3)", v: "Nonprofit" },
                { k: "K–12", v: "& Leadership" },
                { k: "25+ yrs", v: "Of impact" },
              ].map((b) => (
                <div
                  key={b.k}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <div className="text-lg font-extrabold text-white">{b.k}</div>
                  <div className="text-xs uppercase tracking-wide text-white/55">
                    {b.v}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm italic text-white/60">
              “We&apos;re not ashamed to agree — we&apos;re one of the
              nation&apos;s top assembly programs.”
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
