"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  const XIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.076H5.078z" />
    </svg>
  );

  const GithubIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );

  const LinkedinIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  return (
    <footer className="w-full bg-[#020408] border-t border-white/5 pt-20 pb-10 mt-20 relative overflow-hidden z-10">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Socials (Col span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-xl tracking-wide leading-none">FORMATYK</span>
                  <span className="text-[9px] text-slate-400 font-semibold tracking-[0.2em] mt-1">AI SERVICES & SOLUTIONS</span>
                </div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              Pioneering the future of predictive intelligence and real-time automation.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: LinkedinIcon, href: '#' },
                { icon: XIcon, href: '#' },
                { icon: GithubIcon, href: '#' },
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links (Col span 2 each) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-white font-semibold mb-6">Platform</h4>
            <div className="flex flex-col gap-4">
              {['Services', 'Pricing', 'Case Studies', 'Documentation'].map((link) => (
                <Link key={link} href="#" className="text-slate-400 hover:text-white text-sm transition-colors w-fit">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <div className="flex flex-col gap-4">
              {['About Us', 'Careers', 'Blog', 'Contact'].map((link) => (
                <Link key={link} href="#" className="text-slate-400 hover:text-white text-sm transition-colors w-fit">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter (Col span 4) */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
            <form className="relative w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full h-12 bg-[#050812] border border-white/10 rounded-full pl-5 pr-14 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#3b82f6]/50 focus:ring-1 focus:ring-[#3b82f6]/50 transition-all"
                required
              />
              <button 
                type="submit"
                className="absolute right-1 top-1 w-10 h-10 rounded-full bg-[#3b82f6] flex items-center justify-center text-white hover:bg-[#2563eb] transition-colors shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-slate-500">
          <p>© 2024 Formatyk. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
