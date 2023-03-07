/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
    content: ["./*.{html,js}"],
    extend: {
    },
    plugins: [
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                'mono': ['roboto-mono'],
            },
        },
    }
}
