import { DoctorProfile } from './types'

export const doctorData: DoctorProfile = {
  name: 'ডা: খন্দকার হাফিজুর রহমান',
  nameBn: 'ডা: খন্দকার হাফিজুর রহমান',
  nameEn: 'Dr. Khandakar Hafijur Rahman',

  degreesBn: 'এম বি বি এস, বিসিএস (স্বাস্থ্য), এম এস (অর্থোপেডিক সার্জারী), ফেলোশীপ ইন আর্থোস্কপি এন্ড আর্থোপ্লাস্টি, এফ আই পি এম (ইন্ডিয়া), এফ এ সি এস (আমেরিকা)',
  degreesEn: 'MBBS, BCS (Health), MS (Orthopaedic Surgery), Fellowship in Arthroscopy & Arthroplasty, FIPM (India), FACS (USA)',

  titleBn: 'অর্থোপেডিক, আর্থোস্কপি ও আর্থোপ্লাস্টি সার্জন',
  titleEn: 'Orthopaedic, Arthroscopy & Arthroplasty Surgeon',

  positionEn: 'Associate Professor',
  designationBn: 'সহযোগী অধ্যাপক',
  designationEn: 'Associate Professor',

  departmentBn: 'স্পোর্টস মেডিসিন এন্ড আর্থোস্কপি, অর্থোপেডিক সার্জারী বিভাগ',
  departmentEn: 'Sports Medicine & Arthroscopy, Dept. of Orthopaedic Surgery',

  hospitalBn: 'ময়মনসিংহ মেডিকেল কলেজ ও হাসপাতাল, ময়মনসিংহ',
  hospitalEn: 'Mymensingh Medical College & Hospital, Mymensingh',

  photo: '/photo.jpg',
  experienceYears: 25,

  stats: [
    { labelBn: 'আন্তর্জাতিক ফেলোশীপ', labelEn: 'Global Fellowships', value: 'USA & India' },
    { labelBn: 'চিকিৎসা অভিজ্ঞতা', labelEn: 'Clinical Experience', value: '25+ Years' },
    { labelBn: 'সফল সার্জারি', labelEn: 'Surgical Cases', value: '10,000+' },
    { labelBn: 'রোগী সন্তুষ্টি', labelEn: 'Patient Trust', value: '100%' },
  ],

  chamber: {
    nameBn: 'মেমোরিয়াল ডায়াগনস্টিক সেন্টার',
    nameEn: 'Memorial Diagnostic Centre',
    roomBn: 'রুম নং ২২৯, দোতলা',
    roomEn: 'Room No. 229, 2nd Floor',
    addressBn: 'ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল গেইটের সামনে, চরপাড়া, ময়মনসিংহ',
    addressEn: 'Opposite MMC Hospital Main Gate, Charpara, Mymensingh',
    visitingDaysBn: 'শনিবার হতে বৃহস্পতিবার',
    visitingDaysEn: 'Saturday to Thursday',
    hoursBn: 'বিকাল ৩:০০ টা – রাত ৯:০০ টা',
    hoursEn: '3:00 PM – 9:00 PM',
    closedBn: 'শুক্রবার বন্ধ',
    closedEn: 'Friday Closed',
    mapUrl: 'https://www.google.com/maps/search/Memorial+Diagnostic+Centre+Charpara+Mymensingh',
  },

  phones: [
    {
      number: '01949-446432',
      displayBn: '০১৯৪৯-৪৪৬৪৩২',
      displayEn: '01949-446432',
      href: 'tel:+8801949446432',
    },
    {
      number: '01747-750114',
      displayBn: '০১৭৪৭-৭৫০১১৪',
      displayEn: '01747-750114',
      href: 'tel:+8801747750114',
    },
  ],

  fellowships: [
    {
      code: 'FACS',
      country: 'USA',
      color: 'blue',
      labelBn: 'এফ এ সি এস (আমেরিকা)',
      labelEn: 'FACS (USA)',
      titleBn: 'ফেলো, আমেরিকান কলেজ অব সার্জনস — যুক্তরাষ্ট্র',
      titleEn: 'Fellow, American College of Surgeons (USA)',
      descriptionBn: 'আন্তর্জাতিক খ্যাতিসম্পন্ন আমেরিকান কলেজ অব সার্জনস কর্তৃক প্রদত্ত সর্বোচ্চ মর্যাদাপূর্ণ ফেলোশীপ, যা আধুনিক সার্জিক্যাল উৎকর্ষ ও কঠোর পেশাদারিত্বের বৈশ্বিক স্বীকৃতি।',
      descriptionEn: 'Prestigious fellowship conferred by the American College of Surgeons, representing elite global standards in surgical competence, ethical integrity, and patient safety.',
    },
    {
      code: 'FIPM',
      country: 'India',
      color: 'teal',
      labelBn: 'এফ আই পি এম (ইন্ডিয়া)',
      labelEn: 'FIPM (India)',
      titleBn: 'ফেলোশীপ ইন ইন্টারভেনশনাল পেইন ম্যানেজমেন্ট — ভারত',
      titleEn: 'Fellowship in Interventional Pain Management (India)',
      descriptionBn: 'অপারেশনবিহীন আধুনিক পদ্ধতিতে দীর্ঘস্থায়ী কোমর, ঘাড়, হাঁটু ও জয়েন্টের তীব্র ব্যথা নিরাময়ে বিশেষায়িত ইন্টারভেনশনাল টেকনিক ও নার্ভ ব্লকে আন্তর্জাতিক প্রশিক্ষণ।',
      descriptionEn: 'Advanced international subspecialty fellowship focused on non-surgical, image-guided precision interventions and nerve blocks for chronic spine and joint pain.',
    },
    {
      code: 'MS',
      country: 'Bangladesh',
      color: 'indigo',
      labelBn: 'এম এস (অর্থোপেডিক সার্জারী)',
      labelEn: 'MS (Orthopaedic Surgery)',
      titleBn: 'মাস্টার অব সার্জারী — অর্থোপেডিক সার্জারী',
      titleEn: 'Master of Surgery in Orthopaedic Surgery',
      descriptionBn: 'অর্থোপেডিক ও ট্রমা সার্জারিতে সর্বোচ্চ স্নাতকোত্তর ডিগ্রি। হাড় ও জয়েন্টের জটিল রোগ, ফ্র্যাকচার ও আঘাতের চিকিৎসায় পূর্ণাঙ্গ বিশেষজ্ঞ সনদ।',
      descriptionEn: 'Post-graduate specialty surgical degree with comprehensive clinical and surgical mastery over complex skeletal deformities, fractures, and reconstruction.',
    },
    {
      code: 'Arthroscopy',
      country: 'Fellowship',
      color: 'emerald',
      labelBn: 'ফেলোশীপ ইন আর্থোস্কপি ও আর্থোপ্লাস্টি',
      labelEn: 'Fellowship in Arthroscopy & Arthroplasty',
      titleBn: 'কি-হোল জয়েন্ট সার্জারি ও কৃত্রিম জয়েন্ট প্রতিস্থাপন',
      titleEn: 'Fellowship in Arthroscopy & Arthroplasty (Joint Replacement)',
      descriptionBn: 'ক্ষুদ্র ছিদ্রে হাঁটু ও কাঁধের লিগামেন্ট মেরামত (ACL/PCL) এবং আধুনিক রোবোটিক/ম্যানুয়াল পদ্ধতিতে হাঁটু ও হিপের কৃত্রিম জয়েন্ট প্রতিস্থাপনে উচ্চতর ক্লিনিক্যাল প্রশিক্ষণ।',
      descriptionEn: 'Specialized clinical fellowship in minimally invasive keyhole joint surgery (arthroscopy) and anatomical joint replacement prosthetics (knee and hip arthroplasty).',
    },
  ],

  services: [
    {
      id: 'arthroscopy',
      icon: '🦴',
      categoryBn: 'কি-হোল সার্জারি',
      categoryEn: 'Keyhole Surgery',
      titleBn: 'আর্থোস্কপি (Arthroscopy)',
      titleEn: 'Arthroscopic Joint Surgery',
      descriptionBn: 'শরীরে কোনো বড় কাটা-ছেঁড়া ছাড়াই মাত্র ক্ষুদ্র ছিদ্রে ক্যামেরার সাহায্যে হাঁটু ও কাঁধের ভেতরের ক্ষতিগ্রস্ত লিগামেন্ট ও তরুণাস্থি নিখুঁতভাবে নিরাময়।',
      descriptionEn: 'Minimally invasive keyhole joint surgery using ultra-high-definition cameras for swift recovery, minimal pain, and microscopic surgical precision.',
      highlightsBn: [
        'এসিএল (ACL) ও পিসিএল (PCL) লিগামেন্ট পুনর্নির্মাণ',
        'মেনিস্কাস টিয়ার মেরামত ও সেলাই',
        'কাঁধের রোটেটর কাফ ও ডিসলোকেশন সার্জারি',
      ],
      highlightsEn: [
        'Anterior & Posterior Cruciate Ligament (ACL/PCL) Reconstruction',
        'Meniscus Tear Repair & Balancing',
        'Shoulder Rotator Cuff & Recurrent Dislocation Repair',
      ],
    },
    {
      id: 'arthroplasty',
      icon: '🦿',
      categoryBn: 'জয়েন্ট প্রতিস্থাপন',
      categoryEn: 'Joint Replacement',
      titleBn: 'আর্থোপ্লাস্টি (Arthroplasty)',
      titleEn: 'Total Joint Arthroplasty',
      descriptionBn: 'অস্টিওআর্থ্রাইটিস বা ক্ষয়রোগে অকেজো হয়ে যাওয়া হাঁটু এবং হিপ জয়েন্টের জায়গায় আন্তর্জাতিক মানের দীর্ঘস্থায়ী কৃত্রিম জয়েন্ট প্রতিস্থাপন।',
      descriptionEn: 'World-class total knee and total hip replacement procedures to eliminate severe arthritic pain and restore natural, active mobility.',
      highlightsBn: [
        'টোটাল নি রিপ্লেসমেন্ট (Total Knee Replacement - TKR)',
        'টোটাল হিপ রিপ্লেসমেন্ট (Total Hip Replacement - THR)',
        'কমপ্লিকেটেড ও রিভিশন জয়েন্ট সার্জারি',
      ],
      highlightsEn: [
        'Total Knee Replacement (TKR) with rapid rehabilitation',
        'Total Hip Replacement (THR) for severe arthritis or avascular necrosis',
        'Revision and complex reconstructive joint procedures',
      ],
    },
    {
      id: 'sports-medicine',
      icon: '🏃',
      categoryBn: 'স্পোর্টস মেডিসিন',
      categoryEn: 'Sports Medicine',
      titleBn: 'স্পোর্টস মেডিসিন ও অ্যাথলেটিক ইনজুরি',
      titleEn: 'Sports Medicine & Athletic Care',
      descriptionBn: 'খেলোয়াড় এবং সক্রিয় ব্যক্তিদের খেলাধুলা বা শরীরচর্চাকালীন পেশি, লিগামেন্ট ও টেন্ডনের আকস্মিক আঘাতের দ্রুত এবং কার্যকর চিকিৎসা।',
      descriptionEn: 'Comprehensive diagnostics, rehabilitation protocols, and surgical care tailored specifically for athletes and physically active individuals.',
      highlightsBn: [
        'অ্যাথলেটিক লিগামেন্ট ও পেশির মচকানো বা ইনজুরি',
        'গোড়ালি (Ankle) ও টেনিস এলবো ইনজুরি',
        'দ্রুত মাঠে ফেরার স্পেশালাইজড রিহ্যাবিলিটেশন গাইডেন্স',
      ],
      highlightsEn: [
        'Sports ligament tears, sprains, and tendon ruptures',
        'Ankle instability, Achilles tendonitis, and tennis elbow',
        'Personalized return-to-sport physical rehabilitation guidance',
      ],
    },
    {
      id: 'pain-management',
      icon: '💉',
      categoryBn: 'ব্যথা নিরাময়',
      categoryEn: 'Pain Intervention',
      titleBn: 'ইন্টারভেনশনাল পেইন ম্যানেজমেন্ট (FIPM)',
      titleEn: 'Interventional Pain Management (FIPM)',
      descriptionBn: 'অপারেশন ছাড়াই উন্নত টার্গেটেড ইনজেকশন, নার্ভ ব্লক এবং পিআরপি (PRP) থেরাপির মাধ্যমে কোমর, ঘাড় ও হাঁটুর তীব্র ব্যথা দ্রুত উপশম।',
      descriptionEn: 'Non-surgical targeted interventions, fluoroscopy-guided precision injections, epidural steroid blocks, and PRP regenerative therapy.',
      highlightsBn: [
        'স্পাইন ও সায়াটিকা ব্যথায় এপিডুরাল নার্ভ ব্লক',
        'হাঁটুর ব্যথায় পিআরপি ও ভিসকোসাপ্লিমেন্ট ইনজেকশন',
        'ফ্রোজেন শোল্ডার ও ক্রনিক জয়েন্ট পেইনের ব্যথানাশক প্রসিডিউর',
      ],
      highlightsEn: [
        'Epidural and nerve blocks for sciatica and lumbar disc herniation',
        'Platelet-Rich Plasma (PRP) & viscosupplementation for knee osteoarthritis',
        'Hydrodilatation and targeted nerve ablation for frozen shoulder',
      ],
    },
    {
      id: 'trauma',
      icon: '🩺',
      categoryBn: 'ট্রমা ও দুর্ঘটনা',
      categoryEn: 'Trauma & Fractures',
      titleBn: 'জটিল হাড়ভাঙা ও অর্থোপেডিক ট্রমা',
      titleEn: 'Complex Fractures & Trauma Surgery',
      descriptionBn: 'সড়ক দুর্ঘটনা ও ভারী আঘাতে ভেঙে যাওয়া হাত, পা ও পেলভিসের জটিল হাড় আধুনিক প্লেটিং ও নেইলিং পদ্ধতিতে জোড়া লাগানো।',
      descriptionEn: 'State-of-the-art operative fixation for severe polytrauma, compound fractures, pelvi-acetabular injuries, and non-union cases.',
      highlightsBn: [
        'জটিল ওপেন ও মাল্টিপল ফ্র্যাকচার সার্জারি',
        'মডার্ন লকিং প্লেট ও ইন্টারলকিং নেইলিং টেকনিক',
        'হাড় জোড়া না লাগা (Non-Union) বা বাঁকা জোড়ার রি-অপারেশন',
      ],
      highlightsEn: [
        'Complex open and intra-articular fracture stabilization',
        'Minimally invasive biological plate fixation (MIPO) and interlocking nailing',
        'Management of infected non-unions and malunited bones',
      ],
    },
    {
      id: 'joint-spine',
      icon: '🔬',
      categoryBn: 'সাধারণ অর্থোপেডিকস',
      categoryEn: 'General Orthopaedics',
      titleBn: 'হাড়, জয়েন্ট ও মেরুদণ্ডের ক্ষয়রোগ',
      titleEn: 'Spine, Bone & Joint Disorders',
      descriptionBn: 'বয়োবৃদ্ধ মানুষের হাড়ের ক্ষয় (Osteoporosis), রিউমাটয়েড আর্থ্রাইটিস, সার্ভাইকাল স্পন্ডিলাইটিস এবং প্লান্টার ফ্যাসাইটিসের আধুনিক চিকিৎসা।',
      descriptionEn: 'Evidence-based management of osteoporosis, inflammatory arthritis, cervical/lumbar spondylosis, foot deformities, and chronic skeletal conditions.',
      highlightsBn: [
        'হাড়ের ঘনত্ব পরীক্ষা ও অস্টিওপোরোসিস চিকিৎসা',
        'ঘাড় ও পিঠের স্পন্ডিলাইটিস ও ভার্টিগো নিরাময়',
        'হিল স্পার ও পায়ের গোড়ালির তীব্র ব্যথার চিকিৎসা',
      ],
      highlightsEn: [
        'Bone mineral density assessment and osteoporosis medical therapies',
        'Cervical & lumbar spondylosis conservative management',
        'Plantar fasciitis, heel spurs, and carpal tunnel syndrome care',
      ],
    },
  ],

  faqs: [
    {
      questionBn: 'চেম্বারের সিরিয়াল নেওয়ার নিয়ম কি?',
      questionEn: 'How can I book an appointment serial?',
      answerBn: 'রোগী দেখার জন্য প্রতিদিন সরাসরি দেওয়া ফোন নম্বরে (০১৯৪৯-৪৪৬৪৩২ অথবা ০১৭৪৭-৭৫০১১৪) কল করে সিরিয়াল বুক করা যাবে। রাত ৯টা থেকে সিরিয়াল ফোনকল গ্রহণ করা হয়।',
      answerEn: 'You can book your appointment by directly calling the chamber serial numbers (+880 1949-446432 or +880 1747-750114). Serial bookings are accepted from 9:00 PM.',
    },
    {
      questionBn: 'চেম্বারে আসার সময় কী কী কাগজপত্র আনা প্রয়োজন?',
      questionEn: 'What documents should I bring to the chamber?',
      answerBn: 'পূর্বে করা সমস্ত এক্স-রে (X-Ray), এমআরআই (MRI) ফিল্ম ও রিপোর্ট, রক্ত পরীক্ষার রিপোর্ট এবং পূর্বের প্রেসক্রিপশন অবশ্যই সাথে নিয়ে আসবেন।',
      answerEn: 'Please bring all previous X-rays, MRI films and investigation reports, routine blood tests, and past prescription files for an accurate evaluation.',
    },
    {
      questionBn: 'চেম্বার কোন কোন দিন খোলা থাকে এবং সময়সূচি কি?',
      questionEn: 'What are the chamber visiting hours and days?',
      answerBn: 'শনিবার থেকে বৃহস্পতিবার প্রতিদিন বিকাল ৩:০০ টা থেকে রাত ৯:০০ টা পর্যন্ত চেম্বারে রোগী দেখা হয়। শুক্রবার চেম্বার সম্পূর্ণ বন্ধ থাকে।',
      answerEn: 'The chamber is open Saturday through Thursday from 3:00 PM to 9:00 PM. The chamber remains closed on Fridays.',
    },
    {
      questionBn: 'আর্থোস্কপি (কি-হোল সার্জারি) এর সুবিধা কী?',
      questionEn: 'What are the benefits of Arthroscopic (keyhole) surgery?',
      answerBn: 'আর্থোস্কপিতে মাত্র একটি বা দুটি ক্ষুদ্র ছিদ্রে ক্যামেরার মাধ্যমে অপারেশন করা হয়। ফলে রক্তক্ষরণ ও ব্যথা অত্যন্ত কম হয়, ইনফেকশনের ঝুঁকি থাকে না এবং রোগী খুব দ্রুত স্বাভাবিক জীবনে ফিরে যেতে পারে।',
      answerEn: 'Arthroscopy uses tiny incisions with high-definition cameras, resulting in minimal blood loss, minimal scarring, significantly reduced postoperative pain, lower infection risks, and much faster return to routine life.',
    },
    {
      questionBn: 'অপারেশন ছাড়া ব্যথার চিকিৎসা কীভাবে সম্ভব?',
      questionEn: 'How is pain managed without surgical operation?',
      answerBn: 'ডা: খন্দকার হাফিজুর রহমান ভারতে ইন্টারভেনশনাল পেইন ম্যানেজমেন্টে (FIPM) বিশেষ প্রশিক্ষণপ্রাপ্ত। তিনি আল্ট্রাসাউন্ড বা এক্স-রে নির্দেশিত নির্ভুল নার্ভ ব্লক, টার্গেটেড ইনজেকশন ও পিআরপি (PRP) প্রয়োগের মাধ্যমে অনেক রোগীর অপারেশন ছাড়াই ব্যথামুক্তি নিশ্চিত করেন।',
      answerEn: 'Having completed the prestigious FIPM fellowship in India, Dr. Rahman utilizes ultrasound and fluoroscopy-guided precision nerve blocks, targeted facet injections, and PRP therapy to resolve severe chronic pain without invasive open surgery.',
    },
  ],
}

export const doctor = doctorData
