"use client";

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import data from '../../data.json';

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
          Scale your AI infrastructure with confidence. No hidden fees, just pure performance.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
      >
        {data.pricing.map((plan) => (
          <motion.div 
            key={plan.id}
            variants={itemVariants}
            className={`relative p-8 rounded-3xl ${
              plan.popular 
                ? 'bg-surface-container-lowest border-2 border-accent-electric shadow-[0_20px_60px_rgb(0,113,227,0.1)] scale-100 md:scale-105 z-10' 
                : 'bg-surface border border-black/5 dark:border-white/5 shadow-sm'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-electric text-white text-xs font-bold uppercase tracking-wider rounded-full">
                Most Popular
              </div>
            )}
            
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-text-secondary text-sm">{plan.period}</span>
            </div>
            
            <button className={`w-full h-12 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 mb-8 ${
              plan.popular 
                ? 'bg-accent-electric text-white' 
                : 'bg-surface-container-high text-text-primary hover:bg-surface-container-highest'
            }`}>
              Select Plan
            </button>
            
            <ul className="space-y-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                  <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-accent-electric' : 'text-outline'}`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
