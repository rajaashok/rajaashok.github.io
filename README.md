# rajaashok.github.io

**The Notebook** — essays on AI infrastructure, data engineering, and product sense.

Live at **[rajaashok.github.io](https://rajaashok.github.io)**

## Posts

| Post | URL | Published |
|---|---|---|
| RAG Debugging Decision Tree | [/rag-debug-decision-tree-flint](https://rajaashok.github.io/rag-debug-decision-tree-flint) | July 2026 |
| Chunking for RAG: Interview Questions and Best Practices | [/chunking-best-practices](https://rajaashok.github.io/chunking-best-practices) | July 2026 |
| Don't Memorize 300 Problems. Memorize This Decision Tree. | [/dont-memorize-300-problems](https://rajaashok.github.io/dont-memorize-300-problems) | July 2026 |
| Your Next Data Center Weighs Three Pounds | [/three-pound-data-center](https://rajaashok.github.io/three-pound-data-center) | July 2026 |

## Structure

Plain HTML, zero build step. Each post is a single self-contained file — styles, SVG diagrams, everything inline.

```
index.html                      → home / post index
rag-debug-decision-tree-flint.html → static RAG debugging decision tree + documentation
chunking-best-practices.html    → post (served extensionless by GitHub Pages)
dont-memorize-300-problems.html → post (served extensionless by GitHub Pages)
three-pound-data-center.html    → post (served extensionless by GitHub Pages)
assets/                         → static preview images
```

## Adding a post

1. Drop `new-slug.html` in the repo root.
2. Add a post card to `index.html`.
3. Commit — GitHub Pages publishes automatically.

## About

Written by [Raja Ashok Bolla](https://github.com/rajaashok) — data engineering leader by day, building [hackproduct.com](https://hackproduct.com) by night: LeetCode-style practice for product sense.
