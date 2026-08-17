"use client";

import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../assets/formatyk logo.jpg';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] z-40 glass-panel rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300">
      <div className="px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
        {/* Left Brand Identity */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <Image
              src={logoImg}
              alt="Formatyk Logo"
              width={34}
              height={34}
              className="rounded-lg shadow-[0_0_12px_rgba(59,130,246,0.4)]"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-[#03050B] shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-lg tracking-wider leading-none">FORMATYK</span>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest leading-none mt-1">ENGINEERING</span>
          </div>
        </Link>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ACCEPTING CLIENTS</span>
          </div>

          <Link 
            href="#contact" 
            className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-gradient-to-r from-[#0059b5] via-[#3b82f6] to-[#8b5cf6] text-white font-medium text-xs tracking-wide uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] gap-2 group cursor-pointer"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </header>
  );
}
