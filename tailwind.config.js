/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        sidebar: "#0c0c14",
        mainContent: "#10101a",
        themeColor: "#47c074",
        themeWhite: "#FAF3F0",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".ring-shadow-none": {
          "--tw-ring-shadow": "none",
        },
      };

      addUtilities(newUtilities, ["focus"]);
    },
  ],
};
