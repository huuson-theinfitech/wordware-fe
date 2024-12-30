/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#211f1c',
        'red-coral': '#ff5757',
        'blue-cobalt': '#004aad',
        'blue-text': '#092056',
        'pink-magenta': '#cb6ce6',
        'blue-light': '#49adf4',
        green: '#00bf63',
        'green-light': '#7fd8be',
        orange: '#ee6c4d',
        'body-grey': '#F9FAFB'
      },
      backgroundImage: {
        'gradient-lavender': 'linear-gradient(135deg, #C9BED9, #E4D2F0)',
        'background-image': "url('./src/assets/bg-background.jpg')"
      }
    }
  },
  plugins: []
}
