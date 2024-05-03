/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  // darkMode: "selector",

  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      textColor: {
        primary: "var(--gray-12)",
        secondary: "var(--gray-11)",
        tertiary: "var(--gray-9)",
        brand: "var(--brand)",
        link: "var(--blue-10)",
        error: "#FF0000",
        success: "#27AE60",
        warning: "#C0C436",
        info: "#29B6F6",
      },
      backgroundColor: {
        primary: "var(--gray-1)",
        secondary: "var(--gray-4)",
        secondaryA: "var(--gray-a4)",
        tertiary: "var(--gray-3)",
        beta: "#0070f3",
        error: "#FF5F5F33",
        success: "#D4EFDF",
        warning: "#DDE22566",
      },
      borderColor: {
        primary: "var(--gray-6)",
        secondary: "var(--gray-4)",
        secondaryA: "var(--gray-a8)",
      },
      ringOffsetColor: {
        primary: "var(--gray-12)",
      },
      keyframes: {
        in: {
          "0%": { transform: "translateY(18px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "in-reverse": {
          "0%": { transform: "translateY(-18px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        in: "in .6s both",
        "in-reverse": "in-reverse .6s both",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
