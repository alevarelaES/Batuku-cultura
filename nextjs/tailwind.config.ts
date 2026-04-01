import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E8620A',
        deep: '#5C2D82',
        accent: '#F5B800',
        nature: '#2D7A5E',
        cv: '#003893',
        'brand-bg': '#FDF0DC',
        'brand-text': '#1A1A1A',
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      spacing: {
        section: '120px',
        xl: '80px',
      }
    },
  },
  plugins: [],
}
export default config