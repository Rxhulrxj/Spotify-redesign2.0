module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "2xl": "1500px",
      },
    },
    fontFamily: {
      body: ["Architects Daughter", "cursive"],
    },
  },
  variants: {
    extend: {},
    scrollbar: ["rounded"],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
  ],
};
