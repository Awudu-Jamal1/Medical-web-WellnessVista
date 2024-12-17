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
  
        md: '1000px',
        // => @media (min-width: 1024px) { ... }
        
        
  
        lg: '1280px',
        // => @media (min-width: 1280px) { ... }
      },backgroundImage: {
        'sea1': 'url(/assets/img/parallax1.png)',
        'sea2': 'url("https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")',
        'sea3': 'url("https://images.unsplash.com/photo-1503177847378-d2048487fa46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")'
      }
    },
  },
  plugins: [],
};
// #0073e6
// #2b406b
// #0073e6