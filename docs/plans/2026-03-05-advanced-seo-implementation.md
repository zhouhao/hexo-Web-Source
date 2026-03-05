# Advanced SEO Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implement advanced technical SEO optimizations (hreflang, resource hints, lazy loading, minification, security headers) for a Hexo 7.3 blog.

**Architecture:** Centralized EJS logic in the theme's head partial, combined with native Hexo renderer configurations and standard minification plugins.

**Tech Stack:** Hexo 7.3, EJS, hexo-renderer-marked, hexo-generator-sitemap, hexo-clean-css, hexo-html-minifier, hexo-uglify.

---

### Task 1: Configure Native Renderer Features (Lazy Loading & External Links)

**Files:**
- Modify: `_config.yml`

**Step 1: Update marked configuration**

Add/update the following in `_config.yml`:
```yaml
marked:
  lazyload: true
  external_link:
    enable: true
    exclude: []
    nofollow: true
    noopener: true
    noreferrer: true
```

**Step 2: Verify configuration**

Run: `hexo generate`
Expected: Success. Check `public/` files to ensure external links have `rel="noopener noreferrer nofollow"` and images have `loading="lazy"`.

**Step 3: Commit**

```bash
git add _config.yml
git commit -m "feat(seo): enable native lazy loading and external link handling"
```

---

### Task 2: Implement Resource Hints (DNS-Prefetch & Preconnect)

**Files:**
- Modify: `themes/hueman/layout/common/head.ejs` (or equivalent head partial)

**Step 1: Add resource hints to head**

Add the following block before other CSS/JS loads:
```ejs
<!-- DNS Prefetch -->
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="dns-prefetch" href="//fonts.gstatic.com">
<link rel="dns-prefetch" href="//www.google-analytics.com">
<link rel="dns-prefetch" href="//cdnjs.cloudflare.com">

<!-- Preconnect -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

**Step 2: Verify output**

Run: `hexo generate`
Expected: Check `public/index.html` for the new `<link>` tags.

**Step 3: Commit**

```bash
git add themes/hueman/layout/common/head.ejs
git commit -m "feat(seo): add dns-prefetch and preconnect resource hints"
```

---

### Task 3: Implement Hreflang for Bilingual Content

**Files:**
- Modify: `themes/hueman/layout/common/head.ejs`

**Step 1: Add hreflang logic**

Add the following EJS block:
```ejs
<% if (page.slug) { %>
  <% config.languages.forEach(function(lang) { %>
    <% var altPost = site.posts.findOne({ slug: page.slug, lang: lang }); %>
    <% if (altPost) { %>
      <link rel="alternate" hreflang="<%= lang %>" href="<%- full_url_for(altPost.path) %>" />
    <% } %>
  <% }); %>
  <link rel="alternate" hreflang="x-default" href="<%- full_url_for(page.path) %>" />
<% } %>
```

**Step 2: Verify output**

Run: `hexo generate`
Expected: Check a post page in `public/` to see `hreflang` tags for both `en` and `zh-CN` if matching slugs exist.

**Step 3: Commit**

```bash
git add themes/hueman/layout/common/head.ejs
git commit -m "feat(seo): implement automated hreflang via slug matching"
```

---

### Task 4: Configure Sitemap Enhancement

**Files:**
- Modify: `_config.yml`

**Step 1: Update sitemap configuration**

```yaml
sitemap:
  path: sitemap.xml
  tag: true
  category: true
```

**Step 2: Verify sitemap generation**

Run: `hexo generate`
Expected: `public/sitemap.xml` exists and contains tags/categories.

**Step 3: Commit**

```bash
git add _config.yml
git commit -m "feat(seo): enhance sitemap with tags and categories"
```

---

### Task 5: Implement Security Headers (Meta Tags)

**Files:**
- Modify: `themes/hueman/layout/common/head.ejs`

**Step 1: Add security meta tags**

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;">
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta name="referrer" content="no-referrer-when-downgrade">
```

**Step 2: Verify output**

Run: `hexo generate`
Expected: Check `public/index.html` for the meta tags.

**Step 3: Commit**

```bash
git add themes/hueman/layout/common/head.ejs
git commit -m "feat(security): add security meta tags"
```

---

### Task 6: Install and Configure Minification Plugins

**Files:**
- Modify: `package.json`
- Modify: `_config.yml`

**Step 1: Install plugins**

Run: `npm install hexo-clean-css hexo-html-minifier hexo-uglify --save`

**Step 2: Configure minification in _config.yml**

```yaml
# Minification
clean_css:
  enable: true
html_minifier:
  enable: true
  ignore_error: false
  remove_comments: true
  remove_empty_attributes: true
uglify:
  enable: true
  mangle: true
  output: {}
  compress: {}
  exclude: ['*.min.js']
```

**Step 3: Verify minification**

Run: `hexo generate`
Expected: Files in `public/` are minified (no whitespace/comments).

**Step 4: Commit**

```bash
git add package.json _config.yml
git commit -m "perf(seo): add minification plugins for CSS, HTML, and JS"
```
