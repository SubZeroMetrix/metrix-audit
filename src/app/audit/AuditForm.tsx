'use client'

import { useState } from 'react'
import { track } from '@vercel/analytics'
import { QUESTIONS, scoreAudit, type Answer, type AuditResult } from '@/lib/auditCheck'
import { withAttribution } from '@/lib/attribution'

export function AuditForm() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({})
  const [started, setStarted] = useState(false)
  const [result, setResult] = useState<AuditResult | null>(null)

  function setAnswer(id: string, value: Answer) {
    if (!started) { setStarted(true); track('audit_start', {}) }
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }

  const allAnswered = QUESTIONS.every((q) => answers[q.id])

  function handleSubmit() {
    const r = scoreAudit(answers)
    setResult(r)
    track('audit_complete', { primary_signal: r.primarySignal.id })
  }

  if (result) {
    return (
      <div className="space-y-8">
        <div className="card-panel">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Primary signal</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">{result.primarySignal.title}</h2>
          <p className="text-gray-600">{result.primarySignal.whatItMeans}</p>
        </div>

        {result.supportingSignal && (
          <div className="card-panel">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Supporting signal</p>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{result.supportingSignal.title}</h3>
            <p className="text-sm text-gray-600">{result.supportingSignal.whatItMeans}</p>
          </div>
        )}

        <div className="card-panel">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Recommended first action</p>
          <p className="text-gray-700">{result.primarySignal.firstAction}</p>
        </div>

        {result.verifiedGapQuestions.length > 0 && (
          <div className="card-panel">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Verified gaps (from your answers)</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              {result.verifiedGapQuestions.map((q) => <li key={q}>{q}</li>)}
            </ul>
          </div>
        )}

        {result.unknownQuestions.length > 0 && (
          <div className="card-panel border-amber-300 bg-amber-50">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">Unknown -- worth checking next</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-amber-800">
              {result.unknownQuestions.map((q) => <li key={q}>{q}</li>)}
            </ul>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="card-panel">
            <p className="font-semibold text-gray-900 mb-2">Software for this</p>
            <p className="text-sm text-gray-500 mb-4">Modern Trades CRM handles response speed, follow-up, and scheduling visibility nationally.</p>
            <a href={withAttribution('https://www.moderntradescrm.com', { source_tool: 'audit', topic: result.primarySignal.id })} className="btn-secondary w-full text-center block" onClick={() => track('moderntradescrm_click', { source: 'audit-result' })}>See Modern Trades CRM</a>
          </div>
          <div className="card-panel">
            <p className="font-semibold text-gray-900 mb-2">Hands-on local help</p>
            <p className="text-sm text-gray-500 mb-4">The Modern Trades Mentor implements this directly in Pinellas County, FL.</p>
            <a href="https://www.themoderntradesmentor.com" className="btn-secondary w-full text-center block" onClick={() => track('tmt_click', { source: 'audit-result' })}>Work with TMT</a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {QUESTIONS.map((q) => (
        <div key={q.id} className="card-panel">
          <p className="text-gray-800 font-medium mb-4">{q.text}</p>
          <div className="flex gap-3">
            {(['yes', 'no', 'unsure'] as Answer[]).map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => setAnswer(q.id, val)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  answers[q.id] === val
                    ? 'bg-brand-electric text-white border-brand-electric'
                    : 'border-gray-300 text-gray-600 hover:border-brand-electric hover:text-brand-electric'
                }`}
              >
                {val === 'yes' ? 'Yes' : val === 'no' ? 'No' : 'Not sure'}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button onClick={handleSubmit} disabled={!allAnswered} className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed">
        {allAnswered ? 'See my result' : `Answer all ${QUESTIONS.length} questions to continue`}
      </button>
    </div>
  )
}
