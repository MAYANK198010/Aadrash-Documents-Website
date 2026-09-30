import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_DATA, FaqItem } from '../data/faqData';
import { TRANSLATIONS, Language } from '../data/translations';

interface FaqSectionProps {
  lang: Language;
  onOpenWhatsApp: (message?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang, onOpenWhatsApp }) => {
  const t = TRANSLATIONS[lang];
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': true
  });
  const [activeTab, setActiveTab] = useState<'all' | 'general' | 'certificates' | 'print'>('all');

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFaqs = FAQ_DATA.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section id="faq" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#123C8C]">
            {lang === 'en' ? 'Citizen Questions & Clarity' : 'नागरिक सवाल व समाधान'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071A4A] tracking-tight mt-1">
            {t.faqTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {t.faqSubtitle}
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'all'
                ? 'bg-[#071A4A] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {lang === 'en' ? 'All Questions' : 'सभी सवाल'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('general')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'general'
                ? 'bg-[#071A4A] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {lang === 'en' ? 'Office & General' : 'सामान्य जानकारी'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('certificates')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'certificates'
                ? 'bg-[#071A4A] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {lang === 'en' ? 'Certificates' : 'प्रमाण पत्र'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('print')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'print'
                ? 'bg-[#071A4A] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {lang === 'en' ? 'Printing & Scanning' : 'प्रिंट व स्कैन'}
          </button>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];

            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-100/70 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.question[lang]}
                  </span>
                  <span className="text-slate-500 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 py-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-white">
                    {faq.answer[lang]}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt for unlisted queries */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#123C8C] shrink-0" />
            <p className="text-xs text-slate-700">
              {lang === 'en'
                ? 'Have a specific question about your Delhi e-District application?'
                : 'क्या आपके पास दिल्ली ई-डिस्ट्रिक्ट आवेदन से जुड़ा कोई खास सवाल है?'}
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              onOpenWhatsApp(
                lang === 'en'
                  ? 'Hello Aadarsh Documents, I have a query that is not listed in the FAQ. Please assist.'
                  : 'नमस्ते आदर्श डॉक्यूमेंट्स, मुझे कुछ अतिरिक्त जानकारी चाहिए।'
              )
            }
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#008A45] hover:bg-[#007038] text-white text-xs font-semibold rounded-md shrink-0 shadow-2xs transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>{lang === 'en' ? 'Ask on WhatsApp' : 'व्हाट्सएप पर पूछें'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
