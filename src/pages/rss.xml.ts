import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import { getPosts } from "../lib/contentful/posts";

export const GET: APIRoute = async (context) => {
  const posts = await getPosts(true);

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site as URL,
    items: posts.map((post) => ({
      title: post.title,
      link: `/posts/${post.slug}/`,
      description: post.previewText,
      pubDate: post.date,
      content: post.content,
    })),
  });
};
