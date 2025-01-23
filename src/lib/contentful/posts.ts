import { contentfulClient } from "./service";
import type { TypePostSkeleton, TypePost } from "./types";

export interface Post {
  title: string;
  slug: string;
  previewText: string;
  date: Date;
  content: string;
}

type PostEntry = TypePost<undefined>;

const parsePostEntry = (entry: PostEntry): Post => {
  return {
    title: entry.fields.title,
    slug: entry.fields.slug,
    previewText: entry.fields.previewText || "no preview (todo)",
    date: new Date(entry.fields.date),
    content: entry.fields.content,
  };
};

export const getPosts = async () => {
  const postResults = await contentfulClient.getEntries<TypePostSkeleton>({
    content_type: "post",
    order: ["-fields.date"],
  });

  return postResults.items.map((e) => parsePostEntry(e));
};

export const getPostBySlug = async (slug: string) => {
  const postResults = await contentfulClient.getEntries<TypePostSkeleton>({
    content_type: "post",
    "fields.slug": slug,
    limit: 1,
  });

  if (postResults.items.length === 0) {
    throw new Error(`Post with slug "${slug}" not found.`);
  }

  return parsePostEntry(postResults.items[0]);
};
