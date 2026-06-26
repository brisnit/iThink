import type { Topic } from "@/lib/site";

const groupStyles: Record<Topic["group"], string> = {
  Inspiration: "from-brand-500 to-brand-700",
  Prevention: "from-accent to-brand-500",
  Leadership: "from-brand-600 to-brand-900",
  Events: "from-brand-400 to-accent",
};

export function TopicCard({ topic, index }: { topic: Topic; index: number }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-glow">
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${groupStyles[topic.group]}`}
      />
      <div className="flex items-center justify-between">
        <span className="text-sm font-extrabold tabular-nums text-ink/25">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="rounded-full bg-mist px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700">
          {topic.group}
        </span>
      </div>
      <h3 className="mt-4 text-xl font-bold leading-snug text-ink text-balance">
        {topic.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">
        {topic.description}
      </p>
    </article>
  );
}
