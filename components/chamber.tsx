'use client'

import React from 'react'
import { doctorData } from '@/lib/doctor'
import { usePortfolio } from '@/lib/context'

export function Chamber() {
  const { lang, t } = usePortfolio()
  const { chamber, phones } = doctorData

  return (
    <section id="chamber" className="py-16 sm:py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold badge-amber mb-3">
            {t('চেম্বারের অবস্থান ও সময়সূচি', 'Chamber Location & Schedule')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t(
              'মেমোরিয়াল ডায়াগনস্টিক সেন্টার, চরপাড়া, ময়মনসিংহ',
              'Memorial Diagnostic Centre, Charpara, Mymensingh'
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t(
              'ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল প্রধান গেইটের ঠিক বিপরীত পাশে সুপরিসর ও আধুনিক সুবিধাসম্পন্ন চেম্বার।',
              'Conveniently situated right opposite the Mymensingh Medical College Hospital main gate in Charpara.'
            )}
          </p>
        </div>

        {/* Main Chamber Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Chamber Info (7 cols) */}
          <div className="lg:col-span-7 card-base p-6 sm:p-8 space-y-6 shadow-md border-slate-200 dark:border-slate-800">
            {/* Chamber Name & Status Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {lang === 'bn' ? chamber.nameBn : chamber.nameEn}
                </h3>
                <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 mt-1">
                  {lang === 'bn' ? chamber.roomBn : chamber.roomEn}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold badge-emerald">
                <span className="status-pulse" />
                {lang === 'bn' ? chamber.closedBn : chamber.closedEn}
              </span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {t('সম্পূর্ণ ঠিকানা:', 'Chamber Address:')}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {lang === 'bn' ? chamber.addressBn : chamber.addressEn}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {t('ল্যান্ডমার্ক: এমএমসিএইচ প্রধান ফটকের বিপরীত পাশে', 'Landmark: Directly opposite MMCH main entrance')}
                </p>
              </div>
            </div>

            {/* Visiting Days & Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {t('রোগী দেখার সময়সূচি:', 'Consultation Hours:')}
                </h4>
                <p className="text-base font-extrabold text-slate-900 dark:text-white">
                  {lang === 'bn' ? chamber.hoursBn : chamber.hoursEn}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {lang === 'bn' ? chamber.visitingDaysBn : chamber.visitingDaysEn}
                </p>
                <p className="text-xs font-semibold text-rose-500 dark:text-rose-400 mt-1">
                  {lang === 'bn' ? 'সাপ্তাহিক ছুটি: প্রতি শুক্রবার চেম্বার বন্ধ' : 'Weekly Holiday: Every Friday Chamber Closed'}
                </p>
              </div>
            </div>

            {/* Serial Phone Quick Action Buttons */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">
                {t('সিরিয়াল দেওয়ার হটলাইন নম্বর:', 'Direct Serial Booking Numbers:')}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {phones.map((phone) => (
                  <a
                    key={phone.number}
                    href={phone.href}
                    className="p-3 rounded-xl border border-sky-200 dark:border-sky-900 bg-sky-50/50 dark:bg-sky-950/30 hover:bg-sky-100 dark:hover:bg-sky-900/50 transition-colors flex items-center gap-3 no-underline"
                  >
                    <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center shrink-0">
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
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
                        {t('সরাসরি কল দিন', 'Tap to Call')}
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {lang === 'bn' ? phone.displayBn : phone.displayEn}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Chamber Guidelines & Map Box (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Patient Instructions Card */}
            <div className="card-base p-6 border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>📋</span>
                <span>{t('রোগীদের জন্য গুরুত্বপূর্ণ নির্দেশনা', 'Patient Chamber Guidelines')}</span>
              </h3>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 font-bold shrink-0">১.</span>
                  <span>
                    {t(
                      'সিরিয়াল নম্বর পাওয়ার পর নির্ধারিত সময়ের অন্তত ৩০ মিনিট পূর্বে চেম্বারে উপস্থিত থাকুন।',
                      'Please arrive at the chamber at least 30 minutes prior to your allocated serial time.'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 font-bold shrink-0">২.</span>
                  <span>
                    {t(
                      'পূর্বের এক্স-রে (X-Ray), এমআরআই (MRI) প্লেট এবং পূর্ববর্তী সকল ব্যবস্থাপত্র সাথে আনবেন।',
                      'Bring all past investigation films (X-Rays, MRI), diagnostic reports, and medical prescriptions.'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 font-bold shrink-0">৩.</span>
                  <span>
                    {t(
                      'জরুরি দুর্ঘটনা বা আঘাতের ক্ষেত্রে দ্রুত হাসপাতালে ভর্তির ব্যবস্থা নেওয়া হয়।',
                      'In acute severe trauma or accident cases, prompt emergency admission is facilitated.'
                    )}
                  </span>
                </li>
              </ul>
            </div>

            {/* Google Map Quick Access Card */}
            <div className="card-interactive p-6 border-slate-200 dark:border-slate-800 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center mb-3">
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
                  <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                  <line x1="9" y1="3" x2="9" y2="18" />
                  <line x1="15" y1="6" x2="15" y2="21" />
                </svg>
              </div>

              <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                {t('গুগল ম্যাপে চেম্বার খুঁজুন', 'Locate Chamber on Google Maps')}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                {t(
                  'চরপাড়া মোড়, ময়মনসিংহ মেডিকেল কলেজ হাসপাতালের প্রধান গেইট',
                  'Charpara crossing, opposite MMC Hospital Main Gate, Mymensingh'
                )}
              </p>

              <a
                href={chamber.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs font-bold w-full justify-center"
              >
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
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span>{t('ম্যাপে দিকনির্দেশনা দেখুন', 'Open Live Navigation')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
