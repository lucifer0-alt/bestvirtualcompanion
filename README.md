# BestVirtualCompanion v1

Static affiliate review site for AI companion apps.

## Stack
- HTML/CSS/JS (no build step)
- Affiliate links managed via `assets/js/affiliate-links.js`

## Local development
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## Deployment options
Because this is static, deploy to any static host:
- Netlify (drag-and-drop or Git)
- Vercel static project
- Cloudflare Pages
- GitHub Pages

## Update affiliate links
1. Open `assets/js/affiliate-links.js`.
2. Replace URLs in `AFFILIATE_BASE` with approved partner links.
3. (Optional) Adjust UTM values in the `UTM` object.
4. Keep `rel="nofollow sponsored"` on affiliate anchors.

## URL structure
- Homepage: `/index.html`
- Reviews: `/app-reviews/<app>-review.html`
- Comparisons: `/comparisons/...`
- Blog: `/blog/...`

## Notes
- Contact form is currently non-functional (UI placeholder only).
- All images are local placeholders in `assets/images`.
