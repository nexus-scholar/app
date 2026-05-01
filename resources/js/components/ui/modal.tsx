import * as React from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type ModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: React.ReactNode
  description?: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
  className?: string
  closeOnOutsideClick?: boolean
  closeOnEscapeKeyDown?: boolean
}

export function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  className,
  closeOnOutsideClick = true,
  closeOnEscapeKeyDown = true,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "max-w-[calc(100vw-2rem)] gap-6 sm:max-w-lg",
          className
        )}
        onPointerDownOutside={(event) => {
          if (!closeOnOutsideClick) {
            event.preventDefault()
          }
        }}
        onEscapeKeyDown={(event) => {
          if (!closeOnEscapeKeyDown) {
            event.preventDefault()
          }
        }}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description ? <DialogDescription>{description}</DialogDescription> : null}
        </DialogHeader>

        <div className="space-y-4">{children}</div>

        {footer ? <DialogFooter>{footer}</DialogFooter> : null}
      </DialogContent>
    </Dialog>
  )
}


