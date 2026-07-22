"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import data from '../../data.json';

export default function CaseStudies() {
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
    <div className="w-full max-w-[1200px] mx-auto px-5 md:px-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Proven Results</h1>
        <p className="text-lg text-text-secondary leading-relaxed">
          See how leading organizations leverage Formatyk to transform their industry landscapes.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {data.caseStudies.map((study) => (
          <motion.div 
            key={study.id}
            variants={itemVariants}
            className="group flex flex-col bg-surface-container-lowest rounded-2xl border border-black/5 dark:border-white/5 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow"
          >
            <div className="h-48 bg-surface-container-low w-full flex items-center justify-center p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-electric to-transparent" />
              <h4 className="text-2xl font-bold text-center z-10 text-balance leading-tight">{study.client}</h4>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-6 flex-1">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
              </div>
              
              <div className="border-t border-black/5 dark:border-white/5 pt-6 flex items-end justify-between">
                <div>
                  <div className="text-3xl font-bold text-accent-electric mb-1">{study.metric}</div>
                  <div className="text-xs text-text-secondary font-medium uppercase tracking-wider">{study.metricLabel}</div>
                </div>
                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-surface hover:bg-accent-electric hover:text-white transition-colors text-text-primary border border-black/5 dark:border-white/5">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
