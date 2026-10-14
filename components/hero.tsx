'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { doctorData } from '@/lib/doctor'
import { usePortfolio } from '@/lib/context'

export function Hero() {
  const { lang, t } = usePortfolio()
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyPhone = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <section className="pt-24 pb-14 sm:pt-36 sm:pb-24 overflow-hidden relative">
      {/* Background radial gradient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Doctor Profile Information */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-3.5 sm:mb-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold badge-blue shadow-2xs">
                <span className="status-pulse" />
                {t('চেম্বার সময়: বিকাল ৩:০০ - রাত ৯:০০ টা', 'Visiting: 3:00 PM – 9:00 PM')}
              </span>
            </div>

            {/* Doctor's Name */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2] mb-2 sm:mb-3">
              {lang === 'bn' ? doctorData.nameBn : doctorData.nameEn}
            </h1>

            {/* Academic Designation & MMCH Affiliation */}
            <div className="mb-4">
              <p className="text-base sm:text-xl font-bold text-sky-600 dark:text-sky-400">
                {lang === 'bn' ? doctorData.designationBn : doctorData.designationEn}
              </p>
              <p className="text-xs sm:text-base font-medium text-slate-700 dark:text-slate-300">
                {lang === 'bn' ? doctorData.departmentBn : doctorData.departmentEn}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-200 mt-0.5">
                {lang === 'bn' ? doctorData.hospitalBn : doctorData.hospitalEn}
              </p>
            </div>

            {/* Degrees / Qualifications Box */}
            <div className="p-3 sm:p-4 rounded-xl bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-6 w-full max-w-xl leading-relaxed text-left">
              <span className="font-bold text-slate-900 dark:text-white block mb-1">
                {t('অর্জিত ডিগ্রি ও ফেলোশীপ:', 'Qualifications & Fellowships:')}
              </span>
              {lang === 'bn' ? doctorData.degreesBn : doctorData.degreesEn}
            </div>

            {/* Action Buttons: Call Serial & Chamber Location */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full mb-6">
              <a
                href={doctorData.phones[0].href}
                className="btn-primary text-sm sm:text-base px-5 py-3 shadow-md justify-center font-bold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 5.55 5.55l1.6-1.6a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{t('সিরিয়াল বুকিং: 01949-446432', 'Book Serial: 01949-446432')}</span>
              </a>

              <a
                href="#chamber"
                className="btn-secondary text-sm sm:text-base px-5 py-3 justify-center font-bold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{t('চেম্বারের অবস্থান ও সময়', 'Chamber Location & Time')}</span>
              </a>
            </div>

            {/* Quick Serial Numbers bar with Copy Button */}
            <div className="w-full max-w-xl flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {t('সিরিয়াল ফোনসমূহ:', 'Chamber Hotline Numbers:')}
              </span>
              <div className="flex items-center gap-3">
                {doctorData.phones.map((phone, idx) => (
                  <div key={phone.number} className="inline-flex items-center gap-1.5">
                    <a
                      href={phone.href}
                      className="font-bold text-sky-600 dark:text-sky-400 hover:underline"
                    >
                      {lang === 'bn' ? phone.displayBn : phone.displayEn}
                    </a>
                    <button
                      type="button"
                      onClick={() => copyPhone(phone.number, idx)}
                      className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer p-0.5"
                      title={t('নম্বর কপি করুন', 'Copy Number')}
                    >
                      {copiedIndex === idx ? (
                        <span className="text-[10px] text-emerald-600 font-bold">✓</span>
                      ) : (
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
                      )}
                    </button>
                    {idx < doctorData.phones.length - 1 && <span className="text-slate-300 dark:text-slate-600">|</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Portrait Photo with Flush Clean Bottom Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-[320px] sm:max-w-[370px]">
              {/* Outer Glow / Ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-sky-500/25 via-teal-400/20 to-sky-600/25 blur-xl opacity-75" />

              {/* Photo Frame Container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl aspect-4/5 bg-slate-900">
                <Image
                  src={doctorData.photo}
                  alt={lang === 'bn' ? doctorData.nameBn : doctorData.nameEn}
                  fill
                  priority
                  sizes="(max-width: 768px) 320px, 370px"
                  className="object-cover object-top"
                />

                {/* Solid dark gradient mask behind card so no photo background/text shows through */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />

                {/* Below Photo Card Badge — Flush anchored to bottom with zero gap */}
                <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-700/80 rounded-b-[1.35rem] shadow-xl">
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                    {lang === 'bn' ? doctorData.nameBn : doctorData.nameEn}
                  </p>
                  <p className="text-[11px] sm:text-xs text-sky-600 dark:text-sky-400 font-semibold truncate">
                    {lang === 'bn' ? 'ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল' : 'MMCH Faculty & Surgeon'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quick Stats Strip */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {doctorData.stats.map((stat, i) => (
            <div
              key={i}
              className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 shadow-xs text-center"
            >
              <div className="text-xl sm:text-3xl font-extrabold text-sky-600 dark:text-sky-400 mb-0.5 sm:mb-1">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-sm font-medium text-slate-600 dark:text-slate-300">
                {lang === 'bn' ? stat.labelBn : stat.labelEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
