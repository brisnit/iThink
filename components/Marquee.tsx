const defaultItems = [
  "Inspire the Young",
  "Think Big",
  "Overcome Obstacles",
  "Live Big",
  "Healthy Thinking · Healthy Living",
  "3,000,000+ Students",
  "Since 2000",
];

export function Marquee({ items = defaultItems }: { items?: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden border-y border-ink/10 bg-ink py-4 text-white">
      <div className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap pr-8">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="text-lg font-bold uppercase tracking-wide text-white/90">
              {item}
            </span>
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
