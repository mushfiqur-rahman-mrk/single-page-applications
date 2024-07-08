/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: '450px',  
      },
      container: {
        center: true,
        padding: "24px",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1120px",
        },
      },
      colors: {
        coffee: {
          100: "#DDB66F", // Dark Tan
          200: "#847571", // Light Grey Brown
          300: "#65463E", // Medium Brown
          400: "#5B4C48", // Medium Grey Brown
          500: "#492D26", // Dark Brown
          600: "#2E2624", // Dark Grey Brown
          700: "#2B1712", // Very Dark Brown
        },
        offWhite: "#FFEFEB", // Off-White
      },
      fontFamily: {
        pacifico: ["Pacifico", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        15: "15px",
        10: "10px",
        28: "28px",
        44: "44px",
      },
      lineHeight: {
        22: "22px",
        43: "43px",
        52: "52px",
        58: "58px",
        64: "64px",
        86: "86px",
      },
      spacing: {
        72: "72px",
        18: "18px",
      },
      boxShadow: {
        "btn-shadow": "0px 8px 24px 0px #1B110E80",
      },
      backgroundImage: {
        "coffee-beans": "url('/assets/bg-coffee-beans 1.png')",
        "header-gradient": "linear-gradient(180deg, #4b2c24 0%, #2b1712 100%)",
      },
    },
   
  },
  plugins: [],
};
