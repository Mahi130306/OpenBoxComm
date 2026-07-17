/**
 * useConsent — React hook for consent state management
 *
 * Returns:
 *   hasConsented  — true if user has accepted or rejected (banner should hide)
 *   consentAction — the stored action, or null
 *   accept()      — record 'accept' consent
 *   reject()      — record 'reject' consent
 *   dismiss()     — record 'dismiss' (session-only, no localStorage)
 */

'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  hasValidConsent,
  getConsentRecord,
  recordConsent,
  type ConsentAction,
  type ConsentRecord,
} from '@/lib/consent-logger'

interface UseConsentReturn {
  /** True once the hook has checked localStorage (prevents flash) */
  isReady: boolean
  /** True if user has made a permanent decision (accept/reject) */
  hasConsented: boolean
  /** The stored consent record, or null */
  consentRecord: ConsentRecord | null
  accept: () => Promise<void>
  reject: () => Promise<void>
  dismiss: () => Promise<void>
}

export function useConsent(): UseConsentReturn {
  const [isReady,       setIsReady]       = useState(false)
  const [hasConsented,  setHasConsented]  = useState(false)
  const [consentRecord, setConsentRecord] = useState<ConsentRecord | null>(null)

  // On mount: read localStorage (client-only)
  useEffect(() => {
    setHasConsented(hasValidConsent())
    setConsentRecord(getConsentRecord())
    setIsReady(true)
  }, [])

  const handleConsent = useCallback(async (action: ConsentAction) => {
    await recordConsent(action)
    if (action !== 'dismiss') {
      setHasConsented(true)
      setConsentRecord(getConsentRecord())
    } else {
      // Dismiss: hide for this session but don't mark as consented
      // The banner component manages its own session-hide state
      setHasConsented(false)
    }
  }, [])

  return {
    isReady,
    hasConsented,
    consentRecord,
    accept:  () => handleConsent('accept'),
    reject:  () => handleConsent('reject'),
    dismiss: () => handleConsent('dismiss'),
  }
}
