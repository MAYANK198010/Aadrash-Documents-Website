import React from 'react';
import { MapPin, Navigation, Bus, Train, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { TRANSLATIONS, Language } from '../data/translations';

interface LocationGuideProps {
  lang: Language;
}

export const LocationGuide: React.FC<LocationGuideProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="location" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#123C8C]">
            {lang === 'en' ? 'Direct Accessibility' : 'आवागमन व पता'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071A4A] tracking-tight mt-1">
            {t.locationTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {t.locationSubtitle}
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Address details & Transit Guide (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* NAP Card */}
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#071A4A] text-white shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#FFD500]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Aadarsh Documents
                  </h3>
                  <p className="text-sm text-slate-700 font-medium mt-0.5">
                    {t.addressLine1}
                  </p>
                  <p className="text-xs text-slate-500">
                    {t.addressLine2}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-200 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#123C8C] shrink-0" />
                  <a href="tel:7048956157" className="font-semibold hover:underline">
                    +91 7048956157
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#123C8C] shrink-0" />
                  <a href="mailto:aadarshdocuments@gmail.com" className="hover:underline truncate">
                    aadarshdocuments@gmail.com
                  </a>
                </div>
                <div className="sm:col-span-2 flex items-center gap-2 text-slate-600">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{t.hours}</span>
                </div>
              </div>
            </div>

            {/* Transit & Commute Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {lang === 'en' ? 'How to Reach Us' : 'कैसे पहुंचें (परिवहन मार्ग)'}
              </h4>

              <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
                <Train className="w-5 h-5 text-[#123C8C] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <span className="font-bold text-slate-900">
                    {lang === 'en' ? 'Delhi Metro Connectivity' : 'दिल्ली मेट्रो संपर्क'}
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    {t.metroTransit}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
                <Bus className="w-5 h-5 text-[#008A45] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <span className="font-bold text-slate-900">
                    {lang === 'en' ? 'Bus & Road Connectivity' : 'बस व सड़क मार्ग'}
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    {t.busTransit}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Directions Action */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://www.google.com/maps/search/?api=1&query=SDM+Office+Rampura"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#071A4A] hover:bg-[#123C8C] text-white text-xs sm:text-sm font-semibold rounded-md transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4 text-[#FFD500]" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 text-slate-300" />
              </a>

              <a
                href="https://www.justdial.com/Delhi/Aadarsh-Documents-Behind-Sdm-Office-Rampura/011PXX11-XX11-240418120022-M3Q3_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold rounded-md transition-colors"
              >
                <span>Justdial Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

          </div>

          {/* Right: Map Graphic & Landmark Container (6 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="h-full min-h-[340px] bg-slate-100 rounded-xl border border-slate-200 p-6 flex flex-col justify-between relative overflow-hidden">
              
              {/* Simulated stylized street grid map */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    {lang === 'en' ? 'Local Vicinity Map' : 'क्षेत्रीय मानचित्र'}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    PIN 110035
                  </span>
                </div>

                {/* Local Visual Landmark Representation */}
                <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-2xs space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#008A45] shrink-0 animate-ping"></div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {lang === 'en' ? 'SDM Office (Sub-Division Saraswati Vihar / Rampura)' : 'एसडीएम कार्यालय (सरस्वती विहार / रामपुरा)'}
                      </p>
                      <p className="text-xs text-slate-500">
                        Main Lawrence Road / Rampura Complex
                      </p>
                    </div>
                  </div>

                  {/* Proximity visual connector */}
                  <div className="pl-1.5 border-l-2 border-dashed border-[#123C8C] py-2 ml-1 text-xs text-slate-600">
                    <span className="bg-blue-50 px-2 py-0.5 rounded text-[#123C8C] font-semibold">
                      {lang === 'en' ? '1 Minute Walk (Immediately Behind Building)' : '1 मिनट की दूरी (ठीक पीछे)'}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 bg-blue-50/60 p-3 rounded border border-blue-200">
                    <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-[#071A4A]">
                        Aadarsh Documents
                      </p>
                      <p className="text-xs text-slate-600">
                        {lang === 'en' ? 'Citizen Document Assistance & Typing Desk' : 'दस्तावेज़ सहायता व टाइपिंग केंद्र'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Nearby Areas Covered */}
                <div className="text-xs text-slate-600 space-y-1 pt-1">
                  <span className="font-semibold text-slate-800">
                    {lang === 'en' ? 'Convenient for Residents of:' : 'इन क्षेत्रों के निवासियों के लिए सुगम:'}
                  </span>
                  <p>
                    Rampura · Lawrence Road · Keshav Puram · Tri Nagar · Kanhaiya Nagar · Ashok Vihar · Shakurpur · Wazirpur Industrial Area.
                  </p>
                </div>
              </div>

              {/* Bottom Quick Call */}
              <div className="pt-4 mt-6 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  {lang === 'en' ? 'Need help finding the shop?' : 'दुकान ढूंढने में सहायता चाहिए?'}
                </span>
                <a
                  href="tel:7048956157"
                  className="text-xs font-bold text-[#071A4A] hover:text-[#123C8C] flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FFD500]" />
                  <span>Call 7048956157</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
