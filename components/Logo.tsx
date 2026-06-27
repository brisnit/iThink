import Link from "next/link";
import Image from "next/image";

export function Logo({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  // On dark backgrounds, render the logo as a clean white mark.
  const toneClass = tone === "light" ? "brightness-0 invert" : "";
  return (
    <Link
      href="/"
      aria-label="iThinkBig home"
      className={`inline-flex items-center transition-opacity hover:opacity-80 ${className}`}
    >
      <Image
        src="/ithink-logo.png"
        alt="iThinkBig"
        width={219}
        height={58}
        priority
        className={`h-7 w-auto md:h-8 ${toneClass}`}
      />
    </Link>
  );
}
