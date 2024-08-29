/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			roboto: ['RobotoFlex', 'sans-serif'],
			inter: ['"Inter Tight"', 'sans-serif'],
			superbro: ['SuperBrother', 'sans-serif']
		},
		colors: {
			background: {
				DEFAULT: 'rgb(var(--bg-surface))',
				light: 'var(--light-surface-content-primary)'
			},
			transparent: 'transparent',
			border: {
				DEFAULT: 'var(--light-surface-border-default)',
				light: 'var(--light-surface-border-light)'
			},
			content: {
				primary: 'rgb(var(--light-surface-content-primary))',
				secondary: 'var(--light-surface-content-secondary)',
				tertiary: 'var(--light-surface-content-tertiary)'
			},
			icon: {
				DEFAULT: 'var(--light-surface-icons-default)',
				accent: 'var(--light-surface-icons-accent)'
			},
			top: {
				light: {
					45: 'var(--bg-top-light-45)',
					38: 'var(--bg-top-light-38)',
					30: 'var(--bg-top-light-30)',
					17: 'var(--bg-top-light-17)',
					10: 'var(--bg-top-light-10)',
					2: 'var(--bg-top-light-2)'
				},
				dark: {
					83: 'var(--bg-top-dark-83)',
					63: 'var(--bg-top-dark-63)',
					44: 'var(--bg-top-dark-44)',
					26: 'var(--bg-top-dark-26)',
					10: 'var(--bg-top-dark-10)',
					0: 'var(--bg-top-dark-0)'
				}
			},
			yellow: {
				DEFAULT: 'rgb(var(--yellow-primary))',
				secondary: 'var(--yellow-secondary)',
				bg: {
					top: 'var(--yellow-bg-top)',
					surface: 'var(--yellow-bg-surface)'
				}
			},
			green: {
				DEFAULT: 'rgb(var(--green-primary))',
				secondary: 'var(--green-secondary)',
				bg: {
					top: 'var(--green-bg-top)',
					surface: 'var(--green-bg-surface)'
				}
			},
			red: {
				DEFAULT: 'rgb(var(--red-primary))',
				secondary: 'var(--red-secondary)',
				bg: {
					top: 'var(--red-bg-top)',
					surface: 'var(--red-bg-surface)'
				}
			},

			violete: 'rgb(var(--violete-bg))',

			black: 'rgb(var(--black))',

			primary: {
				red: {
					DEFAULT: 'rgb(var(--primary-red-primary))',
					light: 'rgb(var(--primary-red-light))',
					bg: {
						top: 'var(--primary-red-bg-top)',
						surface: 'var(--primary-red-bg-surface)'
					}
				},
				violete: {
					DEFAULT: 'rgb(var(--primary-violete-primary-default))',
					secondary: 'var(--primary-violete-secondary)',
					tertiary: 'var(--primary-violete-tertiary)',
					light: 'rgb(var(--primary-violete-primary-light))',
					bg: {
						top: 'var(--primary-violete-bg-top',
						surface: 'var(--primary-violete-bg-surface)'
					}
				},
				orange: {
					DEFAULT: 'rgb(var(--primary-orange-primary))',
					light: 'rgb(var(--primary-orange-light))',
					bg: {
						top: 'var(--primary-orange-bg-top)',
						surface: 'var(--primary-orange-bg-surface)'
					}
				}
			}
		},
		lineHeight: {
			7: '64px',
			5: '48px',
			4: '40px',
			4: '36px',
			3: '28px',
			2: '24px',
			1: '20px'
		},
		fontSize: {
			xxs: ['10px', '12px'],
			xs: ['13px', '16px'],
			sm: ['14px', '20px'],
			md: ['16px', '20px'],
			base: ['17px', '24px'],
			lg: ['20px', '28px'],
			mlg: ['27px', '32px'],
			xl: ['30px', '36px'],
			'2xl': ['36px', '40px'],
			'3xl': ['48px', '46px']
		},
		blur: {
			2: '2px',
			4: '4px',
			6: '6px',
			8: '8px',
			16: '16px',
			64: '64px',
			128: '128px'
		},
		backgroundSize: {
			discordsize: '11%'
		},
		boxShadow: {
			green: '0px 14px 36px -30px rgba(106, 255, 103, 0.09)',
			red: '0px 14px 36px -30px rgba(255, 214, 67, 0.09)',
			yellow: '0px 14px 36px -30px rgba(255, 114, 95, 0.09)',
			primary: '0px 14px 36px -30px rgba(136, 0, 240, 0.7)',
			voilete1: '0px 4px 12px 4px rgba(255, 114, 95, 0.09)',
			voilete2: '0px 4px 16px 4px rgba(136, 0, 240, 0.3)',
			voileteSwitch: '0px 4px 12px 4px rgba(136, 0, 240, 0.2)',
			tooltip: '0px 4px 24px 0px rgba(0, 0, 0, 0.35)'
		},
		extend: {
			dropShadow: {
				orange: '0px 0px 20px rgb(var(--primary-orange-light))',
				red: '0px 0px 20px rgb(var(--primary-red-light))',
				primary: '0px 0px 20px rgb(var(--light-surface-content-primary))',
				tertiary: '0px 0px 20px var(--light-surface-content-tertiary)'
			},
			padding: {
				globalGutter: 'var(--Global-gutter)',
				4.5: '1.125rem',
				3.5: '0.875rem',
				22: '5.5rem',
				26: '6.5rem',
				37: '9.25rem',
				39: '9.75rem',
				55: '13.75rem',
				65: '16.25rem',
				93: '23.25rem',
				'1/2': '50%',
				'1/4': '25%'
			},
			gap: {
				globalGutter: 'var(--Global-gutter)',
				1.5: '0.375rem',
				4.5: '1.125rem',
				9.5: '2.375rem',
				30: '7.5rem',
				41: '10.25rem'
			},
			margin: {
				41: '10.25rem',
				0.25: '0.0625rem',
				26: '6.5rem'
			},
			borderRadius: {
				xs: '2px',
				sm: '4px',
				md: '8px',
				lg: '12px',
				xl: '16px'
			},
			spacing: {
				18: '4.5rem',
				19: '4.75rem',
				'1/5': '20%',
				'1/6': '16.6%',
				'1/8': '12.5%',
				'1/10': '10%'
			},
			height: {
				13: '3.25rem',
				25: '6.25rem',
				58: '14.5rem'
			},
			width: {
				13: '3.25rem',
				25: '6.25rem',
				35: '8.75rem'
			},
			maxWidth: {
				'screen-3xl': '1920px'
			},
			backgroundImage: {
				cta2: "url('https://cdn.nohesi.gg/assets/website/images/home-2.webp')",
				cta1: "url('https://cdn.nohesi.gg/assets/website/images/home-1.webp')",
				cta1_mobile: "url('https://cdn.nohesi.gg/assets/website/images/home-1sm.webp')",
				shop: "url('/images/shop.png')",
				shop_mobile: "url('/images/shop_mobile.png')",
				fivem:
					"linear-gradient(180deg, var(--bg-top-dark-0) 0%, var(--bg-top-dark-90) 100%), url('/images/fivem.png')",
				hero_gradient: 'linear-gradient(109deg, #08060a 0%, rgba(8, 6, 10, 0) 100%)',
				car: "url('/images/car.png')",
				map_415:
					"linear-gradient(180deg, #08060A 0%, rgba(8, 6, 10, 0) 50%, #08060A 100%), linear-gradient(270deg, #08060A 0%, rgba(8, 6, 10, 0) 20%, rgba(8, 6, 10, 0) 80%, #08060A 100%), url('https://cdn.nohesi.gg/assets/website/images/maps/415.webp')"
			},
			rotate: {
				20: '20deg'
			},
			screens: {
				xs: '450px',
				xl: '1250px',
				'2xl': '1440px',
				'3xl': '1920px',
				'4xl': '2160px'
			},
			keyframes: {
				pulse: {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '.5'
					}
				}
			},
			animation: {
				pulse: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			}
		}
	},
	plugins: []
};
