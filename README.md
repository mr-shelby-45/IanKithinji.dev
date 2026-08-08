# IanKithinji.dev

Personal portfolio. Next.js 15 (App Router), TypeScript, CSS Modules.

See `DESIGN.md` for the identity and design decisions behind the current
version — read that before making visual or content changes, so new work
stays consistent with the reasoning rather than drifting.

## Development

```bash
npm install
npm run dev
```

## Structure

- `app/` — routes (home, `/projects`, `/projects/[slug]`, `/contact`)
- `components/sections/` — page sections (Hero, Work, Approach, About)
- `components/layout/` — Header, Footer
- `components/ui/` — shared primitives (SectionHeading, ThemeToggle)
- `lib/data/` — project and capability content, kept separate from
  presentation
- `types/` — shared TypeScript types
