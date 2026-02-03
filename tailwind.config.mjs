/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fff7e1",
          100: "#ffe8b0",
          200: "#f8d27a",
          300: "#e9bc46",
          400: "#d6a93c",
          500: "#b88e3a",
          600: "#9a742d",
          700: "#785724",
          800: "#4f3a1a",
          900: "#2b1f0f",
        },
        wine: {
          700: "#4d051b",
          800: "#3a0314",
          900: "#2b020f",
        },
      },
      fontFamily: {
        display: ["\"Bakbak One\"", "\"Bebas Neue\"", "sans-serif"],
        heading: ["\"Bebas Neue\"", "sans-serif"],
        body: ["\"Poppins\"", "\"Inter\"", "sans-serif"],
      },
      backgroundImage: {
        hero: "radial-gradient(circle at 20% 10%, rgba(255, 214, 140, 0.35), transparent 35%), radial-gradient(circle at 70% 20%, rgba(255, 210, 120, 0.2), transparent 40%), linear-gradient(180deg, rgba(10, 6, 4, 0.85), rgba(0, 0, 0, 0.95))",
      },
      boxShadow: {
        glow: "0 0 40px rgba(184, 142, 58, 0.35)",
      },
    },
  },
  plugins: [],
};
