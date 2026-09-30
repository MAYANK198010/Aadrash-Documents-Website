import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, Globe } from 'lucide-react';
import { TRANSLATIONS, Language } from '../data/translations';

interface FooterProps {
  lang: Language;
  onToggleLang: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onToggleLang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="bg-[#071A4A] text-slate-300 text-xs pt-12 pb-20 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & NAP */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {t.brandName}
            </h3>
            <p className="text-slate-400 leading-relaxed">
              {lang === 'en'
                ? 'Independent citizen document assistance, typing, online form filling, printing & scanning adjacent to SDM Office Rampura.'
                : 'एसडीएम ऑफिस रामपुरा के ठीक पीछे स्थित नागरिक दस्तावेज़ सुविधा, टाइपिंग, ऑनलाइन फॉर्म व प्रिंटिंग केंद्र।'}
            </p>
            <div className="pt-2 text-slate-300 space-y-1.5">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FFD500] shrink-0 mt-0.5" />
                <span>{t.nearSdm}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FFD500] shrink-0" />
                <a href="tel:7048956157" className="hover:text-white font-medium">
                  {t.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FFD500] shrink-0" />
                <a href="mailto:aadarshdocuments@gmail.com" className="hover:text-white truncate">
                  {t.email}
                </a>
              </p>
            </div>
          </div>

          {/* Col 2: Major Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === 'en' ? 'Core Services' : 'प्रमुख सेवाएं'}
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {lang === 'en' ? 'Income Certificate (e-District)' : 'आय प्रमाण पत्र (ई-डिस्ट्रिक्ट)'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {lang === 'en' ? 'Caste Certificate (SC/ST/OBC)' : 'जाति प्रमाण पत्र (SC/ST/OBC)'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {lang === 'en' ? 'Domicile & Residence Proof' : 'मूल निवास प्रमाण पत्र'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {lang === 'en' ? 'EWS Certificate Application' : 'ई.डब्ल्यू.एस प्रमाण पत्र'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {lang === 'en' ? 'PAN Card New & Correction' : 'नया पैन कार्ड व सुधार'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {lang === 'en' ? 'Affidavits & Rent Agreement' : 'शपथ पत्र व किरायानामा'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === 'en' ? 'Quick Links' : 'महत्वपूर्ण लिंक'}
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  {lang === 'en' ? 'Home' : 'मुख्य पृष्ठ'}
                </a>
              </li>
              <li>
                <a href="#checklist" className="hover:text-white transition-colors">
                  {t.navChecklist}
                </a>
              </li>
              <li>
                <a href="#rates" className="hover:text-white transition-colors">
                  {t.navRates}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  {t.navProcess}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {t.navFaq}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  {t.navContact}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Timings & Directory Reference */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === 'en' ? 'Timings & Profile' : 'समय व विवरण'}
            </h4>
            <div className="space-y-1.5 text-slate-400">
              <p className="text-white font-medium">{t.hours}</p>
              <p className="text-xs text-slate-500">
                {lang === 'en'
                  ? 'Urgent printing available on arrival via WhatsApp.'
                  : 'व्हाट्सएप द्वारा आवश्यक प्रिंटिंग तुरंत उपलब्ध।'}
              </p>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href="https://www.justdial.com/Delhi/Aadarsh-Documents-Behind-Sdm-Office-Rampura/011PXX11-XX11-240418120022-M3Q3_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold text-xs"
              >
                <span>{t.footerExternalListing}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onToggleLang}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-[#FFD500]" />
                  <span>{lang === 'en' ? 'हिंदी में देखें' : 'Switch to English'}</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Quiet Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} {t.brandName}. {t.footerRights}</p>
          <p>
            {lang === 'en'
              ? 'Serving Rampura, Lawrence Road, Keshav Puram & North West Delhi.'
              : 'रामपुरा, लॉरेंस रोड, केशव पुरम व उत्तर पश्चिम दिल्ली हेतु समर्पित।'}
          </p>
        </div>

      </div>
    </footer>
  );
};
