module.exports = {
  mode: "jit",
  purge: {
    layers: ["components", "utilities"],
    content: ["./*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
