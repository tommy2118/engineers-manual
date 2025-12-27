/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{njk,html,js}",
    "./content/**/*.md"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      colors: {
        // Military-inspired muted palette
        manual: {
          50: '#f7f7f6',
          100: '#e5e4e2',
          200: '#cac8c4',
          300: '#a8a5a0',
          400: '#86827c',
          500: '#6b6762',
          600: '#565350',
          700: '#474542',
          800: '#3b3938',
          900: '#343231',
          950: '#1a1918',
        },
        accent: {
          DEFAULT: '#b45309',
          light: '#d97706',
          dark: '#92400e',
        }
      },
      typography: (theme) => ({
        manual: {
          css: {
            '--tw-prose-body': theme('colors.manual.800'),
            '--tw-prose-headings': theme('colors.manual.950'),
            '--tw-prose-links': theme('colors.accent.DEFAULT'),
            '--tw-prose-bold': theme('colors.manual.900'),
            '--tw-prose-counters': theme('colors.manual.600'),
            '--tw-prose-bullets': theme('colors.manual.400'),
            '--tw-prose-hr': theme('colors.manual.200'),
            '--tw-prose-quotes': theme('colors.manual.700'),
            '--tw-prose-quote-borders': theme('colors.accent.DEFAULT'),
            '--tw-prose-code': theme('colors.manual.900'),
            '--tw-prose-pre-code': theme('colors.manual.200'),
            '--tw-prose-pre-bg': theme('colors.manual.900'),
            '--tw-prose-th-borders': theme('colors.manual.300'),
            '--tw-prose-td-borders': theme('colors.manual.200'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
