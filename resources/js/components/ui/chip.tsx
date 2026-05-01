import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { XIcon } from "lucide-react"

const chipVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        info: "border-blue-300 text-blue-800 bg-blue-50 hover:bg-blue-100",
        success: "border-green-300 text-green-800 bg-green-50 hover:bg-green-100",
        warning: "border-amber-300 text-amber-800 bg-amber-50 hover:bg-amber-100",
        error: "border-red-300 text-red-800 bg-red-50 hover:bg-red-100",
        muted: "border-gray-300 text-gray-800 bg-gray-50 hover:bg-gray-100",
      },
    },
    defaultVariants: {
      variant: "muted",
    },
  }
)

interface ChipProps extends React.ComponentProps<"div">,
  VariantProps<typeof chipVariants> {
  variant?: "info" | "success" | "warning" | "error" | "muted"
  icon?: React.ReactNode
  onDismiss?: () => void
  dismissLabel?: string
  className?: string
}

function Chip({
  className,
  variant,
  icon,
  onDismiss,
  dismissLabel = "Dismiss",
  ...props
}: ChipProps) {
  return (
    <div
      data-slot="chip"
      className={cn(chipVariants({ variant }), className)}
      {...props}
    >
      {icon && (
          <span className="h-4 w-4 shrink-0">{icon}</span>
      )}
      <span>{props.children}</span>
      {onDismiss ? (
        <button
          type="button"
          onClick={onDismiss}
          className="ml-1 inline-flex size-4 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
          aria-label={dismissLabel}
        >
          <XIcon className="h-2 w-2" />
        </button>
      ) : null}
    </div>
  )
}

export { Chip, chipVariants }
