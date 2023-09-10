/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1.2rem',
			},
			fontFamily: {
				primary: ['"Inter"', 'sans-serif'],
			},
			backgroundImage: (theme) => ({
				'gradient-primary': `linear-gradient(to bottom right, ${theme('colors.green.500')}, ${theme(
					'colors.blue.500'
				)})`,
			}),
			screens: {
				xs: '380px',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/line-clamp'),
	],
};
