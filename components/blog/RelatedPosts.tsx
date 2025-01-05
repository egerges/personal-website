"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { BlogCard } from "./BlogCard";

export const RelatedPosts: React.FC<{ currentTags: string[] }> = ({ currentTags }) => {
  const [relatedPosts, setRelatedPosts] = useState<{ _id: string; title: string; slug: string; mainImage: string; publishedAt: string; body: string }[]>([]);

  useEffect(() => {
    async function fetchRelatedPosts() {
      try {
        const query = `*[_type == "post" && categories[]->title in $tags][0...4] {
          _id, title, slug, mainImage, publishedAt, body
        }`;
        const posts = await client.fetch(query, { tags: currentTags });

        setRelatedPosts(posts);
      } catch (error) {
        console.error("Failed to fetch related posts:", error);
      }
    }

    if (currentTags.length > 0) {
      fetchRelatedPosts();
    }
  }, [currentTags]);

  if (!relatedPosts.length) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Posts</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {relatedPosts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
};
