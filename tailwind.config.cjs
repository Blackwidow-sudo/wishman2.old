const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				md: '0 4px 8px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)'
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{ 'text-shadow': val => ({ textShadow: val }) },
				{ values: theme('textShadow') }
			)
		})
	]
}
