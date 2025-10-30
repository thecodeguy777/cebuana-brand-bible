/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Garamond', 'Georgia', 'serif'],
      },
      fontSize: {
        'display': '65px',
        'h1': '50px',
        'h2': '45px',
        'h3': '32px',
        'h4': '24px',
        'h5': '20px',
        'h6': '16px',
        'body-lg': '16px',
        'body': '14px',
        'body-sm': '12px',
        'caption': '10px',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        cebuana: {
          "primary": "oklch(0.2686 0.0795 254.42)",      // #003366 - Cebuana Blue (Logo)
          "primary-content": "oklch(1 0 0)",             // #FFFFFF - White text
          "secondary": "oklch(0.2467 0.0552 258.44)",    // #0a3150 - Navy Blue (actual website color)
          "secondary-content": "oklch(1 0 0)",           // #FFFFFF - White text
          "accent": "oklch(0.6175 0.1891 26.08)",        // #E94B35 - Lhuillier Red (Logo)
          "accent-content": "oklch(1 0 0)",              // #FFFFFF - White text
          "neutral": "oklch(0.3639 0.0222 257.22)",      // #3D4451 - Dark Gray
          "neutral-content": "oklch(1 0 0)",             // #FFFFFF - White text
          "base-100": "oklch(1 0 0)",                    // #FFFFFF - White main background
          "base-200": "oklch(0.9608 0 0)",               // #F2F2F2 - Light Gray
          "base-300": "oklch(0.9216 0 0)",               // #E5E5E5 - Gray separators
          "base-content": "oklch(0.2784 0.0287 256.85)", // #1F2937 - Dark text
          "info": "oklch(0.7206 0.1927 237.69)",         // #3ABFF8 - Info blue
          "success": "oklch(0.7651 0.1772 162.48)",      // #36D399 - Success green
          "warning": "oklch(0.8242 0.1986 87.41)",       // #FBBD23 - Warning yellow
          "error": "oklch(0.7061 0.1922 25.34)",         // #F87272 - Error red
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
    darkTheme: false,
  },
}
