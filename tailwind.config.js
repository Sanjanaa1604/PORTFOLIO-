/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          bg: '#F7FBFF',
          secondary: '#EFF6FF',
          blue: '#DCEEFF',
          accent: '#93C5FD',
          primary: '#3B82F6',
          primaryDark: '#2563EB',
          heading: '#1E293B',
          body: '#475569',
          card: '#FFFFFF',
          border: '#DCEEFF',
          borderSubtle: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(147, 197, 253, 0.15), 0 2px 6px -1px rgba(59, 130, 246, 0.06)',
        'soft-hover': '0 10px 25px -3px rgba(147, 197, 253, 0.25), 0 4px 10px -2px rgba(59, 130, 246, 0.1)',
        'card': '0 2px 12px rgba(30, 41, 59, 0.04)',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
      }
    },
  },
  plugins: [],
}

