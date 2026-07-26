"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@/i18n/routing";

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position relative to the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // The text translates faster down, creating depth
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
      style={{ perspective: "1000px" }}
    >
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{
          scale: backgroundScale,
          y: backgroundY,
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover scale-110 origin-top"
        >
          <source src="https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora_drone_2.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Hero Content (Bottom Aligned) */}
      <motion.div 
        className="absolute bottom-24 w-full z-20 flex flex-col items-center justify-center text-center px-4"
        style={{
          y: textY,
          opacity: textOpacity,
        }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-5xl text-white mb-4 drop-shadow-md tracking-wide"
          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
        >
          Discover the Pearl of the Indian Ocean
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-lg text-white/90 mb-8 max-w-3xl font-light drop-shadow"
          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
        >
          Experience the ultimate island getaway with exclusive luxury tours tailored just for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <Link
            href="/destinations"
            className="flex items-center gap-3 text-white text-sm font-semibold tracking-widest uppercase hover:text-gray-200 transition-colors group"
          >
            <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg group-hover:bg-gray-200 transition-colors">
              +
            </span>
            EXPLORE
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
