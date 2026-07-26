'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Sparkles, ChevronDown, CheckCircle, Compass } from 'lucide-react';
import { Link } from '@/i18n/routing';

interface ItineraryDay {
  day: string;
  title: string;
  location: string;
  stay: string;
  highlights: string[];
  desc: string;
  image: string;
}

const ITINERARY_DAYS: ItineraryDay[] = [
  {
    day: 'DAY 01',
    title: 'Arrival & Sacred Shrines of Chilaw',
    location: 'Chilaw & Negombo',
    stay: 'Luxury Beach Resort, Negombo',
    highlights: ['Munneswaram Shiva Kovil', 'Manavari Temple (Ramalingam)', 'Welcome Dinner'],
    desc: 'Arrival at Bandaranaike International Airport with VIP lounge assistance. Proceed to Chilaw to visit Munneswaram Temple and Manavari Temple, where Lord Rama first installed the sacred Lingam after the epic victory.',
    image: '/images/ramayana_sita_amman.png',
  },
  {
    day: 'DAY 02',
    title: 'Kandy & Temple of the Sacred Tooth',
    location: 'Kandy Hill Capital',
    stay: 'Grand Palace Hotel, Kandy',
    highlights: ['Spice Gardens Matale', 'Temple of the Tooth Relic', 'Kandyan Cultural Dance Show'],
    desc: 'Travel to the UNESCO royal city of Kandy. Explore aromatic spice gardens in Matale before visiting the sacred Temple of the Tooth Relic and enjoying an evening of traditional Sri Lankan drumming & fire dancing.',
    image: '/images/ramayana_kandy.png',
  },
  {
    day: 'DAY 03',
    title: 'Nuwara Eliya & Ashoka Vatika',
    location: 'Nuwara Eliya Highlands',
    stay: 'Heritage Tea Factory Villa, Nuwara Eliya',
    highlights: ['Sita Amman Temple', 'Ashoka Vatika Stream', 'Hakgala Gardens (Pleasure Garden)'],
    desc: 'Ascend through misty tea plantations to Nuwara Eliya. Pay homage at the colorful Sita Amman Temple in Ashoka Vatika, view Lord Hanuman’s giant footprints, and wander through Hakgala Botanical Gardens.',
    image: 'https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora-about-sri-lanka-tea-plantations.jpg',
  },
  {
    day: 'DAY 04',
    title: 'Divurumpola & Scenic Ella Gap',
    location: 'Welimada & Ella',
    stay: 'Boutique Mountain Chalet, Ella',
    highlights: ['Divurumpola (Agni Pariksha Site)', 'Ravana Waterfall', 'Ravana Cave Tunnels'],
    desc: 'Visit Divurumpola Temple, the sacred site of Agni Pariksha where Sita Devi proved her eternal purity. Continue to Ella to witness the cascading 82ft Ravana Falls and ancient cave networks.',
    image: '/images/ramayana_ravana_falls.png',
  },
  {
    day: 'DAY 05',
    title: 'Mystical Rumassala & Galle Fort',
    location: 'Unawatuna & Galle',
    stay: 'Luxury Oceanfront Resort, Galle',
    highlights: ['Rumassala Sanjeevani Hill', 'Japanese Peace Pagoda', 'UNESCO Galle Dutch Fort'],
    desc: 'Journey to the southern coast to climb Rumassala Hill—the legendary Sanjeevani herb mountain fragment dropped by Lord Hanuman. End the day watching sunset at Galle Fort.',
    image: '/images/ramayana_rumassala.png',
  },
  {
    day: 'DAY 06',
    title: 'Colombo City Tour & Departure',
    location: 'Colombo & Airport',
    stay: 'Day Use / Departure',
    highlights: ['Kelaniya Raja Maha Vihara', 'Panchamuga Anjaneyar Temple', 'Colombo Luxury Shopping'],
    desc: 'Return to Colombo to visit the Panchamuga Anjaneyar Temple dedicated to Lord Hanuman and Kelaniya Temple before airport transfer with cherished memories.',
    image: '/images/ramayana_colombo.png',
  },
];

export default function RamayanaItinerary() {
  const [expandedDay, setExpandedDay] = useState<number | null>(0);

  return (
    <section className="my-20">
      
      {/* Header Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#002b5c]/5 text-[#002b5c] text-xs font-semibold uppercase tracking-widest mb-4 border border-[#002b5c]/10">
          <Sparkles size={14} className="text-[#e6b150]" />
          Curated 6-Day Pilgrimage
        </div>
        <h2 className="text-4xl md:text-5xl font-light text-[var(--color-primary-navy)] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Classic Ramayana Pilgrimage Tour
        </h2>
        <p className="text-gray-500 font-light text-base max-w-xl mx-auto">
          Experience an immersive 6-day journey through sacred temples, historic caves, and breathtaking mountain sanctuaries.
        </p>
      </div>

      {/* Interactive Timeline Container */}
      <div className="space-y-6">
        {ITINERARY_DAYS.map((dayItem, index) => {
          const isExpanded = expandedDay === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl border transition-all duration-500 overflow-hidden bg-white ${
                isExpanded 
                  ? 'border-[#002b5c] shadow-2xl ring-2 ring-[#002b5c]/10' 
                  : 'border-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              {/* Day Accordion Bar Header */}
              <button
                onClick={() => setExpandedDay(isExpanded ? null : index)}
                className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:bg-gray-50/50"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  {/* Day Number Badge Horizontal Pill */}
                  <div className={`px-4 py-2.5 rounded-xl flex items-center justify-center font-extrabold text-xs shrink-0 tracking-wider whitespace-nowrap transition-colors ${
                    isExpanded ? 'bg-[#002b5c] text-[#e6b150] shadow-md' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {dayItem.day}
                  </div>

                  <div>
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-slate-blue)] mb-1">
                      <span className="flex items-center gap-1"><MapPin size={13} className="text-[#e6b150]" /> {dayItem.location}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-gray-900 leading-snug" style={{ fontFamily: 'var(--font-serif)' }}>
                      {dayItem.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-4 justify-between md:justify-end">
                  <span className="text-xs font-medium text-gray-400 hidden sm:inline-block">
                    {isExpanded ? 'Click to collapse' : 'Click to view details & photos'}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                    isExpanded ? 'bg-[#002b5c] text-white border-[#002b5c] rotate-180' : 'bg-gray-50 text-gray-500 border-gray-200'
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </div>
              </button>

              {/* Animated Expandable Body */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="border-t border-gray-100 bg-gray-50/30 p-6 md:p-8"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      
                      {/* Left Side: Photo Card */}
                      <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-xl h-64 md:h-72 group">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={dayItem.image}
                          alt={dayItem.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <span className="text-[10px] uppercase tracking-widest text-[#e6b150] font-bold">
                            Overnight Accommodation
                          </span>
                          <p className="text-xs font-light text-white/90">
                            {dayItem.stay}
                          </p>
                        </div>
                      </div>

                      {/* Right Side: Details & Highlights */}
                      <div className="lg:col-span-7 space-y-6">
                        <p className="text-gray-600 text-sm font-light leading-relaxed">
                          {dayItem.desc}
                        </p>

                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
                            <Compass size={14} className="text-[var(--color-slate-blue)]" />
                            Key Day Highlights
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {dayItem.highlights.map((highlight, hIdx) => (
                              <span
                                key={hIdx}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs text-gray-700 font-medium shadow-sm"
                              >
                                <CheckCircle size={13} className="text-[#25D366]" />
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2 flex items-center justify-between">
                          <div className="text-xs text-gray-400 font-light flex items-center gap-1">
                            <Clock size={13} />
                            Private Chauffeur & English/Hindi Guide Included
                          </div>
                          <Link
                            href="/plan-trip"
                            className="inline-flex items-center gap-2 bg-[#002b5c] hover:bg-[#001f44] text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md"
                          >
                            Book This Itinerary
                          </Link>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
