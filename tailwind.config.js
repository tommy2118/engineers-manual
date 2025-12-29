/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{njk,html,js}",
    "./content/**/*.md"
  ],
  theme: {
    extend: {
      fontFamily: {
        // Manual typography with a modern twist
        serif: ['"Source Serif 4"', 'Charter', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['"Space Grotesk"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"Courier New"', 'Courier', 'monospace'],
      },
      colors: {
        // Field manual palette - stark, utilitarian
        manual: {
          50: '#fefdfb',
          100: '#f9f4eb',
          200: '#f0e5d4',
          300: '#dfcfba',
          400: '#b8a78d',
          500: '#928572',
          600: '#6d5f4d',
          700: '#514433',
          800: '#3a3023',
          900: '#241d16',
          950: '#120e0a',
        },
        // Minimal accent - muted olive/khaki
        accent: {
          DEFAULT: '#3f6945',
          light: '#5a8c63',
          dark: '#24452b',
          neon: '#d4ff57',
        },
        highlight: {
          DEFAULT: '#f0f7f4',
          border: '#c8e0d0',
        },
        // Alert colors for callouts
        warning: {
          bg: '#fff4e1',
          border: '#f9782c',
          text: '#8a3f00',
        },
        caution: {
          bg: '#fff0f0',
          border: '#ff4d6d',
          text: '#8f1d38',
        },
        note: {
          bg: '#ebf5ff',
          border: '#2563eb',
          text: '#1d4ed8',
        },
      },
      fontSize: {
        // Readable scale - mobile-first
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.75' }],
        'lg': ['1.125rem', { lineHeight: '1.7' }],
        'xl': ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
      },
      spacing: {
        '18': '4.5rem',
      },
      typography: (theme) => ({
        manual: {
          css: {
            '--tw-prose-body': theme('colors.manual.800'),
            '--tw-prose-headings': theme('colors.manual.950'),
            '--tw-prose-links': theme('colors.manual.800'),
            '--tw-prose-bold': theme('colors.manual.900'),
            '--tw-prose-counters': theme('colors.manual.600'),
            '--tw-prose-bullets': theme('colors.manual.600'),
            '--tw-prose-hr': theme('colors.manual.400'),
            '--tw-prose-quotes': theme('colors.manual.700'),
            '--tw-prose-quote-borders': theme('colors.manual.600'),
            '--tw-prose-code': theme('colors.manual.900'),
            '--tw-prose-pre-code': theme('colors.manual.100'),
            '--tw-prose-pre-bg': theme('colors.manual.900'),
            '--tw-prose-th-borders': theme('colors.manual.400'),
            '--tw-prose-td-borders': theme('colors.manual.300'),
            // Readable prose typography
            fontFamily: theme('fontFamily.serif').join(', '),
            fontSize: '1rem',
            lineHeight: '1.75',
            // Headers - clear hierarchy, no uppercase fatigue
            h1: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '700',
              fontSize: '1.875rem',
              letterSpacing: '-0.02em',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h2: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '700',
              fontSize: '1.375rem',
              letterSpacing: '-0.01em',
              marginTop: '2.5rem',
              marginBottom: '1rem',
            },
            h3: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '600',
              fontSize: '1.125rem',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            },
            h4: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '600',
              fontSize: '1rem',
              marginTop: '1.5rem',
              marginBottom: '0.5rem',
            },
            // Links - understated, underlined
            a: {
              color: theme('colors.manual.800'),
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
              '&:hover': {
                color: theme('colors.manual.950'),
              },
            },
            // Blockquotes - accent border, subtle background
            blockquote: {
              fontStyle: 'normal',
              fontWeight: '400',
              borderLeftWidth: '4px',
              borderLeftColor: theme('colors.accent.DEFAULT'),
              backgroundColor: theme('colors.manual.50'),
              paddingTop: '1rem',
              paddingBottom: '1rem',
              paddingLeft: '1.25rem',
              paddingRight: '1.25rem',
              marginLeft: '0',
              marginRight: '0',
              borderRadius: '0 0.25rem 0.25rem 0',
            },
            // Horizontal rules
            hr: {
              borderColor: theme('colors.manual.400'),
              borderTopWidth: '1px',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            // Lists - scannable spacing
            ul: {
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            ol: {
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            // Strong - bolder
            strong: {
              fontWeight: '700',
            },
            // Code - readable, good contrast
            code: {
              fontFamily: theme('fontFamily.mono').join(', '),
              fontSize: '0.9em',
              backgroundColor: theme('colors.manual.100'),
              color: theme('colors.manual.800'),
              padding: '0.2rem 0.4rem',
              borderRadius: '0.25rem',
              border: `1px solid ${theme('colors.manual.300')}`,
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              fontFamily: theme('fontFamily.mono').join(', '),
              fontSize: '0.9rem',
              lineHeight: '1.6',
              borderRadius: '0.5rem',
              border: `1px solid ${theme('colors.manual.300')}`,
              backgroundColor: theme('colors.manual.900'),
              color: theme('colors.manual.100'),
              padding: '1.25rem',
              overflowX: 'auto',
            },
            'pre code': {
              backgroundColor: 'transparent',
              border: 'none',
              padding: '0',
              fontSize: 'inherit',
              color: 'inherit',
            },
            // Tables - utilitarian
            table: {
              fontSize: '0.875rem',
            },
            thead: {
              borderBottomWidth: '2px',
              borderBottomColor: theme('colors.manual.600'),
            },
            'thead th': {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '600',
              fontSize: '0.875rem',
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
            },
            'tbody tr': {
              borderBottomColor: theme('colors.manual.200'),
            },
            'tbody td': {
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
