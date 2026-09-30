export interface FaqItem {
  id: string;
  category: 'general' | 'certificates' | 'print';
  question: {
    en: string;
    hi: string;
  };
  answer: {
    en: string;
    hi: string;
  };
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: {
      en: 'Is Aadarsh Documents an official government office?',
      hi: 'क्या आदर्श डॉक्यूमेंट्स (Aadarsh Documents) कोई सरकारी कार्यालय है?'
    },
    answer: {
      en: 'No. Aadarsh Documents is an independent private document assistance, typing, online form filling, printing, and scanning service center located right behind the SDM Office in Rampura, Delhi. Official approvals, field verifications, and digital signatures are issued solely by the competent Sub-Divisional Magistrate (SDM) and Revenue Department, Govt. of NCT of Delhi.',
      hi: 'नहीं। आदर्श डॉक्यूमेंट्स एक स्वतंत्र निजी नागरिक सुविधा केंद्र है जो एसडीएम कार्यालय रामपुरा के ठीक पीछे स्थित है। हम ऑनलाइन फॉर्म भरने, दस्तावेज़ जांचने, टाइपिंग, स्कैनिंग व प्रिंटिंग में सहायता करते हैं। प्रमाण पत्र जारी करने व स्वीकृत करने का अधिकार केवल एसडीएम व दिल्ली सरकार के राजस्व विभाग के पास है।'
    }
  },
  {
    id: 'faq-2',
    category: 'certificates',
    question: {
      en: 'What documents are compulsory for an Income Certificate in Delhi?',
      hi: 'दिल्ली में आय प्रमाण पत्र (Income Certificate) के लिए कौन से दस्तावेज़ आवश्यक हैं?'
    },
    answer: {
      en: 'The essential requirements are: (1) Aadhaar Card with Delhi address, (2) Recent Passport Size Photograph, (3) Address proof such as electricity or water bill, (4) Income evidence (Salary slips of past 3 months / Bank statement OR Self-Declaration affidavit), and (5) Rent agreement if residing in a rented property.',
      hi: 'मुख्य रूप से आवश्यक दस्तावेज़ हैं: (1) दिल्ली के पते वाला आधार कार्ड, (2) नवीन पासपोर्ट फोटो, (3) बिजली या पानी का बिल, (4) आय का प्रमाण (3 महीने की सैलरी स्लिप/बैंक स्टेटमेंट अथवा आय का स्व-घोषणा हलफनामा), और (5) किरायेदार होने पर रेंट एग्रीमेंट।'
    }
  },
  {
    id: 'faq-3',
    category: 'print',
    question: {
      en: 'Can I send documents on WhatsApp for urgent printing before visiting?',
      hi: 'क्या मैं दुकान आने से पहले प्रिंटिंग के लिए व्हाट्सएप पर दस्तावेज़ भेज सकता हूँ?'
    },
    answer: {
      en: 'Yes, absolutely! You can send your PDF, Word file, or images to our WhatsApp at +91 7048956157 along with your instructions (Color or Black & White, Single or Double-sided, and number of copies). Your prints will be ready when you arrive so you do not have to wait.',
      hi: 'जी हाँ, बिल्कुल! आप अपनी पीडीएफ या फोटो हमारे व्हाट्सएप नंबर +91 7048956157 पर प्रिंट के निर्देशों (कलर या ब्लैक/व्हाइट, दोनों तरफ या एक तरफ) के साथ भेज सकते हैं। आपके आने तक प्रिंट तैयार मिलेंगे जिससे आपका समय बचेगा।'
    }
  },
  {
    id: 'faq-4',
    category: 'certificates',
    question: {
      en: 'How long does it take for a Delhi e-District certificate to be approved?',
      hi: 'दिल्ली ई-डिस्ट्रिक्ट पोर्टल से प्रमाण पत्र बनने में कितना समय लगता है?'
    },
    answer: {
      en: 'Standard processing time prescribed by the Delhi Revenue Department is usually 14 working days. Actual processing depends on field inquiry by the area revenue staff and SDM scrutiny. We provide an official online tracking slip so you can monitor your application status anytime.',
      hi: 'दिल्ली सरकार के नियमानुसार सामान्यतः लगभग 14 कार्य दिवस का समय लगता है। यह समय राजस्व निरीक्षक की जांच व एसडीएम कार्यालय की रिपोर्ट पर निर्भर करता है। हम आपको ऑनलाइन ट्रैकिंग रसीद देते हैं जिससे आप कभी भी स्टेटस चेक कर सकते हैं।'
    }
  },
  {
    id: 'faq-5',
    category: 'general',
    question: {
      en: 'What are your working hours and weekly off?',
      hi: 'आपकी दुकान का समय और साप्ताहिक अवकाश क्या है?'
    },
    answer: {
      en: 'We are open Monday through Saturday from 9:00 AM to 7:00 PM. We remain closed on Sundays.',
      hi: 'हम सोमवार से शनिवार सुबह 9:00 बजे से शाम 7:00 बजे तक खुले रहते हैं। रविवार को अवकाश रहता है।'
    }
  },
  {
    id: 'faq-6',
    category: 'certificates',
    question: {
      en: 'Can you draft affidavits and rent agreements on legal e-Stamp paper?',
      hi: 'क्या आप ई-स्टाम्प पेपर पर शपथ पत्र (Affidavit) व रेंट एग्रीमेंट टाइप करते हैं?'
    },
    answer: {
      en: 'Yes. We type and draft legal affidavits (Name correction, Address proof, Gap year, Lost document, Marriage declaration) and 11-month residential or commercial tenancy agreements in standard legal formats in both Hindi and English on-screen with instant laser prints.',
      hi: 'जी हाँ। हम नाम सुधार, गैप ईयर, दस्तावेज गुमशुदगी, शादी आदि के शपथ पत्र और 11 माह के किरायानामे मानक कानूनी प्रारूप में हिंदी व अंग्रेजी दोनों में आपके सामने स्क्रीन पर टाइप करके तुरंत प्रिंट प्रदान करते हैं।'
    }
  }
];
