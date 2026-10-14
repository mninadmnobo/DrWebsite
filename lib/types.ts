export type Language = 'bn' | 'en'
export type Theme = 'light' | 'dark'

export interface PhoneContact {
  number: string
  displayBn: string
  displayEn: string
  href: string
}

export interface Fellowship {
  code: string
  labelBn: string
  labelEn: string
  titleBn: string
  titleEn: string
  descriptionBn: string
  descriptionEn: string
  country: string
  color: 'blue' | 'indigo' | 'teal' | 'emerald' | 'amber'
}

export interface ServiceItem {
  id: string
  icon: string
  titleBn: string
  titleEn: string
  categoryBn: string
  categoryEn: string
  descriptionBn: string
  descriptionEn: string
  highlightsBn: string[]
  highlightsEn: string[]
}

export interface FAQItem {
  questionBn: string
  questionEn: string
  answerBn: string
  answerEn: string
}

export interface DoctorProfile {
  name: string
  nameBn: string
  nameEn: string
  degreesBn: string
  degreesEn: string
  titleBn: string
  titleEn: string
  designationBn: string
  designationEn: string
  positionEn: string
  departmentBn: string
  departmentEn: string
  hospitalBn: string
  hospitalEn: string
  photo: string
  experienceYears: number
  stats: {
    labelBn: string
    labelEn: string
    value: string
  }[]
  chamber: {
    nameBn: string
    nameEn: string
    roomBn: string
    roomEn: string
    addressBn: string
    addressEn: string
    visitingDaysBn: string
    visitingDaysEn: string
    hoursBn: string
    hoursEn: string
    closedBn: string
    closedEn: string
    mapUrl: string
  }
  phones: PhoneContact[]
  fellowships: Fellowship[]
  services: ServiceItem[]
  faqs: FAQItem[]
}
