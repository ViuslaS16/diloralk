'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

const SHOWCASES = [
  {
    id: 'beach',
    title: 'Beach & Coast',
    image: 'https://images.unsplash.com/photo-1544482591-64d5093557e4?q=80&w=2070&auto=format&fit=crop',
    color: 'var(--color-teal)'
  },
  {
    id: 'cultural',
    title: 'Cultural Heritage',
    image: 'https://images.unsplash.com/photo-1588614959060-4d144f28b207?q=80&w=2072&auto=format&fit=crop',
    color: 'var(--color-warm-orange)'
  },
  {
    id: 'countryside',
    title: 'Hill Country',
    image: 'https://images.unsplash.com/photo-1563261642-1e94883ef57e?q=80&w=2070&auto=format&fit=crop',
    color: 'var(--color-olive)'
  },
  {
    id: 'adventure',
    title: 'Adventure',
    image: 'https://images.unsplash.com/photo-1548880608-01d7af0d938b?q=80&w=2070&auto=format&fit=crop',
    color: 'var(--color-earth-brown)'
  }
];

export default function TourShowcases() {
  return (
    <section className="py-32 bg-[var(--background)]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">Curated Experiences</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl text-[var(--color-primary-navy)] font-light leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              Journeys Crafted <br /> With Precision
            </h3>
          </div>
          <Link href="/tour-packages" className="group flex items-center gap-4 text-[var(--color-primary-navy)] text-xs uppercase tracking-widest pb-2 border-b border-gray-300 hover:border-[var(--color-primary-navy)] transition-colors duration-500">
            <span>View All Packages</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SHOWCASES.map((showcase, index) => (
            <motion.div
              key={showcase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: "easeOut" }}
            >
              <Link href={`/tour-packages/${showcase.id}`} className="group block w-full aspect-[3/4] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10 transition-opacity duration-700 group-hover:bg-black/40" />
                
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={showcase.image} 
                  alt={showcase.title}
                  className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
                
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                  <div className="w-8 h-px mb-4 transition-all duration-700 group-hover:w-16" style={{ backgroundColor: showcase.color }} />
                  <h4 className="text-white text-2xl font-light" style={{ fontFamily: 'var(--font-serif)' }}>{showcase.title}</h4>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
