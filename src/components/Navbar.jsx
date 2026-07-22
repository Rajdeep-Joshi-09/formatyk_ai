"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-40 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          {mounted ? (
            <img src={isDark ? "/dark.png" : "/light.png"} alt="Formatyk Logo" className="h-12 w-auto object-contain" />
          ) : (
            <div className="h-12 w-32 bg-surface-dim dark:bg-surface-container animate-pulse rounded"></div>
          )}
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-accent-electric ${
                pathname === link.path ? 'text-accent-electric' : 'text-text-secondary dark:text-white/70 hover:dark:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {mounted && (
            <button 
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-surface-container-low dark:hover:bg-white/10 transition-colors text-text-primary dark:text-white cursor-none"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}

          <Link href="/contact" className="hidden md:inline-flex items-center justify-center h-10 px-6 rounded-full bg-accent-electric text-white font-medium text-sm transition-transform hover:scale-105 active:scale-95 cursor-none">
            Get Started
          </Link>
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-text-primary dark:text-white cursor-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
