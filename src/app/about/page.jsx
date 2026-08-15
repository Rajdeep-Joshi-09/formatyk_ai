"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Eye, Target, Shield, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 md:px-10 py-20">

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About Formatyk</h1>
        <p className="text-lg text-text-secondary leading-relaxed">
          Formatyk is an IT services company built around one idea: software should fit your business, not the other way around. We design and build custom software, automate repetitive workflows, and develop tailor-made ERP systems for businesses of every size. Alongside our core development work, we bring AI automation into the mix wherever it saves you real time. We work directly with our clients, keep pricing transparent, and stay involved well past launch through ongoing support.
        </p>
      </motion.div>

      {/* Vision & Mission */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20"
      >
        <motion.div
          variants={itemVariants}
          className="group relative bg-surface-container-lowest p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-accent-electric/30 transition-colors"
        >
          <div className="flex items-start justify-between mb-8">
            <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:bg-accent-electric group-hover:text-white transition-colors text-accent-electric">
              <Eye className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            To become the go-to technology partner for small and mid-sized businesses across India — the team companies call first when they're ready to move from manual processes to fully digital, automated operations.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="group relative bg-surface-container-lowest p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-accent-electric/30 transition-colors"
        >
          <div className="flex items-start justify-between mb-8">
            <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:bg-accent-electric group-hover:text-white transition-colors text-accent-electric">
              <Target className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            To design and deliver custom software, automation, and ERP solutions built around each client's actual workflow — not templates — so every business we work with runs leaner, faster, and with fewer manual errors.
          </p>
        </motion.div>
      </motion.div>

      {/* Why Choose Formatyk */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-accent-purple text-[10px] md:text-xs font-semibold uppercase tracking-wider">
          <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
          Why Choose Formatyk
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">Built Around You</h2>
        <p className="text-text-secondary text-lg leading-relaxed max-w-3xl">
          We don't sell off-the-shelf software and hope it fits. Every engagement starts with understanding how you actually work, then we design, build, and automate around that — whether it's a custom ERP, a workflow automation, or a full digital transformation. You get a solution built for your business, not a template stretched to fit it.
        </p>
      </motion.div>

      {/* Stat Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative bg-surface-container-lowest p-8 md:p-12 rounded-3xl border border-black/5 dark:border-white/5 mb-20"
      >
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="shrink-0">
            <div className="text-6xl md:text-8xl font-bold text-gradient leading-none mb-2">100%</div>
            <p className="text-xl font-semibold text-white">Ownership Transfer</p>
          </div>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            When you work with Formatyk, you're working directly with the team building your solution — not an account manager passing your project down the chain. Full ownership of the final code and design transfers to you once payment is complete, so there's no vendor lock-in. Every project runs on a clear, milestone-based process, so you always know exactly what stage you're at and what's coming next.
          </p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <Link href="/contact" className="relative group inline-flex h-12 px-8 rounded-full bg-gradient-to-r from-[#0059b5] via-[#3b82f6] to-[#8b5cf6] text-white font-medium items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-95">
          <span className="absolute inset-0 rounded-full blur-md bg-gradient-to-r from-[#0059b5] via-[#3b82f6] to-[#8b5cf6] opacity-0 group-hover:opacity-70 transition-opacity duration-500"></span>
          <span className="relative flex items-center gap-2">Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
        </Link>
      </motion.div>
    </div>
  );
}
