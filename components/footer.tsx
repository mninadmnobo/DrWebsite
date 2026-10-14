'use client'

import React from 'react'
import Image from 'next/image'
import { doctorData } from '@/lib/doctor'
import { usePortfolio } from '@/lib/context'

export function Footer() {
  const { lang, t } = usePortfolio()
  const { chamber, phones } = doctorData

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 pt-8 pb-5 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-6 border-b border-slate-200 dark:border-slate-800/80">
          {/* Doctor Brief (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-sky-500 shrink-0 shadow-xs">
                <Image
                  src={doctorData.photo}
                  alt={lang === 'bn' ? doctorData.nameBn : doctorData.nameEn}
                  fill
                  sizes="40px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-tight">
                  {lang === 'bn' ? doctorData.nameBn : doctorData.nameEn}
                </h3>
                <p className="text-xs text-sky-600 dark:text-sky-400 font-medium">
                  {lang === 'bn' ? doctorData.titleBn : doctorData.titleEn}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              {lang === 'bn'
                ? 'সহযোগী অধ্যাপক, স্পোর্টস মেডিসিন এন্ড আর্থোস্কপি, অর্থোপেডিক সার্জারী বিভাগ, ময়মনসিংহ মেডিকেল কলেজ ও হাসপাতাল।'
                : 'Associate Professor of Sports Medicine & Arthroscopy, Dept. of Orthopaedic Surgery, Mymensingh Medical College & Hospital.'}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-0.5">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                FACS (USA)
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                FIPM (India)
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                MS (Ortho)
              </span>
            </div>
          </div>

          {/* Chamber & Address (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              {t('চেম্বারের ঠিকানা', 'Chamber Location')}
            </h4>
            <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                {lang === 'bn' ? chamber.nameBn : chamber.nameEn}
              </p>
              <p>{lang === 'bn' ? chamber.roomBn : chamber.roomEn}</p>
              <p>{lang === 'bn' ? chamber.addressBn : chamber.addressEn}</p>
              <p className="text-sky-600 dark:text-sky-400 font-semibold pt-0.5">
                {lang === 'bn' ? `${chamber.visitingDaysBn} | ${chamber.hoursBn}` : `${chamber.visitingDaysEn} | ${chamber.hoursEn}`}
              </p>
            </div>
          </div>

          {/* Quick Contact & Links (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              {t('সিরিয়াল ফোন', 'Serial Hotline')}
            </h4>
            <div className="space-y-1">
              {phones.map((phone) => (
                <a
                  key={phone.number}
                  href={phone.href}
                  className="block text-xs sm:text-sm font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
                >
                  {phone.number}
                </a>
              ))}
            </div>

            {/* Vibrant Google Maps Button with colorful Pin */}
            <div className="pt-1">
              <a
                href={chamber.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-emerald-500 shadow-2xs hover:shadow-xs transition-all no-underline group"
              >
                {/* Colorful Vibrant Google Maps Pin SVG */}
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-emerald-500 p-0.5 shrink-0 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                  <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 drop-shadow-xs"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                        fill="#EA4335"
                      />
                      <circle cx="12" cy="9" r="2.5" fill="#ffffff" />
                    </svg>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {t('গুগল ম্যাপে চেম্বার দেখুন →', 'View on Google Maps →')}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-3 text-center text-[11px] text-slate-500 dark:text-slate-500">
          <p>
            © {new Date().getFullYear()} {lang === 'bn' ? doctorData.nameBn : doctorData.nameEn}.{' '}
            {t('সর্বস্বত্ব সংরক্ষিত।', 'All Rights Reserved.')}
          </p>
        </div>
      </div>
    </footer>
  )
}
