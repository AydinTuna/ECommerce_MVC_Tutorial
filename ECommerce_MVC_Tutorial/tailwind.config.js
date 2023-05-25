/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './Pages/**/*.cshtml',
        './Views/**/*.cshtml',
        './node_modules/flowbite/**/*.js',
        './**/*.{html,js}'
    ],
    theme: {
        extend: {},
    },
    plugins: [require('flowbite/plugin')],
}
