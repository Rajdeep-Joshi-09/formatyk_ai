"use client";

import Link from 'next/link';
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { subscribeNewsletter } from '../actions/sendEmail';
import toast from 'react-hot-toast';

export default function Footer() {
  const [isPending, setIsPending] = useState(false);

  async function handleSubscribe(formData) {
    setIsPending(true);
    
    const emailPromise = subscribeNewsletter(null, formData);

    toast.promise(emailPromise, {
      loading: 'Subscribing...',
      success: (data) => {
        if (!data.success) throw new Error(data.error);
        return data.message;
      },
      error: (err) => err.message || 'Subscription failed',
    });

    try {
      await emailPromise;
    } catch (e) {
      // Handled by toast
    } finally {
      setIsPending(false);
    }
  }

  return (
    <footer className="bg-surface dark:bg-black py-12 md:py-20 border-t border-black/5 dark:border-white/5 mt-auto transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <img src="/light.png" alt="Formatyk Logo" className="h-12 w-auto object-contain dark:hidden" />
            <img src="/dark.png" alt="Formatyk Logo" className="h-12 w-auto object-contain hidden dark:block" />
          </Link>
          <p className="text-text-secondary text-sm leading-relaxed">
            Pioneering the future of predictive intelligence and autonomous operations for the modern enterprise.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-4">Platform</h4>
          <ul className="space-y-3">
            <li><Link href="/services" className="text-text-secondary text-sm hover:text-accent-electric transition-colors">Services</Link></li>
            <li><Link href="/pricing" className="text-text-secondary text-sm hover:text-accent-electric transition-colors">Pricing</Link></li>
            <li><Link href="/case-studies" className="text-text-secondary text-sm hover:text-accent-electric transition-colors">Case Studies</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-text-secondary text-sm hover:text-accent-electric transition-colors">About Us</a></li>
            <li><a href="#" className="text-text-secondary text-sm hover:text-accent-electric transition-colors">Careers</a></li>
            <li><Link href="/contact" className="text-text-secondary text-sm hover:text-accent-electric transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-4">Stay Updated</h4>
          <form action={handleSubscribe} className="flex flex-col gap-2">
            <div className="flex bg-surface-container-low rounded-full p-1 border border-black/5 focus-within:border-accent-electric transition-colors">
              <input 
                name="email"
                type="email" 
                required
                placeholder="Enter your email" 
                className="bg-transparent flex-1 px-4 text-sm outline-none text-text-primary"
              />
              <button disabled={isPending} className="w-8 h-8 rounded-full bg-accent-electric text-white flex items-center justify-center transition-transform hover:scale-105 shrink-0 disabled:opacity-70 disabled:hover:scale-100 cursor-none">
                {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
            {status && (
              <p className={`text-xs px-2 ${status.success ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {status.success ? status.message : status.error}
              </p>
            )}
          </form>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 mt-12 md:mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-secondary text-xs">© 2026 Formatyk Inc. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="text-text-secondary text-xs hover:text-accent-electric transition-colors">Privacy Policy</a>
          <a href="#" className="text-text-secondary text-xs hover:text-accent-electric transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
