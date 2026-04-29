import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Chip } from "@/components/ui/chip"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectLabel } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function UIShowcase() {
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [selectValue, setSelectValue] = useState("")

  return (
    <div className="space-y-8 p-8">
      <h1 className="text-2xl font-bold">UI Atoms Showcase</h1>

      <section>
        <h2 className="text-lg font-semibold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          {/* Variants */}
          <div className="space-y-2">
            <h3 className="font-medium">Variants</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-2 mt-6">
            <h3 className="font-medium">Sizes</h3>
            <div className="flex flex-wrap gap-2">
              <Button size="icon" variant="default" aria-label="Icon button">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </Button>
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* States */}
          <div className="space-y-2 mt-6">
            <h3 className="font-medium">States</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="default" disabled>
                Disabled
              </Button>
              <Button variant="default" className="relative">
                Loading
                <span className="absolute inset-0 flex items-center justify-center animate-spin">
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                </span>
              </Button>
              <Button variant="default" className="relative" aria-label="Button with icon">
                <span>With Icon</span>
                <svg className="h-4 w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Inputs</h2>
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium">Text Input</h3>
            <div className="space-y-2">
              <Input placeholder="Default input" defaultValue="Sample text" />
              <Input placeholder="Error state" className="border-destructive" aria-invalid="true" />
              <Input placeholder="Disabled input" disabled defaultValue="Cannot edit" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Textarea</h3>
            <div className="space-y-2">
              <Textarea placeholder="Default textarea" defaultValue="Sample textarea content\nMultiple lines" />
              <Textarea placeholder="Error state" className="border-destructive" aria-invalid="true" />
              <Textarea placeholder="Disabled textarea" disabled defaultValue="Cannot edit" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Select</h3>
            <div className="space-y-2">
              <Select value={selectValue} onValueChange={setSelectValue}>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectLabel>Select an option</SelectLabel>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Checkbox</h3>
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={checkboxChecked}
                onCheckedChange={setCheckboxChecked}
                aria-label="Example checkbox"
              />
              <span>Checkbox label</span>
            </div>
            <div className="space-y-2">
              <Checkbox disabled checked defaultChecked aria-label="Disabled checked checkbox" />
              <span className="ml-2">Disabled and checked</span>
            </div>
            <div className="space-y-2">
              <Checkbox disabled aria-label="Disabled unchecked checkbox" />
              <span className="ml-2">Disabled and unchecked</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Chip / Badge</h2>
        <div className="flex flex-wrap gap-4">
          <div className="space-y-2">
            <h3 className="font-medium">Variants</h3>
            <div className="flex flex-wrap gap-2">
              <Chip variant="info">Info</Chip>
              <Chip variant="success">Success</Chip>
              <Chip variant="warning">Warning</Chip>
              <Chip variant="error">Error</Chip>
              <Chip variant="muted">Muted</Chip>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">With Icon</h3>
            <div className="flex flex-wrap gap-2">
              <Chip variant="info" icon={<svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}>Info with icon</Chip>
              <Chip variant="success" icon={<svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>}>Success with icon</Chip>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Dismissible</h3>
            <div className="flex flex-wrap gap-2">
              <Chip variant="info" icon={<svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}>Dismissible info</Chip>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Tooltip</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <TooltipProvider>
              <Tooltip asChild>
                <TooltipTrigger>
                  <Button variant="outline" size="icon" aria-label="Button with tooltip">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.5 10L13 4.5m0 0l4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </Button>
                </TooltipTrigger>
                <TooltipContent sideOffset={5}>
                  This is a tooltip on hover/focus
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip asChild>
                <TooltipTrigger>
                  <Button variant="outline">Hover me for tooltip</Button>
                </TooltipTrigger>
                <TooltipContent sideOffset={5}>
                  This tooltip appears on button hover
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </section>
    </div>
  )
}