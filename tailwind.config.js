import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontfamily:{
        "ubuntu-bold": ['Ubuntu-Bold', 'sans-serif'],
        "ubuntu-regular": ['Ubuntu-Regular', 'sans-serif'],
        "ubuntu-medium": ['Ubuntu-Medium', 'sans-serif']
      },
      colors: {
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B',
        },
        Marine_blu: "hsl(213, 96%, 18%)",
        Purplish_blue: "hsl(243, 100%, 62%)",
        Pastel_blue: "hsl(228, 100%, 84%)",
        Light_blue: "hsl(206, 94%, 87%)",
        Strawberry_red: "hsl(354, 84%, 57%)",
        Cool_gray: "hsl(231, 11%, 63%)",
        Light_gray: "hsl(229, 24%, 87%)",
        Magnolia: "hsl(217, 100%, 97%)",
        Alabaster: "hsl(231, 100%, 99%)",

      },
      },
    },
  plugins: [flowbitePlugin],
};
