"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Map, Clock, Award } from "lucide-react";

// Simple custom hook to animate numbers
function AnimatedNumber({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = value / (duration * 60); // Assuming 60fps
    
    const updateCount = () => {
      start += increment;
      if (start < value) {
        setCount(Math.ceil(start));
        requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const STATS = [
  { value: 55, suffix: "+", label: "Years of Experience" },
  { value: 1, suffix: "M+", label: "Happy Travelers" },
  { value: 300, suffix: "+", label: "Local Guides" },
  { value: 600, suffix: "+", label: "Tour Packages" },
];

const BENEFITS = [
  { icon: ShieldCheck, text: "Unmatched safety and reliability protocols" },
  { icon: Map, text: "Curated, authentic local experiences" },
  { icon: Clock, text: "24/7 on-the-ground customer support" },
  { icon: Award, text: "Multi-award winning tour operator" },
];

export default function WhyBookStats() {
  return (
    <section id="why-book" className="py-24 bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.02 }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-[#00529b]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Left Side: Benefits List */}
        <div className="lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl text-[#002b5c] font-semibold mb-10"
            style={{ fontFamily: "var(--font-cormorant, serif)" }}
          >
            Why Book with <br /> Dilora Travales?
          </motion.h2>
          
          <div className="space-y-6">
            {BENEFITS.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 bg-blue-50 text-[#00529b] p-2 rounded-full">
                  <item.icon size={20} />
                </div>
                <p className="text-gray-700 text-lg" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Stats Grid */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-x-8 gap-y-12">
          {STATS.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15, type: "spring" }}
              className="flex flex-col"
            >
              <div 
                className="text-5xl md:text-6xl text-[#00529b] font-bold mb-2 tracking-tighter"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div 
                className="text-gray-500 font-medium tracking-wide uppercase text-sm"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
