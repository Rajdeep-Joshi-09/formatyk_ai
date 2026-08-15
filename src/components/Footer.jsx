"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import logoImg from '../assets/formatyk logo.jpg';

export default function Footer() {
  const XIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.076H5.078z" />
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
                <Image
                  src={logoImg}
                  alt="Formatyk Logo"
                  width={40}
                  height={40}
                  className="rounded shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-white text-xl tracking-wide leading-none">FORMATYK</span>
                  <span className="text-[9px] text-slate-400 font-semibold tracking-[0.2em] mt-1">SOFTWARE & AUTOMATION</span>
                </div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Custom software, automation, and ERP solutions for growing businesses.
            </p>
            <div className="flex flex-col gap-2 mb-8">
              <a href="tel:+916351902265" className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                6351 902 265
              </a>
              <a href="mailto:team.formatyk@gmail.com" className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                team.formatyk@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              {[
                { icon: LinkedinIcon, href: 'https://www.linkedin.com/company/formatyk-ai/' },
                { icon: XIcon, href: '#' },
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links (Col span 2 each) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <div className="flex flex-col gap-4">
              {[
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors w-fit">
                  {link.label}
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
          <p>© 2025 Formatyk. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
