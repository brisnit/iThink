import Link from "next/link";

export function Logo({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const ink = tone === "light" ? "text-white" : "text-ink";
  return (
    <Link
      href="/"
      aria-label="iTHINKBIG home"
      className={`group inline-flex items-baseline gap-0.5 font-display text-xl font-extrabold tracking-tight ${ink} ${className}`}
    >
      <span className="text-brand-600">i</span>
      <span>THINK</span>
      <span className="relative">
        BIG
        <span className="absolute -right-2 -top-1 h-1.5 w-1.5 rounded-full bg-accent transition-transform group-hover:scale-150" />
      </span>
    </Link>
  );
}
