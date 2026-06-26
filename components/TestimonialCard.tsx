import type { Testimonial } from "@/lib/site";

export function TestimonialCard({
  testimonial,
  featured = false,
}: {
  testimonial: Testimonial;
  featured?: boolean;
}) {
  return (
    <figure
      className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? "gradient-ink border-white/10 text-white shadow-glow"
          : "border-ink/10 bg-white text-ink shadow-card hover:border-brand-200"
      }`}
    >
      <span
        className={`font-display text-6xl leading-none ${
          featured ? "text-accent" : "text-brand-200"
        }`}
        aria-hidden
      >
        &ldquo;
      </span>
      <blockquote
        className={`-mt-4 text-lg font-medium leading-relaxed text-pretty ${
          featured ? "text-white/90" : "text-ink/80"
        }`}
      >
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${
            featured ? "bg-accent text-ink" : "bg-brand-600 text-white"
          }`}
        >
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </span>
        <div>
          <div
            className={`text-sm font-bold ${featured ? "text-white" : "text-ink"}`}
          >
            {testimonial.name}
          </div>
          <div
            className={`text-sm ${featured ? "text-white/60" : "text-ink/55"}`}
          >
            {testimonial.org}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
