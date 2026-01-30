// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	integrations: [mdx()], // to support MDX files
	/**
	 * Okay so apparently, say I am running in localhost, and I have a path that goes "./something", then depending on how the link is perceived, I'll have different behaviours
	 * If I am at /talks, and I do href to ./hello, then I'll end up at /hello
	 * But if I am at /talks/ and I do href to ./hello, then I'll end up at /talks/hello
	 * This issue won't be for remote because GitHub Pages forces each page to be viewed as a directory for each and every one of 'em (0.0)
	 * 
	 * NOTE: Gotta remove relative paths, need root relative paths from now on.
	 */
	trailingSlash: "always",
	build: {
		format: "preserve",
	},

	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [
			[rehypeKatex, {
				// we can define custom LaTeX macros here
			}]
		],
		shikiConfig: {
			theme: "gruvbox-dark-hard",
			wrap: true,
		}
	},

	site: "https://spidermath.github.io",

	vite: {
		plugins: [tailwindcss()]
	}
});