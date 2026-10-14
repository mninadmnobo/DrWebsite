'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { doctorData } from '@/lib/doctor'
import { usePortfolio } from '@/lib/context'
import { LanguageToggle } from './language-toggle'
import { ThemeToggle } from './theme-toggle'

export function Navbar() {
  const { lang, t } = usePortfolio()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: t('পরিচিতি', 'About') },
    { href: '#qualifications', label: t('যোগ্যতা ও ডিগ্রি', 'Qualification & Degree') },
    { href: '#services', label: t('চিকিৎসা ও সেবা', 'Specialties') },
    { href: '#chamber', label: t('চেম্বার ও সময়', 'Chamber') },
    { href: '#contact', label: t('সিরিয়াল বুকিং', 'Serial') },
    { href: '#faq', label: t('প্রশ্নোত্তর', 'FAQ') },
  ]

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header className="fixed top-2.5 sm:top-3 inset-x-0 z-50 px-2 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <nav
          className={`flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? 'glass-nav shadow-lg border border-slate-200 dark:border-slate-800'
              : 'glass-nav shadow-md border border-slate-200/80 dark:border-slate-800/80'
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand with Round Photo & Dr. Badge */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-2.5 group no-underline text-inherit min-w-0"
          >
            {/* Round Picture with "Dr." badge in tabbar */}
            <div className="relative shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-sky-500 shadow-xs relative bg-sky-100 dark:bg-sky-950">
                <Image
                  src={doctorData.photo}
                  alt={lang === 'bn' ? doctorData.nameBn : doctorData.nameEn}
                  fill
                  sizes="40px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Sleek round "Dr." emblem badge */}
              <span className="absolute -bottom-1 -right-1 px-1 min-w-[19px] h-[16px] rounded-full bg-sky-600 text-white font-black text-[9px] flex items-center justify-center border border-white dark:border-slate-900 shadow-xs leading-none">
                Dr.
              </span>
            </div>

            {/* Doctor Name text (hidden on mobile as requested, visible from sm up) */}
            <div className="hidden sm:block leading-tight min-w-0">
              <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white block group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors truncate">
                {lang === 'bn' ? doctorData.nameBn : doctorData.nameEn}
              </span>
              <span className="text-[11px] text-sky-600 dark:text-sky-400 font-medium block truncate">
                {lang === 'bn' ? 'অর্থোপেডিক সার্জন' : 'Orthopaedic Surgeon'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Controls: Language, Theme ALWAYS visible on mobile & desktop */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Always visible on all screen sizes */}
            <LanguageToggle />
            <ThemeToggle />

            {/* Quick Serial Call Button (desktop / tablet) */}
            <a
              href={doctorData.phones[0].href}
              className="hidden md:inline-flex btn-primary text-xs font-semibold py-1.5 px-3.5"
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 5.55 5.55l1.6-1.6a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{t('সিরিয়াল', 'Serial')}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center w-8 h-8 rounded-full border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:text-sky-600 transition-colors cursor-pointer"
              aria-label={t('মেনু খুলুন', 'Toggle menu')}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
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
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
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
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-2xl glass-nav border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-3 py-2.5 rounded-xl text-slate-800 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-slate-800/80 hover:text-sky-600 font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <a
                href={doctorData.phones[0].href}
                onClick={closeMenu}
                className="btn-primary w-full text-center text-sm py-2.5 justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 inline-block mr-1.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 5.55 5.55l1.6-1.6a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {t('সিরিয়াল দিন: 01949-446432', 'Call Serial: 01949-446432')}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
