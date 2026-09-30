import React from 'react';
import { Phone, MessageSquare, CheckCircle, FileText, Printer, ShieldCheck, ArrowRight, Clock } from 'lucide-react';
import { TRANSLATIONS, Language } from '../data/translations';

interface HeroProps {
  lang: Language;
  onOpenWhatsApp: (message?: string) => void;
  onScrollTo: (selector: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenWhatsApp, onScrollTo }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="home" className="relative bg-gradient-to-b from-slate-100 via-white to-slate-50 pt-8 pb-14 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Status Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-blue-50 border border-blue-200 text-xs text-[#071A4A] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#008A45] animate-pulse"></span>
              <span>{t.nearSdm}</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600 font-normal">{t.openStatus}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#071A4A] tracking-tight leading-tight max-w-2xl">
              {t.heroTitle}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {t.heroSubtitle}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() =>
                  onOpenWhatsApp(
                    lang === 'en'
                      ? 'Hello Aadarsh Documents, I need assistance with document preparation / certificate application. Please guide me.'
                      : 'नमस्ते आदर्श डॉक्यूमेंट्स, मुझे दस्तावेज़ व प्रमाण पत्र आवेदन हेतु जानकारी चाहिए। कृपया मार्गदर्शन करें।'
                  )
                }
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#008A45] hover:bg-[#007038] text-white text-sm sm:text-base font-semibold shadow-sm transition-colors cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>{t.heroWhatsAppCta}</span>
              </button>

              <a
                href="tel:7048956157"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#071A4A] hover:bg-[#123C8C] text-white text-sm sm:text-base font-semibold transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#FFD500]" />
                <span>{t.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={() => onScrollTo('#checklist')}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-md bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold border border-slate-300 transition-colors"
              >
                <span>{t.heroChecklistCta}</span>
                <ArrowRight className="w-4 h-4 text-[#123C8C]" />
              </button>
            </div>

            {/* Proof Points & Trust Items */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#008A45] shrink-0" />
                <span>{t.heroTrust1}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#008A45] shrink-0" />
                <span>{t.heroTrust2}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#008A45] shrink-0" />
                <span>{t.heroTrust3}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#008A45] shrink-0" />
                <span>{t.heroTrust4}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Anchor & Quick Desk Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-slate-200 shadow-md p-6 relative overflow-hidden">
              
              {/* Subtle accent border on top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#071A4A] via-[#123C8C] to-[#FFD500]"></div>

              {/* Header inside card */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#123C8C]">
                    {lang === 'en' ? 'Digital Service Desk' : 'डिजिटल सेवा केंद्र'}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                    {lang === 'en' ? 'Direct Desk Assistance' : 'सीधी डेस्क सुविधा'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {lang === 'en' ? 'Rampura, Lawrence Road (Delhi - 110035)' : 'रामपुरा, लॉरेंस रोड (दिल्ली 110035)'}
                  </p>
                </div>
                <div className="p-2.5 rounded bg-blue-50 text-[#123C8C]">
                  <FileText className="w-6 h-6" />
                </div>
              </div>

              {/* Fast Capability Highlights */}
              <div className="py-4 space-y-3">
                <div className="flex items-center justify-between text-xs py-2 px-3 rounded bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-800 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#008A45]" />
                    {lang === 'en' ? 'Income / Caste / Domicile Certificates' : 'आय, जाति, मूल निवास प्रमाण पत्र'}
                  </span>
                  <span className="text-slate-500 font-medium">{lang === 'en' ? 'e-District' : 'ई-डिस्ट्रिक्ट'}</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 px-3 rounded bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-800 flex items-center gap-2">
                    <Printer className="w-4 h-4 text-[#123C8C]" />
                    {lang === 'en' ? 'High-Speed B/W & Colour Laser Printing' : 'कलर व ब्लैक/व्हाइट लेजर प्रिंटिंग'}
                  </span>
                  <span className="text-slate-500 font-medium">1200 DPI</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 px-3 rounded bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-800 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#071A4A]" />
                    {lang === 'en' ? 'Affidavits & Rent Agreement Drafting' : 'शपथ पत्र व किरायानामा ड्राफ्टिंग'}
                  </span>
                  <span className="text-slate-500 font-medium">{lang === 'en' ? 'Instant Print' : 'तुरंत तैयार'}</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 px-3 rounded bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-800 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600" />
                    {lang === 'en' ? 'Urgent Passport Photos (Set of 8)' : 'तत्काल पासपोर्ट फोटो (8 पीस)'}
                  </span>
                  <span className="text-amber-700 font-semibold">{lang === 'en' ? '5 Minutes' : '5 मिनट'}</span>
                </div>
              </div>

              {/* Instant WhatsApp Send Feature */}
              <div className="pt-3 border-t border-slate-100 bg-slate-50/80 -mx-6 -mb-6 p-4 rounded-b-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-900">
                      {lang === 'en' ? 'Send Files for Instant Print' : 'प्रिंट हेतु फाइल व्हाट्सएप करें'}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {lang === 'en' ? 'Pick up prints without waiting' : 'आते ही तैयार प्रिंट पाएं'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenWhatsApp(
                        lang === 'en'
                          ? 'Hello, I want to send a document for printing / scanning. Please share file details.'
                          : 'नमस्ते, मुझे प्रिंटिंग/स्कैनिंग के लिए फाइल भेजनी है।'
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#008A45] hover:bg-[#007038] text-white text-xs font-semibold rounded shadow-sm transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>7048956157</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
