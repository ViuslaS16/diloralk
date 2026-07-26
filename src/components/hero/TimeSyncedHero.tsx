'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

const TIME_PHASES = {
  MORNING: {
    videoUrl: 'https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora_drone_1.mp4', // R2 morning mist/sunrise
    overlay: 'bg-gradient-to-b from-[#B7D7E8]/30 to-[#003366]/60',
    greeting: 'Good Morning'
  },
  AFTERNOON: {
    videoUrl: 'https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora_drone_2.mp4', // R2 bright sunny day
    overlay: 'bg-gradient-to-b from-transparent to-[#003366]/40',
    greeting: 'Good Afternoon'
  },
  EVENING: {
    videoUrl: 'https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora_drone_3.mp4', // R2 sunset
    overlay: 'bg-gradient-to-b from-[#F28C28]/20 to-[#003366]/70',
    greeting: 'Good Evening'
  },
  NIGHT: {
    videoUrl: 'https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/dilora_drone_4.mp4', // R2 night sky
    overlay: 'bg-gradient-to-b from-[#003366]/50 to-[#111111]/80',
    greeting: 'Good Night'
  }
};

const getPhase = (hours: number) => {
  if (hours >= 5 && hours < 12) return 'MORNING';
  if (hours >= 12 && hours < 17) return 'AFTERNOON';
  if (hours >= 17 && hours < 20) return 'EVENING';
  return 'NIGHT';
};

export default function TimeSyncedHero() {
  const t = useTranslations('Hero');
  const [phase, setPhase] = useState<keyof typeof TIME_PHASES>('MORNING');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const updateTime = () => {
      const currentHours = new Date().getHours();
      setPhase(getPhase(currentHours));
    };
    
    updateTime(); // initial run
    const interval = setInterval(updateTime, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <div className="h-screen w-full bg-[var(--color-primary-navy)]" />;

  const currentPhase = TIME_PHASES[phase];

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background with Crossfade */}
      <AnimatePresence initial={false}>
        <motion.video
          key={phase}
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover scale-110 origin-top"
          src={currentPhase.videoUrl}
        />
      </AnimatePresence>

      {/* Dynamic Overlay */}
      <div className={`absolute inset-0 transition-colors duration-[3000ms] ${currentPhase.overlay}`} />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center text-white flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xs uppercase tracking-[0.3em] mb-6 block"
        >
          {currentPhase.greeting} from Sri Lanka
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {t('title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-lg md:text-xl font-light max-w-2xl mx-auto opacity-90"
        >
          {t('subtitle')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 80 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-16 w-px bg-white/50 relative overflow-hidden"
        >
          <motion.div 
            animate={{ y: [0, 80] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-white"
          />
        </motion.div>
      </div>
    </div>
  );
}
