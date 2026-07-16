'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export function ScrollToSection() {
    const searchParams = useSearchParams()

    useEffect(() => {
        const tab = searchParams.get('tab')
        if (!tab) return

        const el = document.getElementById(tab)
        if (el) {
            // adjust this to match your fixed header's height (in px)
            const HEADER_OFFSET = 90

            // slight delay ensures layout is painted before scrolling
            requestAnimationFrame(() => {
                const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
                window.scrollTo({ top, behavior: 'smooth' })
            })
        }
    }, [searchParams])

    return null
}