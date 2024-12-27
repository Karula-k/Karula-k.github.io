import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          100: "#d1fae5",
          200: "#86efac",
          300: "#34d399",
        },
        blue: {
          100: "#dbeafe",
          200: "#93c5fd",
          300: "#60a5fa",
        },
      },
      backgroundImage: {
        'gradient-r': 'linear-gradient(to right, #34d399, #93c5fd)', // Add a custom gradient
      },
    },
  },
  plugins: [],
} satisfies Config;
