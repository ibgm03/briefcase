/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        portada: "url('/public/images/back.jpg')",
      },
    },
  },
  plugins: [],
};
