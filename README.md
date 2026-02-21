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

## Admonition Blocks

Use `hexo-admonition` to add callout/notice blocks in posts. Syntax:

```markdown
!!! type Custom Title
    Content goes here (indented by 4 spaces).
```

### Supported Types

| Type | Color | Use Case |
|------|-------|----------|
| `note` | Green | General notes, default style |
| `info` / `todo` | Cyan | Informational tips |
| `warning` / `attention` / `caution` | Orange | Warnings |
| `failure` / `error` / `fail` / `missing` | Red | Errors, critical notices |

### Examples

```markdown
!!! note Info
    This is a green note block with title "Info".

!!! warning Warning
    This is an orange warning block.

!!! info
    Omit the custom title to use the type name as title.
```

Title is optional — if omitted, the type name is used as the title.
