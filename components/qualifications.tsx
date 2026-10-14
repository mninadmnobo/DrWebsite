'use client'

import React from 'react'
import { usePortfolio } from '@/lib/context'

export function Qualifications() {
  const { lang, t } = usePortfolio()

  const allDegrees = [
    {
      code: 'FACS',
      country: 'USA',
      badgeClass: 'badge-blue',
      titleBn: 'এফ এ সি এস (আমেরিকা)',
      titleEn: 'FACS (USA)',
      subBn: 'ফেলো, আমেরিকান কলেজ অব সার্জনস — যুক্তরাষ্ট্র',
      subEn: 'Fellow, American College of Surgeons (USA)',
      descBn: 'সার্জনদের বৈশ্বিক শীর্ষ স্বীকৃতি। বিশ্বমানের সার্জিক্যাল মানদণ্ড, নৈতিকতা এবং ক্লিনিক্যাল দক্ষতার সর্বোচ্চ আন্তর্জাতিক স্বীকৃতি।',
      descEn: 'The globally revered fellowship acknowledging world-class mastery in surgical competence, rigorous patient ethics, and technique.',
    },
    {
      code: 'FIPM',
      country: 'India',
      badgeClass: 'badge-teal',
      titleBn: 'এফ আই পি এম (ইন্ডিয়া)',
      titleEn: 'FIPM (India)',
      subBn: 'ফেলোশীপ ইন ইন্টারভেনশনাল পেইন ম্যানেজমেন্ট — ভারত',
      subEn: 'Fellowship in Interventional Pain Management (India)',
      descBn: 'অপারেশনবিহীন ব্যথানাশক চিকিৎসায় বিশেষজ্ঞ। আধুনিক নার্ভ ব্লক ও ইমেজ-গাইডেড ইনজেকশনের মাধ্যমে তীব্র ব্যথা নিরাময়ে আন্তর্জাতিক ফেলোশীপ।',
      descEn: 'Subspecialty fellowship in non-invasive interventions, fluoroscopy-guided precision injections, and regenerative therapy for chronic pain.',
    },
    {
      code: 'Arthroscopy',
      country: 'Specialist',
      badgeClass: 'badge-emerald',
      titleBn: 'ফেলোশীপ ইন আর্থোস্কপি ও আর্থোপ্লাস্টি',
      titleEn: 'Fellowship in Arthroscopy & Arthroplasty',
      subBn: 'উচ্চতর প্রশিক্ষণ: কি-হোল সার্জারি ও জয়েন্ট রিপ্লেসমেন্ট',
      subEn: 'Advanced Clinical Training in Keyhole Surgery & Arthroplasty',
      descBn: 'হাঁটুর লিগামেন্ট ইনজুরি (ACL/PCL), মেনিস্কাস এবং হাঁটু ও হিপের কৃত্রিম জয়েন্ট প্রতিস্থাপন সার্জারিতে স্পেশালাইজড ক্লিনিক্যাল ফেলোশীপ।',
      descEn: 'Focused clinical fellowship in knee/shoulder keyhole reconstruction and anatomical total knee and hip replacement surgery.',
    },
    {
      code: 'MS (Ortho)',
      country: 'Bangladesh',
      badgeClass: 'badge-indigo',
      titleBn: 'এম এস (অর্থোপেডিক সার্জারী)',
      titleEn: 'MS (Orthopaedic Surgery)',
      subBn: 'মাস্টার অব সার্জারী — অর্থোপেডিক বিভাগ',
      subEn: 'Master of Surgery in Orthopaedic Surgery',
      descBn: 'অর্থোপেডিক ও ট্রমা চিকিৎসায় স্বীকৃত বিশেষজ্ঞ স্নাতকোত্তর ডিগ্রি। জটিল হাড়ভাঙা ও জয়েন্টের চিকিৎসায় সর্বোচ্চ সনদ।',
      descEn: 'Comprehensive post-graduate surgical specialization credential for complex skeletal diseases, deformity correction, and traumatology.',
    },
    {
      code: 'BCS (Health)',
      country: 'Cadre',
      badgeClass: 'badge-amber',
      titleBn: 'বিসিএস (স্বাস্থ্য ক্যাডার)',
      titleEn: 'BCS (Health Cadre)',
      subBn: 'বাংলাদেশ সিভিল সার্ভিস — স্বাস্থ্য ক্যাডার',
      subEn: 'Bangladesh Civil Service (Health Cadre)',
      descBn: 'বাংলাদেশ সরকারের স্বাস্থ্য সেবায় প্রথম শ্রেণির ক্যাডার কর্মকর্তা হিসেবে দীর্ঘদিনের সরকারি চিকিৎসাসেবায় অবদান।',
      descEn: 'Prestigious civil service commission representing longstanding dedicated clinical service in public healthcare and teaching hospitals.',
    },
    {
      code: 'MBBS',
      country: 'Medical',
      badgeClass: 'badge-blue',
      titleBn: 'এম বি বি এস (MBBS)',
      titleEn: 'MBBS (Bachelor of Medicine & Surgery)',
      subBn: 'চিকিৎসাবিজ্ঞানে স্নাতক ডিগ্রি',
      subEn: 'Primary Medical Qualification Degree',
      descBn: 'বাংলাদেশ মেডিকেল অ্যান্ড ডেন্টাল কাউন্সিল (BMDC) স্বীকৃত মৌলিক চিকিৎসাবিজ্ঞান ও সার্জারির ডিগ্রি।',
      descEn: 'Recognized medical and surgical foundation degree fulfilling all licensure and rigorous clinical apprenticeship standards.',
    },
  ]

  return (
    <section id="qualifications" className="py-16 sm:py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold badge-teal mb-3">
            {t('যোগ্যতা ও ডিগ্রি', 'Qualification & Degree')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t(
              'আন্তর্জাতিক ও জাতীয় পর্যায়ে অর্জিত সর্বোচ্চ ডিগ্রি ও ফেলোশীপ',
              'Elite National & International Qualifications'
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t(
              'যুক্তরাষ্ট্র, ভারত এবং বাংলাদেশের প্রথিতযশা চিকিৎসা প্রতিষ্ঠান থেকে অর্জিত উচ্চতর ডিগ্রি ও ফেলোশীপের বিবরণ।',
              'A distinguished track record of post-graduate surgical masteries and global fellowships from the USA, India, and Bangladesh.'
            )}
          </p>
        </div>

        {/* Qualifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allDegrees.map((item, idx) => (
            <div
              key={idx}
              className="card-interactive p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold ${item.badgeClass}`}>
                    {item.code}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {item.country}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {lang === 'bn' ? item.titleBn : item.titleEn}
                </h3>

                <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 mb-3">
                  {lang === 'bn' ? item.subBn : item.subEn}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {lang === 'bn' ? item.descBn : item.descEn}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>{t('যাচাইকৃত সনদ', 'Verified Credential')}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t('অনুমোদিত', 'Certified')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
