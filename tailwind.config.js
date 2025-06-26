/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Display font - Montserrat for headings and bold text
        display: [
          "Montserrat",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],

        // Body font - Neue Plak W01 Light with Montserrat fallback
        body: [
          '"Neue Plak W01 Light"',
          "Montserrat",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],

        // Component font - Neue Plak W01 variants for UI elements
        component: [
          '"Neue Plak W01 Regular"',
          '"Neue Plak W01 Bold"',
          "Montserrat",
          "sans-serif",
        ],

        // Narrow font - For compact text and labels
        narrow: [
          '"Neue Plak W01 Narrow Regular"',
          '"Neue Plak W01 Narrow SemiBold"',
          "Montserrat",
          "sans-serif",
        ],

        // Primary font stack (default)
        primary: [
          '"Neue Plak W01 Light"',
          '"Neue Plak W01 Regular"',
          "Montserrat",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
