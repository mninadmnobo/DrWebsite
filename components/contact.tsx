'use client'

import React, { useState } from 'react'
import { doctorData } from '@/lib/doctor'
import { usePortfolio } from '@/lib/context'

export function Contact() {
  const { lang, t } = usePortfolio()
  const { phones } = doctorData
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null)

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num)
    setCopiedNumber(num)
    setTimeout(() => setCopiedNumber(null), 2500)
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold badge-emerald mb-3">
            {t('সরাসরি যোগাযোগ ও সিরিয়াল', 'Serial Hotline & Contact')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t(
              'রোগী দেখানোর জন্য চেম্বারের সিরিয়াল গ্রহণ করুন',
              'Book Your Appointment Serial Directly'
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t(
              'নিচের যেকোনো একটি নম্বরে সরাসরি কল করে রোগী দেখানোর সিরিয়াল বুক করতে পারেন।',
              'Please call either of the dedicated serial hotline numbers below during registration hours.'
            )}
          </p>
        </div>

        {/* 2 Serial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {phones.map((phone, idx) => (
            <div
              key={phone.number}
              className="card-interactive p-6 sm:p-8 flex flex-col justify-between border-sky-100 dark:border-slate-800 shadow-md relative overflow-hidden"
            >
              {/* Subtle accent corner badge */}
              <div className="absolute top-0 right-0 bg-sky-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                {t(`হটলাইন ${idx + 1}`, `Line ${idx + 1}`)}
              </div>

              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 5.55 5.55l1.6-1.6a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>

                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {t('চেম্বার সিরিয়াল নম্বর', 'Chamber Serial Line')}
                </p>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1 mb-2">
                  {lang === 'bn' ? phone.displayBn : phone.displayEn}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  {t(
                    'মেমোরিয়াল ডায়াগনস্টিক সেন্টার, রুম ২২৯, দোতলা',
                    'Memorial Diagnostic Centre, Room 229, 2nd Floor'
                  )}
                </p>
              </div>

              {/* Action Buttons: Direct Call & Copy */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={phone.href}
                  className="btn-primary flex-1 text-center justify-center text-sm py-2.5 font-bold shadow-sm"
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 5.55 5.55l1.6-1.6a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>{t('কল করুন', 'Call Now')}</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy(phone.number)}
                  className="btn-secondary text-xs py-2.5 px-3.5 cursor-pointer font-semibold"
                  title={t('নম্বর কপি করুন', 'Copy Phone Number')}
                >
                  {copiedNumber === phone.number ? (
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <span>✓</span>
                      <span>{t('কপি হয়েছে', 'Copied')}</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5"
                      >
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                      </svg>
                      <span>{t('কপি', 'Copy')}</span>
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency MMCH Advisory Notice */}
        <div className="max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 text-xl font-bold">
            ⚠️
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-amber-900 dark:text-amber-200">
              {t('জরুরি দুর্ঘটনা ও ট্রমা রোগীর জন্য নির্দেশনা', 'Emergency Accident & Trauma Advisory')}
            </h4>
            <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300/90 mt-0.5 leading-relaxed">
              {t(
                'মারাত্মক সড়ক দুর্ঘটনা, উন্মুক্ত হাড়ভাঙা বা জরুরি জীবনরক্ষাকারী চিকিৎসার ক্ষেত্রে সরাসরি ময়মনসিংহ মেডিকেল কলেজ হাসপাতালের জরুরি বিভাগে (Emergency Department) যোগাযোগ করুন।',
                'For critical vehicular polytrauma, open fracture emergencies, or life-threatening injuries, please report directly to the 24/7 Emergency Wing of Mymensingh Medical College Hospital.'
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
