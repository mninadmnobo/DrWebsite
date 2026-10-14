'use client'

import React from 'react'
import { doctorData } from '@/lib/doctor'
import { usePortfolio } from '@/lib/context'

export function About() {
  const { lang, t } = usePortfolio()

  const points = [
    {
      icon: '🎓',
      titleBn: 'একাডেমিক শিক্ষক ও সার্জন',
      titleEn: 'Academic Faculty & Mentor',
      descBn:
        'ময়মনসিংহ মেডিকেল কলেজ ও হাসপাতালের অর্থোপেডিক সার্জারি বিভাগে সহযোগী অধ্যাপক হিসেবে ভবিষ্যৎ চিকিৎসক ও অর্থোপেডিক সার্জনদের প্রশিক্ষণ দিচ্ছেন।',
      descEn:
        'Serving as Associate Professor of Sports Medicine & Arthroscopy at MMCH, training future generations of orthopaedic surgeons with clinical excellence.',
    },
    {
      icon: '🌐',
      titleBn: 'আমেরিকান কলেজ অব সার্জনস (FACS)',
      titleEn: 'American College of Surgeons',
      descBn:
        'যুক্তরাষ্ট্রের মর্যাদাপূর্ণ এফ এ সি এস (FACS) স্বীকৃতিপ্রাপ্ত, যা আন্তর্জাতিক মানের সার্জিক্যাল পেশাদারিত্ব এবং সর্বোচ্চ রোগী সুরক্ষার প্রতীক।',
      descEn:
        'Conferred fellowship of the American College of Surgeons (USA), adhering strictly to global surgical safety and peer-reviewed international protocols.',
    },
    {
      icon: '💉',
      titleBn: 'অপারেশনবিহীন ব্যথামুক্তি (FIPM)',
      titleEn: 'Interventional Pain Care (FIPM)',
      descBn:
        'ভারতের বিশ্বমানের ইন্সটিটিউট থেকে ইন্টারভেনশনাল পেইন ম্যানেজমেন্টে ফেলোশীপ সম্পন্ন, যার মাধ্যমে জটিল ব্যথায় বিনা অপারেশনে টার্গেটেড ইনজেকশন সেবা প্রদান করেন।',
      descEn:
        'Subspecialized in non-surgical pain management from India, offering guided precision nerve blocks and regenerative therapy for chronic conditions.',
    },
    {
      icon: '🔬',
      titleBn: 'আধুনিক কি-হোল জয়েন্ট সার্জারি',
      titleEn: 'Keyhole Arthroscopic Specialist',
      descBn:
        'হাঁটু ও কাঁধের লিগামেন্ট ইনজুরি ও তরুণাস্থির সমস্যায় ক্ষুদ্র ছিদ্রের মাধ্যমে অত্যাধুনিক ক্যামেরায় নিখুঁত সার্জারি ও দ্রুত স্বাভাবিক জীবনে প্রত্যাবর্তনের নিশ্চয়তা।',
      descEn:
        'Pioneer in micro-incision arthroscopic reconstructions (ACL, PCL, Meniscus, Rotator Cuff) allowing active sports recovery and minimal downtime.',
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold badge-blue mb-3">
            {t('ডাক্তার পরিচিতি', 'Doctor Profile')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t(
              'অর্থোপেডিক চিকিৎসায় বিশ্বমানের দক্ষতা ও সহানুভূতিশীল সেবা',
              'World-Class Orthopaedic Expertise & Compassionate Care'
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {t(
              `${doctorData.nameBn} ময়মনসিংহ মেডিকেল কলেজ ও হাসপাতালের অর্থোপেডিক সার্জারী বিভাগের সহযোগী অধ্যাপক। দীর্ঘ ২৫ বছরেরও বেশি সময়ের সমৃদ্ধ চিকিৎসাসেবায় তিনি স্পোর্টস মেডিসিন, আর্থোস্কপিক কি-হোল সার্জারি, কৃত্রিম জয়েন্ট প্রতিস্থাপন (আর্থোপ্লাস্টি) এবং নন-সার্জিক্যাল পেইন কেয়ারে বিশেষ অভিজ্ঞ।`,
              `${doctorData.nameEn} is an Associate Professor of Sports Medicine & Arthroscopy, Dept. of Orthopaedic Surgery at Mymensingh Medical College & Hospital. With over 25 years of distinguished clinical excellence, he is renowned for his advanced surgical expertise in arthroscopy, joint replacement, and non-invasive pain management.`
            )}
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((p, idx) => (
            <div
              key={idx}
              className="card-interactive p-6 sm:p-7 flex gap-4 sm:gap-5 items-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-900 flex items-center justify-center text-2xl shrink-0">
                {p.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {lang === 'bn' ? p.titleBn : p.titleEn}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {lang === 'bn' ? p.descBn : p.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Current Academic & Hospital Position Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider font-bold text-sky-100">
              {t('বর্তমান প্রাতিষ্ঠানিক দায়িত্ব', 'Current Institutional Appointment')}
            </span>
            <h4 className="text-xl sm:text-2xl font-bold">
              {lang === 'bn' ? doctorData.hospitalBn : doctorData.hospitalEn}
            </h4>
            <p className="text-sm text-sky-100">
              {lang === 'bn' ? `${doctorData.designationBn} — ${doctorData.departmentBn}` : `${doctorData.designationEn} — ${doctorData.departmentEn}`}
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-sky-50 transition-colors shadow-md shrink-0 no-underline"
          >
            {t('সিরিয়াল বুকিং করুন', 'Consult with Doctor')}
          </a>
        </div>
      </div>
    </section>
  )
}
