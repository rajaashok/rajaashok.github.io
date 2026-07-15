# rajaashok.github.io

**The Notebook** — essays on AI infrastructure, data engineering, and product sense.

Live at **[rajaashok.github.io](https://rajaashok.github.io)**

## Posts

| Post | URL | Published |
|---|---|---|
| AI Engineer Roadmap: From Foundations to Real Impact | [/ai-engineer-bfs-roadmap](https://rajaashok.github.io/ai-engineer-bfs-roadmap) | July 2026 |
| AI Agent Project: The Complete Architecture Map | [/ai-agent-project-bfs](https://rajaashok.github.io/ai-agent-project-bfs) | July 2026 |
| RAG Debugging Decision Tree | [/rag-debug-decision-tree-flint](https://rajaashok.github.io/rag-debug-decision-tree-flint) | July 2026 |
| Chunking for RAG: Interview Questions and Best Practices | [/chunking-best-practices](https://rajaashok.github.io/chunking-best-practices) | July 2026 |
| Don't Memorize 300 Problems. Memorize This Decision Tree. | [/dont-memorize-300-problems](https://rajaashok.github.io/dont-memorize-300-problems) | July 2026 |
| Your Next Data Center Weighs Three Pounds | [/three-pound-data-center](https://rajaashok.github.io/three-pound-data-center) | July 2026 |

## Structure

Plain HTML with zero build step. Long-form posts remain self-contained; the two HackProduct roadmap projects share one small responsive stylesheet and publish their original portrait reels plus lossless final frames.

```
index.html                             → home / project and post index
ai-engineer-bfs-roadmap.html           → detailed AI engineer roadmap project
ai-agent-project-bfs.html              → detailed AI agent architecture project
rag-debug-decision-tree-flint.html     → static RAG debugging decision tree + documentation
chunking-best-practices.html           → post (served extensionless by GitHub Pages)
dont-memorize-300-problems.html        → post (served extensionless by GitHub Pages)
three-pound-data-center.html           → post (served extensionless by GitHub Pages)
assets/roadmap-project.css             → shared responsive styling for roadmap projects
assets/*-reel.mp4                      → original 1080 x 1920 animated reels
assets/*-final.png                     → lossless 1080 x 1920 final frames
```

## HackProduct roadmap projects

Both roadmap pages are designed as durable visual references rather than simple video embeds:

- Native HTML5 playback for the complete animated BFS reveal
- Exact final reel frame preserved as a lossless, uncropped 1080 x 1920 PNG
- Direct links to the original MP4 and full-resolution image
- Detailed explanation of every roadmap or architecture stage
- Production review questions that connect the visual to AI-engineering judgment
- Responsive layouts tested for desktop and phone screens

## Adding a post

1. Drop `new-slug.html` in the repo root.
2. Add a post card to `index.html`.
3. Commit — GitHub Pages publishes automatically.

## About

Written by [Raja Ashok Bolla](https://github.com/rajaashok) — data engineering leader by day, building [hackproduct.com](https://hackproduct.com) by night: LeetCode-style practice for product sense.
