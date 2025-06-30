// import { heroui } from "@heroui/theme";
// /** @type {import('tailwindcss').Config} */
// const plugin = require("tailwindcss/plugin");
// const CustomStyle = plugin(function ({ addUtilities }) {
//   console.log("CustomStyle plugin loaded");
//   addUtilities({
//     ".rotate-y-180": { transform: "rotateY(180deg)" },
//     ".preserve-3d": { transformStyle: "preserve-3d" },
//     ".perspective-1000": { perspective: "1000px" },
//     ".backface-hidden": { backfaceVisibility: "hidden" },
//   });
// });
// export default {
//   content: [
//     "./index.html",
//     "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: "class",
//   plugins: [CustomStyle, heroui()],
// };

// tailwind.config.js

const plugin = require("tailwindcss/plugin");

const CustomStyle = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": { transform: "rotateY(180deg)" },
    ".preserve-3d": { transformStyle: "preserve-3d" },
    ".perspective-1000": { perspective: "1000px" },
    ".backface-hidden": { backfaceVisibility: "hidden" },
  });
});

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [CustomStyle],
};
