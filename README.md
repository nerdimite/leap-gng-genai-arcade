# LEAP GenAI Arcade 2025

LEAP GenAI Arcade is a quiz platform for learning about Generative AI, developed for a interactive session on Generative AI for Fidelity LEAP Interns 2025.

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Setup the database:

```bash
bun prisma generate
```

4. Run the development server:

```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

You can start editing by modifying files in the `app` directory. The application auto-updates as you edit files.

## Deployment

1. Build the application:

```bash
bun next build
```

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new).

For more details, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Database

To recreate the dev.db file with Prisma, run:

```
bun prisma db push
```

This will create a new database based on your Prisma schema.

If you have migrations set up, you should run:

```
bun prisma migrate dev
```

This will apply all migrations and create a fresh database. The system will prompt you to name the migration (you can call it "init" or "recreate_db").
