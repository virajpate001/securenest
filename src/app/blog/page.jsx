import Image from "next/image";
import Link from "next/link";

import InnerHero from "@/components/sections/InnerHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { RevealStagger, RevealItem } from "@/components/ui/RevealStagger";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Vehicle Insurance Guides",
  description: "Explore simple educational articles about vehicle insurance, policy renewals, coverage and common terms.",
};

export default function BlogPage() {
  return (
    <>
      <InnerHero
        breadcrumb="Vehicle Insurance Guides"
        eyebrow="LEARN BEFORE YOU CHOOSE"
        title="Vehicle Insurance Guides"
        description="Explore simple educational articles about vehicle insurance, policy renewals, coverage and common terms."
      />

      <section className="py-16 md:py-24">
        <Container>
          <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
             <RevealItem key={post.slug}>
  <Link
    href={`/blog/${post.slug}`}
    className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-brand"
  >
    <div className="relative h-48 overflow-hidden">
      <Image
        src={post.image}
        alt={post.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="flex flex-1 flex-col p-6">
      <div className="mb-2 text-[10px] font-extrabold tracking-wider text-gold-dark">
        {post.category}
      </div>
      <h3 className="font-display text-lg font-extrabold text-ink transition-colors group-hover:text-gold-dark">
        {post.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {post.excerpt}
      </p>
      <div className="mt-4 text-xs font-bold text-gold-dark">
        Read article →
      </div>
    </div>
  </Link>
</RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>
    </>
  );
}