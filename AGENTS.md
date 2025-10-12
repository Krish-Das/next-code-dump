# Agent Guidelines for memo-pj025

## Commands
- **Build**: `npm run build` or `next build`
- **Dev**: `npm run dev` or `next dev --turbopack`
- **Lint**: `npm run lint` or `next lint`
- **Clean dev**: `npm run clean:dev`
- **Clean build**: `npm run clean:build`
- **Test**: No test framework configured

## Code Style
- **TypeScript**: Strict mode enabled, target ES2017/ESNext for frontend/backend
- **Formatting**: Prettier with double quotes, no semicolons, 2-space tabs, 80 char width
- **Imports**: Sorted with @ianvs/prettier-plugin-sort-imports
  - React/Next imports first
  - Third-party modules
  - Internal: types → @/types → @/lib → @/hooks → @/components → @/app
- **Naming**: PascalCase for components/types, camelCase for functions/variables
- **Path aliases**: `@/*` → `./src/*`, `#/convex/*` → `./convex/*`
- **Linting**: ESLint with Next.js config, warnings for unused vars/console logs
- **Error handling**: Throw descriptive Error objects in Convex functions
- **Components**: Functional components with TypeScript interfaces