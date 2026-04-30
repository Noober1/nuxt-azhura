# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Azhura** is a personal portfolio website built with:
- **Nuxt 4** (Vue 3) - Full-stack framework with file-based routing and SSR
- **Bun** - Package manager and runtime
- **MySQL + Drizzle ORM** - Database with type-safe queries
- **TailwindCSS v4** - Utility-first styling
- **shadcn-vue** - Pre-built UI components (27+ components installed)
- **VeeValidate + Zod** - Form validation with schemas

## Development Commands

### Essential Commands
```bash
bun install              # Install dependencies
bun run dev             # Start dev server on http://localhost:3000
bun run build           # Build for production
bun run preview         # Preview production build locally
```

### Database Commands
```bash
bun run db:generate     # Generate migrations from schema changes
bun run db:migrate      # Apply pending migrations
bun run db:seed         # Seed initial data
bun run db:reset        # Reset database (destructive)
bun run db:studio       # Open Drizzle Studio (visual DB editor)
```

## Architecture

### Nuxt File-Based Routing
- `app/pages/` - Route pages (auto-routes to URL paths)
- `app/components/` - Auto-imported components (no explicit imports needed)
- `app/layouts/` - Layout templates for pages
- `app/assets/` - Static CSS, images, fonts
- `server/` - Server-side logic (API routes, middleware, DB utilities)

### Component Organization
- `app/components/ui/` - shadcn-vue UI components (Button, Card, Input, etc.)
- `app/components/Typography/` - Reusable text components (H1, H2, P, Muted, etc.)
- `app/components/` - Custom components (ButtonGroup, NumberInput, CodeSnippet, etc.)

**Key Point:** Components in `app/components/` and subdirectories are auto-imported by Nuxt 4. No manual imports required in templates.

### Database Layer
- `server/db/schema.ts` - Drizzle ORM schema definitions (tables, relations)
- `server/db/index.ts` - Database connection and exports
- `server/db/migrate.ts` - Migration runner script
- `server/db/seed.ts` - Initial data seeding
- `server/db/reset.ts` - Database reset utility

Drizzle config: `drizzle.config.ts` (uses `mysql2` driver)

## UI Component System

**shadcn-vue Integration:**
- Install components via CLI: `bunx shadcn-vue add <component-name>`
- Components installed in `app/components/ui/<name>/`
- 27+ components available (Button, Card, Input, Select, Tabs, Dialog, etc.)

**Custom Components Built:**
- `ButtonGroup` - Horizontal/vertical button grouping with proper border radius
- `NumberInput` - Numeric input with min/max validation and increment/decrement buttons
- `CodeSnippet` - Code display with copy-to-clipboard functionality
- `AlertRadio` - Alert container with radio group selection
- `Spinner` - Loading spinner with size variants
- `List` - Ordered/unordered list with configurable items

**Design System Utilities:**
- TailwindCSS v4 with custom config
- Class utility: `cn()` from `lib/utils` (uses `clsx` + `tailwind-merge`)
- Button variants via `class-variance-authority` (CVA)

## Important Patterns

### SSR Hydration
- Use `<ClientOnly>` wrapper for components that should only render on client (e.g., Toaster, interactive widgets)
- Example: `<ClientOnly><Toaster /></ClientOnly>`
- Suppress hydration warnings with `suppress-hydration-warning` attribute when mismatches are expected and non-critical

### Component Props & Validation
- Use TypeScript interfaces for props
- Example: `defineProps<{ modelValue: number; min?: number; max?: number }>()`
- Emit type-safe events: `emit('update:modelValue', value)`

### Reactive State
- Use `ref()` for mutable state
- Use `computed()` for derived values
- Example in components: `const numberValue = ref(5)`

### Form Validation
- VeeValidate + Zod for forms
- Define schemas with Zod: `z.object({ email: z.string().email() })`
- Drizzle integrates with drizzle-zod for schema consistency

## Styling & TailwindCSS

**CSS Structure:**
- Main styles: `app/assets/css/main.css` (imports TailwindCSS)
- TailwindCSS v4 plugin configured in `nuxt.config.ts`
- No CSS modules by default; use utility classes and `cn()` helper

**Common Patterns:**
- Responsive: `hidden lg:block`, `md:text-sm`
- Spacing: `gap-4`, `mb-2`, `px-6`
- Colors: `bg-primary`, `text-foreground`, `border-muted`
- Dark mode: `dark:bg-input/30`, `dark:text-foreground`

## Environment & Configuration

**Configuration Files:**
- `nuxt.config.ts` - Nuxt settings, modules, TailwindCSS
- `drizzle.config.ts` - Drizzle ORM and migration config
- `.env` - Environment variables (create from `.env.example` if present)

**Required Environment Variables (for database):**
- `DATABASE_URL` - MySQL connection string (used by Drizzle)

## Development Workflow

1. **Start dev server:** `bun run dev`
2. **Create/edit components:** Add `.vue` files in `app/components/` - auto-imported
3. **Create pages:** Add `.vue` files in `app/pages/` - auto-routes
4. **Database changes:** Modify `server/db/schema.ts` → `bun run db:generate` → review migrations → `bun run db:migrate`
5. **Add shadcn components:** `bunx shadcn-vue add <component-name>`

## Known Issues & Quirks

- **Hydration mismatches:** May occur with dynamic components. Use `<ClientOnly>` or `suppress-hydration-warning` when needed
- **Component auto-import:** Works for `app/components/` and all subdirectories. Explicit imports not required
- **TailwindCSS v4:** Uses new config format; plugins defined in `nuxt.config.ts`
- **Bun runtime:** Fast, but ensure dependencies are Bun-compatible (most are)

## Pages & Routes

- `/` - Home page (`app/pages/index.vue`)
- `/posts` - Posts listing (`app/pages/posts.vue`)
- `/devpage/components` - UI components showcase (internal reference page)
- Routes auto-generate from `app/pages/` structure (e.g., `app/pages/blog/[id].vue` → `/blog/:id`)

## Additional Resources

- [Nuxt 4 Docs](https://nuxt.com/)
- [Vue 3 Docs](https://vuejs.org/)
- [Drizzle ORM Docs](https://orm.drizzle.team/)
- [TailwindCSS v4 Docs](https://tailwindcss.com/)
- [shadcn-vue](https://www.shadcn-vue.com/)
