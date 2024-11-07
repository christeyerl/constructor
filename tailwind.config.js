import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./resources/**/*.{antlers.html,blade.php,js,vue}'],
  theme: {
    extend: {
      fontFamily: {
        space: ["'Space Grotesk'", 'sans-serif'],
      }
    },
  },
  plugins: [forms, typography],
};
