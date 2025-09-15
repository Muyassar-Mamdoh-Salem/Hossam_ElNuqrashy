import { useEffect } from "react";

const Seo = ({ title, description, keywords, image, url }) => {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) {
        tag.setAttribute("content", content);
      } else {
        tag = document.createElement("meta");
        tag.name = name;
        tag.content = content;
        document.head.appendChild(tag);
      }
    };

    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("author", "حسام النقراشي");

    // OG tags
    const setOG = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute("content", content);
      } else {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        tag.content = content;
        document.head.appendChild(tag);
      }
    };

    setOG("og:title", title);
    setOG("og:description", description);
    setOG("og:type", "website");
    setOG("og:url", url || window.location.href);
    if (image) setOG("og:image", image);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    if (image) setMeta("twitter:image", image);
  }, [title, description, keywords, image, url]);

  return null;
};

export default Seo;
