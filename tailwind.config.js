const colors = require('tailwindcss/colors');

module.exports = {
    future: {
        purgeLayersByDefault: true,
        applyComplexClasses: true,
    },
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // 'media' or 'class'
    theme: {
        extend: {
            textColor: {
                'purple-10': '#43457C',
            },
            textColor: ['active'],
            backgroundColor: (theme) => ({
                ...theme('colors'),
                'green-10': '#F2F5F9',
                'green-20': '#EFF8F7',
                'blue-20': '#32ADFF',
                'blue-10': '#3ACFB3',
                'blue-30': '#32ADFF',
                'blue-40': '#20AFFF',
                'blue-40': '#20AFFF',
                'primary': '#3ACFB3',
            }),
            borderColor: (theme) => ({
                ...theme('colors'),
                DEFAULT: theme('colors.gray.300', 'currentColor'),
                'primary': '#3ACFB3',
                'red-10': '#F6A27E',
                'gray-10': '#8A8E96',
                'yellow-10': '#F3C56D',
            }),
            textColor: {
                'primary': '#3ACFB3',
                'secondary': '#ffed4a',
                'danger': '#e3342f',
            },
            zIndex: {},
            keyframes: {
                opacity: {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                },
                spinner: {
                    from: {
                        transform: 'rotate(0deg)',
                    },
                    to: {
                        transform: ' rotate(360deg)',
                    },
                },
                fadeLeft: {
                    '0%': {
                        transform: 'translateX(-50px)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateX(0px)',
                        opacity: 1,
                    },
                },
                fadeRight: {
                    '0%': {
                        transform: 'translateX(50px)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateX(0px)',
                        opacity: 1,
                    },
                },
            },
            animation: {
                spinner: ' spinner 1s linear infinite',
                opacity: 'opacity 0.2s ease-in-out',
                fadeLeft: 'fadeLeft 1s ease-in-out',
                fadeRight: 'fadeRight 1s ease-in-out',
            },
            width: {
                'max-content': 'max-content',
                '100': '45rem',
                '42': '10.6rem',
                '25': '6.5rem',
            },
            height: {
                'max-content': 'max-content',
                '100': '45rem',
                '42': '10.6rem',
                '25': '6.5rem',
            },
            maxWidth: {
                '8xl': '1920px',
            },
            spacing: {
                '100': '45rem',
                '90': '35rem',
                '75': '18.2rem',
            },
            colors: {
                gray: {
                    ...colors.gray,
                    250: '#f5f5f5',
                },
                green: {
                    ...colors.green,
                    550: '#23c0b5',
                },
            },
            textColor: {},
            boxShadow: {
                'outline-2': '0 0 0 2px var(--accents-2)',
                magical:
                    'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
            },
            lineHeight: {
                'extra-loose': '2.2',
            },
            scale: {
                120: '1.2',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
