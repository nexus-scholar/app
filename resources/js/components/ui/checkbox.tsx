import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"
import * as React from "react"

import InputError from "@/components/input-error"
import { cn } from "@/lib/utils"

function Checkbox({
  className,
  error,
  hint,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & {
  error?: string
  hint?: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <CheckboxPrimitive.Root
        data-slot="checkbox"
        aria-invalid={error ? true : props["aria-invalid"]}
        className={cn(
          "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive focus-visible:border-destructive",
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="flex items-center justify-center text-current transition-none"
        >
          <CheckIcon className="size-3.5" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <InputError message={error} />
      {error ? null : hint ? <p className="text-sm text-muted-foreground">{hint}</p> : null}
    </div>
  )
}

export { Checkbox }
