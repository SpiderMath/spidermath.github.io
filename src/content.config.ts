import {
    defineCollection, z
} from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
    loader: glob({
        pattern: "**/[^_]*.{md,mdx}",
        base: "./src/content/blog",
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
        backgroundImage: z.string().optional(),
        tags: z.array(z.string()).optional(),

        // z.coerce allows strings to automatically become date objects
        lastModified: z.coerce.date().optional(),
        pubDate: z.coerce.date().optional(),
    }),
});

export const collections = {
    blogs: blogCollection
}