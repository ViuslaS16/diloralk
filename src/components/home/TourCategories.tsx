"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";

const CATEGORIES = [
  { id: 1, title: "Beach Holidays", image: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora-category-beach-holidays.jpg", href: "/destinations/mirissa" },
  { id: 2, title: "Heritage Tours", image: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora-category-heritage-tours.jpg", href: "/destinations/sigiriya" },
  { id: 3, title: "Wildlife Safaris", image: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora-category-wildlife-safaris.jpg", href: "/destinations/yala" },
  { id: 4, title: "Romantic Getaways", image: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora-package-ultimate-beach-escape.jpg", href: "/destinations/bentota" },
];

export default function TourCategories() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothY = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  const rotateX = useTransform(smoothY, [0, 0.5, 1], [15, 0, -10]);

  return (
    <section id="categories" className="py-24 bg-[#e8f2f9] overflow-hidden" style={{ perspective: "1200px" }}>
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-4xl md:text-5xl text-[#002b5c] font-semibold mb-4"
              style={{ fontFamily: "var(--font-cormorant, serif)" }}
            >
              Tour Categories
            </h2>
            <p className="text-gray-600 text-lg max-w-xl">
              From sun-kissed beaches to misty mountains, explore Sri Lanka your way.
            </p>
          </motion.div>
          <Link href="/destinations" className="hidden md:flex items-center gap-2 text-[#00529b] font-medium hover:underline">
            View All Categories <ArrowRight size={18} />
          </Link>
        </div>

        {/* 3D Scrolling Grid Container */}
        <motion.div 
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ rotateX, transformStyle: "preserve-3d" }}
        >
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, type: "spring", bounce: 0.3 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5, 
                rotateX: -5,
                translateZ: 30,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
              className="relative h-[320px] sm:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden cursor-pointer group"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Link href={cat.href} className="block w-full h-full">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002b5c]/90 via-transparent to-transparent z-10" />
                
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div 
                  className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end transform transition-transform duration-500 group-hover:translate-y-[-10px]"
                >
                  <h3 
                    className="text-white text-2xl font-medium leading-tight"
                    style={{ fontFamily: "var(--font-cormorant, serif)" }}
                  >
                    {cat.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Link href="/destinations" className="inline-flex items-center gap-2 text-[#00529b] font-medium hover:underline">
            View All Categories <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
