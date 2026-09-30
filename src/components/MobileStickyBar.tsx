import React from 'react';
import { Phone, MessageSquare, Navigation } from 'lucide-react';
import { TRANSLATIONS, Language } from '../data/translations';

interface MobileStickyBarProps {
  lang: Language;
  onOpenWhatsApp: (message?: string) => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ lang, onOpenWhatsApp }) => {
  const t = TRANSLATIONS[lang];

  return (
    <aside
      aria-label="Quick contact"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-around gap-2 shadow-lg"
      style={{ height: '54px' }} // Well under 15% mobile viewport height (e.g. 54px / 667px ~ 8%)
    >
      {/* 1. Direct Call */}
      <a
        href="tel:7048956157"
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-2 rounded-md bg-[#071A4A] text-white text-xs font-semibold active:scale-98 transition-transform whitespace-nowrap"
      >
        <Phone className="w-3.5 h-3.5 text-[#FFD500]" />
        <span>{lang === 'en' ? 'Call' : 'कॉल'}</span>
      </a>

      {/* 2. Direct WhatsApp */}
      <button
        type="button"
        onClick={() => onOpenWhatsApp()}
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-2 rounded-md bg-[#008A45] text-white text-xs font-semibold active:scale-98 transition-transform whitespace-nowrap"
      >
        <MessageSquare className="w-3.5 h-3.5 fill-white" />
        <span>WhatsApp</span>
      </button>

      {/* 3. Get Directions */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=SDM+Office+Rampura"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-2 rounded-md border border-slate-300 text-slate-800 text-xs font-semibold active:scale-98 transition-transform whitespace-nowrap"
      >
        <Navigation className="w-3.5 h-3.5 text-red-600" />
        <span>{lang === 'en' ? 'Get Directions' : 'रास्ता'}</span>
      </a>
    </aside>
  );
};
