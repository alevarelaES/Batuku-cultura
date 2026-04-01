import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E8620A',   // Orange feu — dominant, navbar, CTA
        deep: '#5C2D82',      // Violet plume — footer, compte à rebours
        accent: '#F5B800',    // Or soleil — titres sur fond sombre
        nature: '#2D7A5E',    // Vert tropical — culture, nature
        cv: '#1A5CB5',        // Bleu Cap-Vert — identité CV
        'brand-bg': '#FDF0DC', // Crème chaud — fond principal
        'brand-text': '#1A1A2A', // Quasi-noir — texte
        white: '#FFFFFF',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-poppins)', 'sans-serif'],
      },
      spacing: {
        section: '120px',
        'section-sm': '60px',
      },
      borderRadius: {
        card: '16px',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.10)',
        hero: '0 20px 50px rgba(0,0,0,0.4)',
        glow: '0 0 20px rgba(245,184,0,0.4)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        countdown: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'scroll': 'scroll 20s linear infinite',
        'countdown': 'countdown 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
