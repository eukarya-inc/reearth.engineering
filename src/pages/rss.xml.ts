import rss from "@astrojs/rss";

import defaultClient from "../notion";
import { postUrl } from "../utils";

export async function GET() {
  const [posts, db] = await Promise.all([
    defaultClient.getAllPosts(),
    defaultClient.getDatabase(),
  ]);

  return rss({
    title: db.title,
    description: db.description,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: postUrl(post.slug),
      title: post.title,
      description: post.excerpt,
      pubDate: new Date(post.date),
    })),
  });
}
