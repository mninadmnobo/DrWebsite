'use client'

import React, { useState } from 'react'
import { doctorData } from '@/lib/doctor'
import { usePortfolio } from '@/lib/context'

export function FAQ() {
  const { lang, t } = usePortfolio()
  const { faqs } = doctorData
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-16 sm:py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold badge-indigo mb-3">
            {t('সাধারণ জিজ্ঞাসা', 'Common Inquiries')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('রোগীদের সচরাচর জিজ্ঞাসিত প্রশ্ন ও উত্তর', 'Frequently Asked Questions')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t(
              'সিরিয়াল গ্রহণ, চেম্বার পরিদর্শন এবং অর্থোপেডিক চিকিৎসা সম্পর্কিত প্রয়োজনীয় তথ্য।',
              'Helpful guidance regarding serial bookings, visiting hours, and surgical procedures.'
            )}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="card-base border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    {lang === 'bn' ? faq.questionBn : faq.questionEn}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-slate-600 dark:text-slate-300 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400' : ''
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3 animate-in fade-in duration-200">
                    {lang === 'bn' ? faq.answerBn : faq.answerEn}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
