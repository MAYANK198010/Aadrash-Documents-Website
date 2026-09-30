export interface RateItem {
  id: string;
  name: {
    en: string;
    hi: string;
  };
  unitPrice: number;
  unitLabel: {
    en: string;
    hi: string;
  };
  note: {
    en: string;
    hi: string;
  };
  category: 'print' | 'scan' | 'photo' | 'lamination' | 'typing';
}

export const RATES_DATA: RateItem[] = [
  {
    id: 'bw-print',
    name: {
      en: 'Black & White Laser Print (Single Side)',
      hi: 'ब्लैक व व्हाइट लेजर प्रिंट (एक तरफ)'
    },
    unitPrice: 3,
    unitLabel: {
      en: 'per page (A4 75 GSM)',
      hi: 'प्रति पेज (A4 75 GSM)'
    },
    note: {
      en: 'Bulk discount available above 50 pages (₹2/page)',
      hi: '50 पेज से अधिक पर ₹2 प्रति पेज की छूट'
    },
    category: 'print'
  },
  {
    id: 'bw-both',
    name: {
      en: 'B/W Laser Print (Both Sides / Back-to-Back)',
      hi: 'ब्लैक व व्हाइट प्रिंट (दोनों तरफ)'
    },
    unitPrice: 5,
    unitLabel: {
      en: 'per leaf (A4)',
      hi: 'प्रति शीट (A4)'
    },
    note: {
      en: 'Best for long project files & legal study material',
      hi: 'किताबों व लंबी प्रोजेक्ट फाइलों हेतु उपयुक्त'
    },
    category: 'print'
  },
  {
    id: 'color-print',
    name: {
      en: 'Full HD Colour Laser Print',
      hi: 'फुल एचडी कलर लेजर प्रिंट'
    },
    unitPrice: 10,
    unitLabel: {
      en: 'per page (A4 bond paper)',
      hi: 'प्रति पेज (A4 बॉन्ड पेपर)'
    },
    note: {
      en: 'Crisp diagrams, official certificates & project charts',
      hi: 'प्रोजेक्ट चार्ट्स व रंगीन प्रमाण पत्रों के लिए'
    },
    category: 'print'
  },
  {
    id: 'hd-scan',
    name: {
      en: 'HD Scanning & PDF Merging',
      hi: 'एचडी स्कैनिंग व पीडीएफ कंप्रेस'
    },
    unitPrice: 10,
    unitLabel: {
      en: 'per page / document',
      hi: 'प्रति पेज / दस्तावेज़'
    },
    note: {
      en: 'Includes size optimization for government portals',
      hi: 'सरकारी पोर्टल हेतु फाइल साइज ऑप्टिमाइजेशन सहित'
    },
    category: 'scan'
  },
  {
    id: 'passport-photo-set',
    name: {
      en: 'Urgent Passport Photos (Set of 8)',
      hi: 'तत्काल पासपोर्ट फोटो (8 प्रतियों का सेट)'
    },
    unitPrice: 50,
    unitLabel: {
      en: 'set of 8 glossy photos',
      hi: '8 फोटो का सेट (ग्लोसी)'
    },
    note: {
      en: 'Ready in 5 minutes with white / blue background',
      hi: 'सफेद/नीले बैकग्राउंड के साथ 5 मिनट में तैयार'
    },
    category: 'photo'
  },
  {
    id: 'lamination-a4',
    name: {
      en: 'Thermal Heavy-Duty Lamination (A4)',
      hi: 'थर्मल हैवी-ड्यूटी लेमिनेशन (A4)'
    },
    unitPrice: 20,
    unitLabel: {
      en: 'per sheet',
      hi: 'प्रति शीट'
    },
    note: {
      en: 'Waterproof 125-250 micron crystal clear pouch',
      hi: '125-250 माइक्रोन वाटरप्रूफ क्लियर पाउच'
    },
    category: 'lamination'
  },
  {
    id: 'spiral-bind',
    name: {
      en: 'Spiral / Ring Binding',
      hi: 'स्पाइरल / रिंग बाइंडिंग'
    },
    unitPrice: 35,
    unitLabel: {
      en: 'per booklet (up to 100 pages)',
      hi: 'प्रति बुकलेट (100 पेज तक)'
    },
    note: {
      en: 'Includes thick clear front PVC & sturdy black back cover',
      hi: 'ट्रांसपेरेंट फ्रंट व मजबूत बैक कवर सहित'
    },
    category: 'print'
  },
  {
    id: 'typing-page',
    name: {
      en: 'Hindi / English Computer Typing',
      hi: 'हिंदी व अंग्रेजी कंप्यूटर टाइपिंग'
    },
    unitPrice: 30,
    unitLabel: {
      en: 'per standard page',
      hi: 'प्रति मानक पेज'
    },
    note: {
      en: 'Proofread on-screen before printout',
      hi: 'प्रिंट से पूर्व स्क्रीन पर शुद्धता जांच'
    },
    category: 'typing'
  }
];
