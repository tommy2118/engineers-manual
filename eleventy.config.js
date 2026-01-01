import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItFootnote from "markdown-it-footnote";

export default function(eleventyConfig) {
  // Ignore root markdown files (not content)
  eleventyConfig.ignores.add("CLAUDE.md");
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("node_modules/**");

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });

  // Watch CSS for changes
  eleventyConfig.addWatchTarget("./src/assets/css/");

  // Configure markdown with anchor links for headings and footnotes
  const md = markdownIt({ html: true })
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.headerLink(),
      slugify: s => s.toLowerCase().replace(/[^\w]+/g, '-')
    })
    .use(markdownItFootnote);
  eleventyConfig.setLibrary("md", md);

  // Collection: All chapters (sorted by part, then chapter number)
  eleventyConfig.addCollection("chapters", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/**/*.md")
      .filter(item => item.data.chapter !== undefined)
      .sort((a, b) => {
        const partA = a.data.part || 0;
        const partB = b.data.part || 0;
        if (partA !== partB) return partA - partB;
        return (a.data.chapter || 0) - (b.data.chapter || 0);
      });
  });

  // Collection: Appendices (sorted by order)
  eleventyConfig.addCollection("appendices", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/appendices/*.md")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  // Filter: Extract table of contents from rendered content
  eleventyConfig.addFilter("toc", function(content) {
    const headings = [];
    const regex = /<h([2-3])[^>]*id="([^"]+)"[^>]*>(.*?)<\/h\1>/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      // Extract text - it might be inside an anchor tag
      let text = match[3];
      // If the content is wrapped in an anchor, extract the text from inside it
      const anchorMatch = text.match(/<a[^>]*>([^<]*)<\/a>/);
      if (anchorMatch) {
        text = anchorMatch[1];
      } else {
        // Strip any other HTML tags
        text = text.replace(/<[^>]*>/g, '');
      }
      text = text.trim();
      if (text) {
        headings.push({ level: match[1], id: match[2], text });
      }
    }
    return headings;
  });

  // Filter: Format date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  return {
    pathPrefix: "/",
    dir: {
      input: ".",
      includes: "src/_includes",
      data: "src/_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
