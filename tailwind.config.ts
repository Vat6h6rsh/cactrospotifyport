import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          900: '#1a1a1a',
          800: '#2d2d2d',
          700: '#4a4a4a',
        },
        pink: {
          500: '#ff6b9e',
        },
        red: {
          500: '#ff4d4d',
        },
      },
      fontFamily: {
        inter: "var(--font-inter)",
        pixel: "var(--font-pixel)",
      },
    },
  },
  plugins: [],
};
export default config;
