"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Post from "@/types/Post";

export const BlogCard: React.FC<{ post: Post }> = ({ post }) => {
  console.log("Post data: ", post);
  // Safely access the content of the body
  const bodyText = post.body?.[0]?.children?.[0]?.text || "No content available.";

  // Mock star rating (you can pull from post if your data contains rating)
  const mockRating = 5;

  // If you have an author object with name + image, you can show an avatar
  // Otherwise, fallback to your brand or a default avatar
  const authorName = post.author?.name || "Unknown Author";

  return (
    <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      
      {/* Top row: Author avatar + info + timestamp */}
      <div className="flex items-center gap-2 mb-2">
        {/* Author avatar */}
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30">
          {post.author?.image ? (
            <Image
              src={urlFor(post.author.image).width(40).height(40).url()}
              alt={authorName}
              width={40}
              height={40}
              className="object-cover"
            />
          ) : (
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 w-full h-full flex items-center justify-center text-white text-sm font-bold">
              ?
            </div>
          )}
        </div>
        {/* Author name and "Posted X hours ago" - mock or from data */}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-800">{authorName}</span>
          <span className="text-xs text-gray-600">
            {/* Format publishedAt as "3 hours ago" or similar using dayjs/time libs */}
            {new Date(post.publishedAt).toLocaleDateString()}
          </span>
        </div>
        {/* Optionally place an icon or brand logo to the right if needed */}
      </div>

      {/* Star rating */}
      <div className="flex items-center mb-2">
        {[...Array(mockRating)].map((_, i) => (
          <svg
            key={i}
            className="h-4 w-4 text-yellow-400 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.166 3.6a1 1 0 00.95.69h3.801c.969 0 1.372 1.24.588 1.81l-3.073 2.228a1 1 0 00-.364 1.118l1.166 3.6c.3.92-.755 1.688-1.54 1.118L10 14.347l-3.073 2.228c-.784.57-1.838-.198-1.539-1.118l1.166-3.6a1 1 0 00-.364-1.118L3.117 9.027c-.784-.57-.38-1.81.589-1.81h3.8a1 1 0 00.951-.69l1.166-3.6z" />
          </svg>
        ))}
      </div>

      {/* Text snippet */}
      <p className="text-sm text-gray-700 line-clamp-2 mb-4 leading-relaxed">
        {bodyText}
      </p>

      {/* "Read more" link */}
      <div className="mb-4">
        <Link
          href={`/blog/${post.slug.current}`}
          aria-label={`Read more about ${post.title}`}
          className="text-blue-600 text-sm font-semibold hover:text-purple-600 transition-colors duration-300 relative group"
        >
          Read more
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
        </Link>
      </div>

      {/* Image */}
      <div key={post.mainImage.alt} className="relative overflow-hidden rounded-xl">
        <Image
          src={urlFor(post.mainImage).width(350).height(150).url()}
          alt={post.mainImage.alt}
          width={350}
          height={150}
          className="object-cover w-full h-32 transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};
