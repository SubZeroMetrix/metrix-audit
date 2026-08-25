/**
 * Attribution payload contract shared across the SubZeroMetrix portfolio
 * (see subzerometrix/src/lib/attribution.ts for the canonical version).
 * No live HighLevel endpoint or confirmed field keys exist yet -- this
 * only builds the payload shape and logs it in development.
 */
export interface AttributionPayload {
  original_domain: string | null
  original_landing_page: string | null
  source_tool: string | null
  first_content_topic: string | null
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  consent_state: 'not-collected'
}

export function buildAttributionPayload(): AttributionPayload {
  const isBrowser = typeof window !== 'undefined'
  const params = isBrowser ? new URLSearchParams(window.location.search) : new URLSearchParams()

  return {
    original_domain: isBrowser ? window.location.hostname : null,
    original_landing_page: isBrowser ? window.location.pathname : null,
    source_tool: isBrowser && window.location.pathname.startsWith('/audit') ? 'metrix-audit' : null,
    first_content_topic: isBrowser ? window.location.pathname : null,
    utm_source: params.get('utm_source'),
    utm_medium: params.get('utm_medium'),
    utm_campaign: params.get('utm_campaign'),
    consent_state: 'not-collected',
  }
}

/** No live endpoint yet -- Terminal 1 dependency. Logs only in development. */
export function sendAttributionPayload(payload: AttributionPayload): void {
  if (process.env.NODE_ENV === 'development') {
    console.debug('[attribution] payload ready, no live endpoint configured', payload)
  }
}
