"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "Do I need a visa to visit Sri Lanka?",
    answer: "Yes, most travelers need a visa or an Electronic Travel Authorization (ETA) to enter Sri Lanka. You can easily apply for an ETA online before your departure.",
  },
  {
    question: "What is the best time to visit?",
    answer: "Sri Lanka is a year-round destination. The best time for the west and south coasts is from December to April, while the east coast is best from May to October.",
  },
  {
    question: "Is Sri Lanka safe for tourists?",
    answer: "Yes, Sri Lanka is generally very safe for tourists. The locals are known for their hospitality and friendliness.",
  },
  {
    question: "How do we get around the island?",
    answer: "We provide comfortable, air-conditioned private vehicles with experienced chauffeur-guides. For longer distances, scenic train rides can also be arranged.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothY = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  const cardY = useTransform(smoothY, [0, 1], [50, -100]);

  return (
    <section id="faq" ref={containerRef} className="py-24 bg-[#fbfbfa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16">
        
        {/* Left Side: Image with 3D Floating Card */}
        <div className="lg:w-5/12 relative flex justify-center lg:justify-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-[90%] lg:w-full h-[400px] lg:h-[550px] rounded-2xl overflow-hidden shadow-xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://picsum.photos/seed/faq-beach/600/800" 
              alt="Sri Lanka beach view"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Floating Parallax Card */}
          <motion.div 
            style={{ y: cardY }}
            className="absolute -bottom-10 -right-4 lg:-right-12 bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl max-w-[280px] border border-white/50"
          >
            <h3 className="text-xl text-[#002b5c] font-semibold mb-2 leading-snug" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
              Curating Holidays Globally
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We specialize in creating unforgettable experiences that stay with you forever.
            </p>
          </motion.div>
        </div>

        {/* Right Side: FAQs */}
        <div className="lg:w-7/12 lg:pl-12 mt-16 lg:mt-0">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl text-[#002b5c] font-semibold mb-10"
            style={{ fontFamily: "var(--font-cormorant, serif)" }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
                  >
                    <span 
                      className="font-medium text-[#002b5c] pr-8 text-lg"
                      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                    >
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-[#00529b]">
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </motion.div>
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-gray-600 font-light leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
