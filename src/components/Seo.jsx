import { useEffect } from "react";
import { SITE_URL } from "../data/seo.js";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function Seo({ title, description, path = "/", noindex = false, jsonLd }) {
  useEffect(() => {
    const fullTitle = title.includes("ILBAX") ? title : `${title} | ILBAX Digital Solution`;
    const canonical = `${SITE_URL}${path === "/" ? "/" : path}`;
    const image = `${SITE_URL}/images/ilbax-hero.png`;

    document.title = fullTitle;
    document.documentElement.lang = "so";

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large");
    upsertMeta("name", "author", "ILBAX Digital Solution");
    upsertMeta("name", "geo.region", "SO-BN");
    upsertMeta("name", "geo.placename", "Mogadishu");
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", "so_SO");
    upsertMeta("property", "og:site_name", "ILBAX Digital Solution");
    upsertMeta("property", "og:image", image);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);
    upsertLink("canonical", canonical);

    if (jsonLd) {
      upsertJsonLd("ilbax-jsonld", jsonLd);
    }
  }, [title, description, path, noindex, jsonLd]);

  return null;
}
