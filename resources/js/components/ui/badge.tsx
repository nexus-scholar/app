import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"
import { XIcon } from "lucide-react"

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1.5 rounded-md border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden",
  {
    variants: {
      variant: {
        info: "border-blue-300 bg-blue-50 text-blue-800 hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-200",
        success: "border-green-300 bg-green-50 text-green-800 hover:bg-green-100 dark:border-green-900 dark:bg-green-950/50 dark:text-green-200",
        warning: "border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100 dark:border-amber-900 dark:bg-amber-950/50 dark:text-amber-200",
        error: "border-red-300 bg-red-50 text-red-800 hover:bg-red-100 dark:border-red-900 dark:bg-red-950/50 dark:text-red-200",
        muted: "border-border bg-muted text-foreground hover:bg-muted/80",
      },
    },
    defaultVariants: {
      variant: "muted",
    },
  }
)

export function Badge({
  className,
  variant,
  icon,
  onDismiss,
  dismissLabel = "Dismiss",
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    icon?: React.ReactNode
    onDismiss?: () => void
    dismissLabel?: string
  }) {

  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {icon ? <span className="h-3 w-3 shrink-0">{icon}</span> : null}
      <span>{props.children}</span>
      {onDismiss ? (
        <button
          type="button"
          onClick={onDismiss}
          aria-label={dismissLabel}
          className="ml-1 inline-flex size-4 items-center justify-center rounded-md text-current/70 transition-colors hover:bg-black/5 focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none dark:hover:bg-white/10"
        >
          <XIcon className="size-2.5" />
        </button>
      ) : null}
    </span>
  )
}

export { badgeVariants }
