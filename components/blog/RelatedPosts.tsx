"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { BlogCard } from "./BlogCard";

export const RelatedPosts: React.FC<{ currentTags: string[]; currentPostId: string }> = ({
  currentTags,
  currentPostId,
}) => {
  const [relatedPosts, setRelatedPosts] = useState<
    { _id: string; title: string; slug: string; mainImage: string; publishedAt: string; body: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRelatedPosts() {
      try {
        const query = `
          *[_type == "post" && count(categories[@->title in $categories]) > 0 && _id != $currentPostId][0...4] {
            _id,
            title,
            slug,
            mainImage,
            publishedAt,
            body
          }
        `;
        const posts = await client.fetch(query, {
          categories: currentTags,
          currentPostId,
        });

        setRelatedPosts(posts);
      } catch (error) {
        console.error("Failed to fetch related posts:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (currentTags.length > 0) {
      fetchRelatedPosts();
    } else {
      setIsLoading(false);
    }
  }, [currentTags, currentPostId]);

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading related posts...</p>;
  }

  if (!relatedPosts.length) {
    return (
      <section className="mt-12 text-center">
        <p className="text-gray-600">No related posts found.</p>
      </section>
    );
  }

  return (
    <section className="mt-12">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {relatedPosts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
};
