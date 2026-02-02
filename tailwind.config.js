/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1A3C8B',
                secondary: '#4F46E5',
                accent: '#10B981',
            },
            fontFamily: {
                sans: ['Poppins', 'system-ui', 'sans-serif'],
                serif: ['EB Garamond', 'Georgia', 'serif'],
                heading: ['EB Garamond', 'Georgia', 'serif'],
                body: ['Poppins', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
