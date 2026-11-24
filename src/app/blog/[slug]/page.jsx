import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Prose from "@/components/ui/Prose";
import Button from "@/components/ui/Button";
import { posts } from "@/lib/posts";

// 1. Generate static params for fast, static builds
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. Generate dynamic SEO metadata for each article
export async function generateMetadata({ params }) {
  // Next.js 15 requires params to be awaited
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.image }],
    },
  };
}

// 3. The Page Component
export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound(); // Triggers the Next.js 404 page
  }

  return (
    <article className="pb-20 pt-10 md:pb-28 md:pt-16">
      <Container className="max-w-3xl">
        <Reveal>
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-muted hover:text-gold-dark"
          >
            <ArrowLeft className="h-4 w-4" /> Back to guides
          </Link>

          <div className="mb-3 text-xs font-extrabold tracking-wider text-gold-dark">
            {post.category}
          </div>
          <h1 className="font-display text-3xl font-extrabold text-ink md:text-5xl md:leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 text-sm text-muted">
            Published on {post.date}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-10 h-[300px] overflow-hidden rounded-2xl md:h-[400px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          {/* Render the HTML string inside our Prose component */}
          <Prose dangerouslySetInnerHTML={{ __html: post.content }} />
        </Reveal>

        <Reveal delay={0.3} className="mt-16 rounded-2xl bg-[#f5f6f8] p-8 text-center md:p-12">
          <h3 className="font-display text-2xl font-extrabold text-ink">
            Ready to explore your options?
          </h3>
          <p className="mt-2 text-sm text-muted">
            Get assistance understanding coverage, policy terms and next steps.
          </p>
          <Button as="a" href="/get-a-quote" variant="navy" size="lg" className="mt-6">
            Make an enquiry →
          </Button>
        </Reveal>
      </Container>
    </article>
  );
}