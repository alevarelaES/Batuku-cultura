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
        primary: '#003893',   // Bleu Cap-Verdien (Océan) - DOMINANT
        deep: '#0B1B3D',      // Bleu marin très sombre
        orange: '#E8751A',    // Orange chaud - ENERGIE
        yellow: '#F7D116',    // Jaune Soleil - ACCENT
        red: '#CE1126',       // Rouge PALOP
        green: '#1A6B3C',     // Vert Panafricain
        'brand-bg': '#F5EDE3', // Crème sableux
        'brand-text': '#101015', // Noir brut
        white: '#FFFFFF',
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        body: ['"Cabinet Grotesk"', 'sans-serif'],
      },
      spacing: {
        section: '140px',
        'section-sm': '80px',
      },
      borderRadius: {
        card: '0px', // Brutalisme: angles droits
        pill: '9999px',
      },
      boxShadow: {
        brutal: '8px 8px 0px rgba(0,0,0,1)', // Ombre brute 
        card: '0 4px 24px rgba(0,0,0,0.06)',
        hero: '0 20px 50px rgba(0,0,0,0.15)',
        glow: '0 0 40px rgba(212,175,55,0.4)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        reveal: {
          '0%': { clipPath: 'inset(100% 0 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee 25s linear infinite',
        'reveal': 'reveal 1s cubic-bezier(0.77, 0, 0.175, 1) forwards',
      },
      backgroundImage: {
        'noise': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNCIvPgo8L3N2Zz4=')",
      }
    },
  },
  plugins: [],
}

export default config
