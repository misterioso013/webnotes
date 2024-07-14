'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import * as firestore from 'firebase/firestore'
import { db } from '@/lib/firebase'

type props = {
    id?: number | string | null
}

export function Editor({ id }: props) {
    const [note, setNote] = useState({
        id: id ? id : null,
        title: '',
        content: '',
    })
    const [title, setTitle] = useState(note.title ? note.title : '')
    const [content, setContent] = useState(note.content ? note.content : '')
    const [titleCanBeEdited, setTitleCanBeEdited] = useState(false)
    const [contentCanBeEdited, setContentCanBeEdited] = useState(false)

    const router = useRouter()

    // Read note from database
    // Add note to database
    // Update note in database

    return (
        <div className="hidden md:flex flex-col flex-1 p-4">
            <h2
                className="text-lg font-semibold mb-2 outline-none"
                contentEditable={titleCanBeEdited}
                onClick={() => setTitleCanBeEdited(true)}
                onMouseOver={() => setTitleCanBeEdited(true)}
                onKeyUp={(e) => setTitle(e.currentTarget.innerText)}
            >
                {title ? title : 'Note Title'}
            </h2>
            <p
                className="text-sm text-gray-500 dark:text-gray-400 outline-none w-full"
                contentEditable={contentCanBeEdited}
                onClick={() => setContentCanBeEdited(true)}
                onMouseOver={() => setContentCanBeEdited(true)}
                onKeyUp={(e) => setContent(e.currentTarget.innerText)}
            >
                {content ? content : 'Note content goes here...'}
            </p>
        </div>
    )
}