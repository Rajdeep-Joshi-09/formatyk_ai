"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { useState, useRef } from 'react';
import { sendContactEmail } from '../../actions/sendEmail';
import toast from 'react-hot-toast';

export default function Contact() {
  const [isPending, setIsPending] = useState(false);
  const formRef = useRef(null);

  async function handleSubmit(formData) {
    setIsPending(true);
    
    const emailPromise = sendContactEmail(null, formData);

    toast.promise(emailPromise, {
      loading: 'Sending your message...',
      success: (data) => {
        if (!data.success) throw new Error(data.error);
        return data.message;
      },
      error: (err) => err.message || 'Failed to send message',
    });

    try {
      await emailPromise;
      if (formRef.current) formRef.current.reset();
    } catch (e) {
      // Error handled by toast
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 md:px-10 py-20 flex flex-col md:flex-row gap-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 max-w-lg"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Contact Us</h1>
        <p className="text-lg text-text-secondary leading-relaxed mb-12">
          We look forward to working with you.
        </p>

        <div className="space-y-8">
          <div>
            <h4 className="font-semibold mb-2">Phone</h4>
            <a href="tel:+916351902265" className="text-accent-electric hover:underline">6351 902 265</a>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Email</h4>
            <a href="mailto:team.formatyk@gmail.com" className="text-accent-electric hover:underline">team.formatyk@gmail.com</a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 bg-surface-container-lowest p-8 md:p-10 rounded-3xl border border-black/5 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
      >
        <AnimatePresence>
          {isPending && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-surface-container-lowest/80 backdrop-blur-sm"
            >
              <div className="w-16 h-16 border-4 border-accent-electric border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-lg font-medium text-text-primary animate-pulse">Sending your message...</p>
            </motion.div>
          )}
        </AnimatePresence>

        <form ref={formRef} className="space-y-6 relative z-0" action={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-primary">First Name</label>
              <input name="firstName" required type="text" className="w-full h-12 px-4 rounded-xl bg-surface-container-low border border-transparent focus:border-accent-electric focus:bg-surface-container-lowest outline-none transition-colors" placeholder="Jane" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-primary">Last Name</label>
              <input name="lastName" required type="text" className="w-full h-12 px-4 rounded-xl bg-surface-container-low border border-transparent focus:border-accent-electric focus:bg-surface-container-lowest outline-none transition-colors" placeholder="Doe" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-text-primary">Work Email</label>
            <input name="email" required type="email" className="w-full h-12 px-4 rounded-xl bg-surface-container-low border border-transparent focus:border-accent-electric focus:bg-surface-container-lowest outline-none transition-colors" placeholder="jane@company.com" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-text-primary">How can we help?</label>
            <textarea name="message" required className="w-full h-32 p-4 rounded-xl bg-surface-container-low border border-transparent focus:border-accent-electric focus:bg-surface-container-lowest outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
          </div>

          <button disabled={isPending} className="w-full h-12 rounded-full bg-accent-electric text-white font-medium flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98] mt-4 disabled:opacity-70 disabled:hover:scale-100 cursor-none">
            {isPending ? (
              <>Sending...</>
            ) : (
              <>Send Message <Send className="w-4 h-4" /></>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
