# Task 04: App Shell, Navigation, & Role Gating

## Objective
Construct the global application layout, routing scaffolding, and role-based access control (RBAC) UI logic.

## Context Constraints (For the AI Coding Assistant)
- **Do not build the actual page contents.** Only build the shell, sidebar, topbar, and empty page placeholders.
- **Focus ONLY on this task.**
- **Workflow Enforcement:** You MUST follow this sequence:
  1. **Start:** Review the Information Architecture section in the PRD.
  2. **Implement:** Build the shell and routing.
  3. **Test:** Verify that gated routes redirect or show locked states appropriately.
  4. **Commit & Push:** Create a semantic commit and push.

## Specifications
1. **Sidebar Navigation:**
   - Top-level: Dashboard, Projects, Query Library, Notifications, Settings, Help & Docs.
   - Active Project Subtree: Overview, Search Runs, Results, Screening, Citation Network, Export.
2. **Navigation Gating Rules:**
   - Results: Disabled if runs = 0. Tooltip: "Complete a search run to unlock results".
   - Screening: Disabled if corpus not locked. Tooltip: "Lock your corpus to begin screening".
   - Citation Network & Export: Always visible (but internally gated).
3. **Role Store:** Create a global store/context that consumes the API's permission payload (Owner, Reviewer, Observer) to conditionally render UI elements (e.g., hiding the Settings management for Observers).

## Stack alignment & shadcn guidance

- Use the existing `AppShell` and sidebar components in `resources/js/components` as the starting point. The project uses Inertia v3; routing should be implemented with server-side named routes and Wayfinder helpers for frontend usage.
- Role payloads come from Inertia page props. Access them via `usePage().props` and centralise permission logic in a React context/provider.
- For navigation components, reuse the shadcn-style `navigation-menu.tsx` and `sidebar.tsx` components and the lucide icon set.


## Acceptance Criteria
- [ ] Sidebar renders correct hierarchy and active states.
- [ ] Gated navigation items appear disabled with correct tooltips based on mocked state.
- [ ] App shell responds correctly to mobile (hamburger menu) vs desktop (full sidebar) breakpoints.
