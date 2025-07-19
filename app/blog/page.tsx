/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

import { client } from "@/sanity/lib/client";
import { BlogCard } from "@components/blog/BlogCard";
import { FeaturedPost } from "@components/blog/FeaturedPost";
import { BlogSearchBar } from "@components/blog/BlogSearchBar";
import { GoogleAd } from "@components/blog/GoogleAd";
import { TextGeneratedEffect } from "@components/TextGeneratedEffect";
import Loader from "@/components/Loader";

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique titles and categories for suggestions
  const suggestions = Array.from(new Set([
    ...posts.map(post => post.title),
    ...posts.flatMap(post => post.categories?.map((cat: any) => cat.title) || [])
  ]));

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
            publishedAt,
            author->{name, image}
        }`;
        
        const featuredQuery = `*[_type == "post" && featured == true][0...2] {
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

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.categories?.some((cat: any) => cat.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (isLoading) {
    return <Loader />;
  }

  if (!posts.length) {
    return (
      <section className="py-20 text-center min-h-screen">
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl -z-10"></div>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            Insights and Stories
          </h1>
          <p className="text-lg text-gray-700 mb-8">
          Exploring technology, design, and innovation one post at a time.
        </p>
        <BlogSearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} suggestions={suggestions} />
          <p className="mt-10 text-gray-600">No blog posts available yet. Check back soon!</p>
        </div>
      </section>
    );
  }

  const NoResultsMessage = () => (
    <div className="text-center py-10">
      <p className="text-gray-600 mb-4">
        No posts found matching &quot;{searchQuery}&quot;. Would you like to write about this topic?
      </p>
      <div className="space-y-4">
        <Link
            href="/contact"
            className="px-4 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg shadow-lg hover:shadow-xl transition"
            aria-label="Contact Me to Contribute"
          >
            Contact Me to Contribute
          </Link>
        <p className="text-sm text-gray-500">
          Share your knowledge and expertise with our community!
        </p>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen mt-16 px-4">
      {/* Header Section */}
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16 text-center"
        >
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 max-w-6xl mx-auto shadow-2xl mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl -z-10"></div>
            
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[var(--blue-primary)] to-[var(--pink-primary)]">
            <TextGeneratedEffect words="Insights and Stories..."/>
          </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
              Exploring technology, design, and innovation one post at a time.
          </p>
          <BlogSearchBar 
            searchQuery={searchQuery} 
            onSearchChange={setSearchQuery}
            suggestions={suggestions}
          />
          </div>
      </motion.div>

      {/* Featured Posts */}
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="my-10 px-4 max-w-7xl mx-auto">
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-xl -z-10"></div>
          
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 text-center">
            Featured Posts
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
          {featuredPosts.length > 0 ? featuredPosts.map((post) => (
            <FeaturedPost key={post._id} post={post} />
            )) : (
              <div className="col-span-2 text-center py-12">
                <p className="text-gray-600 text-lg">No featured posts available.</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Google Ad */}
      <GoogleAd adSlot="header-ad-slot" />

      {/* All Posts */}
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
           className="my-10 px-4 max-w-7xl mx-auto">
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-3xl blur-xl -z-10"></div>
          
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-8 text-center">
            All Posts
          </h2>
        {filteredPosts.length === 0 ? (
          <NoResultsMessage />
        ) : (
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
            </div>
          </div>
        )}
        </div>
      </motion.div>

      {/* Google Ad */}
      <GoogleAd adSlot="footer-ad-slot" />
    </section>
  );
}
