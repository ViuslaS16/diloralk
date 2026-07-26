import { getTranslations } from 'next-intl/server';
import { Mail, PhoneCall, Clock } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

export default async function ContactUsPage() {
  const t = await getTranslations('Navigation');

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--background)]">
      
      {/* Top Banner with Background Image Card */}
      <div className="container mx-auto px-6 md:px-12 max-w-6xl mb-12">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[320px] md:h-[360px] flex items-center justify-center p-8 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_sigiriya.jpg"
            alt="Sri Lanka Luxury Escape"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002b5c]/90 via-[#002b5c]/60 to-black/40" />

          <div className="relative z-10 max-w-2xl text-white">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#e6b150] font-semibold mb-3 block">
              24/7 Travel Concierge
            </span>
            <h1 className="text-4xl md:text-6xl font-light mb-4 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              {t('contact')}
            </h1>
            <p className="text-sm md:text-base font-light text-white/90 leading-relaxed">
              Begin your bespoke journey today. Reach out to our dedicated travel specialists to craft your perfect Sri Lankan escape.
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
          
          {/* Direct Contact Info Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl space-y-8 font-light text-gray-700">
              <h2 className="text-xl font-medium text-[var(--color-primary-navy)] border-b border-gray-100 pb-3" style={{ fontFamily: 'var(--font-serif)' }}>
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

            {/* Side Image Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-52 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_mirissa.jpg"
                alt="Mirissa Coastline"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#e6b150] font-semibold">Bespoke Journeys</span>
                <h4 className="text-base font-medium" style={{ fontFamily: 'var(--font-serif)' }}>Tailored Sri Lanka Travels</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
