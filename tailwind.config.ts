import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: '#F3F4F7',
        background: '#00020A',
        accent: '#6F799F',
        red: '#DE3D3D',
        green: '#3C7D53',
        blue: '#3D74DE',
        primary: '#BFC3D4',
        secondary: '#121521'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
export default config
