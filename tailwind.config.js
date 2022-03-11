module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Work Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      boxShadow: {
        // '3xl': '9px 35px 60px 10px rgba(0, 0, 0, 1)',
        "3xl": "0 8px 16px 0px rgba(50, 50, 80, 0.15)",
        "small": "0 0px 4px 0px rgba(0, 0, 0, 0.25)",
        "btn-1": "0 8px 0px 0px rgba(20, 50, 50, 1)",
        "btn-1-hover": "0 7px 0px 0px #102828",
        "btn-1-active":"0 0px 0px 0px #325050",
        "btn-2": "0 8px 0px 0px rgba(255, 255, 255, 1), 0 8.5px 0px 0.8px rgba(20, 50, 50, 1)",

      },
      colors: {
        dark: {
          50: "#A2B0B0",
          100: "#325050",
          200: "#143232",
          transparent:{
            50: "rgba(50, 80, 80, 0.75)"
          },
        },
       
        light:{
            50:"#F4F6F6",
            100:"#F3F5F5"
        },
        red :{
          600:"#ED4340"
        }
      },
      margin: {
        '5px': '5px',
        '9px': '9px',
        '11px': '11px',
      }
    },
  },
  plugins: [],
};
