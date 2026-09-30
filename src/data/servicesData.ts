export interface ServiceItem {
  id: string;
  slug: string;
  category: 'certificates' | 'online_portals' | 'drafting' | 'print_scan';
  title: {
    en: string;
    hi: string;
  };
  subtitle: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  requiredDocs: {
    en: string[];
    hi: string[];
  };
  processSteps: {
    en: string[];
    hi: string[];
  };
  approxTimeline: {
    en: string;
    hi: string;
  };
  departmentNote: {
    en: string;
    hi: string;
  };
  popular?: boolean;
  highlight?: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'income-cert',
    slug: 'income-certificate',
    category: 'certificates',
    title: {
      en: 'Income Certificate (आय प्रमाण पत्र)',
      hi: 'आय प्रमाण पत्र (Income Certificate - e-District)'
    },
    subtitle: {
      en: 'Delhi e-District online application, document scrutiny & verification assistance',
      hi: 'दिल्ली ई-डिस्ट्रिक्ट ऑनलाइन आवेदन, दस्तावेज़ जांच व फाइलिंग सहायता'
    },
    description: {
      en: 'Complete assistance for Delhi Government Income Certificate via the e-District portal for school admissions, scholarships, subsidies, and government welfare schemes.',
      hi: 'स्कूल दाखिला, छात्रवृत्ति, राशन कार्ड और सरकारी योजनाओं हेतु दिल्ली सरकार ई-डिस्ट्रिक्ट पोर्टल के माध्यम से आय प्रमाण पत्र आवेदन की पूर्ण सहायता।'
    },
    requiredDocs: {
      en: [
        'Aadhaar Card of Applicant (and father/guardian if minor)',
        'Recent Passport Size Photograph with white/light background',
        'Address Proof (Delhi Voter ID, Electricity Bill, or Water Bill)',
        'Salary Slip (3 months) / Bank Statement OR Self-Declaration of Income',
        'Rent Agreement (if living in a rented house in Delhi)',
        'Existing BPL / Ration Card (if applicable)'
      ],
      hi: [
        'आवेदक का आधार कार्ड (नाबालिग होने पर माता-पिता का आधार कार्ड)',
        'हाल ही की पासपोर्ट साइज फोटो (साफ बैकग्राउंड)',
        'निवास प्रमाण पत्र (दिल्ली वोटर आईडी, बिजली बिल या पानी का बिल)',
        'वेतन पर्ची (3 माह) / बैंक विवरण अथवा आय का स्व-घोषणा पत्र',
        'किरायानामा (यदि दिल्ली में किराये के मकान में रहते हैं)',
        'राशन कार्ड / बीपीएल कार्ड (यदि उपलब्ध हो)'
      ]
    },
    processSteps: {
      en: [
        'Bring or WhatsApp original documents for preliminary checklist review',
        'We scan high-resolution copies matching e-District portal file size limits',
        'Accurate online form submission with correct Tehsil and Sub-Division (Rampura / Saraswati Vihar)',
        'Generation of instant digital Acknowledgement Slip with Application Number',
        'Guidance on Sub-Divisional Magistrate (SDM) field verification & final digital download'
      ],
      hi: [
        'जांच हेतु मूल दस्तावेज़ लाएं या व्हाट्सएप पर साझा करें',
        'ई-डिस्ट्रिक्ट पोर्टल के निर्धारित साइज के अनुसार स्पष्ट स्कैनिंग',
        'सही तहसील व उप-मंडल (रामपुरा/सरस्वती विहार) का चयन कर ऑनलाइन फॉर्म भरना',
        'आवेदन संख्या के साथ तत्काल आधिकारिक पावती पर्ची (Acknowledgement Slip)',
        'एसडीएम फील्ड वेरिफिकेशन व स्वीकृत होने पर डिजिटल सर्टिफिकेट डाउनलोड'
      ]
    },
    approxTimeline: {
      en: 'Typically 14 working days (subject to Delhi Revenue Dept verification)',
      hi: 'सामान्यतः 14 कार्य दिवस (राजस्व विभाग व एसडीएम जांच के अधीन)'
    },
    departmentNote: {
      en: 'Issuance and approval decisions are made exclusively by the Sub-Divisional Magistrate (SDM) / Revenue Department, Govt. of NCT of Delhi.',
      hi: 'प्रमाण पत्र स्वीकृति व जारी करने का अंतिम अधिकार केवल संबंधित एसडीएम/राजस्व विभाग, दिल्ली सरकार के पास है।'
    },
    popular: true,
    highlight: 'Top Requested'
  },
  {
    id: 'caste-cert',
    slug: 'caste-certificate',
    category: 'certificates',
    title: {
      en: 'Caste Certificate (SC / ST / OBC)',
      hi: 'जाति प्रमाण पत्र (SC / ST / OBC Certificate)'
    },
    subtitle: {
      en: 'SC, ST, and OBC community certificate online submission & lineage verification guidance',
      hi: 'अनुसूचित जाति, जनजाति व अन्य पिछड़ा वर्ग प्रमाण पत्र आवेदन सहायता'
    },
    description: {
      en: 'Step-by-step guidance for issuing SC/ST and Delhi OBC certificates. We verify lineage document proofs, family tree affidavits, and submit through Delhi e-District.',
      hi: 'एससी, एसटी और दिल्ली ओबीसी प्रमाण पत्र के लिए आवश्यक दस्तावेज़ जांच, वंशावली हलफनामा व ई-डिस्ट्रिक्ट पोर्टल पर आवेदन प्रक्रिया की पूर्ण सहायता।'
    },
    requiredDocs: {
      en: [
        'Applicant Aadhaar Card and Passport Photo',
        'Father’s Caste Certificate (issued by Delhi or competent authority)',
        'Proof of continuous residence in Delhi prior to 1951 (for SC) or 1993 (for OBC)',
        'School Leaving Certificate / Birth Certificate showing caste/religion',
        'Notarized Affidavit confirming caste lineage & family relationship'
      ],
      hi: [
        'आवेदक का आधार कार्ड व पासपोर्ट फोटो',
        'पिता का जाति प्रमाण पत्र (सक्षम प्राधिकारी द्वारा जारी)',
        'दिल्ली में निवास प्रमाण (एससी के लिए 1951 से पूर्व / ओबीसी के लिए 1993 से पूर्व)',
        'स्कूल लीविंग सर्टिफिकेट अथवा जन्म प्रमाण पत्र (जाति/धर्म उल्लेखित)',
        'जाति व पारिवारिक संबंध की पुष्टि का नोटरीकृत शपथ पत्र'
      ]
    },
    processSteps: {
      en: [
        'Family caste document and lineage record verification',
        'Drafting of required self-declaration & caste relationship affidavit',
        'Portal upload with prescribed resolution guidelines',
        'Delivery of e-District Acknowledgement Slip with tracking number'
      ],
      hi: [
        'पारिवारिक जाति प्रमाण पत्र व रिकॉर्ड की जांच',
        'आवश्यक स्व-घोषणा पत्र व संबंध हलफनामे का प्रारूप तैयार करना',
        'पोर्टल पर आवश्यक दस्तावेजों का त्रुटिहीन अपलोड',
        'ट्रैकिंग नंबर के साथ आधिकारिक रसीद प्रदान करना'
      ]
    },
    approxTimeline: {
      en: '14 to 21 working days (dependent on Revenue Department field inquiry)',
      hi: '14 से 21 कार्य दिवस (राजस्व विभाग की जांच पर निर्भर)'
    },
    departmentNote: {
      en: 'Approval is subject to Tehsildar / Executive Magistrate field verification and lineage scrutiny.',
      hi: 'स्वीकृति तहसीलदार/कार्यकारी मजिस्ट्रेट की स्थलीय जांच व रिकॉर्ड मिलान पर निर्भर करती है।'
    },
    popular: true
  },
  {
    id: 'domicile-cert',
    slug: 'domicile-certificate',
    category: 'certificates',
    title: {
      en: 'Domicile / Residence Certificate (मूल निवास)',
      hi: 'मूल निवास प्रमाण पत्र (Domicile / Residence Certificate)'
    },
    subtitle: {
      en: 'Official proof of continuous 3+ years residence in NCT of Delhi',
      hi: 'दिल्ली में पिछले 3 या अधिक वर्षों से निरंतर निवास का प्रमाण'
    },
    description: {
      en: 'Facilitation of Delhi Domicile Certificate required for government competitive exams, state quota counseling, college admissions, and administrative procedures.',
      hi: 'सरकारी नौकरियों, राज्य कोटा कॉलेज दाखिलों और प्रशासनिक कार्यों हेतु दिल्ली मूल निवास प्रमाण पत्र ऑनलाइन आवेदन में सहायता।'
    },
    requiredDocs: {
      en: [
        'Aadhaar Card with Delhi residential address',
        'Proof of 3 years continuous stay in Delhi (Electricity bills, Gas connection, School marksheets, or Voter ID)',
        'Passport Size Photograph',
        'Self-Declaration Form in prescribed Delhi e-District format'
      ],
      hi: [
        'दिल्ली के पते वाला आधार कार्ड',
        'दिल्ली में पिछले 3 वर्षों के निवास का प्रमाण (बिजली बिल, गैस कनेक्शन, स्कूल मार्कशीट या वोटर कार्ड)',
        'पासपोर्ट साइज फोटो',
        'ई-डिस्ट्रिक्ट निर्धारित प्रारूप में स्व-घोषणा पत्र'
      ]
    },
    processSteps: {
      en: [
        'Chronological audit of 3-year continuous Delhi residence proofs',
        'Form filling and portal document attachment',
        'Handover of application receipt for SDM follow-up'
      ],
      hi: [
        '3 वर्षों के निवास साक्ष्यों का क्रमबद्ध मिलान',
        'फॉर्म भरना और निर्धारित दस्तावेजों का अपलोड',
        'एसडीएम ऑफिस में सत्यापन हेतु रसीद सौंपना'
      ]
    },
    approxTimeline: {
      en: '14 working days',
      hi: 'लगभग 14 कार्य दिवस'
    },
    departmentNote: {
      en: 'The Revenue Department verifies utility billing continuity and local electoral presence.',
      hi: 'राजस्व विभाग बिजली/उपयोगिता बिलों व स्थानीय मतदाता सूची से पुष्टि करता है।'
    },
    popular: false
  },
  {
    id: 'ews-cert',
    slug: 'ews-certificate',
    category: 'certificates',
    title: {
      en: 'EWS Certificate (Economically Weaker Section)',
      hi: 'ई.डब्ल्यू.एस प्रमाण पत्र (EWS Certificate for General Category)'
    },
    subtitle: {
      en: 'Annual income & asset certification for 10% educational & job reservations',
      hi: '10% शिक्षण व सरकारी नौकरी आरक्षण हेतु आय व संपत्ति प्रमाण पत्र'
    },
    description: {
      en: 'Guidance and application filing for Economically Weaker Section (EWS) certificates for eligible general category citizens in Delhi under central and state guidelines.',
      hi: 'सामान्य वर्ग के पात्र नागरिकों के लिए केंद्रीय व दिल्ली राज्य दिशानिर्देशों के तहत ईडब्ल्यूएस प्रमाण पत्र बनवाने में संपूर्ण सहयोग।'
    },
    requiredDocs: {
      en: [
        'Aadhaar Cards of all family members',
        'Family Income Evidence (ITR / Form 16 / Salary slips / Self-Declaration)',
        'Property / Agricultural land details (if any) or Rent Agreement',
        'Electricity Bill of residence in Delhi',
        'Recent Family Photographs'
      ],
      hi: [
        'परिवार के सभी सदस्यों के आधार कार्ड',
        'पारिवारिक आय प्रमाण (आईटीआर / फॉर्म 16 / सैलरी स्लिप / स्व-घोषणा)',
        'मकान / जमीन का विवरण या किरायानामा',
        'दिल्ली निवास का बिजली बिल',
        'परिवार के सदस्यों की नवीन फोटो'
      ]
    },
    processSteps: {
      en: [
        'Asset criteria check (residential plot/flat size & annual family income < ₹8 Lakhs)',
        'Document consolidation and affidavit preparation',
        'Portal submission & receipt issuance'
      ],
      hi: [
        'संपत्ति व आय पात्रता की प्रारंभिक जांच (वार्षिक आय 8 लाख से कम)',
        'दस्तावेजों का संकलन व आवश्यक शपथ पत्र तैयार करना',
        'पोर्टल पर आवेदन व पावती पर्ची'
      ]
    },
    approxTimeline: {
      en: '14 to 21 working days',
      hi: '14 से 21 कार्य दिवस'
    },
    departmentNote: {
      en: 'Field inspection of residence and family assets is conducted by the revenue inspector.',
      hi: 'राजस्व निरीक्षक द्वारा निवास व पारिवारिक संपत्तियों का स्थलीय निरीक्षण किया जा सकता है।'
    },
    popular: true
  },
  {
    id: 'pan-card',
    slug: 'pan-card-services',
    category: 'online_portals',
    title: {
      en: 'PAN Card New & Correction Services',
      hi: 'नया पैन कार्ड व नाम / पता / जन्मतिथि संशोधन'
    },
    subtitle: {
      en: 'Instant e-PAN generation, physical plastic card delivery & data correction',
      hi: 'नया पैन कार्ड, प्लास्टिक कार्ड होम डिलीवरी व सुधार सेवाएं'
    },
    description: {
      en: 'Fast online processing for new PAN cards, minor PAN applications, name/DOB/father’s name corrections, and Aadhaar-PAN linking assistance.',
      hi: 'नया पैन कार्ड बनाने, बच्चों के पैन कार्ड, नाम/जन्म तिथि में सुधार तथा आधार-पैन लिंक करवाने की त्वरित ऑनलाइन सेवा।'
    },
    requiredDocs: {
      en: [
        'Aadhaar Card (must be mobile-linked for instant e-KYC)',
        'Two recent passport photos with white background',
        'Proof of identity/DOB (10th marksheet or Voter ID if correction is needed)',
        'Active mobile number and email ID'
      ],
      hi: [
        'आधार कार्ड (त्वरित ओटीपी हेतु मोबाइल से लिंक होना आवश्यक)',
        '2 पासपोर्ट साइज फोटो (सफेद बैकग्राउंड)',
        'पहचान / जन्मतिथि प्रमाण (सुधार के मामले में 10वीं मार्कशीट या वोटर कार्ड)',
        'चालू मोबाइल नंबर व ईमेल'
      ]
    },
    processSteps: {
      en: [
        'Data entry and biometric/OTP e-KYC or physical form submission',
        'Instant digital acknowledgement receipt with 15-digit Token Number',
        'e-PAN delivered to email in 2-3 days; physical card dispatched via speed post'
      ],
      hi: [
        'पोर्टल पर डेटा प्रविष्टि व आधार ओटीपी ई-केवाईसी',
        '15 अंकों के टोकन नंबर के साथ तत्काल रसीद',
        '2-3 दिनों में ईमेल पर ई-पैन तथा स्पीड पोस्ट द्वारा प्लास्टिक कार्ड घर पर'
      ]
    },
    approxTimeline: {
      en: 'Digital e-PAN in 2–3 working days; Physical card in 7–12 days by Speed Post',
      hi: 'ई-पैन 2 से 3 दिन में; फिजिकल कार्ड 7 से 12 दिन में स्पीड पोस्ट द्वारा'
    },
    departmentNote: {
      en: 'Processing is handled directly via NSDL (Protean) or UTIITSL income tax portals.',
      hi: 'प्रक्रिया एनएसडीएल (Protean) व यूटीआईआईटीएसएल अधिकृत पोर्टलों द्वारा होती है।'
    },
    popular: true
  },
  {
    id: 'passport-seva',
    slug: 'passport-services',
    category: 'online_portals',
    title: {
      en: 'Passport Online Form & Slot Booking',
      hi: 'पासपोर्ट सेवा ऑनलाइन फॉर्म व अपॉइंटमेंट बुकिंग'
    },
    subtitle: {
      en: 'Fresh passport, re-issue, Tatkaal application and PSK / POPSK slot selection',
      hi: 'नया पासपोर्ट, रिन्यूअल, तत्काल आवेदन व पासपोर्ट सेवा केंद्र अपॉइंटमेंट'
    },
    description: {
      en: 'Error-free form filling on Passport Seva portal, official fee payment gateway facilitation, Annexure guidance, and appointment booking at Delhi PSK (Shalimar Bagh, ITO, Gurgaon).',
      hi: 'पासपोर्ट सेवा पोर्टल पर त्रुटिरहित फॉर्म भरना, सरकारी शुल्क भुगतान, एनेक्सचर गाइडेंस तथा शालीमार बाग/आईटीओ केंद्र पर सुविधाजनक अपॉइंटमेंट बुकिंग।'
    },
    requiredDocs: {
      en: [
        'Original Aadhaar Card with updated address',
        'Class 10th Passing Certificate / Marksheet (for Non-ECR status)',
        'Pan Card / Voter ID / Bank Passbook with photo & seal',
        'Old passport booklet (in case of re-issue or renewal)'
      ],
      hi: [
        'अपडेटेड पते वाला मूल आधार कार्ड',
        '10वीं कक्षा का प्रमाण पत्र / मार्कशीट (Non-ECR श्रेणी हेतु)',
        'पैन कार्ड / वोटर कार्ड / बैंक पासबुक (फोटो व मोहर सहित)',
        'पुराना पासपोर्ट (यदि रिन्यूअल या पुनः जारी कराना हो)'
      ]
    },
    processSteps: {
      en: [
        'Form drafting and spelling verification as per matriculation records',
        'Online government fee payment & selection of nearest PSK slot',
        'Complete printout set with Appointment Confirmation Receipt & document order'
      ],
      hi: [
        'मार्कशीट व आधार के अनुसार नाम व पते का सटीक मिलान',
        'सरकारी फीस भुगतान व शालीमार बाग/नजदीकी केंद्र पर स्लॉट बुकिंग',
        'अपॉइंटमेंट रसीद व दस्तावेज़ सेट की व्यवस्थित प्रिंट फाइल'
      ]
    },
    approxTimeline: {
      en: 'Normal: 15–20 days post PSK visit; Tatkaal: 3–5 working days post visit',
      hi: 'सामान्य: पीएसके विजिट के 15-20 दिन बाद; तत्काल: 3-5 कार्य दिवस'
    },
    departmentNote: {
      en: 'Passport is issued by the Ministry of External Affairs following mandatory local police verification.',
      hi: 'पासपोर्ट विदेश मंत्रालय द्वारा स्थानीय पुलिस सत्यापन के पश्चात जारी किया जाता है।'
    },
    popular: true
  },
  {
    id: 'driving-license',
    slug: 'driving-license-services',
    category: 'online_portals',
    title: {
      en: 'Driving License Services (Sarathi Parivahan)',
      hi: 'ड्राइविंग लाइसेंस ऑनलाइन सेवाएं (सारथी परिवहन)'
    },
    subtitle: {
      en: 'Learning license test application, slot booking, DL renewal & address change',
      hi: 'लर्निंग लाइसेंस ऑनलाइन टेस्ट आवेदन, स्थायी लाइसेंस स्लॉट व रिन्यूअल'
    },
    description: {
      en: 'Assistance for online Learner’s License application, Aadhaar-authenticated home test, permanent DL appointment booking, duplicate DL, and renewal via Parivahan Sarathi.',
      hi: 'लर्नर लाइसेंस आवेदन, घर बैठे ऑनलाइन टेस्ट गाइडेंस, परमानेंट डीएल स्लॉट बुकिंग व दिल्ली आरटीओ लाइसेंस सेवाओं में सहायता।'
    },
    requiredDocs: {
      en: [
        'Aadhaar Card (linked to mobile for Sarathi e-KYC)',
        'Age Proof (10th Certificate / Birth Certificate / PAN Card)',
        'Address Proof (Aadhaar / Voter ID / Utility bill)',
        'Passport Size Photograph and signature specimen',
        'Form 1A Medical Fitness Certificate (for applicants over 40 or commercial DL)'
      ],
      hi: [
        'आधार कार्ड (मोबाइल लिंक होना जरूरी)',
        'आयु प्रमाण (10वीं मार्कशीट / जन्म प्रमाण पत्र / पैन कार्ड)',
        'निवास प्रमाण (आधार / वोटर कार्ड)',
        'पासपोर्ट फोटो व हस्ताक्षर का नमूना',
        'फॉर्म 1ए मेडिकल सर्टिफिकेट (40 वर्ष से अधिक उम्र या व्यावसायिक वाहन हेतु)'
      ]
    },
    processSteps: {
      en: [
        'Application filing on Sarathi Parivahan portal',
        'Document and signature upload at exact DPI parameters',
        'Official RTO fee payment & issuance of application receipt'
      ],
      hi: [
        'सारथी परिवहन पोर्टल पर श्रेणी (2-व्हीलर/4-व्हीलर) चुनकर फॉर्म भरना',
        'निर्धारित साइज में फोटो व सिग्नेचर अपलोड',
        'आरटीओ फीस भुगतान व टेस्ट स्लॉट रसीद प्राप्त करना'
      ]
    },
    approxTimeline: {
      en: 'Learning License: Same day upon online test pass; Permanent DL: 7–15 days post RTO track test',
      hi: 'लर्निंग लाइसेंस: टेस्ट पास करने पर उसी दिन; स्थायी लाइसेंस: ड्राइविंग टेस्ट के 7-15 दिन में'
    },
    departmentNote: {
      en: 'Practical driving tests and final card issuance are governed by the Delhi Transport Department.',
      hi: 'ड्राइविंग टेस्ट व अंतिम लाइसेंस जारी करना दिल्ली परिवहन विभाग के क्षेत्राधिकार में है।'
    },
    popular: false
  },
  {
    id: 'affidavit-drafting',
    slug: 'affidavit-drafting',
    category: 'drafting',
    title: {
      en: 'Legal Affidavit & Declaration Drafting',
      hi: 'शपथ पत्र (Affidavit) व हलफनामा ड्राफ्टिंग'
    },
    subtitle: {
      en: 'Computer typed affidavits for name change, address, gap year, lost documents & marriage',
      hi: 'नाम परिवर्तन, निवास, गैप ईयर, खोए दस्तावेज़ व शादी के शपथ पत्र'
    },
    description: {
      en: 'Accurate computer typing and drafting of legal affidavits, self-declarations, anti-ragging undertakings, and government annexures in prescribed Hindi and English legal formats.',
      hi: 'सरकारी कार्यालयों, स्कूलों, अदालतों व पुलिस रिपोर्ट हेतु शपथ पत्र, हलफनामे और स्व-घोषणा पत्रों की शुद्ध हिंदी व अंग्रेजी कंप्यूटर टाइपिंग।'
    },
    requiredDocs: {
      en: [
        'Deponent Aadhaar Card or Valid ID Proof',
        'Details of matter (Old name vs New name, Lost item details, or College roll number)',
        'E-Stamp paper (or we can assist with guidance)'
      ],
      hi: [
        'शपथकर्ता का आधार कार्ड / पहचान पत्र',
        'शपथ पत्र का विषय (नाम परिवर्तन, खोए कागजात की एफआईआर संख्या आदि)',
        'ई-स्टाम्प पेपर (यदि आवश्यक हो)'
      ]
    },
    processSteps: {
      en: [
        'Live legal format selection matching your SDM / College / Court requirement',
        'On-screen typing and citizen proofreading in English or Hindi',
        'Clean high-resolution printout on e-Stamp paper or legal ledger sheet'
      ],
      hi: [
        'विभाग व उद्देश्य के अनुसार सही कानूनी प्रारूप का चयन',
        'स्क्रीन पर ग्राहक के समक्ष हिंदी या अंग्रेजी में शुद्ध टाइपिंग व मिलान',
        'ई-स्टाम्प या लीगल पेपर पर स्पष्ट लेजर प्रिंट'
      ]
    },
    approxTimeline: {
      en: 'Instant (15 to 30 minutes while you wait at the shop)',
      hi: 'तत्काल (15 से 30 मिनट में शॉप पर तैयार)'
    },
    departmentNote: {
      en: 'Notary attestation and e-stamp purchase should be completed through licensed notaries / stamp vendors.',
      hi: 'नोटरी सत्यापन व ई-स्टाम्प अधिकृत वेंडरों/नोटरी द्वारा सत्यापित किया जाता है।'
    },
    popular: true
  },
  {
    id: 'rent-agreement',
    slug: 'rent-agreement',
    category: 'drafting',
    title: {
      en: 'Rent Agreement Drafting & Print',
      hi: 'किरायानामा / रेंट एग्रीमेंट ड्राफ्टिंग व प्रिंट'
    },
    subtitle: {
      en: 'Residential & commercial 11-month lease agreements with standard legal clauses',
      hi: '11 महीने का कानूनी रेंट एग्रीमेंट (मकान, दुकान व गोदाम हेतु)'
    },
    description: {
      en: 'Drafting of clear 11-month residential and commercial rent agreements with security deposit terms, maintenance clauses, notice period, and inventory list.',
      hi: 'मकान मालिक व किरायेदार के बीच 11 माह का वैध किरायानामा तैयार करना (सिक्योरिटी, बिजली-पानी बिल व नियमों की स्पष्ट शर्तों सहित)।'
    },
    requiredDocs: {
      en: [
        'Landlord Aadhaar Card & Electricity Bill of property',
        'Tenant Aadhaar Card and Permanent Address Proof',
        'Agreed Monthly Rent, Security Deposit amount, and commencement date',
        'Two Witnesses contact details & IDs'
      ],
      hi: [
        'मकान मालिक का आधार कार्ड व मकान का बिजली बिल',
        'किरायेदार का आधार कार्ड व स्थायी निवास प्रमाण',
        'तय किराया, सिक्योरिटी राशि व शुरुआत की तारीख',
        'दो गवाहों के नाम व पहचान पत्र'
      ]
    },
    processSteps: {
      en: [
        'Input of party details, premises address, and special conditions',
        'Formatting onto legal size / e-Stamp paper layout',
        'Printout of duplicate copies for both owner and tenant'
      ],
      hi: [
        'दोनों पक्षों का विवरण, पता व नियम-शर्तों की प्रविष्टि',
        'ई-स्टाम्प पेपर लेआउट के अनुसार सटीक प्रिंट सेटिंग',
        'मकान मालिक व किरायेदार दोनों के लिए प्रतियां तैयार करना'
      ]
    },
    approxTimeline: {
      en: '30 to 45 minutes',
      hi: '30 से 45 मिनट'
    },
    departmentNote: {
      en: 'Agreements for longer than 11 months require formal Sub-Registrar registration.',
      hi: '11 माह से अधिक की लीज के लिए उप-पंजीयक (Sub-Registrar) कार्यालय में पंजीकरण आवश्यक होता है।'
    },
    popular: true
  },
  {
    id: 'laser-printing',
    slug: 'laser-printing-services',
    category: 'print_scan',
    title: {
      en: 'High-Speed Laser Printing & Photocopy',
      hi: 'हाई-स्पीड लेजर प्रिंटिंग व फोटोकॉपी'
    },
    subtitle: {
      en: 'Black & white and high-definition colour printing from WhatsApp, Email, or Pen Drive',
      hi: 'व्हाट्सएप, ईमेल व पेनड्राइव से ब्लैक/व्हाइट व फुल एचडी कलर प्रिंट'
    },
    description: {
      en: 'Crisp 1200 DPI commercial laser printing for court cases, government files, project reports, resumes, and study materials on 75 GSM to 100 GSM premium bond paper.',
      hi: 'सरकारी कागजात, कोर्ट फाइलें, प्रोजेक्ट रिपोर्ट, रिज्यूमे व किताबों के लिए 1200 DPI पर स्पष्ट ब्लैक/व्हाइट व कलर लेजर प्रिंटिंग व थोक फोटोकॉपी।'
    },
    requiredDocs: {
      en: ['PDF / Word / JPG file via WhatsApp (7048956157), Email, or Pen Drive'],
      hi: ['पीडीएफ, वर्ड या फोटो फाइल व्हाट्सएप (7048956157), ईमेल या पेनड्राइव द्वारा']
    },
    processSteps: {
      en: [
        'Send your file to WhatsApp 7048956157 or bring on pen drive',
        'Select paper weight, single/both side, and color or B/W mode',
        'Immediate fast print run with sharp contrast'
      ],
      hi: [
        'व्हाट्सएप 7048956157 पर फाइल भेजें या पेनड्राइव लाएं',
        'सिंगल या दोनों तरफ, ब्लैक/व्हाइट या कलर प्रिंट का चयन करें',
        'तुरंत साफ व पक्की लेजर प्रिंटिंग प्राप्त करें'
      ]
    },
    approxTimeline: {
      en: 'Immediate / Ready on arrival',
      hi: 'तत्काल / आते ही तैयार'
    },
    departmentNote: {
      en: 'Digital files shared via WhatsApp are deleted from local cache post-printing to respect user privacy.',
      hi: 'ग्राहक की गोपनीयता बनाए रखने हेतु प्रिंट के बाद व्हाट्सएप फाइलों को सिस्टम से हटा दिया जाता है।'
    },
    popular: false
  },
  {
    id: 'document-scanning',
    slug: 'document-scanning-services',
    category: 'print_scan',
    title: {
      en: 'HD Document Scanning & PDF Creation',
      hi: 'हाई-डेफिनिशन दस्तावेज़ स्कैनिंग व पीडीएफ'
    },
    subtitle: {
      en: 'Flatbed high-res scanning, multi-page merged PDFs, and portal file size optimization',
      hi: 'सरकारी पोर्टल हेतु निश्चित केबी (KB) साइज में स्पष्ट स्कैनिंग व कंप्रेस'
    },
    description: {
      en: 'High-resolution scanning of marksheet degrees, land registries, old records, and certificates. We compress and optimize PDFs strictly to meet 100KB–200KB upload limits on government portals.',
      hi: 'मार्कशीट, रजिस्ट्री, पुराने कागजात व प्रमाण पत्रों की हाई-रेसोल्यूशन स्कैनिंग। सरकारी वेबसाइटों पर अपलोड हेतु 100KB-200KB में गुणवत्ता बनाए रखते हुए पीडीएफ कंप्रेस करना।'
    },
    requiredDocs: {
      en: ['Physical documents, certificates, or registry sheets to be scanned'],
      hi: ['स्कैन कराने हेतु मूल कागजात या प्रतियां']
    },
    processSteps: {
      en: [
        'Careful optical scanning on calibrated flatbed/auto-feed scanner',
        'Crop, de-skew, contrast enhancement, and sequential multi-page merging',
        'Direct transfer to your WhatsApp, Email, or Pen Drive'
      ],
      hi: [
        'सावधानीपूर्वक हाई-रेसोल्यूशन फ्लैटबेड स्कैनिंग',
        'सीधा करना, कंट्रास्ट बढ़ाना व कई पन्नों की एक पीडीएफ बनाना',
        'तुरंत आपके व्हाट्सएप नंबर, ईमेल या पेनड्राइव में ट्रांसफर'
      ]
    },
    approxTimeline: {
      en: 'Immediate (5 to 10 minutes)',
      hi: 'तत्काल (5 से 10 मिनट में)'
    },
    departmentNote: {
      en: 'Ensure original documents are free of staples before feeding for fast processing.',
      hi: 'त्वरित स्कैनिंग हेतु पिन या स्टेपलर अलग कर लें।'
    },
    popular: false
  },
  {
    id: 'lamination-binding',
    slug: 'lamination-binding',
    category: 'print_scan',
    title: {
      en: 'Heavy-Duty Lamination & Spiral Binding',
      hi: 'हैवी-ड्यूटी लेमिनेशन व स्पाइरल बाइंडिंग'
    },
    subtitle: {
      en: 'Waterproof protective pouch lamination & neat ring/spiral book binding',
      hi: 'दस्तावेज़ सुरक्षा हेतु वाटरप्रूफ लेमिनेशन व किताबों/रिपोर्टों की बाइंडिंग'
    },
    description: {
      en: 'Protect important degrees, birth certificates, vehicle RCs, and Aadhaar cards from moisture and tearing with crystal-clear 125-250 micron hot thermal lamination. Spiral and wiro binding for projects and legal files.',
      hi: 'डिग्री, मार्कशीट, जन्म प्रमाण पत्र व आरसी को पानी व फटने से बचाने हेतु 125-250 माइक्रोन मजबूत लेमिनेशन तथा फाइल/प्रोजेक्ट बाइंडिंग।'
    },
    requiredDocs: {
      en: ['Documents or sheets requiring lamination / binding'],
      hi: ['लेमिनेशन या बाइंडिंग कराने वाले दस्तावेज']
    },
    processSteps: {
      en: [
        'Selection of pouch thickness (ID size, A4, or Legal size)',
        'Bubble-free thermal heat roller lamination',
        'Edge trimming with rounded smooth corners'
      ],
      hi: [
        'आईडी साइज, ए4 या लीगल साइज पाउच का चयन',
        'बबल-रहित हॉट रोलर थर्मल लेमिनेशन',
        'किनारों की स्मूथ फिनिशिंग व कटिंग'
      ]
    },
    approxTimeline: {
      en: '5 to 10 minutes',
      hi: '5 से 10 मिनट'
    },
    departmentNote: {
      en: 'Note: Certain original foreign visa documents or stamped affidavits should not be laminated per consular rules. We advise you accordingly.',
      hi: 'विदेश वीजा व कुछ विशेष स्टांप पत्रों पर लेमिनेशन न कराने की सलाह दी जाती है।'
    },
    popular: false
  },
  {
    id: 'passport-photos',
    slug: 'passport-size-photos',
    category: 'print_scan',
    title: {
      en: 'Instant Passport Size Photographs',
      hi: 'तत्काल पासपोर्ट साइज फोटोग्राफ'
    },
    subtitle: {
      en: 'White or blue background studio quality photos with instant 5-minute print',
      hi: 'सफेद या नीले बैकग्राउंड वाली 8/16 फोटो सिर्फ 5 मिनट में तैयार'
    },
    description: {
      en: 'High-gloss water-resistant passport photos formatted strictly to government exam, visa, passport seva, driving license, and school admission specifications (35mm x 45mm).',
      hi: 'पासपोर्ट सेवा, सरकारी नौकरी फॉर्म, वीजा, ड्राइविंग लाइसेंस और स्कूल दाखिला मानकों (35mm x 45mm) के अनुसार तुरंत पासपोर्ट फोटो।'
    },
    requiredDocs: {
      en: ['Come in person for instant photo capture or send clear mobile portrait on WhatsApp'],
      hi: ['दुकान पर तुरंत फोटो खिंचवाएं या व्हाट्सएप पर अपनी साफ फोटो भेजें']
    },
    processSteps: {
      en: [
        'Instant DSLR / HD camera portrait click with proper lighting',
        'Background cleanup (solid white / sky blue) and subtle formal retouching',
        'High-density 6-color thermal glossy photo print cutting'
      ],
      hi: [
        'सही लाइटिंग में साफ फोटो क्लिक',
        'बैकग्राउंड सफेद या नीला करना व जरूरी सफाई',
        'ग्लोसी फोटो पेपर पर तुरंत 8 या 16 प्रतियों में कटिंग'
      ]
    },
    approxTimeline: {
      en: '5 minutes while you wait',
      hi: 'मात्र 5 मिनट में तैयार'
    },
    departmentNote: {
      en: 'Meets official MEA and SSC/UPSC biometric facial aspect ratio norms.',
      hi: 'सरकारी परीक्षा व पासपोर्ट पोर्टल के स्वीकृत मापदंडों के अनुसार।'
    },
    popular: true
  },
  {
    id: 'online-forms',
    slug: 'online-form-filling',
    category: 'online_portals',
    title: {
      en: 'Government Jobs & Entrance Online Form Filling',
      hi: 'सरकारी नौकरी व प्रवेश परीक्षा ऑनलाइन फॉर्म'
    },
    subtitle: {
      en: 'SSC, UPSC, DSSSB, Railway, Delhi Police, CUET, NEET, and CTET forms',
      hi: 'एसएससी, डीएसएसएसबी, दिल्ली पुलिस, रेलवे, सीयूईटी व अन्य भर्ती फॉर्म'
    },
    description: {
      en: 'Meticulous online form submission for central and Delhi state examinations. We guarantee zero spelling mistakes, exact photo/signature dimension resizing, and safe online fee transactions.',
      hi: 'सरकारी भर्ती व प्रवेश परीक्षाओं के ऑनलाइन फॉर्म भरने में सहायता। फोटो-हस्ताक्षर का सही साइज, जाति/श्रेणी का सही चयन व सुरक्षित फीस भुगतान।'
    },
    requiredDocs: {
      en: [
        'Aadhaar Card and Mobile Number',
        '10th, 12th & Graduation Certificates / Marksheets',
        'Category / Caste / EWS Certificate (if seeking reservation)',
        'Recent passport photo and specimen signature'
      ],
      hi: [
        'आधार कार्ड व मोबाइल नंबर',
        '10वीं, 12वीं व स्नातक अंकतालिकाएं',
        'जाति / ईडब्ल्यूएस प्रमाण पत्र (आरक्षण हेतु)',
        'पासपोर्ट साइज फोटो व सफेद कागज पर हस्ताक्षर'
      ]
    },
    processSteps: {
      en: [
        'Review official notification qualification criteria',
        'Careful online registration and data entry in front of the applicant',
        'Upload resized credentials and generate final printable PDF confirmation'
      ],
      hi: [
        'अधिसूचना के नियमों व पात्रता की जांच',
        'अभ्यर्थी के सामने स्क्रीन पर फॉर्म की प्रविष्टि',
        'फीस भुगतान के पश्चात फाइनल प्रिंटेड कन्फर्मेशन पेज सौंपना'
      ]
    },
    approxTimeline: {
      en: '20 to 30 minutes',
      hi: '20 से 30 मिनट'
    },
    departmentNote: {
      en: 'Always verify spelling of applicant name, father’s name, and date of birth before final OTP lock.',
      hi: 'फाइनल सबमिट से पहले नाम, पिता का नाम व जन्मतिथि की स्पेलिंग स्वयं जांच लें।'
    },
    popular: true
  }
];

export const SERVICE_CATEGORIES = [
  { id: 'all', label: { en: 'All Services', hi: 'सभी सेवाएं' } },
  { id: 'certificates', label: { en: 'Govt. Certificates', hi: 'प्रमाण पत्र सेवाएं' } },
  { id: 'online_portals', label: { en: 'Online Portals & Cards', hi: 'ऑनलाइन पोर्टल व कार्ड' } },
  { id: 'drafting', label: { en: 'Drafting & Typing', hi: 'टाइपिंग व ड्राफ्टिंग' } },
  { id: 'print_scan', label: { en: 'Print, Scan & Bind', hi: 'प्रिंट, स्कैन व बाइंडिंग' } }
] as const;
