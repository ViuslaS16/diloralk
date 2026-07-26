'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { Link } from '@/i18n/routing';

const featuredDestinations = [
  {
    id: 'ella',
    name: 'Ella',
    description: 'A charming town nestled in the central highlands, known for its iconic Nine Arch Bridge, sweeping tea plantations, and the breathtaking views from Little Adam\'s Peak.',
    image: 'https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_ella.jpg',
  },
  {
    id: 'kandy',
    name: 'Kandy',
    description: 'The cultural capital of Sri Lanka, home to the sacred Temple of the Tooth Relic, vibrant festivals, and surrounded by lush green hills and a serene lake.',
    image: 'https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_kandy.jpg',
  },
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    description: 'An ancient rock fortress and UNESCO World Heritage site, featuring remarkable frescoes and panoramic views from the summit of the majestic Lion Rock.',
    image: 'https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_sigiriya.jpg',
  }
];

export default function DestinationSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const textVariants = {
    enter: (_direction: number) => ({
      y: 50,
      opacity: 0
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.2, duration: 0.5 }
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = featuredDestinations.length - 1;
      if (nextIndex >= featuredDestinations.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const currentDestination = featuredDestinations[currentIndex];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 md:px-12 py-16">
      <div className="relative h-[500px] md:h-[600px] flex items-center">
        
        {/* Slider Controls */}
        <div className="absolute left-4 md:left-12 z-20 flex gap-4 top-1/2 -translate-y-1/2">
          <button 
            className="w-12 h-12 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition shadow-lg text-[#002b5c]"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        
        <div className="absolute right-4 md:right-12 z-20 flex gap-4 top-1/2 -translate-y-1/2">
          <button 
            className="w-12 h-12 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition shadow-lg text-[#002b5c]"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Image Container */}
        <div className="relative w-full md:w-3/4 h-full overflow-hidden rounded-lg shadow-2xl z-0">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={currentDestination.image}
              alt={currentDestination.name}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* Text Card Overlapping */}
        <div className="absolute bottom-[-20px] md:bottom-auto md:top-1/2 md:-translate-y-1/2 right-4 md:right-0 w-[calc(100%-2rem)] md:w-[450px] bg-[#f8f8f8] p-8 md:p-12 z-10 shadow-xl rounded-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial="enter"
              animate="center"
              exit="exit"
              variants={textVariants}
            >
              <div className="bg-[#cc5500] text-white text-[10px] uppercase tracking-widest inline-block px-3 py-1 mb-6">
                Most Popular
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-[#002b5c] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                {currentDestination.name}
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 font-light">
                {currentDestination.description}
              </p>
              
              <Link 
                href={`/destinations/${currentDestination.id}`}
                className="inline-flex items-center gap-3 text-[#002b5c] font-medium tracking-widest text-xs hover:opacity-70 transition-opacity"
              >
                <span className="w-8 h-8 rounded-full bg-[#002b5c] text-white flex items-center justify-center">
                  <Plus size={16} />
                </span>
                EXPLORE
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
