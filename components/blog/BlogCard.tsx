"use client";

import React from "react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export const BlogCard: React.FC<{ post: any }> = ({ post }) => {
  return (
    <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug.current}`} aria-label={`Read more about ${post.title}`}>
        <img
          src={urlFor(post.mainImage).width(400).height(250).url()}
          alt={post.mainImage.alt || "Blog post image"}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
          <p className="text-sm text-gray-600 mt-2">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
          <p className="mt-2 text-gray-700 line-clamp-3">{post.body[0]?.children[0]?.text}</p>
        </div>
      </Link>
    </div>
  );
};
