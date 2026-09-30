import React, { useState } from 'react';
import { Calculator, Plus, Minus, MessageSquare, RotateCcw } from 'lucide-react';
import { RATES_DATA, RateItem } from '../data/ratesData';
import { TRANSLATIONS, Language } from '../data/translations';

interface RateEstimatorProps {
  lang: Language;
  onOpenWhatsApp: (message?: string) => void;
}

export const RateEstimator: React.FC<RateEstimatorProps> = ({ lang, onOpenWhatsApp }) => {
  const t = TRANSLATIONS[lang];
  const [quantities, setQuantities] = useState<Record<string, number>>({
    'bw-print': 5,
    'color-print': 0,
    'hd-scan': 0,
    'passport-photo-set': 1,
    'lamination-a4': 0,
    'spiral-bind': 0,
    'typing-page': 0
  });

  const updateQuantity = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const handleReset = () => {
    setQuantities({
      'bw-print': 0,
      'color-print': 0,
      'hd-scan': 0,
      'passport-photo-set': 0,
      'lamination-a4': 0,
      'spiral-bind': 0,
      'typing-page': 0
    });
  };

  const calculateSubtotal = (item: RateItem): number => {
    const qty = quantities[item.id] || 0;
    // Apply bulk rule for B/W single side if > 50
    if (item.id === 'bw-print' && qty >= 50) {
      return qty * 2; // bulk price
    }
    return qty * item.unitPrice;
  };

  const totalEstimate = RATES_DATA.reduce((sum, item) => sum + calculateSubtotal(item), 0);
  const activeItemsCount = Object.values(quantities).filter((q) => q > 0).length;

  const handleWhatsAppQuote = () => {
    const activeItems = RATES_DATA.filter((item) => (quantities[item.id] || 0) > 0);
    
    let text = '';
    if (lang === 'en') {
      text = `Hello Aadarsh Documents,\nI am requesting an estimate/order for the following print & shop services:\n\n`;
      activeItems.forEach((item) => {
        const qty = quantities[item.id];
        const cost = calculateSubtotal(item);
        text += `• ${item.name.en}: ${qty} pcs = ₹${cost}\n`;
      });
      text += `\n*Estimated Total: ₹${totalEstimate}*\n\nPlease confirm availability and when I can pick up.`;
    } else {
      text = `नमस्ते आदर्श डॉक्यूमेंट्स,\nमुझे निम्नलिखित सेवाओं हेतु दर / ऑर्डर की पुष्टि चाहिए:\n\n`;
      activeItems.forEach((item) => {
        const qty = quantities[item.id];
        const cost = calculateSubtotal(item);
        text += `• ${item.name.hi}: ${qty} = ₹${cost}\n`;
      });
      text += `\n*अनुमानित कुल: ₹${totalEstimate}*\n\nकृपया पुष्टि करें।`;
    }

    onOpenWhatsApp(text);
  };

  return (
    <section id="rates" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#123C8C]">
            {lang === 'en' ? 'Transparent Citizen Pricing' : 'पारदर्शी नागरिक दरें'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071A4A] tracking-tight mt-1">
            {t.ratesTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {t.ratesSubtitle}
          </p>
        </div>

        {/* Pricing Estimator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Rate items list (8 cols) */}
          <div className="lg:col-span-8 bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-6 divide-y divide-slate-200">
            {RATES_DATA.map((item) => {
              const qty = quantities[item.id] || 0;
              const subtotal = calculateSubtotal(item);

              return (
                <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1 max-w-md">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      {item.name[lang]}
                    </h4>
                    <p className="text-xs text-slate-500">
                      ₹{item.unitPrice} {item.unitLabel[lang]} · {item.note[lang]}
                    </p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-5">
                    {/* Stepper buttons */}
                    <div className="flex items-center border border-slate-300 rounded-md bg-white overflow-hidden shadow-2xs">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2.5 py-1.5 text-slate-600 hover:bg-slate-100 transition-colors disabled:opacity-30 cursor-pointer"
                        disabled={qty <= 0}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-10 text-center text-xs sm:text-sm font-bold text-slate-900 tabular-nums">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2.5 py-1.5 text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="w-20 text-right">
                      <span className="text-sm font-bold text-slate-900 tabular-nums">
                        ₹{subtotal}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Estimation Summary Card (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200 shadow-md p-6 sticky top-24 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#123C8C]" />
                <h3 className="font-bold text-slate-900 text-base">
                  {lang === 'en' ? 'Order Summary' : 'खर्च विवरण'}
                </h3>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1"
                title="Reset calculation"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{lang === 'en' ? 'Reset' : 'रीसेट'}</span>
              </button>
            </div>

            {/* Itemized active count */}
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>{lang === 'en' ? 'Selected Services:' : 'चयनित सेवाएं:'}</span>
                <span className="font-semibold text-slate-800">{activeItemsCount} items</span>
              </div>
              <div className="flex justify-between">
                <span>{lang === 'en' ? 'Pickup Location:' : 'स्थान:'}</span>
                <span className="font-semibold text-slate-800">Behind SDM Office</span>
              </div>
              <div className="flex justify-between">
                <span>{lang === 'en' ? 'Payment Modes:' : 'भुगतान माध्यम:'}</span>
                <span className="font-semibold text-slate-800">UPI / Cash</span>
              </div>
            </div>

            {/* Total box */}
            <div className="p-4 rounded-lg bg-slate-900 text-white space-y-1">
              <span className="text-xs text-slate-400 block">{t.estimatedTotal}</span>
              <div className="text-3xl font-extrabold text-[#FFD500] tabular-nums">
                ₹{totalEstimate}
              </div>
            </div>

            {/* Order via WhatsApp */}
            <button
              type="button"
              onClick={handleWhatsAppQuote}
              disabled={totalEstimate === 0}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#008A45] hover:bg-[#007038] disabled:opacity-40 disabled:pointer-events-none text-white text-sm font-semibold rounded-md shadow-sm transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>{t.sendEstimateWhatsApp}</span>
            </button>

            <p className="text-[11px] text-slate-500 leading-tight">
              {t.ratesDisclaimer}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
