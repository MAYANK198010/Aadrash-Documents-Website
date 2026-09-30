import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { TRANSLATIONS, Language } from '../data/translations';

interface RegulatoryNoticeProps {
  lang: Language;
}

export const RegulatoryNotice: React.FC<RegulatoryNoticeProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="bg-slate-100 py-6 border-b border-slate-200 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-slate-800">
            {t.disclaimerTitle}
          </p>
          <p className="leading-relaxed text-slate-600 max-w-5xl">
            {t.disclaimerText}
          </p>
        </div>
      </div>
    </div>
  );
};
