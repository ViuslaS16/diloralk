import { getTranslations } from 'next-intl/server';
import { Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import RamayanaItinerary from '@/components/ramayana/RamayanaItinerary';

const SACRED_SITES = [
  {
    id: 'sita-amman',
    name: 'Sita Amman Temple (Ashoka Vatika)',
    location: 'Nuwara Eliya',
    significance: 'The sacred site where Sita Devi was held in captivity by King Ravana in Ashoka Vatika. Features ancient stream footprints believed to belong to Lord Hanuman.',
    image: '/images/ramayana_sita_amman.png',
  },
  {
    id: 'ravana-falls',
    name: 'Ravana Cave & Waterfall',
    location: 'Ella',
    significance: 'A majestic 82-foot waterfall and hidden cliffside cave complex used by King Ravana for secret shelter and underground tunnels.',
    image: '/images/ramayana_ravana_falls.png',
  },
  {
    id: 'rumassala',
    name: 'Rumassala Sanctuary (Sanjeevani Drops)',
    location: 'Unawatuna, Galle',
    significance: 'The legendary mountain fragment dropped by Lord Hanuman while transporting the medicinal Sanjeevani herb from the Himalayas.',
    image: '/images/ramayana_rumassala.png',
  },
  {
    id: 'munneswaram',
    name: 'Munneswaram & Manavari Temples',
    location: 'Chilaw',
    significance: 'Ancient Shiva shrines where Lord Rama offered prayers and installed the sacred Ramalingam after defeating Ravana.',
    image: 'https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora-package-cultural-heritage.jpg',
  },
  {
    id: 'thirukoneswaram',
    name: 'Thirukoneswaram Temple',
    location: 'Trincomalee',
    significance: 'Venerated cliffside temple of Lord Shiva built atop Swami Rock overlooking the Indian Ocean, worshiped by King Ravana.',
    image: '/images/ramayana_thirukoneswaram.png',
  },
  {
    id: 'divurumpola',
    name: 'Divurumpola Temple',
    location: 'Welimada',
    significance: 'The revered site of Agni Pariksha, where Sita Devi underwent the sacred trial of purity to demonstrate her eternal devotion.',
    image: 'https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_sigiriya.jpg',
  },
];

export default async function RamayanaTrailPage() {
  const t = await getTranslations('Navigation');

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--background)]">
      
      {/* 1. Hero Header Banner */}
      <div className="container mx-auto px-6 md:px-12 max-w-6xl mb-16">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[380px] md:h-[460px] flex items-center justify-center p-8 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/ramayana_header.png"
            alt="The Epic Ramayana Trail Sacred Kovil"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002b5c]/95 via-[#002b5c]/60 to-black/40" />

          <div className="relative z-10 max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-widest mb-6 border border-white/20">
              <Sparkles size={14} className="text-[#e6b150]" />
              Sacred Legend & Pilgrimage Tour
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight text-white" style={{ fontFamily: 'var(--font-serif)' }}>
              The Epic Ramayana Trail
            </h1>
            
            <p className="text-sm md:text-base font-light leading-relaxed text-white/90 max-w-2xl mx-auto mb-8">
              Retrace the footsteps of Lord Rama, Sita Devi, King Ravana, and Lord Hanuman across Sri Lanka&apos;s most revered temples, ancient caves, and sacred mountains.
            </p>

            <Link
              href="/plan-trip"
              className="inline-flex items-center gap-3 bg-[#e6b150] hover:bg-[#d49f3e] text-[#002b5c] px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Ramayana Pilgrimage <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        {/* 2. Overview Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-slate-blue)] font-bold mb-3 block">
            Millennia-Old Heritage
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-[var(--color-primary-navy)] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            A Spiritual & Cultural Journey
          </h2>
          <p className="text-gray-600 font-light leading-relaxed text-base">
            Sri Lanka holds a central place in the epic Ramayana. Over 50 sacred sites across the island carry deep spiritual significance, preserving the timeless story of devotion, honor, and triumph.
          </p>
        </div>

        {/* 3. Sacred Sites Grid */}
        <div className="mb-24">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h3 className="text-2xl md:text-3xl text-[var(--color-primary-navy)] font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                Revered Sacred Destinations
              </h3>
              <p className="text-xs text-gray-500 font-light mt-1">Explore key pilgrimage landmarks included in our curated tours</p>
            </div>
            <Link href="/plan-trip" className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-slate-blue)] hover:underline">
              Customize Pilgrimage <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SACRED_SITES.map(site => (
              <div key={site.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={site.image}
                    alt={site.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                    <MapPin size={12} className="text-[#e6b150]" />
                    {site.location}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2 leading-snug" style={{ fontFamily: 'var(--font-serif)' }}>
                      {site.name}
                    </h4>
                    <p className="text-xs text-gray-600 font-light leading-relaxed">
                      {site.significance}
                    </p>
                  </div>

                  <Link
                    href="/plan-trip"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-primary-navy)] hover:text-[var(--color-slate-blue)] transition-colors"
                  >
                    Include in My Tour <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Interactive Eye-Catching Day-by-Day Pilgrimage Itinerary Component */}
        <RamayanaItinerary />

        {/* 5. Booking CTA Banner */}
        <div className="bg-[#002b5c] text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl mt-20">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl md:text-5xl font-light leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              Plan Your Custom Ramayana Pilgrimage
            </h3>
            <p className="text-white/80 font-light text-sm md:text-base leading-relaxed">
              We offer dedicated vegetarian meal arrangements, expert English/Hindi speaking guides, and luxury private transport for an unforgettable spiritual journey.
            </p>
            <div className="pt-4">
              <Link
                href="/plan-trip"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl text-sm font-semibold tracking-wide transition-all shadow-lg hover:shadow-xl"
              >
                Request Custom Ramayana Tour
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
