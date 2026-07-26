"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Quote } from "lucide-react";

export default function RealStories() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothY = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  
  // Parallax background scaling and moving
  const bgScale = useTransform(smoothY, [0, 1], [1.1, 1]);
  const bgY = useTransform(smoothY, [0, 1], ["-10%", "10%"]);
  
  // 3D Text translation
  const textZ = useTransform(smoothY, [0, 0.5, 1], [-100, 0, 50]);
  const textOpacity = useTransform(smoothY, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      id="reviews"
      ref={containerRef} 
      className="relative h-[800px] bg-black overflow-hidden flex items-center justify-center"
      style={{ perspective: "1000px" }}
    >
      
      {/* 3D Parallax Background */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        style={{ scale: bgScale, y: bgY }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://picsum.photos/seed/srilanka-mountains-view/1920/1080" 
          alt="Scenic Mountains"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Background Watermark Text */}
      <div className="absolute top-20 left-0 w-full flex justify-center pointer-events-none opacity-[0.05] z-10">
        <span className="text-[120px] md:text-[200px] font-bold tracking-tighter text-white" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
          real stories
        </span>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-20 max-w-4xl mx-auto px-4 text-center"
        style={{ translateZ: textZ, opacity: textOpacity, transformStyle: "preserve-3d" }}
      >
        <h2 
          className="text-4xl text-white font-semibold mb-10 drop-shadow-lg"
          style={{ fontFamily: "var(--font-cormorant, serif)" }}
        >
          Real Experiences
        </h2>
        
        <div className="bg-white/10 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/20 shadow-2xl relative">
          <Quote size={40} className="text-white/30 absolute top-8 left-8" />
          
          <p 
            className="text-xl md:text-3xl text-white leading-relaxed font-light italic mb-8 relative z-10"
            style={{ fontFamily: "var(--font-cormorant, serif)" }}
          >
            &quot;Our trip to Sri Lanka with Dilora Travales was nothing short of magical. From the moment we landed, every detail was taken care of. The guides were incredibly knowledgeable, the hotels were breathtaking, and the experiences were truly authentic. Highly recommended!&quot;
          </p>
          
          <div className="flex flex-col items-center">
            <span className="font-semibold text-white uppercase tracking-widest text-sm mb-1" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
              Sarah & James
            </span>
            <span className="text-white/70 text-sm">United Kingdom</span>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
