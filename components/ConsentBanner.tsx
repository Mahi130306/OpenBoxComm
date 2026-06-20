'use client'

/**
 * ConsentBanner
 * ─────────────
 * Shown to first-time visitors (or when T&C/PP version changes).
 * Three actions:
 *   Accept  — permanent, logs consent, hides banner
 *   Reject  — permanent, logs rejection, hides banner
 *   Dismiss — session-only hide (banner re-appears next visit)
 *
 * Placement: bottom-right, slides up on entry, slides down on exit.
 */

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useConsent } from '@/lib/hooks/useConsent'
import { Shield, X, Check, XCircle, ChevronRight } from 'lucide-react'

export function ConsentBanner() {
  const { isReady, hasConsented, accept, reject, dismiss } = useConsent()
  const [visible,   setVisible]   = useState(false)
  const [dismissed, setDismissed] = useState(false) // session-only
  const [exiting,   setExiting]   = useState(false)
  const [loading,   setLoading]   = useState<'accept' | 'reject' | 'dismiss' | null>(null)

  // Slide in after hydration check
  useEffect(() => {
    if (isReady && !hasConsented && !dismissed) {
      // Small delay so the rest of the page loads first
      const t = setTimeout(() => setVisible(true), 900)
      return () => clearTimeout(t)
    }
  }, [isReady, hasConsented, dismissed])

  if (!visible || hasConsented || dismissed) return null

  // ── Animate out then run callback ──────────────────────────────────────────
  function animateOut(callback: () => void) {
    setExiting(true)
    setTimeout(() => {
      setVisible(false)
      callback()
    }, 400)
  }

  async function handleAccept() {
    setLoading('accept')
    await accept()
    animateOut(() => {})
  }

  async function handleReject() {
    setLoading('reject')
    await reject()
    animateOut(() => {})
  }

  async function handleDismiss() {
    setLoading('dismiss')
    await dismiss()
    animateOut(() => setDismissed(true))
  }

  return (
    <>
      {/* Subtle backdrop blur on mobile */}
      <div
        className="fixed inset-0 z-[998] pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 100% 100%, rgba(0,0,0,0.25) 0%, transparent 70%)',
        }}
      />

      <div
        role="dialog"
        aria-modal="false"
        aria-label="Privacy and Terms consent"
        className={`
          fixed bottom-5 right-5 z-[999]
          w-[clamp(300px,90vw,420px)]
          transition-all duration-400 ease-out
          ${exiting
            ? 'opacity-0 translate-y-6 scale-[0.97] pointer-events-none'
            : 'opacity-100 translate-y-0 scale-100'
          }
        `}
        style={{
          animation: exiting ? 'none' : 'ob-consent-slidein 0.45s cubic-bezier(0.16,1,0.3,1) both',
        }}
      >
        {/* ── Card ──────────────────────────────────────────────────────────── */}
        <div
          className="relative rounded-2xl border overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(18,18,18,0.97) 0%, rgba(10,10,10,0.99) 100%)',
            borderColor: 'rgba(255,255,255,0.09)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Accent glow strip */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(99,202,183,0.5) 40%, rgba(147,112,219,0.4) 70%, transparent)',
            }}
          />

          {/* Dismiss X button */}
          <button
            onClick={handleDismiss}
            disabled={loading !== null}
            aria-label="Dismiss consent banner for this session"
            className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-150 hover:bg-white/10 active:scale-95 focus:outline-none focus:ring-1 focus:ring-white/20 disabled:opacity-40"
          >
            {loading === 'dismiss'
              ? <span className="w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white/80 animate-spin" />
              : <X size={14} className="text-white/50" />
            }
          </button>

          {/* Content */}
          <div className="p-5 pr-10">
            {/* Header */}
            <div className="flex items-start gap-3 mb-3.5">
              <div
                className="mt-0.5 w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(99,202,183,0.2), rgba(147,112,219,0.15))',
                  border: '1px solid rgba(99,202,183,0.25)',
                }}
              >
                <Shield size={17} className="text-[#63cab7]" />
              </div>
              <div>
                <p className="text-[13.5px] font-semibold text-white leading-tight mb-0.5">
                  Your privacy matters
                </p>
                <p className="text-[11px] text-white/40 font-medium tracking-wide uppercase">
                  Indian IT Law Compliant · DPDP Act 2023
                </p>
              </div>
            </div>

            {/* Body */}
            <p className="text-[12.5px] text-white/60 leading-relaxed mb-1">
              By using this site you agree to our{' '}
              <Link
                href="/legal/terms"
                target="_blank"
                className="text-[#63cab7] hover:text-[#7ddecb] underline underline-offset-2 decoration-[#63cab7]/40 transition-colors"
              >
                Terms &amp; Conditions
              </Link>
              {' '}and{' '}
              <Link
                href="/legal/privacy"
                target="_blank"
                className="text-[#63cab7] hover:text-[#7ddecb] underline underline-offset-2 decoration-[#63cab7]/40 transition-colors"
              >
                Privacy Policy
              </Link>
              . Your consent choice is logged as required under the{' '}
              <span className="text-white/80">IT Act 2000</span> &amp;{' '}
              <span className="text-white/80">DPDP Act 2023</span>.
            </p>

            {/* Divider */}
            <div className="w-full h-px my-3.5" style={{ background: 'rgba(255,255,255,0.06)' }} />

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              {/* Accept */}
              <button
                onClick={handleAccept}
                disabled={loading !== null}
                id="consent-accept-btn"
                aria-label="Accept Terms and Conditions and Privacy Policy"
                className="
                  flex-1 flex items-center justify-center gap-1.5
                  h-9 rounded-xl text-[12.5px] font-semibold
                  transition-all duration-200 active:scale-[0.97]
                  focus:outline-none focus:ring-2 focus:ring-[#63cab7]/50
                  disabled:opacity-60 disabled:cursor-not-allowed
                "
                style={{
                  background: loading === 'accept'
                    ? 'rgba(99,202,183,0.2)'
                    : 'linear-gradient(135deg, #63cab7 0%, #4ab8a3 100%)',
                  color: loading === 'accept' ? '#63cab7' : '#0a1a18',
                  boxShadow: loading === 'accept' ? 'none' : '0 2px 12px rgba(99,202,183,0.35)',
                }}
              >
                {loading === 'accept'
                  ? <span className="w-3.5 h-3.5 rounded-full border-2 border-[#63cab7]/30 border-t-[#63cab7] animate-spin" />
                  : <><Check size={13} strokeWidth={2.5} /> Accept</>
                }
              </button>

              {/* Reject */}
              <button
                onClick={handleReject}
                disabled={loading !== null}
                id="consent-reject-btn"
                aria-label="Reject Terms and Conditions and Privacy Policy"
                className="
                  flex-1 flex items-center justify-center gap-1.5
                  h-9 rounded-xl text-[12.5px] font-semibold
                  transition-all duration-200 active:scale-[0.97]
                  focus:outline-none focus:ring-2 focus:ring-white/20
                  disabled:opacity-60 disabled:cursor-not-allowed
                "
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  color: 'rgba(255,255,255,0.55)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {loading === 'reject'
                  ? <span className="w-3.5 h-3.5 rounded-full border-2 border-white/20 border-t-white/60 animate-spin" />
                  : <><XCircle size={13} strokeWidth={2} /> Reject</>
                }
              </button>
            </div>

            {/* Legal footnote */}
            <p className="mt-2.5 text-[10.5px] text-white/25 leading-snug flex items-start gap-1">
              <ChevronRight size={10} className="mt-0.5 flex-shrink-0 text-white/20" />
              Reject logs your decision but lets you continue browsing. Dismiss (✕) hides this until your next visit.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
