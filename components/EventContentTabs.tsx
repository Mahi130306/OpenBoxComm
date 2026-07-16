'use client'

import { useState } from 'react'
import type { ElementType, ReactNode } from 'react'
import { ChevronDown, ListChecks, Sparkles, Info } from 'lucide-react'

interface Tab {
  id: string
  label: string
  icon: ElementType
}

interface EventContentTabsProps {
  about: string
  agenda: string[]
  prep: string[]
  rules: string[]
  accentClass: string
}

const TABS: Tab[] = [
  { id: 'details', label: 'Details', icon: Info },
  { id: 'agenda', label: 'Agenda', icon: ListChecks },
  { id: 'prep', label: 'Prep & Rules', icon: Sparkles },
]

export function EventContentTabs({
  about,
  agenda,
  prep,
  rules,
  accentClass,
}: EventContentTabsProps) {
  const [activeTab, setActiveTab] = useState('details')
  const [openAccordion, setOpenAccordion] = useState<string | null>('details')

  function toggleAccordion(id: string) {
    setOpenAccordion((prev) => (prev === id ? null : id))
  }

  const tabContent: Record<string, ReactNode> = {
    details: (
      <div className="space-y-4">
        <div className="rounded-2xl border border-border bg-muted/30 p-6">
          <h3 className="mb-3 text-sm font-semibold text-foreground/75">About this event</h3>
          <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
            {about}
          </p>
        </div>
      </div>
    ),

    agenda: (
      <div className="space-y-3">
        {agenda.length > 0 ? (
          agenda.map((item, index) => (
            <div
              key={item}
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-border bg-muted/30 p-5 transition-all hover:bg-muted/50"
            >
              {/* Step number */}
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${accentClass} text-xs font-extrabold text-black/75 shadow-md`}
              >
                {index + 1}
              </div>
              <p className="pt-0.5 text-sm font-medium leading-relaxed text-foreground/80 transition-colors group-hover:text-foreground">
                {item}
              </p>
              {/* Left accent line on hover */}
              <div
                className={`absolute inset-y-0 left-0 w-0.5 ${accentClass} opacity-0 transition-opacity group-hover:opacity-70`}
              />
            </div>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">No specific agenda items listed yet.</p>
        )}
      </div>
    ),

    prep: (
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Preparation */}
        <div className="rounded-2xl border border-border bg-muted/30 p-6">
          <p className="mb-3 text-sm font-semibold text-foreground/75">Preparation</p>
          <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
            {prep.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Rules */}
        <div className="rounded-2xl border border-border bg-muted/30 p-6">
          <p className="mb-3 text-sm font-semibold text-foreground/75">Guidelines &amp; Rules</p>
          <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
            {rules.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  }

  return (
    <>
      {/* ── Desktop: Tab bar (md and above) ──────────────────────────── */}
      <div className="hidden md:block">
        {/* Tab nav */}
        <div className="mb-6 flex gap-1 rounded-2xl border border-border bg-muted/30 p-1.5">
          {TABS.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab content */}
        <div>{tabContent[activeTab]}</div>
      </div>

      {/* ── Mobile: Accordion (below md) ─────────────────────────────── */}
      <div className="space-y-3 md:hidden">
        {TABS.map((tab) => {
          const Icon = tab.icon
          const isOpen = openAccordion === tab.id
          return (
            <div
              key={tab.id}
              className="overflow-hidden rounded-2xl border border-border bg-muted/20"
            >
              <button
                onClick={() => toggleAccordion(tab.id)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-lg ${accentClass}`}
                  >
                    <Icon className="h-3.5 w-3.5 text-black/75" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{tab.label}</span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Accordion body — animate via max-height */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                }`}
              >
                <div className="border-t border-border px-5 pb-5 pt-4">
                  {tabContent[tab.id]}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
