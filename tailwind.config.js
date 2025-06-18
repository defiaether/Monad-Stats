/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#836EF9',
            50: '#f5f3ff',
            100: '#ede9fe',
            200: '#ddd6fe',
            300: '#c4b5fd',
            400: '#a78bfa',
            500: '#836EF9',
            600: '#7c3aed',
            700: '#6d28d9',
            800: '#5b21b6',
            900: '#4c1d95',
          },
          secondary: {
            DEFAULT: '#200052',
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7',
            600: '#9333ea',
            700: '#7c3aed',
            800: '#200052',
            900: '#581c87',
          },
          dark: {
            base: '#0E100F',
            card: 'rgba(32, 0, 82, 0.8)',
          },
          light: {
            base: '#FAFAFA',
            card: 'rgba(255, 255, 255, 0.9)',
          }
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-primary': 'linear-gradient(135deg, #200052 0%, #836EF9 100%)',
          'gradient-card-dark': 'linear-gradient(135deg, rgba(32, 0, 82, 0.8) 0%, rgba(131, 110, 249, 0.3) 100%)',
          'gradient-card-light': 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(131, 110, 249, 0.1) 100%)',
        },
        backdropBlur: {
          xs: '2px',
        },
        animation: {
          'glow': 'glow 2s ease-in-out infinite alternate',
        },
        keyframes: {
          glow: {
            '0%': { boxShadow: '0 0 5px #836EF9, 0 0 10px #836EF9, 0 0 15px #836EF9' },
            '100%': { boxShadow: '0 0 10px #836EF9, 0 0 20px #836EF9, 0 0 30px #836EF9' },
          }
        }
      },
    },
    plugins: [],
  }
  