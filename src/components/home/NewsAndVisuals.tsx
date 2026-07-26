"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Camera } from "lucide-react";
import { Link } from "@/i18n/routing";

const NEWS = [
  {
    title: "Dilora Travales wins Best Luxury Tour Operator 2025",
    date: "March 15, 2026",
    image: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_sigiriya.jpg",
    isFeatured: true,
  },
  {
    title: "New First-Class Observation Train Route Kandy to Ella",
    date: "February 28, 2026",
    image: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora-package-scenic-train-journey.jpg",
  },
  {
    title: "Top 10 Hidden Tropical Beaches in Southern Sri Lanka",
    date: "February 12, 2026",
    image: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_mirissa.jpg",
  },
  {
    title: "Eco Tourism & Elephant Conservation in Yala National Park",
    date: "January 30, 2026",
    image: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora-package-wildlife-adventure.jpg",
  },
];

const STORIES = [
  {
    title: "Coconut Tree Hill, Mirissa",
    image: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_mirissa.jpg"
  },
  {
    title: "Nine Arches Scenic Demodara Train",
    image: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora-package-scenic-train-journey.jpg"
  },
  {
    title: "Sigiriya Ancient Rock Fortress",
    image: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_sigiriya.jpg"
  },
  {
    title: "Wild Elephant Safari in Yala",
    image: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora-package-wildlife-adventure.jpg"
  },
  {
    title: "Misty Highlands & Tea Gardens",
    image: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora-about-sri-lanka-tea-plantations.jpg"
  },
  {
    title: "",
    image: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_kandy.jpg"
  },
  {
    title: "Pristine Golden Coast Beach",
    image: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora-package-ultimate-beach-escape.jpg"
  },
  {
    title: "Tropical Coastal Getaway",
    image: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora-about-sri-lanka-tropical-beaches.jpg"
  }
];

export default function NewsAndVisuals() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const featured = NEWS[0];
  const others = NEWS.slice(1);

  return (
    <section ref={containerRef} className="pt-24 pb-12 bg-white relative overflow-hidden">
      
      {/* --- Latest News --- */}
      <div className="max-w-7xl mx-auto px-4 mb-32">
        <div className="flex justify-between items-end mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl text-[#002b5c] font-semibold"
            style={{ fontFamily: "var(--font-cormorant, serif)" }}
          >
            Our Latest<br />News
          </motion.h2>
          <Link href="/plan-trip" className="hidden md:inline-flex items-center gap-2 px-6 py-2 border border-[#00529b] text-[#00529b] rounded-full font-medium hover:bg-[#00529b] hover:text-white transition-colors">
            View All News <ArrowRight size={16} />
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Featured News */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, rotateY: 2, rotateX: 2 }}
            style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            className="lg:w-1/2 relative rounded-2xl overflow-hidden cursor-pointer h-[400px] lg:h-[500px] shadow-lg group"
          >
            <Link href="/plan-trip" className="block w-full h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={featured.image} 
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8" style={{ transform: "translateZ(30px)" }}>
                <div className="flex items-center gap-2 text-white/80 text-sm mb-3 font-medium">
                  <Calendar size={16} />
                  <span>{featured.date}</span>
                </div>
                <h3 
                  className="text-white text-3xl md:text-4xl font-medium leading-tight group-hover:text-blue-300 transition-colors"
                  style={{ fontFamily: "var(--font-cormorant, serif)" }}
                >
                  {featured.title}
                </h3>
              </div>
            </Link>
          </motion.div>

          {/* Other News List */}
          <div className="lg:w-1/2 flex flex-col gap-6 justify-between">
            {others.map((news, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href="/plan-trip" className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-full sm:w-40 h-32 shrink-0 rounded-xl overflow-hidden shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-2 font-medium">
                      <Calendar size={14} />
                      <span>{news.date}</span>
                    </div>
                    <h3 
                      className="text-[#002b5c] text-xl font-medium leading-snug group-hover:text-[#00529b] transition-colors line-clamp-2"
                      style={{ fontFamily: "var(--font-cormorant, serif)" }}
                    >
                      {news.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* --- Visual Stories Infinite Auto-Scrolling Marquee --- */}
      <div className="relative mt-20">
        
        {/* Background Watermark */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-center pointer-events-none opacity-5 z-0">
          <span className="text-[100px] md:text-[180px] font-bold tracking-tighter leading-none text-center" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
            visual stories
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 mb-6 shadow-lg shadow-purple-500/30">
            <Camera size={24} className="text-white" />
          </div>
          <h3 
            className="text-2xl md:text-3xl text-[#002b5c] font-medium tracking-wide"
            style={{ fontFamily: "var(--font-cormorant, serif)" }}
          >
            Stories From Our Travelers
          </h3>
        </div>

        {/* Infinite Auto-Scroll Strip */}
        <div className="w-full overflow-hidden relative z-10 mb-20">
          <motion.div 
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }}
          >
            {[...STORIES, ...STORIES].map((story, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.04 }}
                className="w-[280px] h-[360px] shrink-0 cursor-pointer rounded-2xl overflow-hidden shadow-xl relative group"
              >
                <Link href="/plan-trip" className="block w-full h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-[10px] uppercase tracking-widest text-[#e6b150] font-bold mb-1">
                      Visual Story
                    </p>
                    <h4 className="text-sm font-medium leading-snug" style={{ fontFamily: "var(--font-serif)" }}>
                      {story.title}
                    </h4>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>

    </section>
  );
}
