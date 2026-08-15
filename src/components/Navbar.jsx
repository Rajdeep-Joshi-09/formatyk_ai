"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import logoImg from '../assets/formatyk logo.jpg';

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-40 bg-transparent backdrop-blur-md border-b border-white/5 transition-colors duration-300 pt-4">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center gap-2">
            <Image
              src={logoImg}
              alt="Formatyk Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="font-bold text-white text-xl tracking-wide">FORMATYK</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                pathname === link.path ? 'text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Link href="/contact" className="hidden md:inline-flex items-center justify-center h-9 px-5 rounded-full bg-[#050811] border border-[#3b82f6]/50 text-white font-medium text-sm transition-all hover:scale-105 active:scale-95 cursor-none hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] gap-2">
            Get a Quote <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-white cursor-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
