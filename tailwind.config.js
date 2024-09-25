// tailwind.config.js

module.exports = {
    content: [
        './*.html',
        './assets/css/*.css',
        './assets/js/*.js', // Include JavaScript if it contains Tailwind classes
    ],
    theme: {
        extend: {
            colors: {
                primary: '#8A2BE2',     // Electric Purple
                accent: '#FF69B4',      // Neon Pink
                'acid-green': '#B0FC38', // Acid Green
                background: '#222222',  // Deep Charcoal
            },
            fontFamily: {
                heading: ['"Permanent Marker"', 'cursive'],
                body: ['Montserrat', 'sans-serif'],
            },
            animation: {
                fadeInDown: 'fadeInDown 1s ease-out forwards',
                typing: 'typing 4s steps(40, end), blink 0.75s step-end infinite',
                float: 'float 3s ease-in-out infinite',
                gradientShift: 'gradientShift 10s ease infinite',
            },
            keyframes: {
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                typing: {
                    'from': { width: '0' },
                    'to': { width: '100%' },
                },
                blink: {
                    'from, to': { borderColor: 'transparent' },
                    '50%': { borderColor: 'white' },
                },
                float: {
                    '0%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                    '100%': { transform: 'translateY(0)' },
                },
                gradientShift: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            },
            spacing: {
                '18': '4.5rem',   // Adding custom spacing value
                '22': '5.5rem',
                '88': '22rem',
            },
        },
    },
    plugins: [],
};
