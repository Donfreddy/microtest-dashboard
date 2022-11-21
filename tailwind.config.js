// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  enabled: process.env.NODE_ENV === 'production',
  purge: ['./src/**/*.vue', './src/**/*.ts'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#e67814',
      secondary: '#000080',
      dark: '#232931',
      grey: '#999999',
      ...defaultTheme.colors,
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
