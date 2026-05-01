<laravel-boost-guidelines>
=== foundation rules ===

# Laravel Boost Guidelines

The Laravel Boost guidelines are specifically curated by Laravel maintainers for this application. These guidelines should be followed closely to ensure the best experience when building Laravel applications.

## Foundational Context

This application is a Laravel application and its main Laravel ecosystems package & versions are below. You are an expert with them all. Ensure you abide by these specific packages & versions.

- php - 8.5
- inertiajs/inertia-laravel (INERTIA_LARAVEL) - v3
- laravel/fortify (FORTIFY) - v1
- laravel/framework (LARAVEL) - v13
- laravel/prompts (PROMPTS) - v0
- laravel/wayfinder (WAYFINDER) - v0
- laravel/boost (BOOST) - v2
- laravel/mcp (MCP) - v0
- laravel/pail (PAIL) - v1
- laravel/pint (PINT) - v1
- laravel/sail (SAIL) - v1
- pestphp/pest (PEST) - v4
- phpunit/phpunit (PHPUNIT) - v12
- @inertiajs/react (INERTIA_REACT) - v3
- react (REACT) - v19
- tailwindcss (TAILWINDCSS) - v4
- @laravel/vite-plugin-wayfinder (WAYFINDER_VITE) - v0
- eslint (ESLINT) - v9
- prettier (PRETTIER) - v3

## Skills Activation

This project has domain-specific skills available in `**/skills/**`. You MUST activate the relevant skill whenever you work in that domain—don't wait until you're stuck.

## Conventions

- You must follow all existing code conventions used in this application. When creating or editing a file, check sibling files for the correct structure, approach, and naming.
- Use descriptive names for variables and methods. For example, `isRegisteredForDiscounts`, not `discount()`.
- Check for existing components to reuse before writing a new one.

## Verification Scripts

- Do not create verification scripts or tinker when tests cover that functionality and prove they work. Unit and feature tests are more important.

## Application Structure & Architecture

- Stick to existing directory structure; don't create new base folders without approval.
- Do not change the application's dependencies without approval.

## Frontend Bundling

- If the user doesn't see a frontend change reflected in the UI, it could mean they need to run `npm run build`, `npm run dev`, or `composer run dev`. Ask them.

## Documentation Files

- You must only create documentation files if explicitly requested by the user.

## Replies

- Be concise in your explanations - focus on what's important rather than explaining obvious details.

=== boost rules ===

# Laravel Boost

## Tools

- Laravel Boost is an MCP server with tools designed specifically for this application. Prefer Boost tools over manual alternatives like shell commands or file reads.
- Use `database-query` to run read-only queries against the database instead of writing raw SQL in tinker.
- Use `database-schema` to inspect table structure before writing migrations or models.
- Use `get-absolute-url` to resolve the correct scheme, domain, and port for project URLs. Always use this before sharing a URL with the user.
- Use `browser-logs` to read browser logs, errors, and exceptions. Only recent logs are useful, ignore old entries.

## Searching Documentation (IMPORTANT)

- Always use `search-docs` before making code changes. Do not skip this step. It returns version-specific docs based on installed packages automatically.
- Pass a `packages` array to scope results when you know which packages are relevant.
- Use multiple broad, topic-based queries: `['rate limiting', 'routing rate limiting', 'routing']`. Expect the most relevant results first.
- Do not add package names to queries because package info is already shared. Use `test resource table`, not `filament 4 test resource table`.

### Search Syntax

1. Use words for auto-stemmed AND logic: `rate limit` matches both "rate" AND "limit".
2. Use `"quoted phrases"` for exact position matching: `"infinite scroll"` requires adjacent words in order.
3. Combine words and phrases for mixed queries: `middleware "rate limit"`.
4. Use multiple queries for OR logic: `queries=["authentication", "middleware"]`.

## Artisan

- Run Artisan commands directly via the command line (e.g., `php artisan route:list`). Use `php artisan list` to discover available commands and `php artisan [command] --help` to check parameters.
- Inspect routes with `php artisan route:list`. Filter with: `--method=GET`, `--name=users`, `--path=api`, `--except-vendor`, `--only-vendor`.
- Read configuration values using dot notation: `php artisan config:show app.name`, `php artisan config:show database.default`. Or read config files directly from the `config/` directory.
- To check environment variables, read the `.env` file directly.

## Tinker

- Execute PHP in app context for debugging and testing code. Do not create models without user approval, prefer tests with factories instead. Prefer existing Artisan commands over custom tinker code.
- Always use single quotes to prevent shell expansion: `php artisan tinker --execute 'Your::code();'`
  - Double quotes for PHP strings inside: `php artisan tinker --execute 'User::where("active", true)->count();'`

=== php rules ===

# PHP

- Always use curly braces for control structures, even for single-line bodies.
- Use PHP 8 constructor property promotion: `public function __construct(public GitHub $github) { }`. Do not leave empty zero-parameter `__construct()` methods unless the constructor is private.
- Use explicit return type declarations and type hints for all method parameters: `function isAccessible(User $user, ?string $path = null): bool`
- Use TitleCase for Enum keys: `FavoritePerson`, `BestLake`, `Monthly`.
- Prefer PHPDoc blocks over inline comments. Only add inline comments for exceptionally complex logic.
- Use array shape type definitions in PHPDoc blocks.

=== deployments rules ===

# Deployment

- Laravel can be deployed using [Laravel Cloud](https://cloud.laravel.com/), which is the fastest way to deploy and scale production Laravel applications.

=== tests rules ===

# Test Enforcement

- Every change must be programmatically tested. Write a new test or update an existing test, then run the affected tests to make sure they pass.
- Run the minimum number of tests needed to ensure code quality and speed. Use `php artisan test --compact` with a specific filename or filter.

=== inertia-laravel/core rules ===

# Inertia

- Inertia creates fully client-side rendered SPAs without modern SPA complexity, leveraging existing server-side patterns.
- Components live in `resources/js/pages` (unless specified in `vite.config.js`). Use `Inertia::render()` for server-side routing instead of Blade views.
- ALWAYS use `search-docs` tool for version-specific Inertia documentation and updated code examples.
- IMPORTANT: Activate `inertia-react-development` when working with Inertia client-side patterns.

# Inertia v3

- Use all Inertia features from v1, v2, and v3. Check the documentation before making changes to ensure the correct approach.
- New v3 features: standalone HTTP requests (`useHttp` hook), optimistic updates with automatic rollback, layout props (`useLayoutProps` hook), instant visits, simplified SSR via `@inertiajs/vite` plugin, custom exception handling for error pages.
- Carried over from v2: deferred props, infinite scroll, merging props, polling, prefetching, once props, flash data.
- When using deferred props, add an empty state with a pulsing or animated skeleton.
- Axios has been removed. Use the built-in XHR client with interceptors, or install Axios separately if needed.
- `Inertia::lazy()` / `LazyProp` has been removed. Use `Inertia::optional()` instead.
- Prop types (`Inertia::optional()`, `Inertia::defer()`, `Inertia::merge()`) work inside nested arrays with dot-notation paths.
- SSR works automatically in Vite dev mode with `@inertiajs/vite` - no separate Node.js server needed during development.
- Event renames: `invalid` is now `httpException`, `exception` is now `networkError`.
- `router.cancel()` replaced by `router.cancelAll()`.
- The `future` configuration namespace has been removed - all v2 future options are now always enabled.

=== laravel/core rules ===

# Do Things the Laravel Way

- Use `php artisan make:` commands to create new files (i.e. migrations, controllers, models, etc.). You can list available Artisan commands using `php artisan list` and check their parameters with `php artisan [command] --help`.
- If you're creating a generic PHP class, use `php artisan make:class`.
- Pass `--no-interaction` to all Artisan commands to ensure they work without user input. You should also pass the correct `--options` to ensure correct behavior.

### Model Creation

- When creating new models, create useful factories and seeders for them too. Ask the user if they need any other things, using `php artisan make:model --help` to check the available options.

## APIs & Eloquent Resources

- For APIs, default to using Eloquent API Resources and API versioning unless existing API routes do not, then you should follow existing application convention.

## URL Generation

- When generating links to other pages, prefer named routes and the `route()` function.

## Testing

- When creating models for tests, use the factories for the models. Check if the factory has custom states that can be used before manually setting up the model.
- Faker: Use methods such as `$this->faker->word()` or `fake()->randomDigit()`. Follow existing conventions whether to use `$this->faker` or `fake()`.
- When creating tests, make use of `php artisan make:test [options] {name}` to create a feature test, and pass `--unit` to create a unit test. Most tests should be feature tests.

## Vite Error

- If you receive an "Illuminate\Foundation\ViteException: Unable to locate file in Vite manifest" error, you can run `npm run build` or ask the user to run `npm run dev` or `composer run dev`.

=== wayfinder/core rules ===

# Laravel Wayfinder

Use Wayfinder to generate TypeScript functions for Laravel routes. Import from `@/actions/` (controllers) or `@/routes/` (named routes).

=== pint/core rules ===

# Laravel Pint Code Formatter

- If you have modified any PHP files, you must run `vendor/bin/pint --dirty --format agent` before finalizing changes to ensure your code matches the project's expected style.
- Do not run `vendor/bin/pint --test --format agent`, simply run `vendor/bin/pint --format agent` to fix any formatting issues.

=== pest/core rules ===

## Pest

- This project uses Pest for testing. Create tests: `php artisan make:test --pest {name}`.
- The `{name}` argument should not include the test suite directory. Use `php artisan make:test --pest SomeFeatureTest` instead of `php artisan make:test --pest Feature/SomeFeatureTest`.
- Run tests: `php artisan test --compact` or filter: `php artisan test --compact --filter=testName`.
- Do NOT delete tests without approval.

=== inertia-react/core rules ===

# Inertia + React

- IMPORTANT: Activate `inertia-react-development` when working with Inertia React client-side patterns.

=== ui-building rules ===

# UI Building for NexusScholar

## Architecture Overview

This application requires a strict separation between Frontend, API, and Backend responsibilities to minimize blast radius and ensure parallel development:

### Frontend Layer
- Owns interaction state: drawers, modals, loading skeletons, keyboard shortcuts, responsive behavior, gesture handling.
- Consumes API-provided permission/gating booleans as source of truth; never derives UI state from timestamps or raw data.
- Implements state machines exactly as defined in the PRD/component checklist.
- Activates skills: `inertia-react-development`, `tailwindcss-development`, and `wayfinder-development`.

### API Layer (Backend-provided contracts)
- Returns UI-shaped, already-computed payloads (never force frontend to reconstruct lifecycle rules).
- Exposes permission booleans and reason strings: `can_lock`, `can_view_results`, `show_conflict_badge`, etc.
- Provides polling metadata: `last_updated_at`, `poll_interval_seconds`, `is_terminal`.
- Maintains stable contracts: if a UI field changes meaning, version it clearly or backfill with deprecation notes.

### Backend Layer
- Owns canonical project/run lifecycle state, search orchestration, deduplication logic, snapshot creation, screening persistence.
- Emits events (e.g., `Nexus\Search\Event\CorpusLocked`) for audit/notification systems; does not perform logging/emailing directly.
- Validates all irreversible actions server-side (lock, archive, export).

## Component Ownership Model

Every component is co-owned by Backend, API, and Frontend. Use the matrix in `docs/UI/nexusscholar_laravel_frontend_implementation_plan.md` as the canonical reference. Example:

| Component | Backend | API | Frontend |
|---|---|---|---|
| `LifecycleStatusBar` | lifecycle state service | lifecycle payload | bar + chip rendering |
| `LockCorpusModal` | lock validation + snapshot | lock preview + lock action endpoints | modal UI |
| `ProviderProgressTable` | provider progress updates | progress endpoint + polling metadata | polling UI, skeletons |

## State Management Rules

### Store in global state
- Auth / current user / permissions
- Active project summary
- Notifications (read/unread counts)
- UI preferences (non-critical only, e.g., sidebar collapsed)

### Store as screen-local component state
- QueryBuilder YAML sync state (synced, manual-edit, parse-error, diverged)
- Drawer/modal open/close
- Lock modal typed confirmation input
- Screening keyboard help visibility
- Export stepper step

### **DO NOT** store as frontend-derived truth
- `corpus_locked` — always from API
- lifecycle banner severity — always from API
- stage completion status — always from API
- results availability — always from API
- `show_conflict_badge` — always from API
- `poll_interval_seconds` — always from API

## API Design Recommendations

### Use view-model endpoints for complex screens
Prefer:
- `GET /api/projects/{id}/overview` (lifecycle + banner state + summary)
- `GET /api/projects/{id}/screening/session` (current work + mode + recommendation + conflict metadata)
- `GET /api/projects/{id}/export-options` (available formats + gated formats + corpus_locked signal)

over forcing the frontend to stitch together 7 CRUD calls. This app has many state machines; view-model endpoints reduce divergence bugs.

### Keep enums explicit
Use string enums in responses:
- `project_status: draft | active_search | corpus_locked | screening | reporting | archived`
- `run_status: queued | running | partial | completed | failed | cancelled`
- `identity_confidence: high | medium | low`
- `banner_severity: info | success | warning | error`

### Return permission/gating booleans
Always return boolean flags instead of relying on HTTP 401/403:
- `can_lock: false` + `lock_block_reason: "run_in_progress"`
- `can_view_results: false` (for locked projects before unlock)
- `can_retry_failed_providers: true`
- `show_conflict_badge: false` (in solo mode)
- `banner_dismissible: false` (first 1 hour post-lock)

## Phase-Based Delivery

Refer to `docs/UI/nexusscholar_laravel_frontend_implementation_plan.md` for the detailed phase roadmap. Key phases:

- **Phase 0:** Schema, policies, app shell, shared components.
- **Phase 1:** Saved queries, run submission, provider progress polling.
- **Phase 2:** Dedup pipeline, results browser, Work surfaces.
- **Phase 3:** Lock flow, lifecycle banner, post-lock behavior.
- **Phase 4:** Screening (desktop + mobile), conflict queue.
- **Phase 5:** Export builder, export history.
- **Phase 6:** Settings, audit, notifications hardening.

Each phase has explicit Backend/API/Frontend/QA ownership sections in the plan. Review the plan before starting a phase to identify cross-team dependencies.

## Cross-Team Dependency Management

### High-risk dependencies to manage
1. **`corpus_locked` signal** — Lock flow owns exposure; Export UI and Nav gating consume it.
2. **`poll_interval_seconds`** — Backend config/API owns it; ProviderProgressTable must not hardcode.
3. **`show_conflict_badge`** — Screening/AI logic owns it; ProgressBar UI must consume, not derive.
4. **`completeness_grid[]` + `identity_confidence`** — Backend dedup owns; WorkCard/WorkDetailDrawer/SourcesPanel must stay consistent.

### Pattern: wait-for-stable-contract
If a Backend owner is not yet ready to expose a contract, coordinate explicitly:
- Do not hardcode fallback values in Frontend.
- Mark in the phase plan with `⚠ blocks Frontend Team` and the blocking feature.
- Provide a mock/stub response shape so frontend can implement in parallel.

## Component Checklist Reference

For comprehensive component specifications, refer to `docs/UI/nexusscholar_component_checklist_v1.2.md`. It defines:
- Every UI component surface with required states (loading, error, empty, partial, gated, default).
- State handling and auditability rules.
- Accessibility and interaction constraints (keyboard nav, mobile gesture rules).
- Definition of Done for each major workflow.

## Common Patterns

### Lifecycle banners
Every banner must return from API with: `severity`, `message_copy`, `dismissible`, `can_auto_hide_at` timestamp. Frontend manages timing, not business logic.

### Micro-grid completeness widget
Backend returns `completeness_grid[]` with `{key, label, present, tooltip, severity}`. Frontend renders as 6 colored squares, collapses to `[N/6]` at card width < 260px. No frontend logic for field computation.

### Mobile gesture screening
Implement Swipe Up = Include, Swipe Down = Exclude, Long press = Maybe. **Never horizontal swipes** (conflicts with browser back/forward). Add first-session bottom sheet explaining gestures.

### Gated export formats
Render gated format cards as intentionally locked with appropriate tooltip (plain-language for users, technical only for Admin/Owner). **Never render as broken or errored.**

### Lock flow irreversible actions
Always require typed exact confirmation. Show acknowledgement checkbox when latest run had provider failures. Log all lock actions to audit log with actor, timestamp, corpus counts.

## Testing and QA

Every major surface has QA acceptance criteria in the checklist. Key areas:
- State-machine coverage for project and run lifecycle.
- Lock-flow irreversible action tests (cannot lock while run active, require typed confirmation).
- Screening keyboard + touch interaction tests (mobile gestures, keyboard shortcuts, no horizontal swipes).
- Export gating correctness (gated formats never error or appear broken).
- Audit log visibility by role (Observer cannot access, Reviewer sees only own decisions).

Reference `docs/UI/nexusscholar_component_checklist_v1.2.md` section "QA acceptance slice" for the full regression checklist.

</laravel-boost-guidelines>
