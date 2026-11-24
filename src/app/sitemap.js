import { SITE_URL } from "@/lib/constants";
import { posts } from "@/lib/posts"; // Import posts

export default function sitemap() {
  const routes = [
    "", "/two-wheeler-insurance", "/three-wheeler-insurance",
    "/four-wheeler-insurance", "/commercial-vehicle-insurance",
    "/lpv-insurance", "/lmv-insurance", "/lgv-insurance", "/hgv-insurance",
    "/new-vehicle-insurance", "/vehicle-insurance-renewal",
    "/get-a-quote", "/about", "/blog", "/contact",
    "/privacy-policy", "/terms", "/disclaimer",
  ];

  // Generate standard route objects
  const standardUrls = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Generate blog route objects
  const blogUrls = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...standardUrls, ...blogUrls];
}