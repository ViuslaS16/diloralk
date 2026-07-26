"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Sustainability() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothY = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  
  const textX = useTransform(smoothY, [0, 0.4], [-50, 0]);
  const textOpacity = useTransform(smoothY, [0, 0.4], [0, 1]);
  
  const imgScale = useTransform(smoothY, [0.2, 0.6], [0.8, 1]);
  const imgOpacity = useTransform(smoothY, [0.2, 0.5], [0, 1]);

  return (
    <section id="sustainability" ref={containerRef} className="py-32 bg-[#1f3630] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Text Content */}
        <motion.div 
          style={{ x: textX, opacity: textOpacity }}
          className="lg:w-1/2 relative z-10"
        >
          <h2 
            className="text-4xl md:text-5xl text-white font-semibold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-cormorant, serif)" }}
          >
            Travel Green,<br />Travel Lightly
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-6 font-light">
            We are committed to preserving the natural beauty and cultural heritage of Sri Lanka for future generations.
          </p>
          <p className="text-white/80 text-lg leading-relaxed mb-10 font-light">
            Our sustainable tourism initiatives focus on community empowerment, wildlife conservation, and minimizing our carbon footprint.
          </p>
          
          <button className="flex items-center gap-2 text-white font-medium group hover:text-[#e6b150] transition-colors">
            Our Sustainability Policy
            <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#e6b150] transition-colors">
              <ArrowRight size={14} />
            </span>
          </button>
        </motion.div>

        {/* Right Side: Animated Image Grid */}
        <div className="lg:w-1/2 relative z-10 grid grid-cols-2 gap-4 h-[400px]">
          {/* Image 1 */}
          <motion.div 
            style={{ scale: imgScale, opacity: imgOpacity, transformOrigin: "bottom right" }}
            className="rounded-xl overflow-hidden mt-8 shadow-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://picsum.photos/seed/sustain-tree/400/500" 
              alt="Planting trees"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Image 2 */}
          <motion.div 
            style={{ scale: imgScale, opacity: imgOpacity, transformOrigin: "top left" }}
            className="rounded-xl overflow-hidden mb-8 shadow-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://picsum.photos/seed/sustain-hike/400/500" 
              alt="Hiking in nature"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
