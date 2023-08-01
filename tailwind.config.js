/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      spacing: {
        14: '125'
      },
      colors: {
        hoverspt: '#18D760',
        'purple-main': '#2D46B9',
        'green-main': '#1ED760'
      },
      backgroundImage: {
        'spotify-theme': 'url(../assets/bursts.svg)',
        'spotify-theme-mobile': 'url(../assets/bursts-mobile.svg)'
      },
      backgroundSize: {
        '175%': '175%',
        '195%': '195%'
      },
      backgroundPosition: {
        banner: '46% 4%',
        'banner-mobile': 'top 25% center'
      },
      fontSize: {
        '9xl': '9rem'
      }
    }
  },
  plugins: []
}
