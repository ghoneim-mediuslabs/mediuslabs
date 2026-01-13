import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        academic: '#2563eb',
        uniforms: '#7c3aed',
        canteen: '#ea580c',
        events: '#0d9488',
      },
    },
  },
  plugins: [],
}

export default config
