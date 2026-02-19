# hexo-Web-Source

Source files for [hzhou.me](https://hzhou.me), powered by [Hexo](https://hexo.io/) 7.3.0.

## Quick Start

```bash
npm install
hexo generate && hexo server
```

Site runs at `http://localhost:4000`.


## Project Structure

```
source/_posts/    # Blog posts (~109 articles)
themes/hueman/    # Active theme (Hueman)
_config.yml       # Hexo configuration
```

## Key Plugins

| Plugin | Purpose |
|--------|---------|
| hexo-filter-mermaid-diagrams | Mermaid diagram rendering (code fence → `<pre class="mermaid">`) |
| hexo-renderer-marked | Markdown rendering |
| hexo-generator-feed | Atom feed generation |
| hexo-generator-sitemap | SEO sitemap |
| hexo-generator-searchdb | Local search index |
| hexo-admonition | Admonition blocks |
| hexo-pdf | PDF embedding |
| hexo-wordcount | Word count & reading time |
