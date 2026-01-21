// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx()],

    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [
            [rehypeKatex, {
                // we can define custom LaTeX macros here
            }]
        ],
        shikiConfig: {
            theme: "catppuccin-mocha",
        }
    },

    site: "https://spidermath.github.io",

    vite: {
        plugins: [tailwindcss()]
    }
});