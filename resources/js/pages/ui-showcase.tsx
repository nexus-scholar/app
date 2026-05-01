import {
    AlertCircleIcon,
    CheckIcon,
    InfoIcon,
    SparklesIcon,
} from 'lucide-react';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Banner } from '@/components/ui/banner';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Chip } from '@/components/ui/chip';
import { Drawer } from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Modal } from '@/components/ui/modal';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Textarea } from '@/components/ui/textarea';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

function UIShowcase() {
    const [selectValue, setSelectValue] = useState('');
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [dismissedBanner, setDismissedBanner] = useState(false);
    const [dismissedChip, setDismissedChip] = useState(false);

    return (
        <div className="space-y-10 p-8">
            <section className="space-y-4">
                <div>
                    <h1 className="text-2xl font-semibold">
                        NexusScholar UI Showcase
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Atoms and molecules rendered with the shared
                        shadcn-style registry.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button
                        loading
                        startIcon={<SparklesIcon className="size-4" />}
                    >
                        Loading
                    </Button>
                    <Button
                        disabled
                        startIcon={<CheckIcon className="size-4" />}
                    >
                        Disabled
                    </Button>
                    <Button
                        size="icon"
                        aria-label="Icon button"
                        startIcon={<InfoIcon className="size-4" />}
                    />
                </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4 rounded-xl border p-6">
                    <h2 className="text-lg font-medium">Inputs</h2>
                    <div className="space-y-4">
                        <Input
                            placeholder="Project name"
                            defaultValue="Living systematic review"
                        />
                        <Input
                            placeholder="Validation error"
                            error="Project name is required."
                        />
                        <Input
                            placeholder="Disabled input"
                            disabled
                            defaultValue="Read only"
                        />
                        <Textarea
                            placeholder="Review question"
                            hint="Use a concise question sentence."
                            defaultValue="Does the intervention improve outcomes?"
                        />
                        <Textarea
                            placeholder="Error textarea"
                            error="Please add at least 20 characters."
                        />
                    </div>
                </div>

                <div className="space-y-4 rounded-xl border p-6">
                    <h2 className="text-lg font-medium">Select and checkbox</h2>
                    <div className="space-y-4">
                        <Select
                            value={selectValue}
                            onValueChange={setSelectValue}
                        >
                            <SelectTrigger
                                hint="Choose the current review stage."
                                error={
                                    selectValue
                                        ? undefined
                                        : 'Select a stage before continuing.'
                                }
                            >
                                <SelectValue placeholder="Review stage" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="draft">Draft</SelectItem>
                                <SelectItem value="search">
                                    Active search
                                </SelectItem>
                                <SelectItem value="locked">
                                    Corpus locked
                                </SelectItem>
                            </SelectContent>
                        </Select>

                        <div className="flex items-start gap-3">
                            <Checkbox
                                checked={checkboxChecked}
                                onCheckedChange={(value) =>
                                    setCheckboxChecked(value === true)
                                }
                                error={
                                    checkboxChecked
                                        ? undefined
                                        : 'Please acknowledge the latest provider failure.'
                                }
                            />
                            <div className="space-y-1">
                                <p className="text-sm leading-none font-medium">
                                    I acknowledge the latest provider failure.
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    This is shown as an inline checkbox error
                                    state.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-y-4 rounded-xl border p-6">
                <h2 className="text-lg font-medium">Badges and chips</h2>
                <div className="flex flex-wrap gap-2">
                    <Badge
                        variant="info"
                        icon={<InfoIcon className="size-3" />}
                    >
                        Info
                    </Badge>
                    <Badge
                        variant="success"
                        icon={<CheckIcon className="size-3" />}
                    >
                        Success
                    </Badge>
                    <Badge
                        variant="warning"
                        icon={<AlertCircleIcon className="size-3" />}
                    >
                        Warning
                    </Badge>
                    <Badge
                        variant="error"
                        icon={<AlertCircleIcon className="size-3" />}
                    >
                        Error
                    </Badge>
                    <Badge variant="muted">Muted</Badge>
                    <Chip variant="info" icon={<InfoIcon className="size-3" />}>
                        Standalone chip
                    </Chip>
                    {!dismissedChip ? (
                        <Chip
                            variant="success"
                            icon={<CheckIcon className="size-3" />}
                            onDismiss={() => setDismissedChip(true)}
                        >
                            Dismissible chip
                        </Chip>
                    ) : (
                        <Button
                            variant="ghost"
                            onClick={() => setDismissedChip(false)}
                        >
                            Reset chip
                        </Button>
                    )}
                </div>
            </section>

            <section className="space-y-4 rounded-xl border p-6">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <h2 className="text-lg font-medium">
                            Banners and skeletons
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Severity states, dismissibility, and loading
                            placeholders.
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        onClick={() => setDismissedBanner(false)}
                    >
                        Reset banner
                    </Button>
                </div>

                <div className="space-y-3">
                    {!dismissedBanner ? (
                        <Banner
                            severity="warning"
                            title="Provider failure detected"
                            dismissible
                            onDismiss={() => setDismissedBanner(true)}
                        >
                            The latest search run included a soft provider
                            failure. You can continue, but the lock flow will
                            require acknowledgement.
                        </Banner>
                    ) : null}
                    <Banner severity="success" title="Corpus locked">
                        This banner demonstrates the success severity state.
                    </Banner>
                    <Banner severity="error" title="Export blocked">
                        Required data is missing for the selected export format.
                    </Banner>
                    <div className="grid gap-3 md:grid-cols-3">
                        <Skeleton className="h-24 w-full" />
                        <Skeleton className="h-24 w-full" />
                        <Skeleton className="h-24 w-full" />
                    </div>
                </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4 rounded-xl border p-6">
                    <h2 className="text-lg font-medium">Tooltip</h2>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline">
                                    Hover or focus me
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                This tooltip is keyboard accessible.
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

                <div className="space-y-4 rounded-xl border p-6">
                    <h2 className="text-lg font-medium">
                        Modal and drawer wrappers
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        <Button onClick={() => setModalOpen(true)}>
                            Open modal
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => setDrawerOpen(true)}
                        >
                            Open drawer
                        </Button>
                    </div>
                </div>
            </section>

            <Modal
                open={modalOpen}
                onOpenChange={setModalOpen}
                title="Confirm corpus lock"
                description="This modal uses the shared dialog primitive with the task-specified animation timing."
                footer={
                    <>
                        <Button
                            variant="ghost"
                            onClick={() => setModalOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button onClick={() => setModalOpen(false)}>
                            Confirm
                        </Button>
                    </>
                }
            >
                <p className="text-sm text-muted-foreground">
                    Modal content can include any stateless form or explanation
                    required by the workflow.
                </p>
            </Modal>

            <Drawer
                open={drawerOpen}
                onOpenChange={setDrawerOpen}
                title="Review details"
                description="This drawer uses the shared sheet primitive with a 480px layout."
                footer={
                    <Button
                        variant="secondary"
                        onClick={() => setDrawerOpen(false)}
                    >
                        Close drawer
                    </Button>
                }
            >
                <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                        Drawers are useful for side-panel workflows that keep
                        the page context visible.
                    </p>
                    <p>
                        The wrapper supports escape key and outside click
                        configuration through props.
                    </p>
                </div>
            </Drawer>
        </div>
    );
}

export default UIShowcase;
