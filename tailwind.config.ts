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
        background: "#0A0A0F",
        surface: "#12121A",
        "surface-hover": "#1A1A24",
        border: "#1E1E2E",
        "border-light": "#2A2A3C",
        muted: "#71717A",
        foreground: "#FAFAFA",
        "foreground-secondary": "#A1A1AA",
        accent: {
          purple: "#6366F1",
          blue: "#3B82F6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #6366F1 0%, #3B82F6 100%)",
        "gradient-brand-hover":
          "linear-gradient(135deg, #5558E3 0%, #2563EB 100%)",
        "gradient-radial":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.15), transparent)",
        "gradient-glow":
          "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(99, 102, 241, 0.12), transparent)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(99, 102, 241, 0.15)",
        "glow-lg": "0 0 80px rgba(99, 102, 241, 0.2)",
        card: "0 1px 3px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.03)",
        "card-hover":
          "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(99, 102, 241, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
