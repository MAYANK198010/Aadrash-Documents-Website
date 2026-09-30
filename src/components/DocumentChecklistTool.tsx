import React, { useState } from 'react';
import { CheckSquare, Square, Share2, Copy, Check, MessageSquare, AlertCircle, FileCheck2 } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';
import { TRANSLATIONS, Language } from '../data/translations';

interface DocumentChecklistToolProps {
  lang: Language;
  onOpenWhatsApp: (message?: string) => void;
}

export const DocumentChecklistTool: React.FC<DocumentChecklistToolProps> = ({
  lang,
  onOpenWhatsApp
}) => {
  const t = TRANSLATIONS[lang];
  const [selectedServiceId, setSelectedServiceId] = useState<string>('income-cert');
  const [checkedItems, setCheckedItems] = useState<Record<string, Record<number, boolean>>>({});
  const [copied, setCopied] = useState<boolean>(false);

  const currentService: ServiceItem =
    SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const currentChecked = checkedItems[selectedServiceId] || {};
  const docsList = currentService.requiredDocs[lang];

  const toggleItem = (idx: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [selectedServiceId]: {
        ...(prev[selectedServiceId] || {}),
        [idx]: !(prev[selectedServiceId]?.[idx])
      }
    }));
  };

  const completedCount = Object.values(currentChecked).filter(Boolean).length;
  const totalCount = docsList.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const isComplete = completedCount === totalCount && totalCount > 0;

  const handleCopyChecklist = () => {
    const serviceName = currentService.title[lang];
    const itemsFormatted = docsList
      .map((doc, idx) => `${currentChecked[idx] ? '✅' : '⬜'} ${doc}`)
      .join('\n');

    const textToCopy = `${serviceName} - Checklist (${completedCount}/${totalCount} Ready):\n\n${itemsFormatted}\n\nAadarsh Documents (Behind SDM Office, Rampura, Delhi) | Tel: 7048956157`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleShareToWhatsApp = () => {
    const serviceName = currentService.title[lang];
    const readyList = docsList.filter((_, idx) => currentChecked[idx]);
    const missingList = docsList.filter((_, idx) => !currentChecked[idx]);

    let text = '';
    if (lang === 'en') {
      text = `Hello Aadarsh Documents,\nI am preparing documents for *${serviceName}*.\n\n*Readiness Status: ${completedCount}/${totalCount} documents available (${progressPercent}%)*\n`;
      if (readyList.length > 0) {
        text += `\n*Documents I have:*\n${readyList.map((d) => `✅ ${d}`).join('\n')}\n`;
      }
      if (missingList.length > 0) {
        text += `\n*Documents I need help with:*\n${missingList.map((d) => `❓ ${d}`).join('\n')}\n`;
      }
      text += `\nPlease advise when I can visit your shop near SDM Office Rampura.`;
    } else {
      text = `नमस्ते आदर्श डॉक्यूमेंट्स,\nमैं *${serviceName}* हेतु आवश्यक कागजात तैयार कर रहा हूँ।\n\n*स्थिति: ${totalCount} में से ${completedCount} दस्तावेज़ तैयार (${progressPercent}%)*\n`;
      if (readyList.length > 0) {
        text += `\n*तैयार कागजात:*\n${readyList.map((d) => `✅ ${d}`).join('\n')}\n`;
      }
      if (missingList.length > 0) {
        text += `\n*जो कागजात बाकी हैं या पूछना है:*\n${missingList.map((d) => `❓ ${d}`).join('\n')}\n`;
      }
      text += `\nकृपया मार्गदर्शन करें।`;
    }

    onOpenWhatsApp(text);
  };

  return (
    <section id="checklist" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#123C8C]">
            {lang === 'en' ? 'Citizen Preparation Tool' : 'नागरिक तैयारी टूल'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071A4A] tracking-tight">
            {t.checklistTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t.checklistSubtitle}
          </p>
        </div>

        {/* Main Checklist Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
          
          {/* Service Selector Dropdown */}
          <div className="space-y-2">
            <label
              htmlFor="service-select"
              className="block text-xs sm:text-sm font-bold text-slate-900"
            >
              {t.checklistSelectLabel}
            </label>
            <select
              id="service-select"
              value={selectedServiceId}
              onChange={(e) => setSelectedServiceId(e.target.value)}
              className="w-full px-4 py-2.5 text-sm sm:text-base font-semibold text-slate-900 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123C8C] focus:bg-white transition-all cursor-pointer"
            >
              {SERVICES_DATA.map((srv) => (
                <option key={srv.id} value={srv.id}>
                  {srv.title[lang]} ({srv.category.replace('_', ' ')})
                </option>
              ))}
            </select>
          </div>

          {/* Progress Indicator */}
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-semibold text-slate-800">
                {t.checklistProgress}:
              </span>
              <span className="font-bold text-[#071A4A] tabular-nums">
                {completedCount} of {totalCount} ({progressPercent}%)
              </span>
            </div>

            <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${
                  isComplete ? 'bg-[#008A45]' : 'bg-[#123C8C]'
                }`}
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>

            <div className="flex items-center gap-1.5 text-xs">
              {isComplete ? (
                <span className="text-[#008A45] font-bold flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  {t.checklistReady}
                </span>
              ) : (
                <span className="text-amber-700 font-medium">
                  {totalCount - completedCount} {t.checklistIncomplete}
                </span>
              )}
            </div>
          </div>

          {/* Interactive Checkbox Items */}
          <div className="space-y-2.5">
            <p className="text-xs text-slate-500 font-medium">
              {lang === 'en'
                ? 'Check off the documents in your possession right now:'
                : 'जो कागजात आपके पास अभी उपलब्ध हैं, उन पर टिक करें:'}
            </p>
            <div className="space-y-2">
              {docsList.map((doc, idx) => {
                const isChecked = !!currentChecked[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleItem(idx)}
                    className={`flex items-start gap-3 p-3 rounded-lg border transition-all cursor-pointer select-none ${
                      isChecked
                        ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950 font-medium'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="shrink-0 mt-0.5">
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-[#008A45]" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                    <span className="text-xs sm:text-sm leading-relaxed">{doc}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons: WhatsApp Share & Copy */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleShareToWhatsApp}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#008A45] hover:bg-[#007038] text-white text-xs sm:text-sm font-semibold rounded-md shadow-sm transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>{t.checklistShareWhatsApp}</span>
            </button>

            <button
              type="button"
              onClick={handleCopyChecklist}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold rounded-md border border-slate-300 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#008A45]" />
                  <span>{t.checklistCopied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-600" />
                  <span>{t.checklistCopy}</span>
                </>
              )}
            </button>
          </div>

          {/* Citizen Advisory Note */}
          <div className="p-3.5 rounded-lg bg-blue-50/80 border border-blue-200 text-xs text-slate-700 flex items-start gap-2.5">
            <FileCheck2 className="w-4 h-4 text-[#123C8C] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900">
                {lang === 'en' ? 'Tip for SDM Office Applications:' : 'एसडीएम ऑफिस आवेदनों हेतु सुझाव:'}
              </p>
              <p className="mt-0.5 text-slate-600">
                {lang === 'en'
                  ? 'Always carry original Aadhaar and utility bills so we can capture clear scans without glare or blur. Photos should be recent.'
                  : 'स्कैनिंग हेतु मूल आधार कार्ड व बिजली बिल साथ लाएं ताकि स्पष्ट स्कैन हो सके। फोटो नवीन होनी चाहिए।'}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
