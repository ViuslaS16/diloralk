'use client';

import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LocaleSwitcher from '../i18n/LocaleSwitcher';

export default function Header() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedMobileIndex, setExpandedMobileIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  interface NavLink {
    label: string;
    href: string;
    subLinks?: { label: string; desc?: string; href: string }[];
    columns?: { title: string; links: { label: string; href: string }[] }[];
  }

  const navLinks: NavLink[] = [
    {
      label: t('destinations'),
      href: '/destinations',
      columns: [
        {
          title: 'Popular Regions',
          links: [
            { label: 'Ella (Hill Country)', href: '/destinations/ella' },
            { label: 'Kandy (Cultural Capital)', href: '/destinations/kandy' },
            { label: 'Sigiriya (Ancient Rock)', href: '/destinations/sigiriya' },
            { label: 'Nuwara Eliya (Tea Country)', href: '/destinations/nuwara-eliya' },
          ]
        },
        {
          title: 'Coastal & Wildlife',
          links: [
            { label: 'Galle Fort', href: '/destinations/galle' },
            { label: 'Mirissa Beach', href: '/destinations/mirissa' },
            { label: 'Yala National Park', href: '/destinations/yala' },
            { label: 'Bentota Resort', href: '/destinations/bentota' },
          ]
        }
      ]
    },
    {
      label: t('tour_packages'),
      href: '/#packages',
      columns: [
        {
          title: 'Tour Themes',
          links: [
            { label: 'Beach Holidays', href: '/#categories' },
            { label: 'Heritage Tours', href: '/#categories' },
            { label: 'Wildlife Safaris', href: '/#categories' },
            { label: 'Romantic Getaways', href: '/#categories' },
          ]
        },
        {
          title: 'Featured Itineraries',
          links: [
            { label: 'Nature & Wildlife (7 Days)', href: '/#packages' },
            { label: 'Scenic Train (5 Days)', href: '/#packages' },
            { label: 'Cultural Heritage (10 Days)', href: '/#packages' },
            { label: 'Ultimate Beach (14 Days)', href: '/#packages' },
          ]
        }
      ]
    },
    {
      label: t('ramayana_trail'),
      href: '/#ramayana-spotlight',
      subLinks: [
        { label: 'The Epic Trail', desc: 'Retrace millenia-old legends', href: '/#ramayana-spotlight' },
        { label: 'Sacred Temples', desc: 'Visit Sita Amman temple & more', href: '/#ramayana-spotlight' },
        { label: 'Mystical Places', desc: 'Explore Rumassala and Sanjeevani drops', href: '/#ramayana-spotlight' },
        { label: 'Epic Itinerary', desc: 'View our curated 10-day pilgrimage tour', href: '/#packages' }
      ]
    },
    {
      label: t('contact'),
      href: '/contact-us',
    }
  ];

  const isHomePage = pathname === '/';
  const headerClasses = isHomePage
    ? (isScrolled ? 'bg-white/90 backdrop-blur-md text-[#002b5c] py-4 shadow-sm' : 'bg-transparent text-white py-6')
    : 'bg-white/90 backdrop-blur-md text-[#002b5c] py-4 shadow-sm border-b border-gray-100';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerClasses}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex lg:grid lg:grid-cols-[1fr_auto_1fr] items-center justify-between gap-4">
        {/* Left Column: Logo */}
        <div className="flex justify-start">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <svg className="w-8 h-8 text-current group-hover:scale-105 transition-transform duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6"/>
              <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1"/>
              <path d="M50 22 V78" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M50 27 C63 36 72 45 72 55 H50 Z" fill="currentColor" opacity="0.8"/>
              <path d="M50 34 C37 43 31 52 31 63 H50 Z" fill="currentColor" opacity="0.9"/>
              <path d="M50 12 L53 16 L50 20 L47 16 Z" fill="currentColor"/>
            </svg>
            <span className="text-lg font-light tracking-[0.22em] whitespace-nowrap uppercase" style={{ fontFamily: 'var(--font-serif)' }}>
              Dilora
            </span>
          </Link>
        </div>

        {/* Center Column: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link, index) => {
            const hasDropdown = !!(link.subLinks || link.columns);
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="relative py-2"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] hover:text-[var(--color-slate-blue)] transition-colors duration-300 py-1 whitespace-nowrap"
                >
                  <span>{link.label}</span>
                  {hasDropdown && (
                    <ChevronDown
                      size={12}
                      className={`transform transition-transform duration-300 ${
                        isHovered ? 'rotate-180 text-[var(--color-slate-blue)]' : ''
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {hasDropdown && isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, x: '-50%' }}
                      animate={{ opacity: 1, y: 0, x: '-50%' }}
                      exit={{ opacity: 0, y: 10, x: '-50%' }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="absolute top-full left-1/2 mt-2 bg-white text-gray-800 rounded-xl shadow-2xl border border-gray-100 p-6 z-50 min-w-[280px]"
                      style={{ width: link.columns ? '480px' : '300px' }}
                    >
                      {/* Caret/Arrow */}
                      <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-t border-l border-gray-100" />
                      
                      <div className="relative z-10">
                        {link.subLinks && (
                          <div className="flex flex-col gap-1">
                            {link.subLinks.map((subLink, sIdx) => (
                              <Link
                                key={sIdx}
                                href={subLink.href}
                                className="group block p-2 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <div className="text-xs font-semibold text-[var(--color-primary-navy)] group-hover:text-[var(--color-slate-blue)] transition-colors uppercase tracking-wider">
                                  {subLink.label}
                                </div>
                                {subLink.desc && (
                                  <div className="text-[10px] text-gray-400 mt-0.5 font-light normal-case">
                                    {subLink.desc}
                                  </div>
                                )}
                              </Link>
                            ))}
                          </div>
                        )}

                        {link.columns && (
                          <div className="grid grid-cols-2 gap-6 text-left">
                            {link.columns.map((col, cIdx) => (
                              <div key={cIdx} className="space-y-3">
                                <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-gray-400 border-b border-gray-100 pb-1">
                                  {col.title}
                                </div>
                                <div className="flex flex-col gap-1">
                                  {col.links.map((subLink, sIdx) => (
                                    <Link
                                      key={sIdx}
                                      href={subLink.href}
                                      className="py-1 text-xs font-light text-gray-600 hover:text-[var(--color-primary-navy)] hover:translate-x-1 transition-all duration-300"
                                    >
                                      {subLink.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Right Column: Desktop CTA / Mobile Toggle */}
        <div className="flex justify-end items-center gap-6">
          {/* Desktop Only Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <LocaleSwitcher />
            <Link
              href="/plan-trip"
              className="border border-current px-6 py-2 text-xs uppercase tracking-widest hover:bg-[var(--color-primary-navy)] hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              {t('plan_trip')}
            </Link>
          </div>

          {/* Mobile Only Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <LocaleSwitcher />
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white text-[var(--color-primary-navy)] shadow-lg lg:hidden"
          >
            <nav className="flex flex-col p-6 gap-2 max-h-[80vh] overflow-y-auto text-left">
              {navLinks.map((link, index) => {
                const hasDropdown = !!(link.subLinks || link.columns);
                const isExpanded = expandedMobileIndex === index;

                return (
                  <div key={index} className="border-b border-gray-100 py-1">
                    {hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setExpandedMobileIndex(isExpanded ? null : index)}
                          className="w-full flex items-center justify-between text-xs uppercase tracking-widest py-2 text-[var(--color-primary-navy)] text-left font-light"
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            size={14}
                            className={`transform transition-transform duration-300 ${
                              isExpanded ? 'rotate-180 text-[var(--color-slate-blue)]' : ''
                            }`}
                          />
                        </button>

                        {/* Mobile Accordion */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden bg-gray-50/50 rounded-lg px-3 py-2 mt-1"
                            >
                              {link.subLinks && (
                                <div className="flex flex-col gap-2">
                                  {link.subLinks.map((subLink, sIdx) => (
                                    <Link
                                      key={sIdx}
                                      href={subLink.href}
                                      className="block py-1 text-xs text-gray-600 hover:text-[var(--color-primary-navy)] font-light"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {subLink.label}
                                    </Link>
                                  ))}
                                </div>
                              )}

                              {link.columns && (
                                <div className="space-y-3 py-1">
                                  {link.columns.map((col, cIdx) => (
                                    <div key={cIdx} className="space-y-1">
                                      <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                                        {col.title}
                                      </div>
                                      <div className="flex flex-col gap-1 pl-2">
                                        {col.links.map((subLink, sIdx) => (
                                          <Link
                                            key={sIdx}
                                            href={subLink.href}
                                            className="py-0.5 text-xs text-gray-600 hover:text-[var(--color-primary-navy)] font-light"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                          >
                                            {subLink.label}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="block text-xs uppercase tracking-widest py-2 text-[var(--color-primary-navy)] font-light"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
