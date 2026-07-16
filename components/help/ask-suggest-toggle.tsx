'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { HelpCircle, Mail, ArrowRight } from 'lucide-react'

type Tab = 'ask' | 'suggest'

const askSteps = [
    { step: '1', title: 'Join Junction', desc: 'Use the main invite link to join the server.' },
    { step: '2', title: 'Go to #help', desc: 'Head over to the help channel.' },
    { step: '3', title: 'Describe clearly', desc: 'Include context and what you tried.' },
    { step: '4', title: 'Be patient', desc: "We'll get back to you soon." },
]

const suggestSteps = [
    { step: '1', title: 'Join Junction', desc: 'Use the main invite link to join the server.' },
    { step: '2', title: 'Go to #suggestions', desc: 'Head over to the suggestion forum under the Forums category.' },
    { step: '3', title: 'Create a suggestion', desc: 'Write a clear title and description.' },
    { step: '4', title: 'Upvote', desc: 'If you find similar suggestions, upvote them to show support.' },
    { step: '5', title: 'Be patient', desc: 'The admins will review the suggestion and get back to you soon.' },
]

export function AskSuggestToggle() {
    const [tab, setTab] = useState<Tab>('ask')
    const sectionRef = useRef<HTMLDivElement>(null)

    // Land on the right tab and scroll into view when arriving via #ask or #suggest
    useEffect(() => {
        const applyHash = (hash: string) => {
            if (hash === '#ask' || hash === '#suggest') {
                setTab(hash === '#ask' ? 'ask' : 'suggest')
                sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
        applyHash(window.location.hash)
        window.addEventListener('hashchange', () => applyHash(window.location.hash))
        return () => window.removeEventListener('hashchange', () => applyHash(window.location.hash))
    }, [])

    const steps = tab === 'ask' ? askSteps : suggestSteps

    return (
        <div ref={sectionRef} id="ask-suggest" className="scroll-mt-24">
            {/* Segmented toggle, same pattern as the login / signup switcher */}
            <div className="relative mb-8 inline-flex w-full rounded-full border border-black/10 bg-muted/40 p-1 dark:border-white/10 sm:w-auto">
                <span
                    aria-hidden
                    className="absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-background shadow-sm transition-transform duration-300 ease-out"
                    style={{ transform: tab === 'ask' ? 'translateX(0%)' : 'translateX(calc(100% + 8px))' }}
                />
                <button
                    id="ask"
                    type="button"
                    onClick={() => setTab('ask')}
                    aria-pressed={tab === 'ask'}
                    className={`relative z-10 flex-1 rounded-full px-6 py-2.5 text-sm font-bold transition-colors sm:flex-none sm:px-8 ${tab === 'ask' ? 'text-cyan-600 dark:text-cyan-400' : 'text-muted-foreground'
                        }`}
                >
                    How to ask
                </button>
                <button
                    id="suggest"
                    type="button"
                    onClick={() => setTab('suggest')}
                    aria-pressed={tab === 'suggest'}
                    className={`relative z-10 flex-1 rounded-full px-6 py-2.5 text-sm font-bold transition-colors sm:flex-none sm:px-8 ${tab === 'suggest' ? 'text-cyan-600 dark:text-cyan-400' : 'text-muted-foreground'
                        }`}
                >
                    How to suggest
                </button>
            </div>

            <div key={tab} className="animate-in fade-in slide-in-from-bottom-1 duration-300">
                <ol className="space-y-5">
                    {steps.map((item) => (
                        <li key={item.step} className="flex gap-4">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-xs font-bold text-cyan-600 dark:text-cyan-400">
                                {item.step}
                            </span>
                            <div>
                                <p className="text-sm font-bold text-foreground">{item.title}</p>
                                <p className="mt-0.5 text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        </li>
                    ))}
                </ol>

                <div className="mt-8 flex flex-wrap gap-4">
                    <Button asChild className="rounded-full">
                        <a href="https://discord.gg/7ZWckKU89J" target="_blank" rel="noopener noreferrer">
                            Join the Junction Server
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}