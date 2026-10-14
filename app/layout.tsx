import type { Metadata } from 'next'
import { Hind_Siliguri, Inter } from 'next/font/google'
import { doctor } from '@/lib/doctor'
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
  description: `${doctor.name} — ${doctor.positionEn}, ${doctor.departmentEn}, ${doctor.hospitalEn}. চেম্বার: ${doctor.chamber.nameEn}, ${doctor.chamber.addressEn}. সিরিয়াল: ${doctor.phones[0].number}, ${doctor.phones[1].number}.`,
  keywords: [
    doctor.nameEn,
    doctor.name,
    'Dr. Khandakar Hafijur Rahman',
    'Dr. Khandakar Hafizur Rahman',
    'Orthopaedic Surgeon Mymensingh',
    'অর্থোপেডিক ডাক্তার ময়মনসিংহ',
    'আর্থোস্কপি আর্থোপ্লাস্টি বিশেষজ্ঞ',
    'FACS FIPM Ortho Surgeon Bangladesh',
    'Memorial Diagnostic Centre Mymensingh',
    'মেমোরিয়াল ডায়াগনস্টিক সেন্টার চরপাড়া',
    'Sports Medicine Mymensingh',
    'Knee Hip Replacement Mymensingh',
  ],
  metadataBase: new URL('https://drkhandakarhafijurrahman.com'),
  openGraph: {
    type: 'profile',
    title: `${doctor.name} — অর্থোপেডিক ও আর্থোস্কপি সার্জন`,
    description: `${doctor.positionEn}, ${doctor.departmentEn}. Chamber: ${doctor.chamber.nameEn}. Phone: ${doctor.phones[0].number}`,
    images: [{ url: '/photo.jpg', width: 800, height: 800, alt: doctor.nameEn }],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0284c7',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn" suppressHydrationWarning className={`${hindSiliguri.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Physician',
              name: doctor.nameEn,
              alternateName: doctor.name,
              image: '/photo.jpg',
              medicalSpecialty: 'OrthopedicSurgery',
              telephone: doctor.phones[0].number,
              address: {
                '@type': 'PostalAddress',
                streetAddress: doctor.chamber.addressEn,
                addressLocality: 'Mymensingh',
                addressCountry: 'BD',
              },
              hospitalAffiliation: {
                '@type': 'Hospital',
                name: doctor.hospitalEn,
              },
            }),
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
