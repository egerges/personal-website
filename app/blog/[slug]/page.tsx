/* eslint-disable @typescript-eslint/no-explicit-any */

import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { PortableTextRenderer } from "@components/blog/PortableTextRenderer"; // Client component
import { RelatedPosts } from "@components/blog/RelatedPosts"; // Client component
import { GoogleAd } from "@components/blog/GoogleAd"; // Client component
import { urlFor } from "@/sanity/lib/image";

/**
 * 1) Indicate that this route is dynamic so Next.js won't attempt static generation.
 *    This is often necessary when dealing with dynamic or async route data.
 */
export const dynamic = 'force-dynamic';

// Define the shape of your post data
interface Post {
  _id: string;
  title: string;
  body: any;
  mainImage?: any;
  publishedAt: string;
  author?: {
    name?: string;
    image?: any;
  };
  categories?: { title: string }[];
}

/**
 * Fetch a single post by slug from Sanity (server-side).
 */
async function fetchPost(slug: string): Promise<Post | null> {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      body,
      mainImage,
      publishedAt,
      author->{ name, image },
      categories[]->{ title }
    }`;
    const data = await client.fetch(query, { slug });
    return data || null;
  } catch (error) {
    console.error("Failed to fetch post:", error);
    return null;
  }
}

type BlogPageProps = {
  slug: string;
};

type AsyncBlogPageProps = Promise<BlogPageProps>;;

/**
 * (Optional) generateMetadata for dynamic head tags
 * This function runs server-side before rendering the page.
 */
export async function generateMetadata({
  params,
}: {
  params: AsyncBlogPageProps;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    return {
      title: "Blog Not Found – Elio Gerges",
      description: "The blog post you are looking for could not be found.",
    };
  }

  const categoryTitles = post.categories
    ?.map((cat) => cat.title)
    .join(", ") || "blog";

  return {
    title: post.title,
    description: `Explore insights on ${categoryTitles}`,
    keywords: [categoryTitles],
    // Optionally define Open Graph or Twitter card here
    openGraph: {
      title: post.title,
      description: `Explore insights on ${categoryTitles}`,
      images: post.mainImage
        ? [
            {
              url: urlFor(post.mainImage).width(800).url(),
              width: 800,
              height: 600,
            },
          ]
        : undefined,
    },
  };
}

/**
 * The server component for displaying a single blog post.
 */
export default async function BlogPostPage({
  params,
}: {
  params: AsyncBlogPageProps;
}) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  // If no post was found, show a 404 not found page
  if (!post) {
    notFound();
  }

  const categoryTitles =
    post.categories?.map((cat) => cat.title).join(", ") || "";

  // Example of structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    keywords: categoryTitles,
    datePublished: post.publishedAt,
    author: post.author?.name || "Unknown",
  };

  return (
    <main className="w-screen px-4">
      {/* Inject structured data with dangerouslySetInnerHTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto mt-20 mb-12">
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl -z-10"></div>
          
        {/* Header */}
          <header className="mb-12 text-center">
          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).width(800).url()}
              alt={post.title}
              className="w-full rounded-2xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-300"
              width={800}
              height={600}
            />
          )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-sm font-medium">
                  Published on {new Date(post.publishedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            
            {/* Author info */}
            {post.author && (
              <div className="flex items-center justify-center gap-3 mt-6 p-4 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/10">
                {post.author.image && (
                  <Image
                    src={urlFor(post.author.image).width(40).url()}
                    alt={post.author.name || "Unknown"}
                    className="w-10 h-10 rounded-full border-2 border-white/30"
                    width={40}
                    height={40}
                  />
                )}
                <div className="text-center">
                  <p className="text-gray-700 font-medium">
                    {post.author.name || "Unknown Author"}
                  </p>
                  <p className="text-xs text-gray-500">Author</p>
                </div>
              </div>
            )}

        </header>

        {/* Main Content */}
          <section className="prose prose-lg max-w-none mb-12">
            <div className="bg-white/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-white/10">
          <PortableTextRenderer value={post.body} />
            </div>
        </section>

        {/* Google Ads (client component) */}
          <div className="my-8 space-y-6">
          <GoogleAd adSlot="content-top-ad" />
          <GoogleAd adSlot="content-bottom-ad" />
        </div>
        </div>
      </article>

      {/* Related Posts (client component) */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl -z-10"></div>
          
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-8 text-center">
            Related Posts
          </h2>
        <RelatedPosts currentTags={post.categories || []} currentPostId={post._id} />
        </div>
      </section>
    </main>
  );
}
