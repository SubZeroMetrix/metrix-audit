export type SignalId =
  | 'digital-visibility'
  | 'response-speed'
  | 'review-management'
  | 'scheduling-discipline'
  | 'documentation'
  | 'team-accountability'

export interface Signal {
  id: SignalId
  title: string
  whatItMeans: string
  firstAction: string
}

export const SIGNALS: Record<SignalId, Signal> = {
  'digital-visibility': {
    id: 'digital-visibility',
    title: 'Digital visibility gaps',
    whatItMeans:
      'A contractor business that is hard to find or verify online loses jobs to competitors before a phone even rings -- not because the work is worse, but because the business wasn\'t there to be found or trusted at the moment someone was deciding.',
    firstAction:
      'Search your own business name and primary service + city from a browser you\'re not logged into. Note exactly what shows up in the first page of results and whether it\'s current and accurate.',
  },
  'response-speed': {
    id: 'response-speed',
    title: 'Response speed',
    whatItMeans:
      'The business that responds first usually wins the job, independent of price or quality -- most buyers stop shopping once someone competent answers. A slow first response is a structural disadvantage, not a minor inconvenience.',
    firstAction:
      'Time your own next 10 inbound lead responses from the moment the inquiry arrives to the moment someone from your business replies. Write the numbers down before drawing any conclusion.',
  },
  'review-management': {
    id: 'review-management',
    title: 'Review and reputation management',
    whatItMeans:
      'Reviews left unanswered, or arriving too rarely to reflect current work, read as neglect to a prospect even when the underlying work is excellent -- reputation signals decay without active maintenance.',
    firstAction:
      'Count your reviews from the last 90 days across every platform you\'re listed on, and check whether the most recent negative review (if any) has a public response.',
  },
  'scheduling-discipline': {
    id: 'scheduling-discipline',
    title: 'Scheduling discipline',
    whatItMeans:
      'When scheduling exists only in one person\'s head or a paper calendar, double-bookings and missed appointments become a matter of when, not if -- and every missed appointment costs more than the job itself in trust.',
    firstAction:
      'Ask everyone who touches scheduling to describe, in writing, exactly how a new appointment gets confirmed and who else can see it. Compare the answers.',
  },
  documentation: {
    id: 'documentation',
    title: 'Documentation and follow-through',
    whatItMeans:
      'Work that isn\'t documented -- what was quoted, what was done, what was promised for next time -- creates disputes, warranty confusion, and repeat visits that shouldn\'t be necessary.',
    firstAction:
      'Pull the paperwork (digital or physical) for your last five completed jobs and check whether each one clearly states what was done and what, if anything, was promised for later.',
  },
  'team-accountability': {
    id: 'team-accountability',
    title: 'Team accountability',
    whatItMeans:
      'A team can only be held accountable to numbers that are actually visible to someone -- without a shared, current view of who\'s doing what, accountability defaults to trust alone.',
    firstAction:
      'Pick one number that matters (jobs completed this week, calls returned same day, whatever fits your business) and check whether anyone besides you could state it accurately right now.',
  },
}

export interface Question {
  id: string
  signal: SignalId
  text: string
}

export const QUESTIONS: Question[] = [
  { id: 'q1', signal: 'digital-visibility', text: 'If a stranger searched your business name and service today, would the results be current and accurate?' },
  { id: 'q2', signal: 'digital-visibility', text: 'Is your service area, phone number, and hours consistent everywhere your business is listed online?' },
  { id: 'q3', signal: 'response-speed', text: 'Do you know your actual average time to first response on a new inbound lead?' },
  { id: 'q4', signal: 'response-speed', text: 'Does every inbound lead get a response within the same business day, without exception?' },
  { id: 'q5', signal: 'review-management', text: 'Have you received at least one new review in the last 30 days?' },
  { id: 'q6', signal: 'review-management', text: 'Does every negative review get a public, professional response?' },
  { id: 'q7', signal: 'scheduling-discipline', text: 'Can more than one person see the full schedule without asking someone else?' },
  { id: 'q8', signal: 'documentation', text: 'Is there a written or digital record of what was done on every completed job in the last 90 days?' },
  { id: 'q9', signal: 'team-accountability', text: 'Could someone other than you state this week\'s completed-job count accurately right now?' },
]

export type Answer = 'yes' | 'no' | 'unsure'

export interface AuditResult {
  primarySignal: Signal
  supportingSignal: Signal | null
  verifiedGapQuestions: string[]
  unknownQuestions: string[]
}

/**
 * Deterministic, not an opaque score: picks the signal with the most "no"
 * (verified gap) answers as primary, the next-highest as supporting.
 * "unsure" answers are surfaced separately as UNKNOWN evidence, never
 * folded into the gap count or presented as a negative finding.
 */
export function scoreAudit(answers: Record<string, Answer>): AuditResult {
  const gapCounts: Record<SignalId, number> = {
    'digital-visibility': 0, 'response-speed': 0, 'review-management': 0,
    'scheduling-discipline': 0, documentation: 0, 'team-accountability': 0,
  }
  const verifiedGapQuestions: string[] = []
  const unknownQuestions: string[] = []

  for (const q of QUESTIONS) {
    const a = answers[q.id]
    if (a === 'no') {
      gapCounts[q.signal] += 1
      verifiedGapQuestions.push(q.text)
    } else if (a === 'unsure') {
      unknownQuestions.push(q.text)
    }
  }

  const ranked = (Object.keys(gapCounts) as SignalId[])
    .filter((id) => gapCounts[id] > 0)
    .sort((a, b) => gapCounts[b] - gapCounts[a])

  const primaryId = ranked[0] ?? QUESTIONS[0].signal
  const supportingId = ranked[1] ?? null

  return {
    primarySignal: SIGNALS[primaryId],
    supportingSignal: supportingId ? SIGNALS[supportingId] : null,
    verifiedGapQuestions,
    unknownQuestions,
  }
}
