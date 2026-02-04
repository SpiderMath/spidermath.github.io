/**
 * For those wondering, this is just an endpoint OMG?!
 * .astro pages correspond to pages, but .ts files correspond to endpoints
 */

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

// If there's a God or a plurality that exist, they are witness to the fact that I tried to give a type to "context" parameter
export async function GET(context: any) {
    const blogs = await getCollection("blogs");

    return rss({
        title: "Shankha Suvra Dam's Blogs",
        description: "My personal blog collection",
        site: context.site,
        items: blogs
            .map((post) => ({
                title: post.data.title,
                pubDate: post.data.pubDate,
                description: post.data.description,
                link: `/blog/${post.id}`,
            })),
        customData: "<language>en-IN</language>"
    })
}
