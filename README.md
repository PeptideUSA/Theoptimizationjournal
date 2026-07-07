# The Optimization Journal

Evidence-based health, performance, and longevity content site. Built with
Next.js, Tailwind, and Supabase.

## Local development

1. `npm install`
2. Copy `.env.example` to `.env.local` (already done if you got this from Claude)
3. `npm run dev` → open `localhost:3000`

## Admin dashboard

Log in at `/login` with the admin email/password. Once logged in:

- `/admin` — see all articles, published and drafts
- `/admin/new` — write and publish a new article
- `/admin/edit/[id]` — edit or delete an existing article

Articles are stored in Supabase (project: `optimization-journal`), not in
code. No need to touch the codebase to publish something.

## Deployment

Connected to Vercel — every push to `main` on GitHub auto-deploys.

**Environment variables required in Vercel** (Project → Settings →
Environment Variables):
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

(Same values as `.env.local` — these are public/publishable keys, safe to
expose in the browser.)
