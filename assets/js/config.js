tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#111111",
          secondary: "#666666",
          tertiary: "#999999",
          background: "#F4F5F5",
          background1: "#FFFFFF",
          background2: "#F4F5F5",
          border: "rgba(0, 0, 0, 0.08)",
          text: "#000000",
        },
        dark: {
        primary: "#ffffff",
          secondary: "rgba(255, 255, 255, 0.6)",
          tertiary: "#999999",
          background: "#141414",
          background1: "#1a1a1a",
          background1_1: "rgba(255, 255, 255, 0.14)",
          background2: "#282828",
          border: "rgba(255, 255, 255, 0.06)",
          text: "#ffffff",
        },
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};