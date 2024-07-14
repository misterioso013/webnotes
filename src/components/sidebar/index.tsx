import { Input } from "@/components/ui/input"
import Link from "next/link"
import { StickyNoteIcon, LockIcon, TimerIcon } from "@/components/icons"
export function Sidebar() {
    return (
        <div className="w-full md:w-64 border-r bg-gray-100/40 p-4 dark:bg-gray-800/40">
            <h2 className="text-sm font-semibold mb-2">Notes</h2>
            <div className="mb-4">
                <Input className="w-full" placeholder="Search notes..." />
            </div>
            <nav className="space-y-2">
                <Link
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                >
                    <StickyNoteIcon className="h-4 w-4" />
                    Note 1
                </Link>
                <Link
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                >
                    <StickyNoteIcon className="h-4 w-4" />
                    Note 2
                    <LockIcon className="h-4 w-4 ml-auto" />
                </Link>
                <Link
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                >
                    <StickyNoteIcon className="h-4 w-4" />
                    Note 3
                    <TimerIcon className="h-4 w-4 ml-auto" />
                </Link>
            </nav>
        </div>
    )
}