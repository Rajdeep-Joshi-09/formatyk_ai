"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Bot, Workflow } from 'lucide-react';
import data from '../../data.json';

const iconMap = {
  Code,
  Database,
  Bot,
  Workflow,
};

export default function Services() {
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
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Services</h1>
        <p className="text-lg text-text-secondary leading-relaxed">
          Individually or combined into one solution — everything we offer is built around your exact business process, not a one-size-fits-all package.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
        {data.services.map((service) => {
          const Icon = iconMap[service.icon] || Code;
          return (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className="group relative bg-surface-container-lowest p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-accent-electric/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:bg-accent-electric group-hover:text-white transition-colors text-accent-electric">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-4xl font-bold text-white/5 group-hover:text-accent-electric/10 transition-colors select-none">{service.number}</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">{service.description}</p>
              
              <div className="w-full h-[1px] bg-black/5 dark:bg-white/5 mt-auto" />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
