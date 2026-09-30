import React from 'react';
import { TRANSLATIONS, Language } from '../data/translations';
import { PhoneCall, CheckCircle2, Laptop, ReceiptText, ShieldCheck } from 'lucide-react';

interface ProcessFlowProps {
  lang: Language;
}

export const ProcessFlow: React.FC<ProcessFlowProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const steps = [
    {
      num: '01',
      icon: PhoneCall,
      title: t.step1Title,
      desc: t.step1Desc
    },
    {
      num: '02',
      icon: CheckCircle2,
      title: t.step2Title,
      desc: t.step2Desc
    },
    {
      num: '03',
      icon: Laptop,
      title: t.step3Title,
      desc: t.step3Desc
    },
    {
      num: '04',
      icon: ReceiptText,
      title: t.step4Title,
      desc: t.step4Desc
    },
    {
      num: '05',
      icon: ShieldCheck,
      title: t.step5Title,
      desc: t.step5Desc
    }
  ];

  return (
    <section id="process" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#123C8C]">
            {lang === 'en' ? 'Streamlined Workflow' : 'सुगम व पारदर्शी कार्यशैली'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071A4A] tracking-tight mt-1">
            {t.processTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {t.processSubtitle}
          </p>
        </div>

        {/* 5-Step Editorial Numbered Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-300 tabular-nums">
                      {step.num}
                    </span>
                    <div className="p-2 rounded-md bg-blue-50 text-[#123C8C]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
