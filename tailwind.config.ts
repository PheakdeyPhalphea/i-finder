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
      fontSize: {
        h1: [
          "48px",
          {
            lineHeight: "54px",
            fontWeight: "700",
          },
        ],
        h2: [
          "40px",
          {
            lineHeight: "36px",
            fontWeight: "600",
          },
        ],
        h3: [
          "24px",
          {
            lineHeight: "24px",
            fontWeight: "500",
          },
        ],
        h4: [
          "20px",
          {
            lineHeight: "30px",
            fontWeight: "500",
          },
        ],
        title: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        body: [
          "18px",
          {
            lineHeight: "12px",
            fontWeight: "400",
          },
        ],

      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
