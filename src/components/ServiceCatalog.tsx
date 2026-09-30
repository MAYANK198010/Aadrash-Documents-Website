import React, { useState, useMemo } from 'react';
import { Search, FileText, ArrowRight, MessageSquare, Clock, CheckCircle, Printer } from 'lucide-react';
import { SERVICES_DATA, SERVICE_CATEGORIES, ServiceItem } from '../data/servicesData';
import { TRANSLATIONS, Language } from '../data/translations';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServiceCatalogProps {
  lang: Language;
  onOpenWhatsApp: (message?: string) => void;
}

export const ServiceCatalog: React.FC<ServiceCatalogProps> = ({ lang, onOpenWhatsApp }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const t = TRANSLATIONS[lang];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((item) => {
      // Category match
      const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
      if (!categoryMatch) return false;

      // Search match in English or Hindi
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const matchEn =
        item.title.en.toLowerCase().includes(q) ||
        item.subtitle.en.toLowerCase().includes(q) ||
        item.description.en.toLowerCase().includes(q) ||
        item.slug.toLowerCase().includes(q);

      const matchHi =
        item.title.hi.toLowerCase().includes(q) ||
        item.subtitle.hi.toLowerCase().includes(q) ||
        item.description.hi.toLowerCase().includes(q);

      return matchEn || matchHi;
    });
  }, [activeCategory, searchQuery]);

  const handleQuickWhatsApp = (service: ServiceItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const serviceName = service.title[lang];
    const message =
      lang === 'en'
        ? `Hello Aadarsh Documents, I need assistance regarding *${serviceName}*. Please let me know the required documents and fee details.`
        : `नमस्ते आदर्श डॉक्यूमेंट्स, मुझे *${serviceName}* के बारे में जानकारी चाहिए। आवश्यक दस्तावेज़ व शुल्क विवरण बताएं।`;
    onOpenWhatsApp(message);
  };

  return (
    <section id="services" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#123C8C]">
            {lang === 'en' ? 'Full Service Catalog' : 'संपूर्ण सेवा सूची'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071A4A] tracking-tight mt-1">
            {t.servicesHeading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {t.servicesSubheading}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between pb-8">
          
          {/* Interactive Filter Tabs (allowed as functional buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {SERVICE_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#071A4A] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.label[lang]}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-9.5 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123C8C] focus:bg-white text-slate-900 transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Grid */}
        {filteredServices.length === 0 ? (
          <div className="p-12 text-center rounded-xl bg-slate-50 border border-slate-200">
            <FileText className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <p className="text-sm font-semibold text-slate-700">{t.noServicesFound}</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#123C8C] bg-blue-50 hover:bg-blue-100 rounded-md"
            >
              {lang === 'en' ? 'Reset Filters' : 'फ़िल्टर हटाएं'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const docCount = service.requiredDocs[lang].length;
              const isPrintScan = service.category === 'print_scan';

              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`group bg-white rounded-xl border p-6 flex flex-col justify-between hover:shadow-md transition-all cursor-pointer relative ${
                    isPrintScan
                      ? 'border-emerald-300 hover:border-emerald-500 bg-gradient-to-b from-emerald-50/20 to-white'
                      : 'border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <div className="space-y-3">
                    
                    {/* Header Metadata with Visual Indicator Badge for Print & Scan */}
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      {isPrintScan ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-2xs">
                          <Printer className="w-3 h-3 text-emerald-700 shrink-0" />
                          <span>{lang === 'en' ? 'Print & Scan Desk' : 'प्रिंट व स्कैन डेस्क'}</span>
                        </span>
                      ) : (
                        <span className="font-semibold text-[#123C8C] uppercase tracking-wider text-[11px]">
                          {service.category.replace('_', ' ')}
                        </span>
                      )}
                      {service.popular && (
                        <span className="text-[11px] font-bold text-amber-700">
                          ★ {service.highlight || (lang === 'en' ? 'Popular' : 'प्रमुख')}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#123C8C] transition-colors leading-snug">
                      {service.title[lang]}
                    </h3>

                    {/* Subtitle / Description */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {service.subtitle[lang]}
                    </p>

                    {/* Print & Scan Specific Capability Highlight */}
                    {isPrintScan && (
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                        <Printer className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{lang === 'en' ? 'Instant Counter Output (1200 DPI)' : 'दुकान पर तुरंत हाई-स्पीड प्रिंट/स्कैन'}</span>
                      </div>
                    )}

                    {/* Document Count & Timeline */}
                    <div className="pt-2 text-xs text-slate-500 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#008A45]" />
                        <span>
                          {docCount} {t.requiredDocsCount}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span className="truncate">{service.approxTimeline[lang]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA bar */}
                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#071A4A] group-hover:text-[#123C8C]">
                      {t.viewDetails}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>

                    <button
                      type="button"
                      onClick={(e) => handleQuickWhatsApp(service, e)}
                      className="p-1.5 text-slate-400 hover:text-[#008A45] hover:bg-emerald-50 rounded-md transition-colors"
                      title={lang === 'en' ? 'Quick WhatsApp Inquiry' : 'त्वरित व्हाट्सएप पूछताछ'}
                      aria-label="Quick WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Detailed Service Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          lang={lang}
          onClose={() => setSelectedService(null)}
          onOpenWhatsApp={onOpenWhatsApp}
        />
      )}
    </section>
  );
};
