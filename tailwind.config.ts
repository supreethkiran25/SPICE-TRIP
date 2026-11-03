import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          spice: "#D31F25",
          "spice-dark": "#B91C1C",
          "spice-light": "#FEF2F2",
          red: "#D31F25",
          charcoal: "#18181B",
          midnight: "#111827",
          "midnight-dark": "#090D16",
          amber: "#F59E0B",
          gold: "#FBBF24",
          tangerine: "#EA580C",
          sunset: "#DC5A35",
          gray: "#F8FAFC",
          "gray-alt": "#F1F5F9",
          border: "#E2E8F0",
        },
        background: {
          DEFAULT: "#FFFFFF",
          secondary: "#FAF9F5",
          dark: "#111827",
          card: "#FFFFFF",
        },
        foreground: {
          DEFAULT: "#18181B",
          muted: "#52525B",
          subtle: "#A1A1AA",
          light: "#F8FAFC",
        },
        forest: {
          DEFAULT: "#18181B",
          deep: "#111827",
          dark: "#090D16",
          light: "#27272A",
        },
        terracotta: {
          DEFAULT: "#D31F25",
          hover: "#B91C1C",
          light: "#FEF2F2",
        },
        sand: {
          DEFAULT: "#E2E8F0",
          light: "#FAF9F5",
          dark: "#CBD5E1",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        script: ["var(--font-script)", "Caveat", "cursive"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(12, 35, 64, 0.08)",
        floating: "0 20px 40px -10px rgba(12, 35, 64, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
