/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Karla', 'Poppins', 'sans-serif'],
				body: 'Inter, sans-serif',
			},
			backgroundImage: {
				'react-logo-large': "url('./src/images/react-logo-large.png')",
			},
		},
	},
	plugins: [],
};
