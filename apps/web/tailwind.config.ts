import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        surface: "#f7f7f5",
        border: "#e9e9e7",
        sidebar: "#fbfbfa",
        text: {
          primary: "#37352f",
          secondary: "#787774",
          tertiary: "#b2b0ad",
        },
        accent: {
          blue: "#2383e2",
          green: "#0f7b6c",
          red: "#eb5757",
          yellow: "#dfab01",
          purple: "#9065b0",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      borderRadius: {
        DEFAULT: "6px",
      },
      boxShadow: {
        notion: "rgba(15,15,15,0.05) 0px 0px 0px 1px, rgba(15,15,15,0.1) 0px 3px 6px, rgba(15,15,15,0.2) 0px 9px 24px",
      },
    },
  },
  plugins: [],
};

export default config;
