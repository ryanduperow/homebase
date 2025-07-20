import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                family: {
                    50: '#f0fdf9',   // Very light mint green
                    100: '#ccfbef',  // Light mint green
                    200: '#99f6e0',  // Soft mint
                    300: '#5eead4',  // Fresh mint
                    400: '#2dd4bf',  // Teal
                    500: '#14b8a6',  // Rich teal
                    600: '#0d9488',  // Deep teal
                    700: '#0f766e',  // Dark teal
                    800: '#115e59',  // Very dark teal
                    900: '#134e4a',  // Deepest teal
                },
                warm: {
                    50: '#fdf2f8',   // Soft pink
                    100: '#fce7f3',  // Light rose
                    200: '#fbcfe8',  // Gentle pink
                    300: '#f9a8d4',  // Soft rose
                    400: '#f472b6',  // Medium pink
                    500: '#ec4899',  // Rose
                    600: '#db2777',  // Deep rose
                    700: '#be185d',  // Dark rose
                    800: '#9d174d',  // Very dark rose
                    900: '#831843',  // Deepest rose
                },
                sage: {
                    50: '#f0fdf4',   // Very light green
                    100: '#dcfce7',  // Light mint
                    200: '#bbf7d0',  // Soft mint
                    300: '#86efac',  // Light sage
                    400: '#4ade80',  // Fresh green
                    500: '#22c55e',  // Sage green
                    600: '#16a34a',  // Deep sage
                    700: '#15803d',  // Dark sage
                    800: '#166534',  // Very dark sage
                    900: '#14532d',  // Deepest sage
                },
            },
        },
    },

    plugins: [forms],
};
