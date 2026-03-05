# Design Doc: Advanced SEO Optimizations for Hexo 7.3 (Hueman Theme)

**Date**: 2026-03-05
**Status**: Approved
**Context**: Implementing the "next layer" of technical SEO for a bilingual (en/zh-CN) Hexo blog.

## 1. Hreflang Implementation
- **Strategy**: Automated cross-linking via slug matching.
- **Logic**:
    - Iterate through `config.languages`.
    - Find posts where `slug` matches current page and `lang` matches iteration.
    - Output `<link rel="alternate" hreflang="..." href="..." />`.
    - Include `x-default` pointing to the current page (or primary language version).

## 2. Resource Hints
- **Strategy**: Tiered connection warming in `<head>`.
- **Order**:
    1. `dns-prefetch`: Resolve domains for Fonts, Analytics, CDNs.
    2. `preconnect`: Establish TCP/TLS for critical origins (Gstatic, primary CDN).

## 3. External Link Handling
- **Strategy**: Native `hexo-renderer-marked` configuration.
- **Attributes**: `rel="noopener noreferrer nofollow"`, `target="_blank"`.
- **Exclusions**: Internal domains and trusted partners.

## 4. Image Lazy Loading
- **Strategy**: Native browser `loading="lazy"`.
- **Implementation**: Enable `marked.lazyload` in `_config.yml`.

## 5. Sitemap Enhancement
- **Strategy**: Granular control via `hexo-generator-sitemap`.
- **Features**:
    - Include tags and categories.
    - `lastmod` based on post `updated` field.
    - Front-matter support for `priority` and `changefreq`.

## 6. Performance SEO
- **Strategy**: Minification suite.
- **Plugins**: `hexo-clean-css`, `hexo-html-minifier`, `hexo-uglify`.
- **Critical CSS**: Manual inlining of core layout styles in `<head>`.

## 7. Security Headers
- **Strategy**: Meta-tag based security for static hosting.
- **Headers**:
    - `Content-Security-Policy`: Restrictive whitelist.
    - `X-Content-Type-Options`: `nosniff`.
    - `Referrer-Policy`: `no-referrer-when-downgrade`.

## Success Criteria
- Validated `hreflang` clusters in Google Search Console.
- Improved LCP (Largest Contentful Paint) via resource hints.
- Zero "nofollow" warnings for internal links.
- Passing security header scans (within static site limits).
