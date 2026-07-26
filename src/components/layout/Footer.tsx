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
          src="https://picsum.photos/seed/nine-arches-bridge/1920/1080" 
          alt="Nine Arches Bridge" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1: Contact Info */}
          <div className="col-span-1 lg:col-span-1 space-y-8">
            <div>
              <h4 className="text-white font-medium mb-3 uppercase tracking-widest text-xs">Address</h4>
              <p className="leading-relaxed text-white/70">
                Dilora Travales Limited. No 117,<br />
                Sir Chittampalam A Gardiner Mawatha,<br />
                Colombo 02, Sri Lanka.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3 uppercase tracking-widest text-xs">Phone</h4>
              <p className="text-white/70">+94 11 1234 567</p>
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
                <li><Link href="/maldives" className="text-white/70 hover:text-white transition-colors">Maldives Tours</Link></li>
                <li><Link href="/excursions" className="text-white/70 hover:text-white transition-colors">Excursions</Link></li>
                <li><Link href="/mice" className="text-white/70 hover:text-white transition-colors">MICE</Link></li>
                <li><Link href="/about-us" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/sustainability" className="text-white/70 hover:text-white transition-colors">Sustainability</Link></li>
                <li><Link href="/careers" className="text-white/70 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/contact-us" className="text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/pay" className="text-white/70 hover:text-white transition-colors">Pay Now</Link></li>
              </ul>
              <ul className="space-y-3">
                <li><Link href="/sri-lanka-tours" className="text-white/70 hover:text-white transition-colors">Sri Lanka Tours</Link></li>
                <li><Link href="/guide" className="text-white/70 hover:text-white transition-colors">Sri Lanka Guide</Link></li>
                <li><Link href="/offers" className="text-white/70 hover:text-white transition-colors">Special Offers</Link></li>
                <li><Link href="/transport" className="text-white/70 hover:text-white transition-colors">Transport</Link></li>
                <li><Link href="/services" className="text-white/70 hover:text-white transition-colors">Our Services</Link></li>
                <li><Link href="/reviews" className="text-white/70 hover:text-white transition-colors">Reviews</Link></li>
                <li><Link href="/payment-policy" className="text-white/70 hover:text-white transition-colors">Payment Policy</Link></li>
                <li><Link href="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link></li>
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
                {/* Simulated Payment Badges */}
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

            <div className="flex gap-4 items-center">
              <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Youtube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

        </div>
        
        {/* Bottom Copyright Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20 text-[10px] md:text-[11px] text-white/50">
          <p>© {new Date().getFullYear()} Dilora Travales Limited. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0 items-center">
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="w-px h-3 bg-white/20"></span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="w-px h-3 bg-white/20"></span>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            <span className="w-px h-3 bg-white/20"></span>
            <span>Website Designed & Developed by Antigravity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
