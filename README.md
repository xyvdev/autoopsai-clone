# AutoOps AI

Pixel-faithful marketing site clone of [AutoOps AI](https://autoai.cyvdev.com/) — custom zero-code AI workflows for SMBs. Built as a static Astro site for Cloudflare Pages.

Booking, schedule, and audit CTAs are stubbed (`href="#"`). They open an in-page form and never send traffic to live calendar destinations.

## Stack

- [Astro](https://astro.build/) static output
- Plus Jakarta Sans, Inter, JetBrains Mono
- Emerald-on-slate theme with Auto / Dark / Light toggle

## Local development

Requires Node.js 22+.

```bash
npm install
npm run dev
```

Dev server: [http://127.0.0.1:43123](http://127.0.0.1:43123)

```bash
npm run build
npm run preview
```

`preview` also serves `dist/` at `http://127.0.0.1:43123`.

## Site sections

1. Nav / AutoOps AI logo, theme toggle, Book Free Audit
2. Hero — *Your business shouldn't need you at 9 PM*
3. One Sunday, Before & After
4. What would you do with your evenings back?
5. How It Works
6. Schedule Your AI Bottleneck Call + zero-risk guarantee
7. Closing CTA + footer

## Deploy

See [DEPLOY.md](./DEPLOY.md) for exact Cloudflare Pages build settings.
