/** @type {import('tailwindcss').Config} */

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
