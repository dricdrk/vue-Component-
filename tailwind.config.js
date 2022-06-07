// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#ffff",
        showcase: "#F1F4F6",
        headlines: "#1A202C",
        line: "#EEF1F5",
        input: {
          bg: "#EDF2F7",
          focus: "#E2E8F0",
          disable: "#CBD5E0",
        },
        body: {
          light: "#8D9AAB",
          dark: "#4A5568",
          bg: "#E5E5E5",
        },
        warning: {
          base: "#F4BC34",
          normal: "#FFCF5C",
          light: "#FFE29D",
          soft: "#FFF8E7",
        },
        primary: {
          normal: "#2183F7",
          base: "#2183F7",
          light: "#65ABFF",
          soft: "#2183F71A",
        },
        info: {
          normal: "#6979F8",
          soft: "#f0f2fe",
        },
        error: {
          base: "#F53D5A",
          normal: "#FF647C",
          light: "#FDAFBB",
          soft: "#FF647C1A",
        },
        success: {
          base: "#03A073",
          normal: "#00C48C",
          light: "#7DDFC3",
          soft: "#00C48C1A",
        },
        button: {
          google: "#F2F4F7",
        },
        dark: {
          0: "#F2F4F7",
          200: "#CBD5E0",
          500: "#8D9AAB",
          700: "#4A5568",
          900: "#1A202C",
        },
      },
    },
    fontFamily: {
      body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      heading:
        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
      mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
  },
};
