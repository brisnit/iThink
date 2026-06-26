type Props = {
  value: string;
  label: string;
  sub?: string;
  tone?: "dark" | "light";
};

export function StatCard({ value, label, sub, tone = "light" }: Props) {
  const isLight = tone === "light";
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
        isLight
          ? "border-white/10 bg-white/5 backdrop-blur"
          : "border-ink/10 bg-white shadow-card"
      }`}
    >
      <div
        className={`text-4xl font-extrabold tracking-tight md:text-5xl ${
          isLight ? "text-white" : "text-ink"
        }`}
      >
        <span className="text-gradient">{value}</span>
      </div>
      <div
        className={`mt-2 text-sm font-bold uppercase tracking-wide ${
          isLight ? "text-white/85" : "text-ink"
        }`}
      >
        {label}
      </div>
      {sub ? (
        <div
          className={`mt-1 text-sm ${isLight ? "text-white/55" : "text-ink/55"}`}
        >
          {sub}
        </div>
      ) : null}
      <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
    </div>
  );
}
