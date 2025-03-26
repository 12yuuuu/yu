
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				blue: {
					50: '#F0F7FF',
					100: '#E0EFFF',
					200: '#B8DBFF',
					300: '#8AC7FF',
					400: '#5AB3FF',
					500: '#2B9FFF',
					600: '#0A7FF5',
					700: '#0062D6',
					800: '#0052B3',
					900: '#003B80',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				slideDown: {
					'0%': { transform: 'translateY(-20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				slideLeft: {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				slideRight: {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				wave: {
					'0%': { transform: 'rotate(0.0deg)' },
					'10%': { transform: 'rotate(14.0deg)' },
					'20%': { transform: 'rotate(-8.0deg)' },
					'30%': { transform: 'rotate(14.0deg)' },
					'40%': { transform: 'rotate(-4.0deg)' },
					'50%': { transform: 'rotate(10.0deg)' },
					'60%': { transform: 'rotate(0.0deg)' },
					'100%': { transform: 'rotate(0.0deg)' },
				},
				float: {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
					'100%': { transform: 'translateY(0px)' },
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				'cat-blink': {
					'0%, 45%, 55%, 100%': { transform: 'scaleY(1)' },
					'50%': { transform: 'scaleY(0.1)' },
				},
				'cat-tail': {
					'0%': { transform: 'rotate(-15deg)' },
					'25%': { transform: 'rotate(-5deg)' },
					'50%': { transform: 'rotate(15deg)' },
					'75%': { transform: 'rotate(5deg)' },
					'100%': { transform: 'rotate(-15deg)' },
				},
				rippleLine: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(200%)' },
				},
				waveLine: {
					'0%': { transform: 'translateX(0) scaleX(0.95)' },
					'50%': { transform: 'translateX(10px) scaleX(1.05)' },
					'100%': { transform: 'translateX(0) scaleX(0.95)' },
				},
				driftCloud: {
					'0%': { transform: 'translateX(-100px)' },
					'100%': { transform: 'translateX(calc(100vw + 200px))' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.6s ease-out forwards',
				'slide-up': 'slideUp 0.6s ease-out forwards',
				'slide-down': 'slideDown 0.6s ease-out forwards',
				'slide-left': 'slideLeft 0.6s ease-out forwards',
				'slide-right': 'slideRight 0.6s ease-out forwards',
				'wave': 'wave 2.5s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'pulse': 'pulse 3s ease-in-out infinite',
				'cat-blink': 'cat-blink 4s ease-in-out infinite',
				'cat-tail': 'cat-tail 4.5s ease-in-out infinite',
				'ripple-line': 'rippleLine 15s linear infinite',
				'wave-line': 'waveLine 10s ease-in-out infinite',
				'drift-cloud': 'driftCloud 45s linear infinite',
			},
			fontFamily: {
				sans: ['Inter var', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
				orbitron: ['Orbitron', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				lato: ['Lato', 'sans-serif'],
				quantico: ['Quantico', 'sans-serif'],
				'share-tech-mono': ['"Share Tech Mono"', 'monospace'],
			},
			transitionProperty: {
				'height': 'height',
				'spacing': 'margin, padding',
			},
			transitionTimingFunction: {
				'bounce': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
