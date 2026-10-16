'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { Language, Theme } from './types'

interface PortfolioContextType {
  lang: Language
  theme: Theme
  setLang: (lang: Language) => void
  toggleLang: () => void
  toggleTheme: () => void
  t: (bn: string, en: string) => string
}

const PortfolioContext = createContext<PortfolioContextType | null>(null)

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('bn')
  const [theme, setThemeState] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  // Initialize preferences on client mount (Light mode only)
  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      try {
        const savedLang = localStorage.getItem('dr_lang') as Language | null
        if (savedLang === 'bn' || savedLang === 'en') {
          setLangState(savedLang)
        }
        // Permanently clear dark mode and enforce light mode
        localStorage.removeItem('dr_theme')
        document.documentElement.classList.remove('dark')
      } catch {
        // Storage unsupported or restricted
      } finally {
        setMounted(true)
      }
    })

    return () => cancelAnimationFrame(handle)
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    try {
      localStorage.setItem('dr_lang', newLang)
    } catch {}
  }

  const toggleLang = () => {
    const next = lang === 'bn' ? 'en' : 'bn'
    setLang(next)
  }

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setThemeState(next)
    try {
      localStorage.setItem('dr_theme', next)
    } catch {}
  }

  const t = (bn: string, en: string) => (lang === 'bn' ? bn : en)

  return (
    <PortfolioContext.Provider
      value={{
        lang,
        theme,
        setLang,
        toggleLang,
        toggleTheme,
        t,
      }}
    >
      <div data-mounted={mounted ? 'true' : 'false'}>
        {children}
      </div>
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext)
  if (!ctx) {
    throw new Error('usePortfolio must be used within PortfolioProvider')
  }
  return ctx
}
