/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {},
            fontFamily: {
                general: ['Cabin', 'sans-serif'],
            },
            screens: {
                sm: '375px',
            },
            colors: {
                card: '#2E3039',
                secondary: '#A9AEC0',
                'icon-hover': '#95B58A',
            },
        },
    },
    plugins: [],
};
