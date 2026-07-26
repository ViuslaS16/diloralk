"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";

const PACKAGES = [
  {
    id: 1,
    title: "Nature & Wildlife Adventure",
    duration: "7 Days",
    location: "Yala & Udawalawe",
    image: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora-package-wildlife-adventure.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Scenic Train Journeys",
    duration: "5 Days",
    location: "Kandy to Ella",
    image: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora-package-scenic-train-journey.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Cultural Heritage Tour",
    duration: "10 Days",
    location: "Cultural Triangle",
    image: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora-package-cultural-heritage.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "The Ultimate Beach Escape",
    duration: "14 Days",
    location: "South Coast",
    image: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora-package-ultimate-beach-escape.jpg",
    featured: false,
  },
];

export default function UnforgettablePackages() {
  const cardVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.12,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="packages" className="py-32 relative overflow-hidden bg-white">
      
      {/* Background Watermark */}
      <div className="absolute top-20 left-0 w-full flex justify-center pointer-events-none opacity-[0.03] z-0">
        <span className="text-[10vw] font-bold tracking-tighter" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
          unforgettable
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-[#002b5c] font-semibold mb-4"
            style={{ fontFamily: "var(--font-cormorant, serif)" }}
          >
            Tour Packages
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto mb-6"
          >
            Carefully curated itineraries combining the very best of Sri Lanka&apos;s natural wonders, ancient history, and pristine coastline.
          </motion.p>
          <Link
            href="/plan-trip"
            className="inline-flex items-center gap-2 bg-[#002b5c] hover:bg-[#001f44] text-white text-xs font-semibold px-6 py-3 rounded-full tracking-widest uppercase transition-all duration-300 shadow-md"
          >
            Custom Trip Planning <ArrowRight size={14} />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Item 1 - Featured (Tall) */}
          <motion.div 
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="md:col-span-1 md:row-span-2 relative rounded-2xl overflow-hidden group shadow-xl"
          >
            <Link href="/plan-trip" className="block w-full h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PACKAGES[0].image} alt={PACKAGES[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              {/* Best Seller Badge */}
              <div className="absolute top-6 left-6 bg-[#e6b150] text-[#1a2b4c] text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                Best Seller
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-medium mb-3 leading-tight" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
                  {PACKAGES[0].title}
                </h3>
                <div className="flex items-center gap-4 text-white/80 text-sm font-medium">
                  <span className="flex items-center gap-1"><Clock size={16} /> {PACKAGES[0].duration}</span>
                  <span className="flex items-center gap-1"><MapPin size={16} /> {PACKAGES[0].location}</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Item 2 */}
          <motion.div 
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden group shadow-xl"
          >
            <Link href="/plan-trip" className="block w-full h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PACKAGES[1].image} alt={PACKAGES[1].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl font-medium mb-2 leading-tight" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
                  {PACKAGES[1].title}
                </h3>
                <div className="flex items-center gap-4 text-white/80 text-xs font-medium">
                  <span className="flex items-center gap-1"><Clock size={14} /> {PACKAGES[1].duration}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {PACKAGES[1].location}</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Item 3 */}
          <motion.div 
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden group shadow-xl"
          >
            <Link href="/plan-trip" className="block w-full h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PACKAGES[2].image} alt={PACKAGES[2].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl font-medium mb-2 leading-tight" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
                  {PACKAGES[2].title}
                </h3>
                <div className="flex items-center gap-4 text-white/80 text-xs font-medium">
                  <span className="flex items-center gap-1"><Clock size={14} /> {PACKAGES[2].duration}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {PACKAGES[2].location}</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Item 4 */}
          <motion.div 
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="md:col-span-2 md:row-span-1 relative rounded-2xl overflow-hidden group shadow-xl"
          >
            <Link href="/plan-trip" className="block w-full h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PACKAGES[3].image} alt={PACKAGES[3].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-medium mb-3 leading-tight" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
                  {PACKAGES[3].title}
                </h3>
                <div className="flex items-center gap-4 text-white/80 text-sm font-medium">
                  <span className="flex items-center gap-1"><Clock size={16} /> {PACKAGES[3].duration}</span>
                  <span className="flex items-center gap-1"><MapPin size={16} /> {PACKAGES[3].location}</span>
                </div>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
