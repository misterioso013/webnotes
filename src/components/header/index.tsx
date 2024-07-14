import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PlusIcon, SaveIcon, CalendarIcon, TrashIcon, LockIcon, ShareIcon, SettingsIcon } from "@/components/icons"
export function Header() {
    return (
        <header className="flex h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <Link href="/" className="flex flex-row">
                <img src="/logo.svg" alt="Web Notes" className="h-6 w-6" />
                <h1 className="text-lg font-semibold hidden md:block">Web Notes</h1>
            </Link>
            <Button className="rounded-full" size="icon" variant="outline">
                <PlusIcon className="h-4 w-4" />
                <span className="sr-only">Create new note</span>
            </Button>
            <Button className="rounded-full" size="icon" variant="outline">
                <SaveIcon className="h-4 w-4" />
                <span className="sr-only">Save note</span>
            </Button>
            <Button className="rounded-full" size="icon" variant="outline">
                <TrashIcon className="h-4 w-4" />
                <span className="sr-only">Delete note</span>
            </Button>
            <Button className="rounded-full" size="icon" variant="outline">
                <LockIcon className="h-4 w-4" />
                <span className="sr-only">Lock note</span>
            </Button>
            <Button className="rounded-full" size="icon" variant="outline">
                <ShareIcon className="h-4 w-4" />
                <span className="sr-only">Share note</span>
            </Button>
            <Button className="rounded-full" size="icon" variant="outline">
                <CalendarIcon className="h-4 w-4" />
                <span className="sr-only">Date</span>
            </Button>
            <Button className="rounded-full" size="icon" variant="outline">
                <SettingsIcon className="h-4 w-4" />
                <span className="sr-only">Settings</span>
            </Button>
            <div className="ml-auto text-sm text-gray-500 dark:text-gray-400">Last change: <span id="last-change">Never</span></div>
        </header>
    )
}