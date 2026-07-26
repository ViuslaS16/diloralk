import { getTranslations } from 'next-intl/server';
import { MessageCircle } from 'lucide-react';

export default async function ContactUsPage() {
  const t = await getTranslations('Navigation');
  
  // Example WhatsApp number
  const whatsappNumber = "94771234567";
  const whatsappMessage = "Hello Dilora Travales, I would like to plan a luxury trip to Sri Lanka.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="pt-32 pb-20 min-h-screen bg-[var(--background)]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-light mb-12 text-[var(--color-primary-navy)]" style={{ fontFamily: 'var(--font-serif)' }}>
          {t('contact')}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-lg font-light leading-relaxed text-gray-700 mb-8">
              Begin your bespoke journey today. Reach out to our dedicated travel specialists to craft your perfect Sri Lankan escape.
            </p>
            
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full transition-colors duration-300 shadow-lg"
            >
              <MessageCircle size={24} />
              <span className="font-medium tracking-wide">Chat on WhatsApp</span>
            </a>
          </div>
          
          <div className="space-y-8 font-light text-gray-700">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-[var(--color-slate-blue)] mb-2">Head Office</h3>
              <p>123 Luxury Avenue,<br/>Colombo 03, Sri Lanka</p>
            </div>
            
            <div>
              <h3 className="text-sm uppercase tracking-widest text-[var(--color-slate-blue)] mb-2">Email</h3>
              <p><a href="mailto:info@diloralk.com" className="hover:text-[var(--color-primary-navy)] transition-colors">info@diloralk.com</a></p>
            </div>
            
            <div>
              <h3 className="text-sm uppercase tracking-widest text-[var(--color-slate-blue)] mb-2">Direct Line</h3>
              <p>+94 11 234 5678</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
