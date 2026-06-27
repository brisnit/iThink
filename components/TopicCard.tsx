import Image from "next/image";
import type { Topic } from "@/lib/site";

const groupStyles: Record<Topic["group"], string> = {
  Inspiration: "from-brand-500 to-brand-700",
  Prevention: "from-accent to-brand-500",
  Leadership: "from-brand-600 to-brand-900",
  Events: "from-brand-400 to-accent",
};

export function TopicCard({ topic, index }: { topic: Topic; index: number }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-glow">
      {/* Image header */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={topic.image}
          alt={topic.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
        <div
          className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${groupStyles[topic.group]}`}
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700 backdrop-blur">
          {topic.group}
        </span>
        <span className="absolute bottom-3 right-4 font-display text-3xl font-extrabold tabular-nums text-white/85 drop-shadow">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold leading-snug text-ink text-balance">
          {topic.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/60">
          {topic.description}
        </p>
      </div>
    </article>
  );
}
