import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "font-primary": "var(--font-primary)",
        "font-primary-active": "var(--font-primary-active)",
        primary: "var(--primary)",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({ defaultTheme: "dark" })],
};
export default config;
