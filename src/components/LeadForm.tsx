import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, PhoneCall, AlertCircle } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { TRANSLATIONS, Language } from '../data/translations';

interface LeadFormProps {
  lang: Language;
  onOpenWhatsApp: (message?: string) => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ lang, onOpenWhatsApp }) => {
  const t = TRANSLATIONS[lang];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceId: 'income-cert',
    preferredTime: 'Morning (9:00 AM - 12:00 PM)',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = t.formValidationName;
    }

    // Clean phone number: check 10 digits
    const cleanedPhone = formData.phone.replace(/\D/g, '');
    if (cleanedPhone.length !== 10) {
      newErrors.phone = t.formValidationPhone;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift submission storage (can be backed by state or sent to WhatsApp)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleSendViaWhatsAppInstead = () => {
    const selectedSrv = SERVICES_DATA.find((s) => s.id === formData.serviceId);
    const serviceName = selectedSrv ? selectedSrv.title[lang] : 'General Inquiry';
    
    let text = '';
    if (lang === 'en') {
      text = `Hello Aadarsh Documents,\nName: ${formData.name || 'Citizen'}\nPhone: ${formData.phone || 'N/A'}\nService Needed: ${serviceName}\nPreferred Callback Time: ${formData.preferredTime}\nNotes: ${formData.notes || 'None'}\n\nPlease get in touch regarding this request.`;
    } else {
      text = `नमस्ते आदर्श डॉक्यूमेंट्स,\nनाम: ${formData.name || 'नागरिक'}\nफोन: ${formData.phone || 'N/A'}\nवांछित सेवा: ${serviceName}\nकॉल समय: ${formData.preferredTime}\nविवरण: ${formData.notes || 'कोई नहीं'}\n\nकृपया संपर्क करें।`;
    }

    onOpenWhatsApp(text);
  };

  return (
    <section id="contact" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#123C8C]">
            {lang === 'en' ? 'Citizen Inquiry' : 'संपर्क व परामर्श'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071A4A] tracking-tight">
            {t.contactTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-[#008A45]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {lang === 'en' ? 'Inquiry Submitted Successfully!' : 'अनुरोध सफलतापूर्वक प्राप्त हुआ!'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                {t.formSuccess}
              </p>
              
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleSendViaWhatsAppInstead}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#008A45] hover:bg-[#007038] text-white text-xs sm:text-sm font-semibold rounded-md shadow-xs transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>{lang === 'en' ? 'Also Send to WhatsApp' : 'व्हाट्सएप पर भी भेजें'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      serviceId: 'income-cert',
                      preferredTime: 'Morning (9:00 AM - 12:00 PM)',
                      notes: ''
                    });
                  }}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold rounded-md transition-colors"
                >
                  {lang === 'en' ? 'Submit Another Request' : 'अन्य अनुरोध भेजें'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name & Phone in 2 cols */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="form-name" className="block text-xs font-bold text-slate-700">
                    {t.formName} *
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder={lang === 'en' ? 'e.g. Ramesh Kumar' : 'उदा. रमेश कुमार'}
                    className={`w-full px-3.5 py-2 text-xs sm:text-sm rounded-md border ${
                      errors.name ? 'border-red-500 bg-red-50/30' : 'border-slate-300 bg-slate-50'
                    } focus:outline-none focus:ring-2 focus:ring-[#123C8C] focus:bg-white text-slate-900 transition-all`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label htmlFor="form-phone" className="block text-xs font-bold text-slate-700">
                    {t.formPhone} *
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="98XXXXXXXX"
                    className={`w-full px-3.5 py-2 text-xs sm:text-sm rounded-md border ${
                      errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300 bg-slate-50'
                    } focus:outline-none focus:ring-2 focus:ring-[#123C8C] focus:bg-white text-slate-900 transition-all tabular-nums`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Service Required */}
              <div className="space-y-1">
                <label htmlFor="form-service" className="block text-xs font-bold text-slate-700">
                  {t.formService}
                </label>
                <select
                  id="form-service"
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-md border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#123C8C] focus:bg-white text-slate-900 cursor-pointer"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title[lang]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Time */}
              <div className="space-y-1">
                <label htmlFor="form-time" className="block text-xs font-bold text-slate-700">
                  {t.formTime}
                </label>
                <select
                  id="form-time"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-md border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#123C8C] focus:bg-white text-slate-900 cursor-pointer"
                >
                  <option value="Morning (9:00 AM - 12:00 PM)">
                    {lang === 'en' ? 'Morning (9:00 AM – 12:00 PM)' : 'सुबह (9:00 AM – 12:00 PM)'}
                  </option>
                  <option value="Afternoon (12:00 PM - 4:00 PM)">
                    {lang === 'en' ? 'Afternoon (12:00 PM – 4:00 PM)' : 'दोपहर (12:00 PM – 4:00 PM)'}
                  </option>
                  <option value="Evening (4:00 PM - 7:00 PM)">
                    {lang === 'en' ? 'Evening (4:00 PM – 7:00 PM)' : 'शाम (4:00 PM – 7:00 PM)'}
                  </option>
                </select>
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label htmlFor="form-notes" className="block text-xs font-bold text-slate-700">
                  {t.formNotes}
                </label>
                <textarea
                  id="form-notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={
                    lang === 'en'
                      ? 'Tell us about your document status or specific requirement...'
                      : 'अपने कागजात या आवश्यकता के बारे में संक्षेप में लिखें...'
                  }
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-md border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#123C8C] focus:bg-white text-slate-900 transition-all resize-none"
                ></textarea>
              </div>

              {/* Form Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#071A4A] hover:bg-[#123C8C] text-white text-xs sm:text-sm font-semibold rounded-md shadow-xs transition-colors cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? t.formSubmitting : t.formSubmit}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendViaWhatsAppInstead}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#008A45] hover:bg-[#007038] text-white text-xs sm:text-sm font-semibold rounded-md shadow-xs transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp Instead</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center pt-2">
                {lang === 'en'
                  ? 'We value your privacy. We never share your phone number with 3rd parties.'
                  : 'आपकी निजता सुरक्षित है। हम आपका नंबर किसी अन्य के साथ साझा नहीं करते।'}
              </p>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
