import { getTranslations } from 'next-intl/server';
import { Compass, Sparkles, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import PlanTripForm from '@/components/plan-trip/PlanTripForm';

export default async function PlanTripPage() {
  const t = await getTranslations('Navigation');

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--background)]">
      
      {/* 1. Hero Banner Card */}
      <div className="container mx-auto px-6 md:px-12 max-w-6xl mb-12">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[340px] md:h-[400px] flex items-center justify-center p-8 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora-package-scenic-train-journey.jpg"
            alt="Sri Lanka Scenic Train & Highlands"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002b5c]/95 via-[#002b5c]/60 to-black/40" />

          <div className="relative z-10 max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-widest mb-4 border border-white/20">
              <Sparkles size={14} className="text-[#e6b150]" />
              Bespoke Travel Concierge
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light mb-4 leading-tight text-white" style={{ fontFamily: 'var(--font-serif)' }}>
              Plan Your Tailor-Made Escape
            </h1>
            
            <p className="text-sm md:text-base font-light leading-relaxed text-white/90 max-w-2xl mx-auto">
              Tell us about your dream Sri Lankan vacation. Our travel specialists will craft a customized itinerary tailored to your pace, style, and desires.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Content Body */}
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md flex items-start gap-4">
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

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md flex items-start gap-4">
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

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md flex items-start gap-4">
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

        {/* 3. Form & Visual Showcase Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Plan Trip Form */}
          <div className="lg:col-span-8">
            <PlanTripForm />
          </div>

          {/* Side Showcase Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Image Card 1: Sigiriya Fortress */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-56 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_sigiriya.jpg"
                alt="Sigiriya Lion Rock"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#e6b150] font-semibold">Cultural Wonder</span>
                <h4 className="text-lg font-medium" style={{ fontFamily: 'var(--font-serif)' }}>Ancient Sigiriya Rock</h4>
              </div>
            </div>

            {/* Image Card 2: Coastal Escape */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-56 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora-package-ultimate-beach-escape.jpg"
                alt="Tropical Beach Escape"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#e6b150] font-semibold">Luxury Coastal</span>
                <h4 className="text-lg font-medium" style={{ fontFamily: 'var(--font-serif)' }}>Pristine Golden Beaches</h4>
              </div>
            </div>

            {/* What's Included Box */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary-navy)] border-b border-gray-100 pb-2">
                What Happens Next?
              </h4>
              <ul className="space-y-3 text-xs text-gray-600 font-light">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#25D366] shrink-0 mt-0.5" />
                  <span>Instant submission via WhatsApp direct to our lead travel specialist.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#25D366] shrink-0 mt-0.5" />
                  <span>Receive a custom proposed itinerary with day-by-day highlights within hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#25D366] shrink-0 mt-0.5" />
                  <span>Unlimited adjustments until your itinerary is 100% perfect.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
