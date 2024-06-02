import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { no_theme } from './src/no_theme';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			keyframes: {
				moveUp: {
					'0%': { bottom: '0' },
					'100%': { bottom: '60%' }
				}
			},
			animation: {
				moveUp: 'moveUp 0.5s forwards'
			}
		}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: ['hamlindigo'],
				custom: [no_theme]
			}
		})
	]
} satisfies Config;
