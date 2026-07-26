'use client';

import { useEffect, useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ta', name: 'தமிழ்', flag: '🇱🇰' },
  { code: 'zh-CN', name: '中文 (简体)', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
];

export default function GoogleTranslate() {
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Add Google Translate script if not already added
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: LANGUAGES.map(l => l.code).join(','),
          autoDisplay: false,
        },
        'google_translate_element_hidden'
      );
    };
  }, []);

  const changeLanguage = (lang: typeof LANGUAGES[0]) => {
    setSelectedLang(lang);
    setIsOpen(false);

    // Trigger Google Translate combo change
    const selectElem = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElem) {
      selectElem.value = lang.code;
      selectElem.dispatchEvent(new Event('change'));
    }
  };

  return (
    <div className="relative">
      {/* Hidden container for Google's element */}
      <div id="google_translate_element_hidden" className="hidden" />

      {/* Custom Luxury Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-current/20 hover:border-current text-xs uppercase tracking-widest transition-all duration-300 bg-white/10 backdrop-blur-sm"
      >
        <Globe size={14} className="shrink-0" />
        <span className="font-semibold">{selectedLang.code.split('-')[0].toUpperCase()}</span>
        <span className="hidden sm:inline text-[10px] opacity-80">({selectedLang.name})</span>
        <ChevronDown size={12} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white text-gray-800 rounded-2xl shadow-2xl border border-gray-100 py-2 min-w-[180px] max-h-[320px] overflow-y-auto z-50 animate-in fade-in slide-in-from-top-2">
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100">
            Select Language
          </div>
          {LANGUAGES.map(lang => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang)}
              className={`w-full text-left px-4 py-2 text-xs flex items-center justify-between hover:bg-gray-50 transition-colors ${
                selectedLang.code === lang.code ? 'font-bold text-[var(--color-primary-navy)] bg-blue-50/50' : 'text-gray-700 font-normal'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </span>
              <span className="text-[10px] text-gray-400 uppercase">{lang.code.split('-')[0]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
