/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         color: {
            primary: "#2E3840",
            secondary: "#FF0303",
            warning: "#E40849",
            info: "#C7C8CD",
            accent: "#000000",
         },
      },
   },
   plugins: [],
};
