"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { RelatedPosts } from "@components/blog/RelatedPosts";
import { GoogleAd } from "@components/blog/GoogleAd";
import { urlFor } from "@/sanity/lib/image";

export default function BlogPostPage() {
  const { slug } = useParams();
  interface Post {
    _id: string;
    title: string;
    body: any;
    mainImage: any;
    publishedAt: string;
    categories: string[];
  }

  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0]{
          _id, 
          title, 
          body, 
          mainImage, 
          publishedAt, 
          categories[]->{title}
        }`;
        const data = await client.fetch(query, { slug });
        setPost(data);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-500">Loading...</p>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-500">Post not found.</p>
      </section>
    );
  }

  return (
    <article className="bg-white py-10 px-4 max-w-3xl mx-auto mt-16">
      {/* Header */}
      <header className="mb-8">
        {post.mainImage && (
          <img
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            className="w-full rounded-lg shadow-lg mb-6"
          />
        )}
        <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
        <p className="text-gray-600 text-sm mt-2">
          Published on {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      </header>

      {/* Main Content */}
      <section className="prose prose-lg max-w-none">
        <PortableText value={post.body} />
      </section>

      {/* Google Ads */}
      <div className="my-8">
        <GoogleAd adSlot="content-top-ad" />
      </div>

      <div className="my-8">
        <GoogleAd adSlot="content-bottom-ad" />
      </div>

      {/* Related Posts */}
      {/* <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Posts</h2>
        <RelatedPosts currentTags={post.categories.map((cat) => cat.)} />
      </section> */}
    </article>
  );
}
