import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, Globe, MapPin } from 'lucide-react';
import { TRANSLATIONS, Language } from '../data/translations';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenWhatsApp: (message?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onToggleLang, onOpenWhatsApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top micro bar for local context & hours */}
      <div className="bg-[#071A4A] text-slate-200 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#FFD500]" />
              {t.nearSdm}
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">{t.hours}</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:7048956157"
              className="flex items-center gap-1.5 text-slate-200 hover:text-white font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFD500]" />
              {t.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar strictly fulfilling 3-zone contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="text-xl sm:text-2xl font-bold tracking-tight text-[#071A4A] hover:text-[#123C8C] transition-colors whitespace-nowrap"
        >
          {t.brandName}
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#services');
            }}
            className="hover:text-[#123C8C] transition-colors whitespace-nowrap"
          >
            {t.navServices}
          </a>
          <a
            href="#checklist"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#checklist');
            }}
            className="hover:text-[#123C8C] transition-colors whitespace-nowrap"
          >
            {t.navChecklist}
          </a>
          <a
            href="#rates"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#rates');
            }}
            className="hover:text-[#123C8C] transition-colors whitespace-nowrap"
          >
            {t.navRates}
          </a>
          <a
            href="#process"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#process');
            }}
            className="hover:text-[#123C8C] transition-colors whitespace-nowrap"
          >
            {t.navProcess}
          </a>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#faq');
            }}
            className="hover:text-[#123C8C] transition-colors whitespace-nowrap"
          >
            {t.navFaq}
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="hover:text-[#123C8C] transition-colors whitespace-nowrap"
          >
            {t.navContact}
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions (Language Switcher + WhatsApp CTA) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Bilingual toggle button */}
          <button
            type="button"
            onClick={onToggleLang}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors whitespace-nowrap"
            title="Switch Language / भाषा बदलें"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-[#123C8C]" />
            <span>{lang === 'en' ? 'हिन्दी' : 'English'}</span>
          </button>

          {/* Primary WhatsApp Action */}
          <button
            type="button"
            onClick={() => onOpenWhatsApp()}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#008A45] hover:bg-[#007038] rounded-md transition-colors shadow-sm whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span className="hidden sm:inline">{t.ctaWhatsApp}</span>
            <span className="sm:hidden">WhatsApp</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-md"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs text-slate-500">
            <span>{t.nearSdm}</span>
            <span className="text-[#008A45] font-medium">{t.openStatus}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm font-medium text-slate-800">
            <button
              type="button"
              onClick={() => handleNavClick('#services')}
              className="text-left px-3 py-2 rounded hover:bg-slate-100"
            >
              {t.navServices}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('#checklist')}
              className="text-left px-3 py-2 rounded hover:bg-slate-100"
            >
              {t.navChecklist}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('#rates')}
              className="text-left px-3 py-2 rounded hover:bg-slate-100"
            >
              {t.navRates}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('#process')}
              className="text-left px-3 py-2 rounded hover:bg-slate-100"
            >
              {t.navProcess}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('#faq')}
              className="text-left px-3 py-2 rounded hover:bg-slate-100"
            >
              {t.navFaq}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('#contact')}
              className="text-left px-3 py-2 rounded hover:bg-slate-100"
            >
              {t.navContact}
            </button>
          </div>
          <div className="pt-2 flex items-center gap-2">
            <a
              href="tel:7048956157"
              className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold rounded bg-slate-900 text-white"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFD500]" />
              {t.ctaCall}
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=SDM+Office+Rampura"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded border border-slate-300 text-slate-700"
            >
              <MapPin className="w-3.5 h-3.5 text-red-600" />
              {t.ctaDirections}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
