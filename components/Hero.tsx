"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    if (reduceMotion) {
      video.pause();
    } else {
      // Some browsers need an explicit play() call after the muted flag is set.
      void video.play().catch(() => {});
    }
  }, [reduceMotion]);

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover object-[50%_78%]"
        poster="/hero/hero-poster.jpg"
        autoPlay={!reduceMotion}
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden
        tabIndex={-1}
      >
        <source src="/hero/hero.webm" type="video/webm" />
        <source src="/hero/hero.mp4" type="video/mp4" />
      </video>

      {/* Legibility overlays — lighter so the video reads through clearly */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/45 to-ink/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20"
        aria-hidden
      />
      <div className="grid-dots absolute inset-0 opacity-15" aria-hidden />
      {/* floating shapes */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl"
        animate={
          reduceMotion ? undefined : { y: [0, 30, 0], x: [0, 20, 0] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
        animate={reduceMotion ? undefined : { y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-x relative py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-sm font-semibold uppercase tracking-[0.18em] text-accent"
          >
            One of the nation&apos;s top assembly programs
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="mt-6 text-5xl font-extrabold leading-[0.98] tracking-tight text-balance sm:text-6xl md:text-7xl"
          >
            Inspire the Young to{" "}
            <span className="text-gradient">Think Big</span>
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
      </div>
    </section>
  );
}
