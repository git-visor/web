import type { JSX } from 'react'
import { Bug } from 'lucide-react'

const BUG_REPORT_URL = 'https://github.com/git-visor/web-app/issues/new?labels=bug&type=bug'

export function ReportBug(): JSX.Element {
  return (
    <a
      href={BUG_REPORT_URL}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-md border border-red-500/40 bg-red-500/10 px-2.5 py-1 text-xs font-medium text-red-300 hover:bg-red-500/20 transition-colors"
      aria-label="Report a bug"
    >
      <Bug className="h-4 w-4" />
      <span>Report Bug</span>
    </a>
  )
}