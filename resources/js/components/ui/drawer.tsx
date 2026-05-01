import * as React from "react"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

type DrawerProps = {
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

export function Drawer({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  className,
  closeOnOutsideClick = true,
  closeOnEscapeKeyDown = true,
}: DrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className={cn(
          "w-[calc(100vw-1rem)] sm:w-[480px] data-[state=open]:duration-240 data-[state=closed]:duration-240",
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
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          {description ? <SheetDescription>{description}</SheetDescription> : null}
        </SheetHeader>

        <div className="flex min-h-0 flex-1 flex-col gap-4 px-4 pb-4">
          {children}
        </div>

        {footer ? <SheetFooter>{footer}</SheetFooter> : null}
      </SheetContent>
    </Sheet>
  )
}


