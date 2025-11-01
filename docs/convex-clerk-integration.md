# Integrate Convex with Clerk

## Setting Up Clerk

These are the same steps Clerk shows when creating a new project. So in-case
you've missed them, here they are:

1. **Install Clerk Package**

   ```sh
   bun add @clerk/nextjs
   ```

2. **Environment Variables in `.env`:**

   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   ```

3. **Set Up Route Protection: (`route.ts` or `middleware.tsx`)**

   ```ts
   import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

   const isPublicRoute = createRouteMatcher(["/site(.*)"]);

   export default clerkMiddleware(async (auth, req) => {
     if (!isPublicRoute(req)) await auth.protect();
   });

   export const config = {
     matcher: [
       "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
       "/(api|trpc)(.*)",
     ],
   };
   ```

4. **Wrap Your Application**: Use `ClerkProvider` from `@clerk/nextjs`

   ```tsx
   import { ClerkProvider } from "@clerk/nextjs";

   export default function Provider() {
     return <ClerkProvider>{/* ... */}</ClerkProvider>;
   }
   ```

## Setting Up Convex

Follow the [convex docs.](https://docs.convex.dev/quickstart/nextjs) to setup convex.

1. **Install Convex Package**

   ```sh
   bun add convex
   ```

2. **Run the Development Server:**
   _Note: This will generate environment variables in the `.env.local` file._
   Convex will do this everytime you run convex in dev (`bunx convex dev`).

   ```sh
   bunx convex dev
   ```

3. **Add Convex Provider for Client-Side Data Consumption**

   ```tsx
   "use client";

   import { ReactNode } from "react";
   import { ConvexProvider, ConvexReactClient } from "convex/react";

   const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

   export default function Provider({ children }: { children: ReactNode }) {
     return <ConvexProvider client={convex}>{children}</ConvexProvider>;
   }
   ```

4. **Create a Query Function in `convex/tasks.ts`:**

   ```ts
   import { query } from "./_generated/server";

   export const get = query({
     args: {},
     handler: async (ctx) => {
       return await ctx.db.query("tasks").collect();
     },
   });
   ```

5. **Update `tsconfig.json` for Path Aliases:**

   ```jsonc
   {
     // ...other configs
     "#/convex/*": ["./convex/*"]
   }
   ```

6. **Fetch Data Using the `useQuery` Hook:**

   ```tsx
   "use client";

   import { api } from "#/convex/_generated/api";
   import { useQuery } from "convex/react";

   export default function Page() {
     const tasks = useQuery(api.tasks.get);

     return <pre>{JSON.stringify(tasks, null, 4)}</pre>;
   }
   ```

## Integrate Clerk and Convex

Follow the [convex docs.](https://docs.convex.dev/auth/clerk) to integrate convex with clerk.
But if you are following this documentation, you should already have Convex and Clerk all set-up propperly.
Now we just need the integration between Convex and Clerk.

1. **Create a JWT Template:**
   - Create the template shown in the [docs.](https://docs.convex.dev/auth/clerk) - _step:3_.
   - Copy the **issuer URL** and put it in the `.env`:

     ```env
     CLERK_JWT_ISSUER_DOMAIN=https://...
     ```

2. **Set Up Convex with the Clerk Issuer Domain:**
   - Add `convex/auth.config.ts` - _step:5_

     ```ts
     export default {
       providers: [
         {
           domain: process.env.CLERK_JWT_ISSUER_DOMAIN!,
           applicationID: "convex",
         },
       ],
     };
     ```

   - Also, add this issuer URL in the Convex dashboard settings:

     Navigate to [your dashboard](https://dashboard.convex.dev/) → [select project] → settings → Environment Variables.

     Then add the `CLERK_JWT_ISSUER_DOMAIN` variable and set the value the copied isuer URL.

3. **Configure the `ConvexProviderWithClerk`:**

   ```tsx
   "use client";

   import { ReactNode } from "react";
   import { ConvexReactClient } from "convex/react";
   import { ClerkProvider, useAuth } from "@clerk/clerk-react";
   import { ConvexProviderWithClerk } from "convex/react-clerk";

   const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

   export default function Provider({ children }: { children: ReactNode }) {
     return (
       <ClerkProvider
         publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
       >
         <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
           {children}
         </ConvexProviderWithClerk>
       </ClerkProvider>
     );
   }
   ```

   **Note**: Optionally, install the following package:

   ```sh
   bun add @clerk/clerk-react
   ```

4. **Done! Now use authentication state in your Convex functions**

   Use the `ctx.auth.getUserIdentity()` method to get the user data from convex:

   ```ts
   import { query } from "./_generated/server";

   export const user = query({
     handler: async (ctx) => {
       const identity = await ctx.auth.getUserIdentity();
       if (identity === null) return "NO USER";

       return identity;
     },
   });
   ```

## Creating Mutations with Convex

```tsx
"use client";

import { useMutation } from "convex/react";

import { api } from "../../../convex/_generated/api";

export default function Page() {
  const date = new Date();
  const stamp = `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;

  const createTodo = useMutation(api.todos.createTodo);

  createTodo({ text: stamp });

  return <main className="">{stamp}</main>;
}
```
