/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                sm: "428px",
            },
            colors: {
                primary: "#3E334E",
                "iris-80": "#7879F1",
            },
            fontSize: {
                md: ["1rem", "1rem"],
                "heading-xl": ["2rem", "3rem"],
                "heading-2": ["1.5rem", "1.5rem"],
            },
            borderRadius: {
                md: "0.5rem",
            },
        },
    },
    plugins: [],
};
