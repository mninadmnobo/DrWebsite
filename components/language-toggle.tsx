'use client'

import React from 'react'
import { usePortfolio } from '@/lib/context'

export function LanguageToggle() {
  const { lang, setLang } = usePortfolio()

  return (
    <div
      className="inline-flex items-center rounded-full border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 p-0.5 text-[11px] sm:text-xs font-semibold shadow-xs shrink-0"
      role="group"
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => setLang('bn')}
        className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full transition-all duration-200 cursor-pointer ${
          lang === 'bn'
            ? 'bg-sky-600 text-white shadow-xs font-bold'
            : 'text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400'
        }`}
        aria-pressed={lang === 'bn'}
      >
        বাং
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full transition-all duration-200 cursor-pointer ${
          lang === 'en'
            ? 'bg-sky-600 text-white shadow-xs font-bold'
            : 'text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400'
        }`}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  )
}
