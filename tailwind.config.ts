import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        PrimaryColor: "#D9D9D9",
        SecondaryColor: "#253C95",
        AccentColor: "#EA4335",
        BgColor: "#FFFFFF",
        TextColor: "#232323",
        VariantTextColor: "A4A4A4",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
