import React, { useEffect } from 'react';
import { X, CheckSquare, Square, Clock, AlertCircle, MessageSquare, ArrowRight, Shield } from 'lucide-react';
import { ServiceItem } from '../data/servicesData';
import { TRANSLATIONS, Language } from '../data/translations';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  lang: Language;
  onClose: () => void;
  onOpenWhatsApp: (message?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  lang,
  onClose,
  onOpenWhatsApp
}) => {
  const [checkedDocs, setCheckedDocs] = React.useState<Record<number, boolean>>({});

  useEffect(() => {
    // Reset checked state when a new service is selected
    setCheckedDocs({});

    // Prevent background scrolling while modal is open
    if (service) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const t = TRANSLATIONS[lang];
  const requiredDocs = service.requiredDocs[lang];
  const processSteps = service.processSteps[lang];

  const toggleDoc = (index: number) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const completedCount = Object.values(checkedDocs).filter(Boolean).length;
  const totalCount = requiredDocs.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const handleWhatsAppInquiry = () => {
    const serviceName = service.title[lang];
    const missingDocs = requiredDocs.filter((_, idx) => !checkedDocs[idx]);
    
    let text = '';
    if (lang === 'en') {
      text = `Hello Aadarsh Documents,\nI am inquiring about *${serviceName}*.\nI currently have ${completedCount} of ${totalCount} required documents ready.`;
      if (missingDocs.length > 0) {
        text += `\nPlease guide me on the remaining documents:\n- ${missingDocs.slice(0, 3).join('\n- ')}`;
      }
      text += `\nPlease let me know when I can visit your shop near SDM Office Rampura.`;
    } else {
      text = `नमस्ते आदर्श डॉक्यूमेंट्स,\nमुझे *${serviceName}* के लिए जानकारी चाहिए।\nमेरे पास ${totalCount} में से ${completedCount} आवश्यक दस्तावेज़ तैयार हैं।`;
      if (missingDocs.length > 0) {
        text += `\nकृपया बाकी दस्तावेजों के बारे में मार्गदर्शन करें:\n- ${missingDocs.slice(0, 3).join('\n- ')}`;
      }
      text += `\nकृपया बताएं कि मैं रामपुरा एसडीएम ऑफिस के पास आपकी दुकान पर कब आ सकता हूँ।`;
    }

    onOpenWhatsApp(text);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-200 bg-slate-50 flex items-start justify-between">
          <div className="space-y-1 pr-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#123C8C]">
              {service.category.toUpperCase().replace('_', ' ')}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#071A4A]">
              {service.title[lang]}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {service.subtitle[lang]}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-md transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          
          {/* Overview Prose */}
          <div className="text-slate-700 leading-relaxed bg-blue-50/50 p-3.5 rounded-lg border border-blue-100">
            {service.description[lang]}
          </div>

          {/* Interactive Document Checklist Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-[#008A45]" />
                {t.modalRequiredDocsTitle}
              </h3>
              <span className="text-xs font-semibold text-slate-500">
                {completedCount}/{totalCount} {lang === 'en' ? 'Checked' : 'तैयार'}
              </span>
            </div>

            {/* Interactive Progress Bar */}
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#008A45] h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>

            <p className="text-xs text-slate-500 italic">
              {lang === 'en'
                ? 'Tap items to check what you already have in hand:'
                : 'कागजात पर क्लिक करके देखें कि आपके पास क्या-क्या तैयार है:'}
            </p>

            <ul className="space-y-2">
              {requiredDocs.map((doc, idx) => {
                const isChecked = !!checkedDocs[idx];
                return (
                  <li
                    key={idx}
                    onClick={() => toggleDoc(idx)}
                    className={`flex items-start gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                      isChecked
                        ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950 font-medium'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="shrink-0 mt-0.5">
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-[#008A45]" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400" />
                      )}
                    </span>
                    <span className="text-xs sm:text-sm select-none">{doc}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Steps in Process */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-[#123C8C]" />
              {t.modalProcessTitle}
            </h3>
            <ol className="space-y-2">
              {processSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Timeline & Department Note */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
              <div className="flex items-center gap-1.5 text-amber-900 font-bold text-xs mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{t.modalTimelineTitle}</span>
              </div>
              <p className="text-xs text-amber-950">{service.approxTimeline[lang]}</p>
            </div>

            <div className="p-3 rounded-lg bg-slate-100 border border-slate-200">
              <div className="flex items-center gap-1.5 text-slate-800 font-bold text-xs mb-1">
                <Shield className="w-3.5 h-3.5 text-slate-600" />
                <span>{t.modalDisclaimerTitle}</span>
              </div>
              <p className="text-xs text-slate-600">{service.departmentNote[lang]}</p>
            </div>
          </div>

        </div>

        {/* Modal Actions Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-md transition-colors"
          >
            {t.modalClose}
          </button>

          <button
            type="button"
            onClick={handleWhatsAppInquiry}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#008A45] hover:bg-[#007038] text-white text-xs sm:text-sm font-semibold rounded-md shadow-sm transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>{t.modalWhatsAppButton}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
