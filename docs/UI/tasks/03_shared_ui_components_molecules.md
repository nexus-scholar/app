# Task 03: Shared UI Components (Molecules)

## Objective
Build the composite, reusable UI components (Molecules) such as Modals, Drawers, and Banners, utilizing the Atoms built in the previous task.

## Context Constraints (For the AI Coding Assistant)
- **Do not build specific workflow modals (like LockCorpus) yet.** Build the *wrappers* and *base layouts*.
- **Focus ONLY on this task.** 
- **Workflow Enforcement:** You MUST follow this sequence:
  1. **Start:** Review the Modal and Drawer Inventory in the PRD.
  2. **Implement:** Build the components.
  3. **Test:** Verify focus trapping and animation timings.
  4. **Commit & Push:** Create a semantic commit and push.

## Specifications
1. **Modal Wrapper:**
   - 200ms scale-up from centre (0.95 → 1.0) + fade.
   - Must trap focus inside the modal.
   - Close on Esc key or click outside (configurable).
2. **Drawer Wrapper:**
   - 480px width, 240ms ease-out slide from right. Backdrop fades in simultaneously.
   - Must trap focus and support back-stacking.
3. **Banner System:**
   - Severity variants (info, success, warning, error).
   - Support `dismissible` prop (shows ✕ control).
4. **Skeleton Loader:** Generic animated shimmer block for loading states.

## Stack alignment & shadcn guidance

- Prefer the existing `dialog.tsx` and `sheet.tsx` under `resources/js/components/ui` which follow shadcn patterns (Radix/Headless primitives + Tailwind). Reuse these for Modal and Drawer wrappers.
- Focus trapping and accessibility utilities are already centralised; follow their APIs rather than reimplementing focus management.
- Animations should use Tailwind v4 transition utilities; match the timing specified above (200ms/240ms). If using utility classes, ensure they are compatible with Tailwind v4.


## Acceptance Criteria
- [ ] Modals and Drawers trap focus correctly for accessibility.
- [ ] Animations adhere strictly to the 200ms/240ms timing rules.
- [ ] Banners render correct severity colours and icons.
