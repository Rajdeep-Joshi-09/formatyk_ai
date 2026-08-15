"use client";

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const milestones = [
    {
      id: 'advance',
      percentage: '40%',
      label: 'Advance',
      description: 'Paid on project kickoff to begin discovery, planning, and initial development.',
    },
    {
      id: 'design',
      percentage: '30%',
      label: 'On Design Approval',
      description: 'Due once the design mockups and system architecture are reviewed and approved.',
    },
    {
      id: 'delivery',
      percentage: '30%',
      label: 'On Final Delivery',
      description: 'Paid upon project completion, testing, and full ownership transfer to you.',
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 md:px-10 py-20 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Transparent Pricing</h1>
        <p className="text-lg text-text-secondary leading-relaxed">
          No fixed packages or hidden fees. Every project is scoped and priced based on your exact requirements.
        </p>
      </motion.div>

      {/* Main Pricing Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative w-full max-w-lg p-8 md:p-10 rounded-3xl bg-surface-container-lowest border-2 border-accent-electric shadow-[0_20px_60px_rgb(0,113,227,0.1)] mb-16"
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-electric text-white text-xs font-bold uppercase tracking-wider rounded-full">
          Projects Starting From
        </div>

        <div className="text-center mt-4">
          <div className="flex items-baseline justify-center gap-1 mb-4">
            <span className="text-5xl md:text-6xl font-bold">₹25,000/-</span>
          </div>
          <p className="text-text-secondary text-sm mb-6">
            Final pricing depends on your exact requirements and project scope.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed mb-8 max-w-md mx-auto">
            Every project is different, so we don't work off fixed packages. Once we understand your requirement and walk you through a demo, we'll finalize the exact scope and pricing together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full h-12 rounded-full bg-accent-electric text-white font-medium transition-transform hover:scale-105 active:scale-95 gap-2"
          >
            Book a Discovery Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ul className="space-y-4 mt-8 pt-8 border-t border-white/5">
          {[
            '100% ownership transfer after final payment',
            'Single point of contact throughout the project',
            '7-step process, fully transparent from day one',
            'Optional retainer for ongoing support post-launch',
          ].map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
              <Check className="w-5 h-5 shrink-0 text-accent-electric" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Payment Milestones */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full mb-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-10">Payment Milestones</h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
      >
        {milestones.map((milestone) => (
          <motion.div 
            key={milestone.id}
            variants={itemVariants}
            className="relative p-8 rounded-3xl bg-surface border border-black/5 dark:border-white/5 shadow-sm flex flex-col items-center text-center"
          >
            <div className="text-4xl font-bold text-accent-electric mb-2">{milestone.percentage}</div>
            <h3 className="text-xl font-semibold mb-3">{milestone.label}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{milestone.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
