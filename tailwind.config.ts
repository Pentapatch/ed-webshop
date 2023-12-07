import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent-purple": "#847da5",
        "border-beige": "#f9f4e8",
        "button-green": "#1d472f",
        "button-green-hover": "#46604A",
        "light-green": "#43955f",
        "light-gray": "#f2f2f2",
        "medium-gray": "#D2D2D2",
        "dark-gray": "#1d1d1b",
      },
      fontFamily: {
        ivypresto: ["ivypresto-display", "serif"],
        openSans: ["open-sans", "sans-serif"],
        brandonGrotesque: ["brandon-grotesque", "sans-serif"],
      },
      fontSize: {
        '2xs': '10px',
      },
    },
  },
  plugins: [],
};
export default config;
