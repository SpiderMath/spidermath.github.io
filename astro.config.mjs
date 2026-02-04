// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from "@astrojs/sitemap";
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
    integrations: [
		sitemap(), // to support MDX files
		mdx(), // to support MDX files
	],

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
	// site:"http://localhost:4321",

    vite: {
        plugins: [tailwindcss()]
    }
});