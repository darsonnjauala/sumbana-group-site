import Link from "next/link";
import { brand } from "@content/site";

/**
 * Wordmark genérico — fonte display, uppercase, tracking wordmark.
 * Cor em repouso: White. Accent (cyan) APENAS em estados interactivos.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${brand.name} — início`}
      className={`font-display font-bold uppercase tracking-wordmark text-white
                  transition-colors duration-200 hover:text-cyan focus-visible:text-cyan ${className}`}
    >
      {brand.name}
    </Link>
  );
}
