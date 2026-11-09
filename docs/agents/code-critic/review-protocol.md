# Code Critic Review Protocol & Standards

## 1. Stability Audit Criteria
- **Compilation Check**: Does `npm run build` succeed with exit code 0?
- **Zero Console Errors**: Are there missing imports, unresolved types, or invalid CSS classes?
- **Layout Integrity**: Does the mobile frame remain bounded to `max-w-[470px]` on all viewports without horizontal bleed?

## 2. Simplicity & Anti-Bloat Heuristics
- **Dependency Minimization**: Are all installed packages strictly required? (e.g. check for duplicate icon packages like `lucide-astro` vs `@lucide/astro`).
- **Zero-JS Integrity**: Does the client script bundle remain lean or non-existent? Is state management kept minimal and resilient?
- **CSS Efficiency**: Are classes concise, semantic, and maintainable without redundant utility overrides?

## 3. Human Approval Gate
- Every report saved in `docs/critic_reviews/` must include a clear list of optional action items categorized as:
  - `[CRITICAL - STABILITY]`
  - `[SIMPLIFICATION]`
  - `[INCREMENTAL ENHANCEMENT]`
- The Architect and Critic must pause execution and await user review before touching any production files.
