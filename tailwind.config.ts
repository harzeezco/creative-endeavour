import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#737373',
          50: '#2D313A',
          100: '#6f7d93',
          200: '#697485',
          300: '#FAFAFA',
          350: '#181A2E',

          400: '#344054',
          500: '#303864',
          600: '#1f3d5c',
          650: '#F2F4F7',
          700: '#336699',
          750: '#172E45',
        },
        body: {
          DEFAULT: '#0A0A0A',
        },
        tint: {
          DEFAULT: 'rgba(0, 0, 0, 0.1)',
          50: '#EFF7FF',
          100: '#D0D5DD',
          200: '#EAECF0',
          300: '#667085',
          350: '#697485',
          400: '#344054',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '0rem',
          lg: '0rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '840px',
          md: '968px',
          lg: '1100px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        bricolage: ['var(--font-nebulica)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        scroll:
          'scroll var(--animation-duration, 50s) var(--animation-direction, forwards) linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
