# Deploy AutoOps AI on Cloudflare Pages

Static Astro site. Connect [github.com/xyvdev/autoopsai-clone](https://github.com/xyvdev/autoopsai-clone) (synced from this repo’s `main` branch). No Workers adapter.

## Exact Cloudflare Pages build settings

Use these values in **Workers & Pages → Create → Pages → Connect to Git → Set up builds and deployments**:

| Field | Value |
| --- | --- |
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |

Also set:

| Field | Value |
| --- | --- |
| Production branch | `main` |
| Root directory | `/` (repo root, leave empty) |
| Node.js version | `22` |
| Environment variables | none |

These match Cloudflare’s Astro guide: framework **Astro**, command **`npm run build`**, output **`dist`**.

`npm install && npm run build` succeeds locally and writes `dist/index.html`, `dist/_astro/`, `dist/favicon.svg`, and `dist/_headers`.

## Connect GitHub

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Import an existing Git repository**.
2. Select **xyvdev/autoopsai-clone**.
3. Apply the table above. Project name can stay `autoopsai-clone`.
4. Save and deploy. Pages publishes a `*.pages.dev` URL on every push to `main`.

## CLI deploy (optional)

```bash
npm install
npm run build
npx wrangler pages deploy dist --project-name=autoopsai-clone
```

`wrangler` is not a project dependency. Use `npx` for a one-off upload.

## Verify the build locally

```bash
npm install
npm run build
```

Success: Astro prints `output: "static"` and `directory: .../dist/`, then `1 page(s) built`.

## CTA stubs

All Book / Schedule / Audit links use `href="#"` and open a local modal. Do not reconnect live booking URLs in Pages unless you intend to replace the stubs.
