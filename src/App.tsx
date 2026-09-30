import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceCatalog } from './components/ServiceCatalog';
import { DocumentChecklistTool } from './components/DocumentChecklistTool';
import { RateEstimator } from './components/RateEstimator';
import { ProcessFlow } from './components/ProcessFlow';
import { LocationGuide } from './components/LocationGuide';
import { LeadForm } from './components/LeadForm';
import { FaqSection } from './components/FaqSection';
import { RegulatoryNotice } from './components/RegulatoryNotice';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Language } from './data/translations';

export default function App() {
  const [lang, setLang] = useState<Language>('en'); // Default to English; users can switch to Hindi anytime

  useEffect(() => {
    // Sync html lang attribute
    document.documentElement.lang = lang;
    if (lang === 'hi') {
      document.body.classList.add('lang-hi');
    } else {
      document.body.classList.remove('lang-hi');
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const handleOpenWhatsApp = (customMessage?: string) => {
    const defaultMsg =
      lang === 'en'
        ? 'Hello Aadarsh Documents, I need assistance regarding document services in Rampura.'
        : 'नमस्ते आदर्श डॉक्यूमेंट्स, मुझे रामपुरा में दस्तावेज़ व ऑनलाइन सेवाओं के संबंध में जानकारी चाहिए।';

    const message = customMessage || defaultMsg;
    const whatsappUrl = `https://wa.me/917048956157?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleScrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-[#071A4A] selection:text-white">
      {/* Top Bar Navigation */}
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenWhatsApp={handleOpenWhatsApp}
          onScrollTo={handleScrollTo}
        />

        {/* Services & Detailed Catalog */}
        <ServiceCatalog
          lang={lang}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Interactive Document Readiness Checklist Tool */}
        <DocumentChecklistTool
          lang={lang}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Transparent Citizen Rate Estimator */}
        <RateEstimator
          lang={lang}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* 5-Step Process */}
        <ProcessFlow lang={lang} />

        {/* Location & Transit Map */}
        <LocationGuide lang={lang} />

        {/* Callback / Lead Inquiry Form */}
        <LeadForm
          lang={lang}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* FAQ Accordion */}
        <FaqSection
          lang={lang}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Regulatory & Consumer Notice */}
        <RegulatoryNotice lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onToggleLang={toggleLanguage}
      />

      {/* Mobile-first bottom sticky bar (respects <= 15% height cap) */}
      <MobileStickyBar
        lang={lang}
        onOpenWhatsApp={handleOpenWhatsApp}
      />
    </div>
  );
}
