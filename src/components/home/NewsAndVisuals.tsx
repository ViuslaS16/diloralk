"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Calendar, Camera } from "lucide-react";

const NEWS = [
  {
    title: "Dilora Travales wins Best Tour Operator at World Travel Awards 2025",
    date: "March 15, 2026",
    image: "https://picsum.photos/seed/news-award/800/600",
    isFeatured: true,
  },
  {
    title: "New Luxury Train Route Opens from Kandy to Ella",
    date: "February 28, 2026",
    image: "https://picsum.photos/seed/news-train/400/300",
  },
  {
    title: "Top 10 Hidden Beaches to Visit in Sri Lanka This Summer",
    date: "February 12, 2026",
    image: "https://picsum.photos/seed/news-beach/400/300",
  },
  {
    title: "Sustainable Tourism: Our New Initiative in Yala National Park",
    date: "January 30, 2026",
    image: "https://picsum.photos/seed/news-yala/400/300",
  },
];

const STORIES = [
  "https://picsum.photos/seed/st1/400/400",
  "https://picsum.photos/seed/st2/400/400",
  "https://picsum.photos/seed/st3/400/400",
  "https://picsum.photos/seed/st4/400/400",
  "https://picsum.photos/seed/st5/400/400",
  "https://picsum.photos/seed/st6/400/400",
];

const PARTNERS = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/TripAdvisor_Logo_2020.svg/512px-TripAdvisor_Logo_2020.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png",
];

export default function NewsAndVisuals() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  
  // Parallax horizontal scroll for the visual stories strip
  const xLeft = useTransform(smoothProgress, [0, 1], ["0%", "-20%"]);
  
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
          <button className="hidden md:inline-flex items-center gap-2 px-6 py-2 border border-[#00529b] text-[#00529b] rounded-full font-medium hover:bg-[#00529b] hover:text-white transition-colors">
            View All News <ArrowRight size={16} />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Featured News (3D Hover Effect) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, rotateY: 2, rotateX: 2 }}
            style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            className="lg:w-1/2 relative rounded-2xl overflow-hidden cursor-pointer h-[400px] lg:h-[500px] shadow-lg group"
          >
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
                className="flex flex-col sm:flex-row items-center gap-6 group cursor-pointer"
              >
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
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* --- Visual Stories --- */}
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
        </div>

        {/* 3D Scrolling Image Strip */}
        <div className="w-full overflow-hidden relative z-10 mb-20" style={{ perspective: "1000px" }}>
          <motion.div 
            className="flex w-[200%] md:w-[150%] gap-2"
            style={{ x: xLeft }}
          >
            {STORIES.map((src, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.95, opacity: 0.8, rotateY: 5 }}
                className="w-1/6 md:w-1/6 aspect-square min-w-[150px] cursor-pointer rounded-lg overflow-hidden shadow-md"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={src} 
                  alt={`Social story ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Partners / Associations */}
        <div className="max-w-4xl mx-auto px-4 text-center mt-24 pb-10 border-b border-gray-100 relative z-10">
          <h3 
            className="text-[#002b5c] font-semibold uppercase tracking-widest text-sm mb-8"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            Your adventures in Sri Lanka await
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {PARTNERS.map((partner, i) => (
              <div key={i} className="h-8 md:h-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={partner} alt={`Partner ${i}`} className="h-full object-contain" />
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
