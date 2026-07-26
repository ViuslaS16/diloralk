"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Diamond, Briefcase, Star, ArrowRight } from "lucide-react";

const EXPERIENCES = [
  {
    icon: Diamond,
    title: "Luxury Travel Collections",
    desc: "Helicopter transfers, boutique villa buy-outs, and private dining under the stars. Experience the absolute pinnacle of Sri Lankan luxury.",
    color: "bg-[#f4ebe1]",
    textColor: "text-[#8b5e34]",
  },
  {
    icon: Briefcase,
    title: "Corporate & MICE Events",
    desc: "Seamless execution of corporate retreats, incentive tours, and large-scale conferences. We handle the logistics so you can focus on the business.",
    color: "bg-[#e8ecef]",
    textColor: "text-[#2b4c5e]",
  },
  {
    icon: Star,
    title: "Exclusive VIP Services",
    desc: "Fast-track airport assistance, private security, and exclusive access to sites before they open to the public. Discretion and perfection guaranteed.",
    color: "bg-[#efe8e1]",
    textColor: "text-[#5e4c2b]",
  },
];

export default function ExclusiveExperiences() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothY = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  const rotateX = useTransform(smoothY, [0, 0.5, 1], [40, 0, -20]);
  const opacity = useTransform(smoothY, [0, 0.3], [0, 1]);
  const scale = useTransform(smoothY, [0, 0.5], [0.8, 1]);

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden" style={{ perspective: "1500px" }}>
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-[#002b5c] font-semibold mb-4"
            style={{ fontFamily: "var(--font-cormorant, serif)" }}
          >
            Thoughtfully Crafted <br /> Exclusive Experiences
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Elevate your journey with our specialized services designed for the most discerning travelers and organizations.
          </motion.p>
        </div>

        <motion.div 
          style={{ rotateX, opacity, scale, transformStyle: "preserve-3d" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {EXPERIENCES.map((exp, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10, translateZ: 30, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              className={`${exp.color} p-10 rounded-2xl flex flex-col h-full cursor-pointer transition-shadow duration-300`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className={`w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm ${exp.textColor}`}>
                <exp.icon size={24} />
              </div>
              
              <h3 
                className="text-2xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: "var(--font-cormorant, serif)" }}
              >
                {exp.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-8 font-light flex-grow">
                {exp.desc}
              </p>
              
              <div className={`flex items-center gap-2 font-medium ${exp.textColor} mt-auto`}>
                Learn More <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
