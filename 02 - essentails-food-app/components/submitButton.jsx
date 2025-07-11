'use client'

import { useFormStatus } from "react-dom"

export function SubmitButton() {
    const { pending } = useFormStatus()

    return <button disabled={pending}>
        {pending ? 'submitting...' : 'share meal'}
    </button>
}