# NEX-VIO Project Context & Guidelines

## Tech Stack
- React / Next.js, TypeScript, Tailwind CSS, Framer Motion.

## Performance & Optimization Rules
1. Prioritize Core Web Vitals (LCP, CLS, INP).
2. Lazy-load non-critical components and dynamic imports.
3. Optimize Framer Motion animations (use `will-change`, `transform-gpu`, avoid heavy re-renders).
4. Use Next.js `<Image />` properly with exact formats (WebP/AVIF), layout sizes, and priority for hero images.
5. Avoid unnecessary state re-renders and use React memoization where appropriate.

## Claude Rules
- Be concise. Focus only on relevant files.
- Ask for confirmation before modifying more than 3 files at once.