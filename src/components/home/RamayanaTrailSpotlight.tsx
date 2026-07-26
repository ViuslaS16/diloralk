'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';

export default function RamayanaTrailSpotlight() {
  return (
    <section id="ramayana-spotlight" className="py-24 bg-[var(--color-primary-navy)] text-white overflow-hidden relative">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 mix-blend-overlay hidden lg:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_kandy.jpg" 
          alt="Ramayana Trail Background" 
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-[var(--color-warm-orange)] text-xs uppercase tracking-[0.2em] mb-6 block">Exclusive Journey</span>
            
            <h2 className="text-5xl md:text-7xl font-light mb-8 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              The Epic <br /> Ramayana Trail
            </h2>
            
            <p className="text-lg font-light text-white/80 leading-relaxed mb-12 max-w-xl">
              Retrace the steps of ancient legends. From the sacred Sita Amman Temple to the mystical Rumassala rock, experience a spiritual journey meticulously curated to honor the millennia-old epic.
            </p>

            <Link href="/ramayana-trail" className="inline-block border border-white/30 px-8 py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-[var(--color-primary-navy)] transition-colors duration-500">
              Discover The Trail
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
