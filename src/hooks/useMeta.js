import { useEffect } from "react";

/**
 * Sets document title and meta tags for each page.
 * @param {{ title: string, description: string, keywords?: string, url?: string, image?: string }} meta
 */
export default function useMeta({ title, description, keywords, url, image }) {
  useEffect(() => {
    // Title
    document.title = title;

    const setMeta = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Standard
    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);

    // Open Graph
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    if (url) setMeta("og:url", url, "property");
    if (image) setMeta("og:image", image, "property");

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    if (image) setMeta("twitter:image", image);
  }, [title, description, keywords, url, image]);
}
