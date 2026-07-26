import { getTranslations } from 'next-intl/server';
import { Compass, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import PlanTripForm from '@/components/plan-trip/PlanTripForm';

export default async function PlanTripPage() {
  const t = await getTranslations('Navigation');

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--background)]">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary-navy)]/5 text-[var(--color-primary-navy)] text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles size={14} className="text-[#e6b150]" />
            Bespoke Travel Concierge
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-[var(--color-primary-navy)] leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            Plan Your Tailor-Made Escape
          </h1>
          
          <p className="text-lg font-light leading-relaxed text-gray-600">
            Tell us about your dream Sri Lankan vacation. Our travel specialists will craft a customized itinerary tailored to your pace, preferences, and desires.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[var(--color-slate-blue)] flex items-center justify-center shrink-0">
              <Compass size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">100% Customized</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Handcrafted itineraries tailored exclusively around your preferred destinations and schedule.
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[var(--color-slate-blue)] flex items-center justify-center shrink-0">
              <HeartHandshake size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">Dedicated Specialist</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Direct WhatsApp consultation with an expert Sri Lanka travel specialist.
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[var(--color-slate-blue)] flex items-center justify-center shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">Best Rate Guarantee</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Premium luxury stays, private chauffeurs, and authentic experiences at transparent pricing.
              </p>
            </div>
          </div>
        </div>

        {/* Plan Trip Form */}
        <PlanTripForm />

      </div>
    </div>
  );
}
