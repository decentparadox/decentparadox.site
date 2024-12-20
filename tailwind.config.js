// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const { SiAccenture } = require('react-icons/si')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
    content: [
        './node_modules/pliny/**/*.js',
        './src/app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,tsx}',
        './src/components/**/*.{js,ts,tsx}',
        './src/layouts/**/*.{js,ts,tsx}',
        './src/data/**/*.mdx',
    ],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            screens: {
                'bento-sm': '374px',
                xs: '475px',
                'bento-md': '799px',
                'bento-lg': '1199px',
            },
            lineHeight: {
                11: '2.75rem',
                12: '3rem',
                13: '3.25rem',
                14: '3.5rem',
            },
            fontFamily: {
                sans: ['var(--font-space-jetbrains-mono)', ...fontFamily.sans],
            },
            colors: {
                // primary: colors.pink,
                gray: colors.gray,
                border: 'var(--border)',
                input: 'var(--input)',
                ring: 'var(--ring)',
                background: 'var(--background)',
                foreground: 'var(--foreground)',

                primary: {
                    DEFAULT: 'var(--primary)',
                    // DocSearch colors
                    400: 'var(--primary)',
                    500: 'var(--primary)',
                    600: 'var(--primary)',
                    foreground: 'var(--primary-foreground)',
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                    foreground: 'var(--secondary-foreground)',
                },
                tertiary: {
                    DEFAULT: 'var(--tertiary)',
                    foreground: 'var(--tertiary-foreground)',
                },
                destructive: {
                    DEFAULT: 'var(--destructive)',
                    foreground: 'var(--destructive-foreground)',
                },
                muted: {
                    DEFAULT: 'var(--muted)',
                    foreground: 'var(--muted-foreground)',
                },
                accent: {
                    DEFAULT: '#9b99ff',
                    foreground: 'var(--accent-foreground)',
                },
                popover: {
                    DEFAULT: 'var(--popover)',
                    foreground: 'var(--popover-foreground)',
                },
                card: {
                    DEFAULT: 'var(--card)',
                    foreground: 'var(--card-foreground)',
                },
            },
            borderRadius: {
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
                marquee: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                skeleton: 'skeleton 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                marquee: 'marquee 10s linear infinite',

            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        a: {
                            color: theme('colors.primary.DEFAULT'),
                            '&:hover': {
                                filter: 'brightness(1.10)',
                            },
                            code: { color: theme('colors.primary.DEFAULT') },
                        },
                        p: {
                            fontSize: '14px',
                        },
                        'h1,h2': {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                        },
                        h3: {
                            fontWeight: '600',
                        },
                        pre: {
                            fontSize: '14px !important',
                        },
                        code: {
                            color: theme('colors.primary.DEFAULT'),
                            fontSize: 'inherit',
                            fontWeight: '400',
                            backgroundColor: theme('colors.primary.foreground'),
                            borderWidth: '1px',
                            borderColor: theme('colors.border'),
                            fontFamily: 'inherit',
                            borderRadius: '0.25rem',
                            padding: '0.25rem 0.5rem',
                        },
                        'code::before': {
                            display: 'none',
                        },
                        'code::after': {
                            display: 'none',
                        },
                        img: {
                            display: 'block',
                            borderRadius: '0.5rem',
                            borderWidth: '1px',
                            borderColor: theme('colors.border'),
                            margin: '1.5rem auto !important',
                        },
                        blockquote: {
                            color: theme('colors.muted.foreground'),
                            quotes: 'none',
                            fontStyle: 'normal',
                            borderLeftColor: theme('colors.border'),
                        },
                        hr: {
                            borderColor: theme('colors.border'),
                        },
                        tr: {
                            borderColor: theme('colors.border'),
                        },
                        thead: {
                            borderColor: theme('colors.border'),
                        },
                        'li::marker': {
                            color: theme('colors.muted.foreground'),
                        },
                    },
                },
                invert: {
                    css: {
                        a: {
                            color: theme('colors.primary.DEFAULT'),
                            '&:hover': {
                                filter: 'brightness(1.10)',
                            },
                            code: { color: theme('colors.primary.DEFAULT') },
                        },
                        p: {
                            fontSize: '14px',
                        },
                        'h1,h2,h3,h4,h5,h6': {
                            color: theme('colors.gray.100'),
                        },
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('tailwindcss-animate'),
    ],
}
