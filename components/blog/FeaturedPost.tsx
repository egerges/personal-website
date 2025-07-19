/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export const FeaturedPost: React.FC<{ post: any }> = ({ post }) => {
  const previewText = post.body?.find((block: any) => block._type === "block")?.children?.[0]?.text || "Click to read more.";

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/20 backdrop-blur-sm border border-white/30 group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      
      <Link href={`/blog/${post.slug.current}`} aria-label={`Read featured post: ${post.title}`}>
        <Image
          src={urlFor(post.mainImage).width(800).height(450).url()}
          alt={post.mainImage.alt || "Featured post image"}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
          width={800}
          height={450}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
              {post.title}
            </h2>
            <p className="text-gray-200 line-clamp-2 text-sm leading-relaxed">{previewText}</p>
            
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-cyan-300 font-medium bg-cyan-500/20 px-3 py-1 rounded-full">
                Featured
              </span>
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
