/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#212428",
            // primary: "#000",
            secondary: "#FF014F",
            accent: "#c4cfde",
            info:  "#212428", 
         },
      },
      plugins: [],
   },
};
