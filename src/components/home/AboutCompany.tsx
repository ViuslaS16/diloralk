"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@/i18n/routing";

export default function AboutCompany() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const img1Y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const img2Y = useTransform(scrollYProgress, [0, 1], [150, -50]);

  const textY = useTransform(scrollYProgress, [0, 0.4], [50, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section ref={containerRef} className="py-16 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* Left Side: Staggered Parallax Images */}
        <div className="lg:w-1/2 relative h-[380px] sm:h-[500px] lg:h-[600px] w-full flex justify-center lg:justify-start">
          <motion.div 
            className="absolute left-0 lg:left-10 top-20 w-[60%] lg:w-[280px] h-[350px] lg:h-[400px] rounded-t-full rounded-b-2xl overflow-hidden shadow-2xl z-20"
            style={{ y: img1Y }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora-about-sri-lanka-tea-plantations.jpg" 
              alt="Tea pluckers"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div 
            className="absolute right-0 lg:left-[220px] top-0 w-[50%] lg:w-[320px] h-[280px] lg:h-[350px] rounded-2xl overflow-hidden shadow-xl z-10"
            style={{ y: img2Y }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora-about-sri-lanka-tropical-beaches.jpg" 
              alt="Coastal view"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right Side: Text */}
        <motion.div 
          className="lg:w-1/2"
          style={{ y: textY, opacity: textOpacity }}
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl text-[#002b5c] mb-8 leading-tight"
            style={{ fontFamily: "var(--font-cormorant, serif)" }}
          >
            Sri Lanka&apos;s leading <br />
            <span className="font-semibold italic">Destination Management Company</span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
            Welcome to Dilora Travales, where our legacy of over 50 years translates into unforgettable experiences. We are passionate about showcasing the true beauty of Sri Lanka—its golden beaches, ancient heritage, and vibrant wildlife.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
            Let our experts craft a journey tailored just for you, combining luxury, authenticity, and seamless service every step of the way.
          </p>

          <Link href="/about-us" className="inline-block px-8 py-3 bg-[#002b5c] text-white font-medium rounded-full hover:bg-[#004080] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Discover Our Story
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
