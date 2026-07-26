import { Link } from '@/i18n/routing';
import { ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white/80 py-20 overflow-hidden font-light text-xs md:text-sm" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80 z-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_sigiriya.jpg" 
          alt="Sri Lanka Nine Arches Bridge" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1: Contact Info */}
          <div className="col-span-1 lg:col-span-1 space-y-8">
            <div>
              <h4 className="text-white font-medium mb-3 uppercase tracking-widest text-xs">Direct WhatsApp</h4>
              <a href="https://wa.me/6584381441" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                +65 8438 1441
              </a>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3 uppercase tracking-widest text-xs">Email</h4>
              <a href="mailto:info@diloralk.com" className="text-white/70 hover:text-white transition-colors">
                info@diloralk.com
              </a>
            </div>
          </div>
          
          {/* Column 2 & 3: Quick Links */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li><Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/destinations" className="text-white/70 hover:text-white transition-colors">Destinations</Link></li>
                <li><Link href="/plan-trip" className="text-white/70 hover:text-white font-medium transition-colors">Plan My Trip</Link></li>
                <li><Link href="/about-us" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact-us" className="text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
              <ul className="space-y-3">
                <li><Link href="/destinations/kandy" className="text-white/70 hover:text-white transition-colors">Kandy Cultural Tour</Link></li>
                <li><Link href="/destinations/sigiriya" className="text-white/70 hover:text-white transition-colors">Sigiriya Rock Fortress</Link></li>
                <li><Link href="/destinations/ella" className="text-white/70 hover:text-white transition-colors">Ella Hill Country</Link></li>
                <li><Link href="/destinations/mirissa" className="text-white/70 hover:text-white transition-colors">Mirissa Beach Escape</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Newsletter & Partners */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-10">
            <div>
              <h4 className="text-white font-medium mb-4 uppercase tracking-widest text-xs">Newsletter</h4>
              <div className="relative max-w-sm">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-white/10 border border-white/20 rounded-full py-3 px-6 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 text-xs"
                />
                <button className="absolute right-1 top-1 bottom-1 w-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <ChevronRight size={16} className="text-white" />
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4 uppercase tracking-widest text-xs">Our Payment Partners</h4>
              <div className="flex gap-2">
                <div className="bg-white px-2 py-1 rounded text-black font-bold text-[10px] flex items-center">VISA</div>
                <div className="bg-white px-2 py-1 rounded flex items-center">
                  <div className="flex -space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500 opacity-80 mix-blend-multiply"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80 mix-blend-multiply"></div>
                  </div>
                </div>
                <div className="bg-white px-2 py-1 rounded text-blue-600 font-bold text-[10px] flex items-center">AMEX</div>
                <div className="bg-white px-2 py-1 rounded text-blue-800 font-bold text-[10px] flex items-center">JCB</div>
              </div>
            </div>
          </div>

        </div>
        
        {/* Bottom Copyright Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20 text-[10px] md:text-[11px] text-white/50">
          <p>© {new Date().getFullYear()} Dilora Travales Limited. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0 items-center">
            <Link href="/plan-trip" className="hover:text-white transition-colors">Plan My Trip</Link>
            <span className="w-px h-3 bg-white/20"></span>
            <Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
