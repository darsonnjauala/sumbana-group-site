import type { Config } from "tailwindcss";

/**
 * Design tokens base — dark-first.
 *
 * Cada projecto sobrescreve os hex específicos da marca (cyan, electric)
 * mantendo a forma do token. Cinzas (void/carbon/white/slate) tendem a manter-se.
 * Regra: cores accent (cyan/electric) só em estados interactivos ou de acção.
 */
const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F05A22",
          orangeHover: "#FF6E38",
          orangeSubtle: "rgba(240, 90, 34, 0.12)",
        },
        travertine: {
          DEFAULT: "#F6F4EF",
          subtle: "#EFECE4",
        },
        obsidian: {
          DEFAULT: "#111215",
          surface: "#1A1B20",
          elevated: "#24262D",
        },
        sand: {
          DEFAULT: "#E5DEC9",
          muted: "#D8CDB5",
        },
        linen: "#D3CBBF",
        champagne: {
          DEFAULT: "#C5A880",
          hover: "#D6BBA0",
        },
        moss: "#202D24",
        slate: "#7E8494",
        white: "#FDFDFD",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "var(--font-display)", "Georgia", "serif"],
        body: ["'Plus Jakarta Sans'", "var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // [size, { lineHeight, letterSpacing? }]
        h1: ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        h2: ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.005em" }],
        h3: ["1.75rem", { lineHeight: "1.25" }],
        h4: ["1.25rem", { lineHeight: "1.35" }],
        body: ["1rem", { lineHeight: "1.65" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        label: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.12em" }],
        mono: ["0.875rem", { lineHeight: "1.5" }],
      },
      letterSpacing: {
        wordmark: "0.12em",
      },
      maxWidth: {
        prose: "65ch",
        container: "1200px",
      },
      transitionDuration: {
        DEFAULT: "180ms",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};

export default config;
