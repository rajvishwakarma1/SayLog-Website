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
        stone: {
          bg: "#fafaf9",
          surface: "#ffffff",
          text: "#1c1917",
          "text-secondary": "#57534e",
          "text-tertiary": "#a8a29e",
          border: "#e7e5e4",
          "border-light": "#f5f5f4",
        },
        accent: {
          DEFAULT: "#d4845a",
          light: "rgba(255, 234, 223, 0.15)",
          dark: "#b8683e",
        },
      },
    },
  },
  plugins: [],
};

export default config;
