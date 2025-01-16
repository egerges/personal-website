"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
import { client } from "@/sanity/lib/client";
import { PortableTextRenderer } from "@components/blog/PortableTextRenderer";
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
    author: { name: string, image: any };
    categories: { title: string }[];
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
          author->{name, image},
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

  const categoryTitles = post.categories?.map((cat) => cat.title).join(", ") || "";

  console.log("Category Titles:", categoryTitles);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content={`Explore insights on ${categoryTitles}`}
        />
        <meta name="keywords" content={categoryTitles} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              keywords: categoryTitles,
              datePublished: post.publishedAt,
            }),
          }}
        />
      </Head>
      <article className="w-screen">
        <article className="bg-white py-10 px-4 max-w-3xl mx-auto mt-16">
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
            <div className="flex items-center mt-2">
              {post.author?.image && (
                <img
                  src={urlFor(post.author.image).url()}
                  alt={post.author?.name || "Unknown"}
                  className="w-[25px] h-[25px] rounded-full mr-2"
                />
              )}
              <p className="text-gray-600 text-sm">
                {post.author?.name || "Unknown"}
              </p>
            </div>
          </header>
          <section className="prose prose-lg max-w-none">
            <PortableTextRenderer value={post.body} />
          </section>
          <div className="my-8">
            <GoogleAd adSlot="content-top-ad" />
          </div>
          <div className="my-8">
            <GoogleAd adSlot="content-bottom-ad" />
          </div>
        </article>
        <section className="m-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Posts</h2>
          <RelatedPosts currentTags={post.categories || []} currentPostId={post._id} />
        </section>
      </article>
    </>
  );
}
