import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";

export const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Mono fica como CSS var fallback até o projecto escolher fonte mono real.
// Para activar JetBrains_Mono/IBM Plex Mono, importa-o aqui de next/font/google.
