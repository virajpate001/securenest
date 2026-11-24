import { SITE_URL } from "@/lib/constants";

export default function sitemap() {
  const routes = [
    "",
    "/two-wheeler-insurance",
    "/three-wheeler-insurance",
    "/four-wheeler-insurance",
    "/commercial-vehicle-insurance",
    "/lpv-insurance",
    "/lmv-insurance",
    "/lgv-insurance",
    "/hgv-insurance",
    "/new-vehicle-insurance",
    "/vehicle-insurance-renewal",
    "/get-a-quote",
    "/about",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}