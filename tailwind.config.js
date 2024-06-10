/** @type {import('tailwindcss').Config} */
export default {
	content: [
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'system-ui', 'sans-serif'],
			},
			spacing: {
				'128': '32rem',
				'144': '36rem',
				'160': '40rem',
				'192': '42rem',
			},
			colors: {
				'grayish': '#edf1f4',
			},
			backgroundImage: {
				'intro': "url('/src/assets/abstract-bg.jpg')"
			},
			fontSize: {
				'10xl': '10rem',
				'12xl': '14rem',
			},
			screens: {
				'sm': {'min': '0', 'max': '500px'},
				'md': {'min': '501px', 'max': '800px'},
				'lg': { 'min': '801px', 'max': '1024px' },
				'xl': { 'min': '1025px', 'max': '1280px' },
			}
		},
	},
	plugins: [],
}
