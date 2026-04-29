# Azhura

Personal portfolio site built with Nuxt 4, Bun, and MySQL.

## Stack

- **Framework:** [Nuxt 4](https://nuxt.com/docs/getting-started/introduction)
- **Runtime:** [Bun](https://bun.sh/)
- **Database:** MySQL via [Drizzle ORM](https://orm.drizzle.team/) (`mysql2` driver)
- **Styling:** TailwindCSS v4
- **Validation:** VeeValidate + Zod (`drizzle-zod`, `@vee-validate/zod`)

## Setup

Install dependencies:

```bash
bun install
```

Configure environment variables (create a `.env` file) for the MySQL connection used by Drizzle — see [drizzle.config.ts](drizzle.config.ts).

## Development

Start the dev server on `http://localhost:3000`:

```bash
bun run dev
```

## Database

Drizzle scripts:

```bash
bun run db:generate   # generate migrations from schema
bun run db:migrate    # apply migrations
bun run db:seed       # seed initial data
bun run db:reset      # reset the database
bun run db:studio     # open Drizzle Studio
```

## Production

Build and preview:

```bash
bun run build
bun run preview
```

See the [Nuxt deployment docs](https://nuxt.com/docs/getting-started/deployment) for hosting options.
