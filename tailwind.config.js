/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#FFC000",
        brightColor: "#ff8f00",
        backgroundColor: "#243df3",
        backgroundColor2:"#Efeff7",
        backgroundColor3:"rgb(255,250,225)",
        footer:"#17224d "
        
      },screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }
  
        md: '1024px',
        // => @media (min-width: 1024px) { ... }
        
        try:"1280",
  
        lg: '1360px',
        // => @media (min-width: 1280px) { ... }
      }
    },
  },
  plugins: [],
};
// #0073e6
// #2b406b
// #0073e6