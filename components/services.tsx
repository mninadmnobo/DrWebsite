'use client'

import React from 'react'
import { doctorData } from '@/lib/doctor'
import { usePortfolio } from '@/lib/context'

export function Services() {
  const { lang, t } = usePortfolio()

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold badge-blue mb-3">
            {t('বিশেষায়িত চিকিৎসাসেবা', 'Clinical Specialties')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t(
              'আধুনিক অর্থোপেডিক, আর্থোস্কপি ও জয়েন্ট রিপ্লেসমেন্ট চিকিৎসা',
              'Advanced Orthopaedic, Arthroscopy & Joint Care'
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t(
              'আন্তর্জাতিক আধুনিক প্রযুক্তি এবং ন্যূনতম ইনভেসিভ পদ্ধতির সাহায্যে দ্রুত আরোগ্য ও দীর্ঘমেয়াদী সুস্থতা।',
              'Cutting-edge surgical technology, keyhole arthroscopy, and non-surgical pain management tailored to your mobility.'
            )}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {doctorData.services.map((service) => (
            <div
              key={service.id}
              className="card-interactive p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Category & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-900 flex items-center justify-center text-2xl">
                    {service.icon}
                  </div>
                  <span className="text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950 px-2.5 py-1 rounded-full border border-sky-200 dark:border-sky-800">
                    {lang === 'bn' ? service.categoryBn : service.categoryEn}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {lang === 'bn' ? service.titleBn : service.titleEn}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {lang === 'bn' ? service.descriptionBn : service.descriptionEn}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-1.5 mb-6">
                  {(lang === 'bn' ? service.highlightsBn : service.highlightsEn).map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <span className="text-sky-500 font-bold shrink-0">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation Link */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
                >
                  <span>{t('এই বিষয়ে পরামর্শ নিন', 'Consult for this treatment')}</span>
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
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
