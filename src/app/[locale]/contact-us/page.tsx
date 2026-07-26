import { getTranslations } from 'next-intl/server';
import { Mail, PhoneCall, Clock } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

export default async function ContactUsPage() {
  const t = await getTranslations('Navigation');

  return (
    <div className="pt-32 pb-20 min-h-screen bg-[var(--background)]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="max-w-2xl mb-12">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-[var(--color-primary-navy)]" style={{ fontFamily: 'var(--font-serif)' }}>
            {t('contact')}
          </h1>
          <p className="text-lg font-light leading-relaxed text-gray-600">
            Begin your bespoke journey today. Reach out to our dedicated travel specialists to craft your perfect Sri Lankan escape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
          
          {/* Direct Contact Info */}
          <div className="lg:col-span-4 bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8 font-light text-gray-700">
            <h2 className="text-xl font-medium text-[var(--color-primary-navy)]" style={{ fontFamily: 'var(--font-serif)' }}>
              Direct Contact
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[var(--color-slate-blue)] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email</h3>
                  <a href="mailto:info@diloralk.com" className="text-sm font-normal hover:text-[var(--color-primary-navy)] transition-colors">
                    info@diloralk.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <PhoneCall className="w-5 h-5 text-[var(--color-slate-blue)] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-1">Direct Line / WhatsApp</h3>
                  <a href="https://wa.me/6584381441" target="_blank" rel="noopener noreferrer" className="text-sm font-normal hover:text-[var(--color-primary-navy)] transition-colors">
                    +65 8438 1441
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-[var(--color-slate-blue)] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-1">Concierge Support</h3>
                  <p className="text-sm font-normal text-gray-600">
                    24/7 Assistance for Travelers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
