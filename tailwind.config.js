const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', 'class'],
  theme: {
  	extend: {
  		animation: {
  			first: 'moveVertical 30s ease infinite',
  			second: 'moveInCircle 20s reverse infinite',
  			third: 'moveInCircle 40s linear infinite',
  			fourth: 'moveHorizontal 40s ease infinite',
  			fifth: 'moveInCircle 20s ease infinite'
  		},
  		keyframes: {
  			moveHorizontal: {
  				'0%': {
  					transform: 'translateX(-50%) translateY(-10%)'
  				},
  				'50%': {
  					transform: 'translateX(50%) translateY(10%)'
  				},
  				'100%': {
  					transform: 'translateX(-50%) translateY(-10%)'
  				}
  			},
  			moveInCircle: {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'50%': {
  					transform: 'rotate(180deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			moveVertical: {
  				'0%': {
  					transform: 'translateY(-50%)'
  				},
  				'50%': {
  					transform: 'translateY(50%)'
  				},
  				'100%': {
  					transform: 'translateY(-50%)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [addVariablesForColors, require("tailwindcss-animate")],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ':root': newVars,
  })
}
