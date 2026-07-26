"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function TailorMade() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  
  // Parallax offsets for the images
  const img1Y = useTransform(smoothProgress, [0, 1], [50, -100]);
  const img2Y = useTransform(smoothProgress, [0, 1], [150, -50]);

  // Text fade in
  const textX = useTransform(smoothProgress, [0, 0.4], [-50, 0]);
  const textOpacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Text Content */}
        <motion.div 
          style={{ x: textX, opacity: textOpacity }}
          className="lg:w-5/12"
        >
          <h2 
            className="text-4xl md:text-5xl text-[#002b5c] font-semibold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-cormorant, serif)" }}
          >
            Bespoke Journeys<br />to Sri Lanka
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
            Every traveler is unique, and so is every journey we curate. Let us design your dream escape—whether it's wandering through misty tea estates, climbing the ancient fortress of Sigiriya, or relaxing on untouched golden beaches.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">
            Our destination specialists will meticulously craft a bespoke itinerary that matches your pace, style, and desires.
          </p>
          
          <Link href="/plan-trip" className="inline-flex items-center gap-2 text-[#00529b] font-medium group hover:underline">
            <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <ArrowRight size={18} />
            </span>
            Start Planning
          </Link>
        </motion.div>

        {/* Right Side: Staggered Parallax Images */}
        <div className="lg:w-7/12 relative h-[500px] lg:h-[600px] w-full flex justify-end">
          {/* Back Image (Large) */}
          <motion.div 
            style={{ y: img1Y }}
            className="absolute left-0 lg:left-10 top-0 w-[70%] lg:w-[400px] h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-xl z-10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_sigiriya.jpg" 
              alt="Sigiriya Lion Rock Fortress in Sri Lanka"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          
          {/* Front Image (Small, overlapping) */}
          <motion.div 
            style={{ y: img2Y }}
            className="absolute right-0 top-32 lg:top-40 w-[60%] lg:w-[320px] h-[250px] lg:h-[350px] rounded-2xl overflow-hidden shadow-2xl z-20 border-8 border-[#f8fafc]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_mirissa.jpg" 
              alt="Beautiful tropical beach in Sri Lanka"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
