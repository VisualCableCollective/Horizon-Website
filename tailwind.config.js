module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        "25vh": "25vh",
        "50vh": "50vh",
      },
      backgroundColor: (theme) => ({
        "dark-1": "#0d0d0d",
        "dark-2": "#121212",
        "dark-3": "#1c1c1c",
        "dark-4": "#2b2b2b",
        "dark-5": "#363636",
      }),
      borderColor: {
        "dark-1": "#333",
        "dark-2": "#3d3d3d",
        "dark-3": "#4d4d4d",
      },
      textColor: {
        dark: "#7d7d7d",
        "dark-hover": "#bababa",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
