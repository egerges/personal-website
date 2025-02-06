import { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { PortableTextRenderer } from "@components/blog/PortableTextRenderer"; // Client component
import { RelatedPosts } from "@components/blog/RelatedPosts"; // Client component
import { GoogleAd } from "@components/blog/GoogleAd"; // Client component
import { urlFor } from "@/sanity/lib/image";

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

/**
 * (Optional) generateMetadata for dynamic head tags
 * This function runs server-side before rendering the page.
 */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await fetchPost(params.slug);

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
              url: urlFor(post.mainImage).url(),
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
  params: { slug: string };
}) {
  const post = await fetchPost(params.slug);

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
    <main className="w-screen">
      {/* Inject structured data with dangerouslySetInnerHTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
          {/* Author info */}
          {post.author && (
            <div className="flex items-center mt-2">
              {post.author.image && (
                <img
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name || "Unknown"}
                  className="w-[25px] h-[25px] rounded-full mr-2"
                />
              )}
              <p className="text-gray-600 text-sm">
                {post.author.name || "Unknown"}
              </p>
            </div>
          )}
        </header>

        {/* Main Content */}
        {/* PortableTextRenderer is a client component */}
        <section className="prose prose-lg max-w-none">
          <PortableTextRenderer value={post.body} />
        </section>

        {/* Google Ads (client component) */}
        <div className="my-8">
          <GoogleAd adSlot="content-top-ad" />
        </div>
        <div className="my-8">
          <GoogleAd adSlot="content-bottom-ad" />
        </div>
      </article>

      {/* Related Posts (client component) */}
      <section className="m-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Related Posts
        </h2>
        <RelatedPosts currentTags={post.categories || []} currentPostId={post._id} />
      </section>
    </main>
  );
}
