import type { Metadata } from 'next'
import { Hind_Siliguri, Inter } from 'next/font/google'
import { doctor } from '@/lib/doctor'
import { siteConfig } from '@/lib/config'
import './globals.css'

const hindSiliguri = Hind_Siliguri({
  weight: ['400', '500', '600', '700'],
  subsets: ['bengali', 'latin'],
  variable: '--font-hind-siliguri',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${doctor.name} (${doctor.nameEn}) | অর্থোপেডিক ও আর্থোস্কপি সার্জন, ময়মনসিংহ`,
  description: `${doctor.name} (${doctor.nameEn}) — সহযোগী অধ্যাপক, স্পোর্টস মেডিসিন এন্ড আর্থোস্কপি, অর্থোপেডিক সার্জারী বিভাগ, ময়মনসিংহ মেডিকেল কলেজ ও হাসপাতাল। চেম্বার: মেমোরিয়াল ডায়াগনস্টিক সেন্টার, রুম ২২৯, দোতলা, চরপাড়া, ময়মনসিংহ। সিরিয়াল: 01949-446432, 01747-750114।`,
  keywords: siteConfig.seoKeywords,
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    type: 'profile',
    title: `${doctor.name} (${doctor.nameEn}) — অর্থোপেডিক, আর্থোস্কপি ও আর্থোপ্লাস্টি সার্জন`,
    description: `সহযোগী অধ্যাপক, অর্থোপেডিক সার্জারী বিভাগ, ময়মনসিংহ মেডিকেল কলেজ ও হাসপাতাল। চেম্বার: মেমোরিয়াল ডায়াগনস্টিক সেন্টার, চরপাড়া। সিরিয়াল: ${doctor.phones[0].number}, ${doctor.phones[1].number}`,
    url: siteConfig.siteUrl,
    siteName: `${doctor.name} Portfolio`,
    images: [{ url: '/photo.jpg', width: 800, height: 800, alt: doctor.nameEn }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${doctor.name} (${doctor.nameEn}) — অর্থোপেডিক সার্জন`,
    description: `সহযোগী অধ্যাপক, ময়মনসিংহ মেডিকেল কলেজ ও হাসপাতাল। চেম্বার: মেমোরিয়াল ডায়াগনস্টিক সেন্টার, চরপাড়া।`,
    images: ['/photo.jpg'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0284c7',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: doctor.nameEn,
    alternateName: [
      doctor.name,
      'ডা: খন্দকার হাফিজুর রহমান',
      'ডাঃ খন্দকার হাফিজুর রহমান',
      'ডাক্তার খন্দকার হাফিজুর রহমান',
      'Dr. Khandakar Hafizur Rahman',
      'Dr. Khandaker Hafijur Rahman',
      'Dr. Khandoker Hafizur Rahman',
      'Dr. Hafijur Rahman',
      'Dr. Hafizur Rahman',
      'ডা: হাফিজুর রহমান',
      'ডা: হাফিজ',
      'ডাক্তার হাফিজ',
      'Dr. Hafiz',
      'Dr. Hafij',
      'Dr. K. H. Rahman',
    ],
    image: `${siteConfig.siteUrl}/photo.jpg`,
    url: siteConfig.siteUrl,
    telephone: [doctor.phones[0].number, doctor.phones[1].number],
    medicalSpecialty: [
      'OrthopedicSurgery',
      'SportsMedicine',
      'JointReplacementSurgery',
      'PainManagement',
    ],
    knowsAbout: [
      'Arthroscopy',
      'Arthroplasty',
      'Total Knee Replacement',
      'Total Hip Replacement',
      'ACL Reconstruction',
      'PCL Reconstruction',
      'Rotator Cuff Repair',
      'Meniscus Repair',
      'Interventional Pain Management (FIPM)',
      'Complex Fracture Fixation',
      'হাড় ভাঙা চিকিৎসা',
      'হাঁটুর লিগামেন্ট অপারেশন',
      'জয়েন্ট প্রতিস্থাপন',
      'কোমর ও ঘাড় ব্যথা চিকিৎসা',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Room 229, 2nd Floor, Opposite MMC Hospital Main Gate, Charpara',
      addressLocality: 'Mymensingh',
      addressRegion: 'Mymensingh Division',
      postalCode: '2200',
      addressCountry: 'BD',
    },
    hospitalAffiliation: {
      '@type': 'Hospital',
      name: doctor.hospitalEn,
      alternateName: doctor.hospitalBn,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mymensingh',
        addressCountry: 'BD',
      },
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '15:00',
        closes: '21:00',
      },
    ],
  }

  return (
    <html lang="bn" suppressHydrationWarning className={`${hindSiliguri.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:p-2 focus:bg-white focus:text-black">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
