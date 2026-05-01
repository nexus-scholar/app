import * as React from "react"

import InputError from "@/components/input-error"
import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  error,
  hint,
  ...props
}: React.ComponentProps<"input"> & {
  error?: string
  hint?: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <input
        type={type}
        data-slot="input"
        aria-invalid={error ? true : props["aria-invalid"]}
        className={cn(
          "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          error && "border-destructive focus-visible:border-destructive",
          className
        )}
        {...props}
      />
      <InputError message={error} />
      {error ? null : hint ? <p className="text-sm text-muted-foreground">{hint}</p> : null}
    </div>
  )
}

export { Input }
