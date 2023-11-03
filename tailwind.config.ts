import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#E4E231",
        secondColor: "#E9F111",
      },
      backgroundImage: {
        "hero-img": "url('/hero.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
