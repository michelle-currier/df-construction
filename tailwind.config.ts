import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      transitionProperty: {
        // Add any properties you want to transition globally
        'button': 'background-gradient',
      },
      transitionDuration: {
        'button': '500ms', // Customize duration for buttons
      },
      transitionTimingFunction: {
        'button': 'ease-in-out', // Customize easing for buttons
      },
    },
  },
  plugins: [],
};
export default config;