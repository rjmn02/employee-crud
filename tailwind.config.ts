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
          "primary": "#b000ff",
          
          "secondary": "#0016ff",
                    
          "accent": "#7b4b00",
                    
          "neutral": "#202237",
                    
          "base-100": "#faffff",
                    
          "info": "#5ecaff",
                    
          "success": "#00931c",
                    
          "warning": "#ff9000",
                    
          "error": "#ff2a60",
        },
      },
    ],
  },
};

export default config;