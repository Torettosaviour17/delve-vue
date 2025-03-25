/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      animation: {
        wave: "wave 3s ease-in-out infinite",
        wave2: "wave 3s ease-in-out 0.5s infinite",
        wave3: "wave 3s ease-in-out 1s infinite",
        wave4: "wave 3s ease-in-out 1.5s infinite",
      },
      keyframes: {
        wave: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(3)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
