"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { BlogCard } from "@components/blog/BlogCard";
import { FeaturedPost } from "@components/blog/FeaturedPost";
import { BlogSearchBar } from "@components/blog/BlogSearchBar";
import { GoogleAd } from "@components/blog/GoogleAd";

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
            _id,
            title,
            slug,
            mainImage,
            body,
            categories[]->{title},
            publishedAt
        }`;
        
        const featuredQuery = `*[_type == "post" && count(categories) > 0][0...3] {
            _id,
            title,
            slug,
            mainImage,
            body
        }`;
          

        const [allPosts, featured] = await Promise.all([
          client.fetch(postsQuery),
          client.fetch(featuredQuery),
        ]);

        console.log("All Posts Query Result:", allPosts);
        console.log("Featured Posts Query Result:", featured);

        setPosts(allPosts);
        setFeaturedPosts(featured);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (!posts.length) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-3xl font-extrabold text-gray-800">Insights and Stories</h1>
        <p className="mt-2 text-gray-600">
          Exploring technology, design, and innovation one post at a time.
        </p>
        <BlogSearchBar />
        <p className="mt-10 text-gray-500">No blog posts available yet. Check back soon!</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen mt-16">
      {/* Header Section */}
      <div className="py-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Insights and Stories</h1>
        <p className="mt-2 text-lg text-gray-600">
          Exploring technology, design, and innovation one post at a time.
        </p>
        <BlogSearchBar />
      </div>

      {/* Featured Posts */}
      <div className="my-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Posts</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredPosts.map((post) => (
            <FeaturedPost key={post._id} post={post} />
          ))}
        </div>
      </div>

      {/* Google Ad */}
      <GoogleAd adSlot="header-ad-slot" />

      {/* All Posts */}
      <div className="my-10 px-4 max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </div>

      {/* Google Ad */}
      <GoogleAd adSlot="footer-ad-slot" />
    </section>
  );
}
