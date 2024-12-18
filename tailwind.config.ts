import type { Config } from "tailwindcss";
import typographyPlugin from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    typographyPlugin,
    function ({ addVariant }: any) {
      addVariant(
        "prose-inline-code",
        '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))'
      );
    },
  ],
} satisfies Config;
