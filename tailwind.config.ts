import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#19365e',
        charcoal: '#32373c',
        gold: '#C9A84C',
        cream: '#FAF6EF',
        ink: '#1A1108',
        white: '#ffffff',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-baskerville)', 'Georgia', 'serif'],
        stamp: ['var(--font-special-elite)', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'paper-grain': "url('/textures/paper-grain.png')",
        'hatch': "url('/textures/hatch.png')",
      },
    },
  },
  plugins: [],
}

export default config
