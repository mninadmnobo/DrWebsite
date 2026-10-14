'use client'

import React from 'react'
import { PortfolioProvider } from '@/lib/context'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Qualifications } from '@/components/qualifications'
import { Services } from '@/components/services'
import { Chamber } from '@/components/chamber'
import { Contact } from '@/components/contact'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen flex flex-col bg-(--bg-primary) text-(--text-main) antialiased selection:bg-sky-500 selection:text-white">
        <Navbar />
        <main id="main" className="flex-1">
          <Hero />
          <About />
          <Qualifications />
          <Services />
          <Chamber />
          <Contact />
          <FAQ />
        </main>
        <Footer />
      </div>
    </PortfolioProvider>
  )
}
