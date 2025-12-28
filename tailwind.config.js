/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{njk,html,js}",
    "./content/**/*.md"
  ],
  theme: {
    extend: {
      fontFamily: {
        // Military manual typography
        serif: ['Charter', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Courier New', 'Courier', 'monospace'],
      },
      colors: {
        // Field manual palette - stark, utilitarian
        manual: {
          50: '#fdfcfb',   // Paper white
          100: '#f5f3f0',  // Off-white
          200: '#e8e4df',  // Light tan
          300: '#d4cfc7',  // Warm gray
          400: '#a8a297',  // Medium gray
          500: '#7c766b',  // Dark gray
          600: '#5c564d',  // Charcoal
          700: '#3d3a34',  // Near black
          800: '#2a2722',  // Deep charcoal
          900: '#1a1815',  // Almost black
          950: '#0d0c0b',  // Black
        },
        // Minimal accent - muted olive/khaki
        accent: {
          DEFAULT: '#5c6b4a',  // Olive drab
          light: '#7a8c64',
          dark: '#3d4730',
        },
        // Alert colors for callouts
        warning: {
          bg: '#fef3cd',
          border: '#856404',
          text: '#856404',
        },
        caution: {
          bg: '#fff3cd',
          border: '#cc7a00',
          text: '#664400',
        },
        note: {
          bg: '#e8f4f8',
          border: '#2c5f6e',
          text: '#2c5f6e',
        },
      },
      fontSize: {
        // Tighter, more utilitarian scale
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.8125rem', { lineHeight: '1.5' }],
        'base': ['0.9375rem', { lineHeight: '1.7' }],
        'lg': ['1.0625rem', { lineHeight: '1.6' }],
        'xl': ['1.1875rem', { lineHeight: '1.5' }],
        '2xl': ['1.375rem', { lineHeight: '1.4' }],
        '3xl': ['1.625rem', { lineHeight: '1.3' }],
        '4xl': ['2rem', { lineHeight: '1.2' }],
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
            // Field manual typography
            fontFamily: theme('fontFamily.serif').join(', '),
            fontSize: '0.9375rem',
            lineHeight: '1.7',
            // Headers - bold, uppercase for major sections
            h1: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              borderBottom: `2px solid ${theme('colors.manual.800')}`,
              paddingBottom: '0.5rem',
              marginTop: '2rem',
            },
            h2: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.025em',
              fontSize: '1rem',
              marginTop: '2.5rem',
              marginBottom: '1rem',
              borderBottom: `1px solid ${theme('colors.manual.300')}`,
              paddingBottom: '0.375rem',
            },
            h3: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '700',
              fontSize: '0.9375rem',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            },
            h4: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '600',
              fontSize: '0.875rem',
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
            // Blockquotes - field manual callout style
            blockquote: {
              fontStyle: 'normal',
              fontWeight: '400',
              borderLeftWidth: '3px',
              borderLeftColor: theme('colors.manual.600'),
              backgroundColor: theme('colors.manual.100'),
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
              paddingLeft: '1rem',
              paddingRight: '1rem',
              marginLeft: '0',
              marginRight: '0',
            },
            // Horizontal rules
            hr: {
              borderColor: theme('colors.manual.400'),
              borderTopWidth: '1px',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            // Lists - tighter
            ul: {
              marginTop: '0.75rem',
              marginBottom: '0.75rem',
            },
            ol: {
              marginTop: '0.75rem',
              marginBottom: '0.75rem',
            },
            li: {
              marginTop: '0.25rem',
              marginBottom: '0.25rem',
            },
            // Strong - bolder
            strong: {
              fontWeight: '700',
            },
            // Code - monospace, understated
            code: {
              fontFamily: theme('fontFamily.mono').join(', '),
              fontSize: '0.875em',
              backgroundColor: theme('colors.manual.100'),
              padding: '0.125rem 0.25rem',
              borderRadius: '0',
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
              fontSize: '0.8125rem',
              borderRadius: '0',
              border: `1px solid ${theme('colors.manual.400')}`,
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
              fontWeight: '700',
              textTransform: 'uppercase',
              fontSize: '0.75rem',
              letterSpacing: '0.05em',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
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
