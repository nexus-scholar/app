import { AlertCircleIcon, CheckCircle2Icon, TriangleAlertIcon, XIcon } from "lucide-react"
import * as React from "react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type BannerSeverity = "info" | "success" | "warning" | "error"

type BannerProps = {
  severity?: BannerSeverity
  title?: React.ReactNode
  children?: React.ReactNode
  icon?: React.ReactNode
  dismissible?: boolean
  onDismiss?: () => void
  dismissLabel?: string
  className?: string
}

const bannerClasses: Record<BannerSeverity, string> = {
  info: "border-blue-200 bg-blue-50 text-blue-950 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-50",
  success:
    "border-green-200 bg-green-50 text-green-950 dark:border-green-900 dark:bg-green-950/40 dark:text-green-50",
  warning:
    "border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-50",
  error: "border-red-200 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950/40 dark:text-red-50",
}

const bannerIcons: Record<BannerSeverity, React.ReactNode> = {
  info: <AlertCircleIcon className="size-4" />,
  success: <CheckCircle2Icon className="size-4" />,
  warning: <TriangleAlertIcon className="size-4" />,
  error: <XIcon className="size-4" />,
}

export function Banner({
  severity = "info",
  title,
  children,
  icon,
  dismissible = false,
  onDismiss,
  dismissLabel = "Dismiss banner",
  className,
}: BannerProps) {
  return (
    <Alert
      data-slot="banner"
      className={cn(bannerClasses[severity], className)}
      variant="default"
    >
      <div className="col-start-1 row-start-1 flex h-4 w-4 items-center justify-center">
        {icon ?? bannerIcons[severity]}
      </div>
      <div className="col-start-2 flex min-w-0 flex-1 items-start justify-between gap-4">
        <div className="space-y-1">
          {title ? <AlertTitle className="text-current">{title}</AlertTitle> : null}
          {children ? (
            <AlertDescription className="text-current/80">{children}</AlertDescription>
          ) : null}
        </div>
        {dismissible && onDismiss ? (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="-mr-1 -mt-1 size-8 shrink-0 text-current/70 hover:bg-black/5 hover:text-current dark:hover:bg-white/10"
            onClick={onDismiss}
            aria-label={dismissLabel}
          >
            <XIcon className="size-4" />
          </Button>
        ) : null}
      </div>
    </Alert>
  )
}


