import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [
    require("daisyui"),
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ff0099",
          
          "secondary": "#008e7a",
                    
          "accent": "#00e58a",
                    
          "neutral": "#0a131a",
                    
          "base-100": "#f3fff5",
                    
          "info": "#008baf",
                    
          "success": "#00ab46",
                    
          "warning": "#e04f00",
                    
          "error": "#ec004e",
        },
      },
    ],
  },
};

export default config;